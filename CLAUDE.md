# Supra Studium — Web Redesign 2026
## Claude Code Project Brief

---

## PROJEKT

**URL:** https://uciliste-suprastudium.hr  
**Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui  
**Status:** Aktivan redizajn — editorial/clinical direction

---

## DEPLOY WORKFLOW

### Brzi deploy (samo promijenjeni assets — koristiti ovo):
```bash
./deploy-quick.sh
```
Preskače `lovable-uploads/` (33MB) i `videos/` (2MB). Uploadava samo `index.html` + `assets/`.

### Puni deploy (s backupom):
```bash
./deploy.sh
```

### GitHub backup (prije svake veće izmjene):
```bash
git add -A
git commit -m "Opis promjene"
git push
```
Remote je već konfiguriran s tokenom. Push radi direktno.

---

## FOLDER STRUKTURA

```
src/
  pages/          ← Stranice (AkupresuraPage.tsx, ManualTherapySchoolPage.tsx, ...)
  components/     ← Komponente
  components/ui/  ← UI komponente (Button, Card, Accordion, ...)
  data/           ← courseSchedules.ts i ostali data fajlovi
public/
  lovable-uploads/  ← Slike (ne diraj bez potrebe)
  videos/           ← Lokalni video fajlovi
deploy.sh           ← Puni deploy s backupom
deploy-quick.sh     ← Brzi deploy (preporučeno)
CLAUDE.md           ← Ovaj fajl
```

---

## DESIGN DIRECTION — OBAVEZNO PROČITATI

**Trenutni smjer:** Editorial clinical documentary. Ne funnel. Ne info-product.

Mentalni model: **klinički institut / dokumentarna edukacija**, ne **premium online course**.

### Što Supra web jest:
- Documentary/editorial composition
- Clinical authority through restraint
- Institutional calm
- Video kao primarni layer, tekst kao observational layer

### Što Supra web nije:
- Sales funnel
- Urgency/scarcity driven
- Glassmorphism / luxury funnel aesthetic
- "Premium edukacija" marketing jezik

### Zabranjeni UI elementi:
- Crveni urgency badgevi ("Ostala X mjesta!")
- Cijena u glavnom CTA gumbu
- `rounded-2xl` na CTA gumbima (previše SaaS)
- `scale: 1.05` hover efekti na gumbima
- Full black overlay (bg-black/50) preko videa
- Glassmorphism card kao hero content wrapper

---

## HERO SEKCIJA — TRENUTNO STANJE (AkupresuraPage.tsx)

Hero je pilot za cijeli novi Supra web direction. Ključne odluke:

**Overlay:** `linear-gradient(100deg, rgba(0,0,0,0.78) 0%, ..., transparent 78%)`  
→ Lijeva strana tamnija (tekst zona), desna atmosferična (video zona)

**Layout:** `items-end pb-[18%] md:pb-[16%]` — content je podignut od dna  
**Container:** `max-w-2xl` — dovoljno širok da headline ima zrak

**Headline:** `font-playfair font-semibold text-2xl sm:text-3xl md:text-[2rem]`  
→ Mixed case, ne all-caps. Manji, confident. Bez TextShimmer.  
→ Tekst: "Kada znaš da si / na pravom mjestu."

**Subheadline:** `text-sm text-white/72` — vidljiv ali sekundaran

**CTA primary:** `rounded-sm uppercase tracking-wider text-xs` — institutional stamp  
**CTA secondary:** plain `<button>` s em-dash prefix: "— Pogledaj video"

---

## BRAND WRITING SYSTEM

Glavni dokument: `SUPRA_WEB_WRITING_MANIFEST_v1.txt` u ovom folderu.  
(Ako nije tu, traži ga u: `/Users/ante/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/`)

Ključna pravila:

**Zabranjene fraze:** transformiraj, moć dodira, instant rezultat, osiguraj mjesto odmah, ostala X mjesta, investiraj u sebe, premium, ekskluzivno, breakthrough

**Dozvoljeni jezik:** palpacija, reakcija tkiva, napeta traka, trigger točka, obrazac boli, ishemijski pritisak, PIR, lokalna/distalna točka, procjena prije tretmana

**Tri glasa:**
- *Ante terapeut* — osobne objave, storytelling, captions
- *Ante edukator* — course pages, program po danima, tehnike
- *Supra institucija* — FAQ, cijene, logistika (bez emocije, bez marketinga)

**Idealna page struktura (ne klasični funnel):**
1. Hero — klinički positioning
2. Kratka observacija — stvarni problem u praksi
3. "Što počinješ primjećivati" — observation cards, ne benefit cards
4. Clinical snapshots — 2–3 konkretna slučaja
5. Metoda — akupresura + trigger point
6. Program po danima — konkretno, bez poetičnih naziva
7. Predavač — filozofija, ne ego biografija
8. Cijena i termin — čisto, bez "investiraj u sebe"
9. FAQ
10. CTA — miran, profesionalan

---

## STRANICE U PROJEKTU

| Stranica | Fajl | Status |
|----------|------|--------|
| Akupresura & Trigger Point | `AkupresuraPage.tsx` | ✅ Hero refaktoriziran |
| Manualna terapija | `ManualTherapySchoolPage.tsx` | ⏳ Čeka redesign |
| Crossfriction | `CrossfrictionPage.tsx` | ⏳ Čeka redesign |
| Cupping | `CuppingPage.tsx` | ⏳ Čeka redesign |
| Lomi Lomi | `LomiLomiPage.tsx` | ⏳ Čeka redesign |
| O učilištu | `OUcilistuPage.tsx` | ⏳ Čeka redesign |
| Raspored | `RasporedPage.tsx` | ⏳ Čeka redesign |

---

## LOKALNI DEV SERVER

```bash
npm run dev
# → http://localhost:8080
```

Playwright MCP može koristiti lokalni server za vizualni pregled promjena prije deploya.

---

## NAPOMENE

- FTP credentials su u `~/.netrc` — ne dodavati u kod
- GitHub token je u git remote URL — ne mijenjati
- `lovable-uploads/` i `videos/` u public/ — ne uploadati svaki put (deploy-quick.sh ih preskače)
- Testimonijali na ATP stranici su placeholder — zamijeniti pravim izjavama
