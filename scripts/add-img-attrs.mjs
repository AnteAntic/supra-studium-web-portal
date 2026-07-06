// Dodaje width/height (stvarne dimenzije datoteke) i loading="lazy" na <img> tagove
// s literalnim /lovable-uploads/ src-om. Hero komponente se preskaču za lazy.
// Pokretanje: node scripts/add-img-attrs.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const files = execSync('grep -rl "<img" src --include=*.tsx', { encoding: 'utf8' }).trim().split('\n');
const IMG_RE = /<img\b[^>]*?\/?>/gs;
let changed = 0, tagsTouched = 0;

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const isHeroFile = /hero/i.test(file);
  let out = src;
  for (const match of src.matchAll(IMG_RE)) {
    const tag = match[0];
    const srcMatch = tag.match(/src="(\/lovable-uploads\/[^"]+|\/videos\/[^"]+)"/);
    if (!srcMatch) continue;
    const assetPath = 'public' + srcMatch[1];
    if (!fs.existsSync(assetPath)) continue;
    let newTag = tag;
    if (!/\bwidth[=\s]/.test(tag) && !/\bheight[=\s]/.test(tag)) {
      const meta = await sharp(assetPath).metadata();
      if (meta.width && meta.height) {
        newTag = newTag.replace(/<img\b/, `<img width={${meta.width}} height={${meta.height}}`);
      }
    }
    if (!/\bloading=/.test(newTag) && !isHeroFile) {
      newTag = newTag.replace(/<img\b/, '<img loading="lazy"');
    }
    if (newTag !== tag) { out = out.replace(tag, newTag); tagsTouched++; }
  }
  if (out !== src) { fs.writeFileSync(file, out); changed++; console.log('azurirano:', file); }
}
console.log(`\nDatoteka promijenjeno: ${changed}, img tagova dopunjeno: ${tagsTouched}`);
