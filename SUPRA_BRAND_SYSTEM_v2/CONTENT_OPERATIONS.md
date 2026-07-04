# CONTENT_OPERATIONS.md — Supra Studium
_Operational Content Planning System_
_SUPRA_BRAND_SYSTEM_v2 — Governance Layer_
_28. svibnja 2026. — Version 1.0_

---

## 0. KAKO KORISTITI OVAJ DOKUMENT

Nije content calendar. Nije brief generator. Nije dashboard.

Ovo je **operativni governance layer** koji:

1. Definira ritam i omjere — ne teme
2. Sprječava tone drift kroz volumen
3. Drži enrollment u granicama institucionalnog tona
4. Povezuje production s observability sustavom

**Jedina pravila koja se nikad ne krše:**
- Educational content mora uvijek biti dominantan
- Isti CTA ne smije se pojavljati više od 2x tjedno
- Enrollment content ne smije biti 2 posta zaredom bez educational breaka

**Tjedni workflow (15 minuta tjedno):**
```
Ponedjeljak  → Otvori CONTENT_OPERATIONS.md
             → Provjeri Active Course Map — koja je faza?
             → Kopiraj Master Calendar Template → WEEK_[YY]_[WW].md
             → Postavi fokus, enrollment intensity, plan objava

Srijeda      → Mid-week provjera: je li cadence na putu?
             → Logiraj OBS ako ima drifta

Petak        → Weekly Review (sekcija 8)
             → Provjeri Watchlist ako se pattern ponovio
```

---

## 1. MASTER CALENDAR TEMPLATE

Kopirati za svaki tjedan. Pohraniti u `content/WEEK_[YY]_[WW].md`.

```markdown
# Tjedan [BROJ] — [DATUM OD] do [DATUM DO]

## FOKUS TJEDNA
Primarni tečaj:    [ MT5 Advanced / MT1 Krizobolja / MT2 / ATP / HMP ]
Sekundarni tečaj:  [ naziv ili N/A ]
Faza:              [ authority / bridge / enrollment / final window ]
Enrollment intensity: [ Low / Medium / High ]

## POSEBNI DATUMI
- [ datum ]: [ opis — vikend tečaja, deadline prijave, itd. ]

## PLAN OBJAVA

| Dan | Platforma | Asset ID     | Tema / ključna riječ | Mode | CTA  | Status  |
|-----|-----------|--------------|----------------------|------|------|---------|
| Pon |           |              |                      |      |      |         |
| Uto |           |              |                      |      |      |         |
| Sri |           |              |                      |      |      |         |
| Čet |           |              |                      |      |      |         |
| Pet |           |              |                      |      |      |         |

## CONTENT BUDŽET TJEDNA
Ukupno planiranih content piecea:  [ broj ]
Od toga educational (Mode A/D):    [ broj ]  →  cilj ≥ 60%
Od toga enrollment (Mode B/C/E):   [ broj ]  →  max 40%
Negativni prostor post (bez CTA):  [ da/ne ] →  min 1x tjedno
Newsletter:                        [ da/ne ]

## WEEKLY REVIEW
→ Ispuniti u petak — vidi Sekciju 8
```

---

## 2. ACTIVE COURSE MAP

### MT5 Advanced Masaža + Split format

**O tečaju:** Napredni program. Publika s iskustvom. Pretpostavljeno kliničko znanje: visoko.

| Polje | Vrijednost |
|-------|-----------|
| Format | Split — više vikenda |
| Primarna publika | Sloj 1 — napredni terapeuti |
| Sekundarni | Sloj 2 — iskusni praktičari |
| Content težišta | Napredni mehanizmi, kompleksni slučajevi, metodički uvidi |
| Default glas | Glas 1 (terapeut-edukator) dominant |
| Enrollment trigger | Specifičnost programa, ne price point |

**Što NE raditi prerano:**
- Ne spominjati datum prije min. 4 tjedna authority faze
- Ne koristiti "nadogradnja" ili "sljedeći level" framing
- Ne targetirati početnike — sadržaj mora naturalno odbiti wrong-fit publiku
- Split format ne koristiti kao prodajni argument

**Phase plan:**
```
Authority  (min. 4 tjedna)
→ Tehnike specifične za MT5 razinu — bez enrollment CTA
→ Case studies koji zahtijevaju naprednu diferencijalnu procjenu
→ Mehanizmi koji nisu pokriveni na MT1/MT2

Bridge  (2 tjedna)
→ "Ovakvi slučajevi zahtijevaju specifičnu pripremu..."
→ Program mention bez datuma i bez cijene

Enrollment  (2–3 tjedna)
→ Datum + logistika, konkretan i miran
→ Mala grupa framing — faktično, ne hype

Final Window  (zadnji tjedan)
→ Jednom tjedno logistički podsjetnik
→ Klinički content ostaje i dalje
```

---

### MT1 — Krizobolja

**O tečaju:** Entry-level tema, visoka klinička prepoznatljivost, šira publika terapeuta.

| Polje | Vrijednost |
|-------|-----------|
| Primarna publika | Sloj 2 — praktičari koji traže strukturu u procjeni |
| Content težišta | QL, lumbar mehanizmi, diferencijalna procjena, obrazac boli |
| Default glas | Glas 1 + Glas 3 kombinacija |
| Enrollment trigger | Prepoznatljivost u pacijentima, praktična primjenjivost |

**Što NE raditi prerano:**
- Ne koristiti "svaki terapeut treba znati ovo" — premostiti u anatomski konkretno
- Ne reducirati na "leđa bolovi" — biti anatomski precizan od starta
- Ne obećavati "rješenje za krizobolju" — observational framing uvijek

**Phase plan:**
```
Authority  (3–4 tjedna)
→ QL, iliosakralni zglob, SI disfunkcija — klinički
→ Diferencijacija: lumbalna vs. referred vs. diskogena

Bridge  (2 tjedna)
→ "U praksi: kada pacijent s kroničnom krizobolje traži procjenu..."
→ MT1 tema soft mention — bez datuma, bez cijene

Enrollment  (2–3 tjedna)
→ Direktno, bez dramatizacije
→ Logistika + mala grupa

Final Window  (zadnji tjedan)
→ Jednom logistički, jednom klinički
```

---

### MT2

**Status:** Čeka scope definition.

> ⚠️ **MT2 se ne pojavljuje u weekly cadenceu dok fokus i publika nisu definirani ovdje.**
> Kada Ante definira scope, popuniti tablicu po uzoru na MT1/MT5 iznad.

---

## 3. CONTENT CADENCE

### Terminologija

**Content piece** = 1 klinički uvid, slučaj ili tema koja producira:
- FB post (caption specifičan za FB)
- IG post (caption specifičan za IG — nije copy-paste)
- LinkedIn (opcija — ne zahtijeva svaki content piece LinkedIn verziju)
- Grafika (opcija — nije obavezna uz svaki post)

**FB + IG verzije istog content picea = 1 content piece, ne 2.**

---

### Steady State (bez aktivne enrollment faze)

| Platforma | Preporučeno | Max | Napomena |
|-----------|-------------|-----|----------|
| IG | 3x / tjedan | 4x | Educational dominant |
| FB | 3x / tjedan | 4x | Drugačiji caption od IG-a |
| LinkedIn | 1x / tjedan | 2x | Duži format, metodički focus |
| Newsletter | 2x / mjesec | 4x / mjesec | Nije u content piece broju |

**Content piece volumen:** 3–4 / tjedan

---

### Bridge Phase (4–6 tjedana prije enrollment)

| Platforma | Preporučeno | Napomena |
|-----------|-------------|----------|
| IG | 3–4x / tjedan | Blagi porast, isti ton |
| FB | 3–4x / tjedan | — |
| LinkedIn | 1–2x / tjedan | — |
| Newsletter | 1x / 2 tjedna → tjedno | Prelaz prema tjednom ritmu |

**Content piece volumen:** 3–5 / tjedan

---

### Enrollment Phase (aktivni enrollment, 2–3 tjedna)

| Platforma | Preporučeno | Max | Napomena |
|-----------|-------------|-----|----------|
| IG | 4x / tjedan | 5x | |
| FB | 4x / tjedan | 5x | |
| LinkedIn | 2x / tjedan | 3x | |
| Newsletter | 1x / tjedan | 2x | |

**Content piece volumen:** 4–5 / tjedan
**Enrollment content:** max 2 od 5 u tjednom outputu

---

### Final Enrollment Window (zadnjih 7–10 dana)

| Platforma | Preporučeno | Max | Napomena |
|-----------|-------------|-----|----------|
| IG | 5x / tjedan | 6x | Volumen raste, ton ostaje klinički |
| FB | 5x / tjedan | 6x | |
| LinkedIn | 2–3x / tjedan | 3x | |
| Newsletter | 1–2x / zadnji tjedan | 2x | |

**Content piece volumen:** 5–6 / tjedan
**Enrollment content:** max 3 od 6 — minimum 3 educational ostaju i u final windowu

---

## 4. ENROLLMENT RHYTHM RULES

### Načelo

Enrollment komunikacija nikad ne dolazi prva. Mora doći iz pozicije uspostavljenog autoriteta. Prijelaz iz authority u enrollment fazu mora biti nevidljiv za čitatelja — ne smije se osjećati kao "evo sad počinje prodaja."

---

### Authority Phase

**Trajanje:** Minimum 3–4 tjedna — nikad manje

| Tip sadržaja | Omjer |
|-------------|-------|
| Educational / clinical | 100% |
| Institutional (tečaj mention) | 0% |
| Enrollment | 0% |

**Pravila:**
- Tečaj se NE spominje po imenu u ovoj fazi
- Nema datuma, nema cijene, nema "prijavi se"
- Teme moraju biti direktno relevantne za ono što tečaj pokriva
- Klinička specifičnost je ključna — ne generic "boli leđa" nego "QL involvement u ipsilateralnoj lumbalnoj boli"

**Signal da je faza uspjela:** Terapeuti koji prate postavljaju pitanja specifična za tu kliničku temu.

---

### Bridge Phase

**Trajanje:** 2 tjedna

| Tip sadržaja | Omjer |
|-------------|-------|
| Educational / clinical | 70% |
| Institutional (tečaj mention, bez CTA) | 30% |
| Enrollment | 0% |

**Pravila:**
- Tečaj se može imenovati, ali ne kao prodajni argument
- Format: *"Upravo ove mehanizme obrađujemo na MT1..."* — ne: *"Dođi na MT1 i naučit ćeš sve!"*
- Datum: može biti soft mention ("proljeće 2026") — konkretan datum čeka enrollment fazu
- Cijena: ne spominjati

---

### Enrollment Phase

**Trajanje:** 2–3 tjedna

| Tip sadržaja | Omjer |
|-------------|-------|
| Educational / clinical | 60% |
| Enrollment (datum, cijena, link) | 40% |

**Pravila:**
- Educational content MORA ostati na 60% — enrollment nikad ne preuzima ton
- Svaki enrollment post mora imati klinički context — ne samo logistiku

```
❌  "MT1 Krizobolja — 12. lipnja, Zagreb, 400€. Prijava: [link]"

✅  "U procjeni lumbalne boli, SI disfunkcija i diskogeni obrazac zahtijevaju
    potpuno drugačiji pristup. MT1 pokriva tu razliku — 12. lipnja, Zagreb.
    Detalji i prijava: [link]"
```

- Isti CTA link: max 2x tjedno
- Cijena i datum zajedno: max 1x tjedno
- Max 2 različita CTA formata simultano (npr. Tally + WhatsApp — ne više)

---

### Final Enrollment Window

**Trajanje:** Zadnjih 7–10 dana

| Tip sadržaja | Omjer |
|-------------|-------|
| Educational / clinical | 50% |
| Enrollment | 50% |

**Pravila:**
- "Mjesta su ograničena" — OK samo ako je faktično i samo 1x u final windowu
- "Zadnja mjesta" — samo ako jest
- Nikad: *"Ne propusti!", "Prijavi se ODMAH!", "Ovo je zadnja šansa"*
- Max 1 direktni enrollment post dnevno (bez obzira na platformu)
- Klinički sadržaj ostaje i u final windowu — ton se ne mijenja

---

## 5. PRODUCTION LOAD LIMITS

### Tjedni output — realni limiti

| Razina | Content pieces / tjedan | Status |
|--------|--------------------------|--------|
| Sustainability zone | 3–4 | ✅ Optimalna kvaliteta |
| Caution zone | 5–6 | ⚠️ Moguć drift u enrollment fazi |
| Quality risk zone | 7–8 | ⚠️ Klinička preciznost počinje padati |
| Tone drift zone | 9+ | ❌ Sistemski drift je neizbježan — ne raditi |

**Newsletter nije u gornjem broju** — različit format i produkcija.

---

### Grafike — zasebni limit

| Razina | Grafike / tjedan | Status |
|--------|-----------------|--------|
| Optimal | 2–3 | ✅ |
| Caution | 4–5 | ⚠️ Provjeri Graphic Layer System za svaku |
| Risk | 6+ | ❌ Vizualni identitet počinje padati |

---

### Znakovi da je volumen previsok

Ako primjetiš 3 od 5 sljedećih znakova — stani, smanji volumen, logiraj OBS:

```
1. Klinički opisi postaju generički
   ("bol u leđima" umjesto "QL involvement u ipsilateralnoj lumbalnoj boli")

2. Rečenice postaju fragmenti — triplet ritam se vraća

3. Svaki post zvuči kao varijacija prethodnog

4. CTA se ponavlja gotovo identičan 3+ puta u tjednu

5. Teško je pronaći novi klinički kut za istu temu
```

---

## 6. ANTI-SPAM RULES

### CTA limiti

| Pravilo | Limit |
|---------|-------|
| Isti CTA tekst / formulacija | Max 2x / tjedan |
| Isti link (Tally, WhatsApp) | Max 3x / tjedan ukupno |
| Direktna "Prijavi se" formulacija | Max 2x / tjedan |
| Cijena + datum u istom postu | Max 1x / tjedan |

---

### Tematska rotacija

| Pravilo | Limit |
|---------|-------|
| Isti tečaj kao headline | Max 3 posta zaredom — zatim obavezni klinički break |
| Ista anatomska regija kao fokus | Ne 2 puta zaredom na istoj platformi |
| Enrollment post za isti tečaj | Min. 1 educational post između dva enrollment posta |
| Isti opis tečaja formulacijom | Ne koristiti dvaput u 2 tjedna |

---

### Platformska separacija

Isti content piece na IG i FB mora imati različite captione:

| Platforma | Caption ton |
|-----------|------------|
| FB | Može biti duži, više context, community ton |
| IG | Može biti kraći, vizualni hook + hashtags |
| LinkedIn | Drugačiji kut — profesionalno reframing ili širi metodički context |

**Ne koristiti copy-paste caption cross-platform.** Supra brand ne smije zvučati kao scheduled bulk post.

---

### Ponavljanje fraza

| Fraza / pattern | Limit |
|----------------|-------|
| "U praksi vidimo..." | Max 2x / tjedan |
| "Vrijedi provjeriti..." | Max 2x / tjedan |
| "Kod mnogih pacijenata..." | Max 2x / tjedan |
| Isti klinički slučaj kao otvaranje | Ne koristiti dvaput na istoj platformi u tjednu |
| Post bez CTA (negativni prostor) | Min 1x / tjedan — nije svaki post CTA |

---

## 7. ASSET PIPELINE TABLE

### Format tablice

Pohraniti u `content/WEEK_[YY]_[WW].md` ili kao zasebni `PIPELINE.md`.

```
| Asset ID | Datum | Tečaj | Platforma | Mode | CTA  | Status   | OBS Ref |
|----------|-------|-------|-----------|------|------|----------|---------|
|          | DD.MM |       | FB/IG/LI/ |      |      | draft /  |         |
|          |       |       | NL/GF     |      |      | qa /     |         |
|          |       |       |           |      |      | approved/|         |
|          |       |       |           |      |      | published|         |
```

---

### Asset ID konvencija

Format: `[TEČAJ]_[WW]_[NN]_[PLATFORMA]`

```
MT1_23_01_IG   →  MT1, tjedan 23, prvi asset, Instagram
MT5_24_03_FB   →  MT5 Advanced, tjedan 24, treći asset, Facebook
ATP_22_01_NL   →  ATP, tjedan 22, newsletter
MT1_23_04_GF   →  MT1, tjedan 23, grafika (GF)
```

---

### Mode (Content Mode)

| Kod | Tip sadržaja |
|-----|-------------|
| A | Edukativni — čisto klinički, bez enrollment |
| B | Pre-enrollment — klinički s soft course mention |
| C | Event / enrollment — direktni enrollment CTA |
| D | Alumni / community — za bivše polaznike |
| E | Informacija — logistika, FAQ, datumi |

---

### CTA Mode

| Kod | Tip CTA-a |
|-----|----------|
| A | Informativni ("Više info: [link]") |
| B | Direktna prijava ("Prijava: [link]") |
| C | Event ("Rezerviraj mjesto: [link]") |
| — | Bez CTA — negativni prostor post |

---

### Status lifecycle

```
draft → qa → approved → published → deprecated → archived
```

---

## 8. WEEKLY REVIEW TEMPLATE

Ispuniti svaki petak. Dodati u `WEEK_[YY]_[WW].md`.

```markdown
## WEEKLY REVIEW — Tjedan [BROJ]

### Što je objavljeno

| Asset ID | Datum | Platforma | Mode | Status    |
|----------|-------|-----------|------|-----------|
|          |       |           |      | published |

### Content mix provjera

Educational objave (Mode A/D):    [X] od [ukupno] = [%]   →  cilj ≥ 60%
Enrollment objave (Mode B/C/E):   [X] od [ukupno] = [%]   →  max 40%
Bez CTA (negativni prostor):      [X] od [ukupno]          →  min 1x

### Enrollment signal (kvalitativno — nije analytics)

DM upiti ovog tjedna:    [broj / nije praćeno]
Tally forma prijave:     [broj / nije praćeno]
WhatsApp upiti:          [broj / nije praćeno]
Trend:                   [raste / stabilno / pada / nije relevantan]

### Drift provjera

[ ] Sve u okviru sustava — nema drifta
[ ] Primijećen drift → opis: ___________
    OBS kreiran: [ OBS-XXX / ne ]

[ ] Volumen je bio u sustainability zoni (3–4 content pieces)
[ ] Volumen je bio previsok: ___ content pieces

[ ] Anti-spam pravila su poštovana
[ ] Kršenja: ___________

### Watchlist check

[ ] Nema novih recurring patterna
[ ] Pattern se ponovio → provjeri RUNTIME_OBSERVATIONS.md → Watchlist

### Sljedeći tjedan

Faza:                  [ authority / bridge / enrollment / final window ]
Fokus:                 ___________
Enrollment intensity:  [ Low / Medium / High ]
Procijenjeni volumen:  ___ content pieces
Newsletter:            [ da / ne ]
```

---

## 9. OBSERVATION INTEGRATION

### Kada asset dobiva OBS referencu

| Situacija | Akcija |
|-----------|--------|
| Post je zahtijevao neuobičajeno puno repisivanja | Logiraj OBS — zabilježi koji pattern je zahtijevao korekciju |
| Output je imao absolutni claim koji je trebalo hedgirati | Logiraj OBS — original i zamjena |
| Nisi bio siguran koji glas (1/2/3) primijeniti | Logiraj OBS — context i konačna odluka |
| CTA je zvučao preagresivno u prvom draftu | Logiraj OBS — original i finalna verzija |
| Enrollment tekst je počeo "jesti" educational ton | Logiraj OBS — u kojoj fazi i kako |
| Anti-spam pravilo nije bilo intuitivno | Logiraj OBS — predloži pojašnjenje |

---

### OBS u Asset Pipeline Table

Svaki asset koji generira observaciju:

1. Upiši `OBS-XXX` u "OBS Ref" stupac Pipeline tablice
2. Otvori `RUNTIME_OBSERVATIONS.md` → popuni entry koristeći template
3. **Ne mijenjaj core dokumente** — samo logiraj

---

### Recurring drift u Weekly Reviewu

Ako isti tip drifta se pojavi 2 tjedna zaredom:

1. Provjeri Known Watchlist u `RUNTIME_OBSERVATIONS.md`
2. Nije na Watchlisti → dodaj
3. Jest na Watchlisti → update occurrence counter
4. Occurrence ≥ 3 → premjesti u Refinement Queue

---

### Threshold podsjetnik

```
1 observacija   →  logiraj, ne radi ništa
2 observacije   →  dodaj u Known Watchlist
3–4 observacije →  Refinement Queue kandidat
5+ observacija  →  predloži patch Anteu s dokazima
```

Puni protokol u `RUNTIME_OBSERVATIONS.md` i `CLAUDE.md` (Cowork OS).

---

## APPENDIX A: QUICK-START ZA NOVI TJEDAN

```
1.  Otvori CONTENT_OPERATIONS.md
2.  Active Course Map (sek. 2) — koja je faza?
3.  Postavi enrollment intensity: Low / Medium / High
4.  Production Load Limits (sek. 5) — koliko asseta je realno?
5.  Kopiraj Master Calendar Template → WEEK_[YY]_[WW].md
6.  Popuni plan koristeći Content Cadence tablice (sek. 3)
7.  Provjeri Anti-Spam Rules (sek. 6) za prošli tjedan
8.  Radi assete → logiraj OBS ako ima drifta
9.  Petak: Weekly Review (sek. 8)
```

---

## APPENDIX B: ŠTO OVAJ SUSTAV NIJE

Ovaj dokument nije:
- Content calendar koji agenti autonomno popunjavaju
- Analytics dashboard za praćenje engagementa
- Automation za scheduling ili publishing
- KPI sustav za "performans" sadržaja
- Growth hacking operativa

Ovaj dokument jest:
- Governance layer koji sprječava tone drift kroz volumen
- Operational rhythm koji drži enrollment u institucionalnom okviru
- Observability connector koji veže production za refinement sustav
- Tjedni radni dokument — 15 minuta tjedno

---

_SUPRA_BRAND_SYSTEM_v2 / CONTENT_OPERATIONS.md_
_Verzija: 1.0 — 28. svibnja 2026._
_Canonical location: Cowork OS + web portal mirror_
