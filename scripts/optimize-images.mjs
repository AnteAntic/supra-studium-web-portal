// Optimizacija i preimenovanje slika — Supra Studium (Faza B, srpanj 2026)
// Pokretanje: node scripts/optimize-images.mjs
// - UUID imena → opisna (RENAME_MAP), konverzija u WebP
// - sve slike > 300 KB → WebP q80, max širina 1920px
// - originali se spremaju u _unused_arhiva/originals/
// - reference u src/ i index.html se automatski ažuriraju
// - manifest se zapisuje u scripts/asset-manifest.json (osnova za ASSET_MANIFEST.md)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const UPLOADS = 'public/lovable-uploads';
const ORIGINALS = '_unused_arhiva/originals';
const SIZE_THRESHOLD = 300 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 80;
// Datoteke koje se NE diraju (alati trebaju original, ili je optimizacija štetna)
const EXCLUDE = new Set(['logo-sharp-back.png']);

// UUID → opisno ime (bez ekstenzije; uvijek izlazi kao .webp)
const RENAME_MAP = {
  '58feb348-e906-407b-b136-b7cf851b4ae3.png': 'kontakt-hero-ucionica',
  '96995098-9ffc-48e4-b20b-f599490baac9.png': 'atp-rad-u-paru-demonstracija',
  'a52bc10d-78ab-46e0-8ee4-13bf1e57e3d9.png': 'atp-program-kartica',
  'b843e565-9cd4-4b52-8f3d-02b24514415b.png': 'atp-ante-palpacija',
  'b8e614dd-f6f8-4898-8d54-86f1245e6b74.png': 'atp-akupresurne-tocke-leda',
  'bee0fe5c-f3fc-4b13-a5c2-533b30c4d78f.png': 'cal-dr-awudi-portret',
  'f8638ba1-5e0f-4295-b885-f5c4abd7a407.png': 'cal-program-kartica',
};

fs.mkdirSync(ORIGINALS, { recursive: true });
const manifest = [];

function referencingFiles(name) {
  try {
    return execSync(`grep -rl "${name}" src index.html`, { encoding: 'utf8' }).trim().split('\n');
  } catch { return []; }
}

for (const file of fs.readdirSync(UPLOADS)) {
  const full = path.join(UPLOADS, file);
  if (fs.statSync(full).isDirectory() || EXCLUDE.has(file)) continue;
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

  const oldSize = fs.statSync(full).size;
  const renamed = RENAME_MAP[file];
  if (!renamed && oldSize <= SIZE_THRESHOLD) continue; // malo i već opisno — ne diraj

  const img = sharp(full);
  const meta = await img.metadata();
  if (meta.hasAlpha) { console.log(`SKIP (alpha): ${file}`); continue; }

  const newBase = renamed || file.replace(/\.(png|jpe?g|webp)$/i, '');
  const newName = `${newBase}.webp`;
  const newFull = path.join(UPLOADS, newName);

  let pipeline = sharp(full);
  if ((meta.width || 0) > MAX_WIDTH) pipeline = pipeline.resize({ width: MAX_WIDTH });
  await pipeline.webp({ quality: QUALITY }).toFile(newFull + '.tmp');

  const newSize = fs.statSync(newFull + '.tmp').size;
  // Ako "optimizacija" ne štedi ništa, a ime se ne mijenja — odustani
  if (!renamed && newSize >= oldSize * 0.95) {
    fs.unlinkSync(newFull + '.tmp');
    console.log(`SKIP (nema uštede): ${file}`);
    continue;
  }
  const refs = referencingFiles(file);
  fs.renameSync(full, path.join(ORIGINALS, file));   // original u arhivu
  fs.renameSync(newFull + '.tmp', newFull);

  // ažuriraj reference
  for (const rf of refs) {
    const content = fs.readFileSync(rf, 'utf8');
    fs.writeFileSync(rf, content.split(file).join(newName));
  }
  manifest.push({ old: file, new: newName, dir: UPLOADS, refs, oldKB: Math.round(oldSize / 1024), newKB: Math.round(newSize / 1024) });
  console.log(`${file} (${Math.round(oldSize/1024)}K) -> ${newName} (${Math.round(newSize/1024)}K) [refs: ${refs.length}]`);
}

fs.writeFileSync('scripts/asset-manifest.json', JSON.stringify(manifest, null, 2));
const savedKB = manifest.reduce((s, m) => s + m.oldKB - m.newKB, 0);
console.log(`\nUkupno: ${manifest.length} datoteka, ušteda ${(savedKB / 1024).toFixed(1)} MB`);
