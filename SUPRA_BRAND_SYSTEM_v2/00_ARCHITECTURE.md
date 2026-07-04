# SUPRA BRAND SYSTEM v2 — ARCHITECTURE
_Verzija: 2.0 — Master dokument_
_Datum: 28. svibnja 2026._
_Status: AKTIVAN — nadjačava sve starije dokumente_

---

## SVRHA OVOG DOKUMENTA

Ovaj dokument je mapa, ne sadržaj. Definira:

- što postoji i gdje
- tko je source of truth za što
- koji su dokumenti deprecated i zašto
- kako se rješavaju aktivni konflikti između starijih verzija
- kako se skillovi trebaju ponašati

Čitati ga mora svaki AI agent koji radi bilo što pod imenom Supra Studium ili Ante Antić,
**prije nego pogleda bilo koji drugi brand dokument.**

---

## DVA SISTEMA — JEDNO BRAND SREDIŠTE

Supra Studium ima jedno brand središte (filozofija, glasovi, claim certainty), ali dva jasno odvojena sistema prijenosa:

```
                        ┌─────────────────────┐
                        │   SHARED CORE        │
                        │  (01_SHARED_CORE.md) │
                        │                      │
                        │  · Brand filozofija  │
                        │  · Authority model   │
                        │  · Tri glasa         │
                        │  · Claim certainty   │
                        │  · Cadence library   │
                        │  · AI decision tree  │
                        └──────────┬──────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                                         │
   ┌──────────▼──────────┐             ┌───────────────▼──────────┐
   │   WEB / INSTITUTIONAL│             │   SOCIAL / GRAPHIC        │
   │   (02_WEB_SYSTEM.md) │             │   (03_SOCIAL_GRAPHIC.md)  │
   │                      │             │                           │
   │  · Editorial         │             │  · Dark navy visual ID    │
   │  · Clinical          │             │  · Real photography first │
   │  · Restrained        │             │  · Graphic layer system   │
   │  · Premium European  │             │  · Caption architecture   │
   │  · Off-white + dark  │             │  · Platform specifics     │
   │  · Bez emojija       │             │  · Emoji: min. funkc.     │
   │  · Bez slogana       │             │  · Captions: topliji      │
   │  · Bez hypea         │             │  · Scroll-stopper: oprav. │
   └──────────────────────┘             └───────────────────────────┘
```

---

## SISTEM 1 — WEB / INSTITUTIONAL

### Karakter

**Mentalni model:** klinički institut / dokumentarna edukacija, ne premium online course.

Ovaj sistem definira kako Supra web izgleda, zvuči i funkcionira. Svaki element na webu
prolazi kroz filter **editorial restraint**: dodaje se samo ono što mora biti tu.

### Što jest:
- Documentary/editorial composition
- Clinical authority through restraint
- Institutional calm
- Video kao primarni layer, tekst kao observational layer
- Typography: Playfair (headline) + sistemski serif
- Paleta: off-white, dark editorial, bijela s prozornošću

### Što nije:
- Sales funnel
- Urgency/scarcity driven
- Glassmorphism / luxury funnel aesthetic
- "Premium edukacija" marketing jezik
- Motivacijska platforma

### Zabranjeni UI elementi (hard rule, ne može se override-ati):
- Crveni urgency badgevi
- Cijena u glavnom CTA gumbu
- `rounded-2xl` na CTA gumbima
- `scale: 1.05` hover efekti na gumbima
- Full black overlay (bg-black/50) preko videa
- Glassmorphism card kao hero content wrapper
- Emojiji bilo gdje na stranici
- Slogan kao hero headline

### Source of truth za web:
→ `02_WEB_SYSTEM.md` (u ovoj mapi)
→ `DESIGN.md` (web portal root) — UI patterns, tipografija, spacing, motion
→ `CLAUDE.md` (web portal root) — implementacijske specifičnosti za React/Vite

---

## SISTEM 2 — SOCIAL / GRAPHIC

### Karakter

**Mentalni model:** edukativna institucija koja komunicira s profesionalnom zajednicom —
ne brand koji nastoji izgledati "premium", nego brand koji demonstrira znanje.

Ovaj sistem definira grafike (Canva), caption-e, vizualni identitet na društvenim mrežama,
newsletter vizuale i sve što ide pod @suprastudium.

### Što jest:
- Dark navy pozadina (`#13192a`) kao vizualni temelj
- Real photography first — vlastite fotografije s edukacija
- Educational graphics s anatomskim i kliničkim fokusom
- Scroll-stopper samo kada je opravdan kliničkim sadržajem (ne clickbait)
- Captions topliji od web copy-ja, ali i dalje stručni
- Glas 1 i Glas 2 dominiraju (ne institucija/Glas 3)

### Što nije:
- Cheap marketing hooks
- Clickbait naslovi
- Hype-driven vizuali
- Bijela pozadina (to nije Supra Studium estetika na socialu)
- Emojiji kao dekoracija ili ritam pisanja

### Emoji pravilo (finalno):
```
Web:           NULA emojija. Bez iznimke.
Social tekst:  NULA emojija u tijelu teksta.
Social CTA:    Maksimalno 2-3 emojija, SAMO u CTA/kontakt bloku.
               Primjer: 📩 💬 📍 — funkcionalni, ne dekorativni.
               Ako CTA radi i bez emojija, ne dodavati.
Grafike:       Nula emojija na grafici.
```

### Source of truth za social/graphic:
→ `03_SOCIAL_GRAPHIC_SYSTEM.md` (u ovoj mapi)
→ `BRAND_VOICE.md` (iCloud) — vizualni identitet: boje, fontovi, logo varijante (sekcije 2, 5, 8)
  ⚠️ Čitati SAMO sekcije 2, 5, 6, 8, 10 — ostatak je deprecated (vidi dolje)

---

## SOURCE OF TRUTH — KOJA PITANJA IDU GDJE

| Pitanje | Dokument |
|---------|----------|
| Koja je filozofija branda? | `01_SHARED_CORE.md` |
| Koji glas koristiti? | `01_SHARED_CORE.md` → Tri glasa |
| Koje tvrdnje su dopuštene? | `01_SHARED_CORE.md` → Claim certainty |
| Kako pisati caption za FB/IG? | `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Kako pisati hero headline za web? | `02_WEB_SYSTEM.md` |
| Koji UI elementi su zabranjeni? | `02_WEB_SYSTEM.md` + `CLAUDE.md` |
| Koje boje se koriste na grafici? | `03_SOCIAL_GRAPHIC_SYSTEM.md` + `BRAND_VOICE.md` sek. 2 |
| Koji logo koristiti? | `BRAND_VOICE.md` sek. 2 (logo varijante) |
| Što piše u CTA bloku? | `01_SHARED_CORE.md` → CTA filozofija |
| Smiju li emojiji? | Ovaj dokument, sekcija "Emoji pravilo" |
| Koji je slogan? | Ovaj dokument, sekcija "Konflikti" |
| Kako koristiti "transformacija"? | Ovaj dokument, sekcija "Konflikti" |
| Kako skill treba reagirati? | `04_CONTENT_PIPELINE.md` |
| Koji dokumenti su stari? | `05_DEPRECATED.md` |
| Koliko objava tjedno? | `CONTENT_OPERATIONS.md` → Content Cadence |
| U kojoj je fazi tečaj? | `CONTENT_OPERATIONS.md` → Active Course Map |
| Kada početi s enrollmentom? | `CONTENT_OPERATIONS.md` → Enrollment Rhythm Rules |
| Kako pratiti assets i drift? | `CONTENT_OPERATIONS.md` → Asset Pipeline Table + Weekly Review |
| Koliko asseta je realno tjedno? | `CONTENT_OPERATIONS.md` → Production Load Limits |

---

## AKTIVNI KONFLIKTI — FINALNA REZOLUCIJA

### 1. "Transformacija" i derivati

**Stari status (BRAND_VOICE.md, sek. 7):** "Transformacija" je navedena kao vrijednost branda.

**Novi status:**
```
Interno:    Smije se koristiti kao opis interne promjene u načinu razmišljanja
            terapeuta — ali SAMO u interno-orijentiranom jeziku.

Externally: ZABRANJENO u svim javnim outputima.
            Zabranjeno: "transformiraj", "transformativno", "transformacija prakse",
            "transformiramo", "životna transformacija"

Zamjena:    "promijeni način čitanja pacijenta" / "kliničko razmišljanje koje traje" /
            "pristup koji se može ponoviti"
```

**Zašto:** "Transformacija" je lingua franca coaching industrije i wellness funnela.
Supra Studium se ne pozicionira u tom registru.

---

### 2. Slogan "Pokret za buduće super-terapeute"

**Stari status (BRAND_VOICE.md, sek. 1):** glavni javni slogan.

**Novi status:**
```
Javna komunikacija:  NIJE više glavni javni slogan. Ne koristiti kao hero headline,
                     tagline, bio opis ili otvaranje bilo kojeg outputa.

Interno / alumni:    Može živjeti kao interni identitet zajednice — kad Ante govori
                     alumni publici (Sloj 3) o viziji. Ne u enrollmentu, ne u webu.

Zamjena za web:      Nema jednog slogana. Web se pozicionira kroz precizno
                     kliničko pozicioniranje po stranici.

Zamjena za social:   "Učilište Supra Studium" kao institucija, bez slogana.
```

**Zašto:** "Pokret" i "super-terapeut" donose energiju koju novi direction ne podržava —
previše aspiracijski, previše motivacijski, ne dovoljno klinički.

---

### 3. Hook struktura u pisanim objavama

**Stari status (BRAND_TONE_RULES.md):** "Power hooks / Scroll stoppers" su navedeni kao
legitiman format za CapCut reels i TikTok video.

**Novi status:**
```
Video (reels, TikTok, CapCut):  Hook kao vizualni tekst na video je dozvoljen
                                 AKO je sadržajno klinički — ne clickbait.
                                 Primjer OK:  "SUBOKCIPITALNA REGIJA."
                                 Primjer NOT: "Ovo će promijeniti sve."

Pisane objave (FB, IG, LI):     Hook → drama → CTA struktura je ZABRANJENO.
                                 Jedina dozvoljena struktura:
                                 klinički slučaj → mehanizam → vrijednost → poziv
```

**Važno:** Power hooks su sirovinski materijal za video — NIKAD se ne kopiraju
direktno u pisane objave. Ovo pravilo ne mijenjamo.

---

### 4. Emoji u CTA bloku — standardni blok

**Stari status:** BRAND_VOICE.md i SUPRA_LANGUAGE_SYSTEM_v2 koriste:
```
📩 Prijavi se: tally.so/r/wA5kvD
💬 WhatsApp: wa.me/385958558953
📍 Zagreb | @suprastudium
```

**Novi status:**
```
Web:     NE — CTA blok na webu ne smije sadržavati emojije.
         Koristiti institucijski format bez ikona.

Social:  Standardni blok s emojijima ostaje dozvoljen SAMO na social kanalima
         (FB, IG caption, newsletter) gdje funkcionalno poboljšava skenabilnost.
         Emojiji u bloku su funkcionalni navigatori, ne dekoracija.
```

---

## MIGRACIJA STARIH DOKUMENATA

### BRAND_VOICE.md (iCloud)
_Datum: 23. ožujka 2026._

| Sekcija | Status | Gdje živi sada |
|---------|--------|----------------|
| Sek. 1 — Tko smo | ⚠️ PARCIJALNO DEPRECATED | Filozofija → `01_SHARED_CORE.md`; slogan → deprecated |
| Sek. 2 — Vizualni identitet (boje, fontovi) | ✅ AKTIVAN | Ostaje u BRAND_VOICE.md; referencira `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Sek. 3 — Glas i ton | ❌ DEPRECATED | Zamijenjen `01_SHARED_CORE.md` → Tri glasa |
| Sek. 4 — Ciljana publika | ✅ AKTIVAN | Ostaje kao referenca; audience layers → `01_SHARED_CORE.md` |
| Sek. 5 — Aktivni programi | ✅ AKTIVAN | Ostaje kao operativna referenca |
| Sek. 6 — Linkovi i kontakti | ✅ AKTIVAN | Ostaje kao operativna referenca |
| Sek. 7 — Vrijednosti brenda | ⚠️ PARCIJALNO DEPRECATED | "Transformacija" kao vrijednost: deprecated; ostatak: vidi `01_SHARED_CORE.md` |
| Sek. 8 — Canva smjernice | ✅ AKTIVAN | Ostaje; prošireno u `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Sek. 9 — Pisanje postova | ❌ DEPRECATED | Zamijenjen `01_SHARED_CORE.md` + `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Sek. 10 — Hashtagi | ✅ AKTIVAN | Ostaje kao operativna referenca |
| Sek. 11 — Napomene za Claude | ❌ DEPRECATED | Zamijenjen ovim sustavom |

**Akcija:** Ne brisati BRAND_VOICE.md — označiti ga kao "LEGACY — čitati samo sek. 2, 4, 5, 6, 8, 10."

---

### SUPRA_LANGUAGE_SYSTEM_v2.md (iCloud)
_Datum: 14. svibnja 2026._

**Status:** NAJKOMPLETNIJI postojeći dokument. Distribuira se u novi sustav:

| Sekcija v2 | Destinacija u v3 |
|------------|-----------------|
| Brand Philosophy | `01_SHARED_CORE.md` |
| Authority Model | `01_SHARED_CORE.md` |
| Tri glasa | `01_SHARED_CORE.md` |
| Content Modes (A/B/C/D/E) | `01_SHARED_CORE.md` → `04_CONTENT_PIPELINE.md` |
| Audience Sophistication Layers | `01_SHARED_CORE.md` |
| Claim Certainty System | `01_SHARED_CORE.md` |
| Graphic Layer System | `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Caption Architecture | `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Newsletter + Web Copy Tone | `02_WEB_SYSTEM.md` + `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| CTA Philosophy | `01_SHARED_CORE.md` |
| Negative Space Rules | `01_SHARED_CORE.md` |
| Cadence Library | `01_SHARED_CORE.md` |
| AI Decision Tree | `01_SHARED_CORE.md` |
| Brand Tone Validator | `01_SHARED_CORE.md` |

**Akcija:** SUPRA_LANGUAGE_SYSTEM_v2.md ostaje u iCloud kao arhiva. Ne brisati.
Označiti ga: "ARHIVA — sadržaj migriran u SUPRA_BRAND_SYSTEM_v2/."

---

### BRAND_TONE_RULES.md (iCloud/_SKILLS)
_Datum: 13. svibnja 2026._

**Status:** ❌ FULLY DEPRECATED

Sav sadržaj je natkriven SUPRA_LANGUAGE_SYSTEM_v2.md (koji je zatim migriran dalje).
Graphic layer system, brand tone validator i cadence rules žive u novom sustavu.

**Akcija:** Označiti ga: "DEPRECATED — zamijenjen SUPRA_BRAND_SYSTEM_v2/."

---

### BRAND_SYSTEM.md (web portal root)
_Distilat iz SUPRA_LANGUAGE_SYSTEM_v2.md za AI orchestration_

**Status:** ⚠️ PRIVREMENO AKTIVAN

Koristan kao brzi referentni dokument za Claude Code sesije unutar web portala.
Kada su svi novi v2 dokumenti napisani — ovaj postaje redundantan.

**Akcija:** Zadržati dok se ne završi `01_SHARED_CORE.md`. Tada označiti deprecated.

---

## SKILL PONAŠANJE — SMJERNICE

> Ovo je nacrt za buduće skill update. Skillovi se NE mijenjaju sada.

### supra-copy-editing

**Trenutno ponašanje:** Provjerava tekst prema BRAND_TONE_RULES.md i SUPRA_LANGUAGE_SYSTEM_v2.md.

**Buduće ponašanje:**
- Source of truth: `01_SHARED_CORE.md` (claim certainty, cadence, glasovi)
- Razlikovati kontekst: je li tekst za **web** ili za **social**?
  - Web: primijeni WEB filter (bez emojija, bez slogana, bez warmth u body copy-ju)
  - Social: primijeni SOCIAL filter (topli glas dopušten, funkcionalni emojiji u CTA)
- "transformacija" → zabranjeno externally; predloži zamjenu
- "Pokret za buduće super-terapeute" → deprecated kao javni slogan; označi

---

### supra-grafike

**Trenutno ponašanje:** Generira Canva grafike prema BRAND_TONE_RULES.md graphic layer systemu.

**Buduće ponašanje:**
- Source of truth: `03_SOCIAL_GRAPHIC_SYSTEM.md`
- Vizualni identitet (boje, fontovi, logo): `BRAND_VOICE.md` sek. 2 ostaje mjerodavan
- Graphic layer system (headline/subheadline/body): isti kao dosad — zaključan
- Nula emojija na grafici (bez iznimke)
- Headline: anatomski/proceduralni fokus, nikad glagol, period na kraju
- Scroll-stopper samo ako je klinički opravdan sadržaj

---

### supra-ad-creative

**Trenutno ponašanje:** Pretpostavljeno prema BRAND_VOICE.md.

**Buduće ponašanje:**
- Sav ad creative spada pod SOCIAL/GRAPHIC sistem
- Nema urgency/scarcity copywritinga
- Headline: klinički fokus, ne benefit-driven
- CTA: funkcionalni, miran, jedan po formatu
- "transformacija" i derivati: zabranjeni u ad copy-ju
- Emojiji: samo u CTA/kontakt segmentu, max 2-3

---

### supra-email-sequence

**Trenutno ponašanje:** Pretpostavljeno prema BRAND_VOICE.md + SUPRA_LANGUAGE_SYSTEM_v2.md.

**Buduće ponašanje:**
- Newsletter je hybrid sistem: topao kao social, precizan kao web
- Glas 1 ili Glas 2 — nikad čisti Glas 3 (newsletter je privilegirani kanal)
- Emojiji: NULA u tijelu emaila; funkcionalni u CTA bloku dozvoljen
- Subject line: konkretna informacija > kreativni hook
- "transformacija" i derivati: zabranjeni

---

### supra-publish-prep

**Buduće ponašanje:**
- Provjera: koji sistem — web ili social?
- Web output: primijeni web filter checklist (iz `02_WEB_SYSTEM.md`)
- Social output: primijeni social filter checklist (iz `03_SOCIAL_GRAPHIC_SYSTEM.md`)
- Uvijek provjeri: postoje li deprecated fraze? (transformacija externally, super-terapeut kao slogan, instant result claims)

---

## PREDLOŽENA STRUKTURA FOLDERA

```
SUPRA_BRAND_SYSTEM_v2/
│
├── 00_ARCHITECTURE.md          ← Ovaj dokument. Čitati prvi.
│
├── 01_SHARED_CORE.md           ← Brand filozofija, authority model, tri glasa,
│                                  claim certainty, content modes, cadence library,
│                                  CTA filozofija, negative space, AI decision tree,
│                                  brand tone validator.
│                                  SOURCE: SUPRA_LANGUAGE_SYSTEM_v2.md
│
├── 02_WEB_SYSTEM.md            ← Editorial direction, hero patterns, page structure,
│                                  UI pravila, zabranjeni elementi, typography,
│                                  web copy tone, CTA gumbi.
│                                  SOURCE: DESIGN.md + CLAUDE.md + SUPRA_LANGUAGE_SYSTEM_v2.md sek.9
│
├── 03_SOCIAL_GRAPHIC_SYSTEM.md ← Vizualni identitet (boje, fontovi, logo),
│                                  graphic layer system (3 layera), caption architecture
│                                  po platformi, emoji pravila, Canva smjernice,
│                                  scroll-stopper pravila, hashtagi.
│                                  SOURCE: BRAND_VOICE.md sek.2,8,10 + SUPRA_LANGUAGE_SYSTEM_v2.md sek.7,8
│
├── 04_CONTENT_PIPELINE.md      ← Kako ideja postaje output. Content modes (A/B/C/D/E),
│                                  workflow od transkripta do grafike i captiona,
│                                  skill ponašanje, platforma-specifični checklistu.
│                                  SOURCE: SUPRA_LANGUAGE_SYSTEM_v2.md sek.4 + AI_WORKFLOW.md
│
├── 05_DEPRECATED.md            ← Popis starih dokumenata s objašnjenjem što je zamijenilo što.
│                                  Nije source of truth ni za što — samo mapa nasljeđa.
│
├── CONTENT_OPERATIONS.md       ← Operativni governance layer. Tjedni content planning,
│                                  enrollment rhythm rules, production load limits,
│                                  anti-spam pravila, asset pipeline template, weekly review.
│                                  Nije content calendar — governance i rhythm dokument.
│
└── SHARED_CORE_FAST.md         ← 3.8KB kondenzat 01_SHARED_CORE.md za lightweight agente.
                                   Runtime default za jednostavne taskove.
```

---

## PRIORITET ČITANJA ZA AI AGENTE

```
Svaki task koji uključuje Supra Studium sadržaj:

1. Uvijek: 00_ARCHITECTURE.md (ovaj dokument)
2. Uvijek: 01_SHARED_CORE.md

3a. Ako je task WEB (React komponenta, copy za stranicu, UI):
    → 02_WEB_SYSTEM.md
    → DESIGN.md (web portal root)
    → CLAUDE.md (web portal root)

3b. Ako je task SOCIAL/GRAPHIC (Canva, caption, newsletter, ad):
    → 03_SOCIAL_GRAPHIC_SYSTEM.md
    → BRAND_VOICE.md (samo sek. 2, 4, 5, 6, 8, 10)

4. Ako task uključuje content pipeline (od ideje do outputa):
    → 04_CONTENT_PIPELINE.md

5. Ako task uključuje content planning, tjedni ritam, enrollment timing:
    → CONTENT_OPERATIONS.md

6. Ako nešto u starim dokumentima izgleda kao konflikt s novim:
    → 05_DEPRECATED.md za pojašnjenje
    → Ovaj dokument (sekcija "Aktivni konflikti") kao finalna arbitraža
```

---

_SUPRA BRAND SYSTEM v2 — 00_ARCHITECTURE.md_
_Ante Antić / Učilište Supra Studium_
_28. svibnja 2026._
