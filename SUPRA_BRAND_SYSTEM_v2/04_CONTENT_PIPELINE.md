# SUPRA BRAND SYSTEM v2 — CONTENT PIPELINE
_Verzija: 2.0_
_Datum: 28. svibnja 2026._
_Status: OPERATIVNI DOKUMENT — execution engine za sve content outpute_

> Ovaj dokument je izvršni sloj brand sustava.
> Definira kako ideja postaje published asset — i tko je za što odgovoran.
>
> **Prethodnici:** `01_SHARED_CORE.md` (pravila), `02_WEB_SYSTEM.md` (web), `03_SOCIAL_GRAPHIC_SYSTEM.md` (social).
> Ovaj dokument pretpostavlja da su sva pravila iz tih dokumenata poznata.

---

## SADRŽAJ

1. Content lifecycle — 7 faza
2. Content tipovi i prioriteti
3. Agent responsibilities
4. Human review checkpoints
5. Asset naming system
6. Versioning
7. Design handoff — copy → Canva → export
8. Failure recovery — dijagnostika i popravak
9. Content calendar logic
10. Archive i lifecycle end

---

## 1. CONTENT LIFECYCLE — 7 FAZA

Svaki asset prolazi kroz ovih 7 faza. Preskakanje faze nije dozvoljeno za approved outpute.

```
FAZA 1 — IDEJA / BRIEF
         ↓
FAZA 2 — KLINIČKA VALIDACIJA
         ↓
FAZA 3 — DRAFT (tekst)
         ↓
FAZA 4 — QA (ton, claims, platforma)
         ↓
FAZA 5 — DESIGN (Canva / web implementacija)
         ↓
FAZA 6 — PUBLISH PREP (human review + final check)
         ↓
FAZA 7 — OBJAVA + ARCHIVE
```

---

### FAZA 1 — IDEJA / BRIEF

**Što se događa:** Identificira se tema, platforma, content mode i audience sloj.

**Izvori ideja:**
```
Klinički:
  · Slučaj s tečaja ili iz prakse koji ilustrira klinički princip
  · Anatomska tema koja se često pogrešno tretira
  · Tehnika ili procedura vrijedna demonstracije

Sezonski / operativni:
  · Tečaj koji ulazi u upis (→ MODE B)
  · Event koji se najavljuje (→ MODE C)
  · Diploma ili alumni post (→ MODE D)
  · Organizacijska promjena (→ MODE E)

Editorial:
  · Observacija iz prakse koja je dovoljno specifična da edukira
  · Klinički slučaj koji se može anonimizirati
```

**Brief mora sadržavati:**
```
☐ Tema: [anatomski/proceduralni fokus]
☐ Content mode: A / B / C / D / E
☐ Platforma: FB / IG / LI / Newsletter / Web
☐ Audience sloj: 1 / 2 / 3 (default: 2)
☐ CTA mode: A / B / C / bez CTA-a
☐ Grafika: DA / NE, ako DA → tema i fotografija
☐ Vezano uz tečaj: [naziv ako je relevantno]
☐ Deadline objave: [datum]
```

**Tko briefa:**
Ante direktno, ili agent koji procesuira ulazni materijal (transkript, bilješka, audio).

---

### FAZA 2 — KLINIČKA VALIDACIJA

**Što se događa:** Provjera je li tema klinički točna i je li u observational registru.

**Ovo je human checkpoint za sve medicinske ili anatomske tvrdnje.**

```
Provjeri:
  ☐ Je li svaka anatomska tvrdnja točna?
  ☐ Je li svaki claim u observational registru (ne absolutnom)?
  ☐ Postoji li rizik od pogrešnog citiranja mehanizma?
  ☐ Je li tema relevantna za Sloj 2 (iskusni praktičar)?
```

**AI može:**
- Identificirati potencijalno problematične claims i označiti ih za Anteovu provjeru
- Predložiti observational ekvivalente za absolutne tvrdnje

**AI ne smije:**
- Samostalno potvrđivati kliničke tvrdnje bez izvora
- Pisati approved draft dok klinička validacija nije potvrđena

**Output faze 2:**
Brief s kliničkim tvrdnjama označenim kao: ✅ validno / ⚠️ provjeriti / ❌ izbaciti.

---

### FAZA 3 — DRAFT (tekst)

**Što se događa:** Agent piše prvi draft prema briefu i Shared Core pravilima.

**Koji agent:**
- Pisani sadržaj (caption, newsletter, web copy): `supra-copy-editing`
- Web implementacija: Claude Code + `02_WEB_SYSTEM.md`

**Draft standard:**
```
Caption (FB/IG/LI):
  · Struktura: slučaj → mehanizam → vrijednost → poziv
  · Ispravni glas za mode
  · Nema absolutnih claima
  · Nema forbidden cadence-a
  · CTA mode usklađen s contentom

Web copy:
  · Glas po sekciji (vidi 02_WEB_SYSTEM.md sekcija 15)
  · Subheadline prepoznaje gdje je čitatelj — ne kamo ide
  · Kotizacija: samo faktualno
```

**Output faze 3:**
Draft tekst označen s: `[DRAFT v1]` i datumom.

---

### FAZA 4 — QA (ton, claims, platforma)

**Što se događa:** Sistematska provjera prema Brand Tone Validatoru.

**Koji agent:** `supra-copy-editing` ili `supra-publish-prep`

**QA checklistа (izvučena iz 01_SHARED_CORE.md sekcija 15):**

```
Tone:
  ☐ Glas 1 / 2 / 3 — je li ispravni za mode?
  ☐ Zvuči li kao iskusni terapeut koji priča kolegi — ne kao copywriter?

Ritam:
  ☐ Nema fragment tripleta (3+ kratka fragmenta zaredom)
  ☐ Rečenice su prirodne duljine

Claims:
  ☐ Nema absolutnih tvrdnji (uklanja, garantira, odmah, od 1. tretmana)
  ☐ Sve tvrdnje su u observational registru
  ☐ Nema forbidden language (transformacija externally, premium, revolucionarno...)

CTA:
  ☐ Jedan CTA
  ☐ Suptilan, bez pritiska, bez lažne hitnosti
  ☐ CTA mode odgovara content modu

Platforma:
  ☐ Caption prilagođen specifičnoj platformi
  ☐ Duljina odgovara platformi
  ☐ Emoji: nula na webu / nula u tijelu teksta na socialu / max 2-3 u CTA zoni

Negativni prostor:
  ☐ Nema suvišnih zaključaka
  ☐ Nema prekomjernog objašnjavanja jasnih stvari
  ☐ Ako post nema CTA — to je namjerna odluka, ne propust
```

**Output faze 4:**
Draft s QA oznakom: `[QA PASSED]` ili `[QA FAILED — povratiti u Fazu 3]` + lista problema.

---

### FAZA 5 — DESIGN (Canva / web implementacija)

**Što se događa:** QA-prošleni tekst ulazi u vizualni format.

#### Za Canva grafike — agent: `supra-grafike`

**Brief za Canva (generira se iz QA-prošlenog drafta):**
```
HEADLINE:      [Layer 1 — max 3 riječi, ALL CAPS, period]
SUBHEADLINE:   [Layer 2 — jedna klinička rečenica, max 12 riječi]
BODY COPY:     [Layer 3 — 2-3 rečenice, bez absolutnih claima]
FOTOGRAFIJA:   [opis / ime fajla / Canva stock keyword]
LOGO:          [auto-odabir prema kontekstu — vidi 03_SOCIAL_GRAPHIC_SYSTEM.md]
FORMAT:        [1080x1080 / 1080x1350 / 1080x1920 / 1200x628]
BOJA:          [tamna pozadina #13192a — default]
KONTAKT:       [što ide na dno: @suprastudium / link / lokacija]
```

**Design check za Canva (agent provjerava):**
```
☐ Layer 1: headline max 3 riječi, ALL CAPS, period, bez glagola
☐ Layer 2: jedna rečenica, max 12 riječi, hedged language
☐ Layer 3: bez absolutnih claima, prirodne rečenice
☐ Boje: tamna pozadina (#13192a) + gold (#a58d4e) + bijela
☐ Font: Montserrat (ExtraBold za headline, SemiBold za subheadline)
☐ Logo: ispravna varijanta za format
☐ Nema emojija na grafici
☐ Fotografija: dokumentarna, klinički relevantnа
☐ Čitljivost na 50% veličine (thumbnail test)
```

#### Za web — implementacija

**Vidi `02_WEB_SYSTEM.md` za sve implementacijske detalje.**
Web QA checklist se primjenjuje prije merge-a u main.

---

### FAZA 6 — PUBLISH PREP (human review + final check)

**Ovo je jedina faza u kojoj Ante mora odobriti.**

**Agent `supra-publish-prep` priprema za Anteov review:**
```
1. Finalni tekst (caption + eventualni grafički tekst)
2. Oznaka platforme i datum objave
3. Grafika exportirana u ispravnom formatu
4. CTA link provjeren (funkcionira li Tally link?)
5. Hashtagi priređeni (ako IG)
6. Lista svega što je prošlo QA
7. Lista svega što zahtijeva Anteovu procjenu (medical claims, datumi, cijene)
```

**Ante pregledava:**
- Kliničku točnost svake anatomske tvrdnje
- Sve cjenovne i datumske informacije
- Sve što se tiče specifičnih pacijentskih slučajeva (anonimizacija)
- Ukupan ton — je li "Supra" ili je "malo previše nešto"

**Output faze 6:**
Odobreni asset s oznakom: `[APPROVED — Ante — datum]`

---

### FAZA 7 — OBJAVA + ARCHIVE

**Što se događa:** Objava na platformi + arhiviranje.

**Objava:**
```
FB/IG: ručno (Ante) ili zakazano u Meta Business Suite
LinkedIn: ručno
Newsletter: Brevo, zakazano
Web: deploy.sh ili deploy-quick.sh (vidi CLAUDE.md)
```

**Archive (odmah po objavi):**
```
Ime fajla: [format opisano u sekciji 5]
Folder: ~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/BRAND_ASSETS/published/
Sadržaj archiva:
  · Tekst (caption + eventualni headline)
  · Grafika (PNG/JPG export)
  · Datum objave
  · Platforma
  · Performance napomena (opcionalno — dodati ako post ima izuzetno high/low doseg)
```

---

## 2. CONTENT TIPOVI I PRIORITETI

### Prioritetni redoslijed u tjednom planiranju

```
P1 — Enrollment (MODE B)
     Tečaj koji se otvara u sljedećih 6 tjedana.
     Ima deadline. Direktno utječe na upis.

P2 — Edukativni (MODE A)
     Nema deadline. Ali gradi povjerenje i doseg dugoročno.
     Minimum 2-3 posta tjedno na IG/FB kad nema aktivnog enrollmenta.

P3 — Event (MODE C)
     HMP ili slično. Sezonski. Fiksiran datum.

P4 — Alumni (MODE D)
     Post-tečajni. Gradi zajednicu. Nema deadline.

P5 — Informacijski (MODE E)
     Minimalne izmjene, logistika. Što kraće.
```

### Content velocity — realistični target

```
Steady state (bez aktivnog enrollmenta):
  FB: 2x tjedno
  IG: 3x tjedno (uključuje grafike i video ako ima)
  LI: 1x tjedno
  Newsletter: 1x na 2-4 tjedna

Enrollment period (6 tjedana do tečaja):
  FB: 3x tjedno (više MODE B)
  IG: 4-5x tjedno
  LI: 1-2x tjedno
  Newsletter: 2x u zadnja 2 tjedna
```

---

## 3. AGENT RESPONSIBILITIES

### Tko radi što — jasna podjela

#### `supra-copy-editing`

**Odgovornost:** Pisanje i editing copy-a (captions, newsletter, web copy).

**Može autonomno:**
- Pisati MODE A edukativne postove prema QA standardu
- Editirati tekst prema Shared Core pravilima
- Identificirati forbidden language i predložiti zamjene
- Generirati varijante (FB / IG / LI) iz jednog briefа

**Mora čekati human review:**
- Svaki specifični klinički claim koji nije iz poznatog Ante-ovog transkripta
- Svaki post koji se tiče cijena ili datuma
- Svaki MODE B ili MODE C post (enrollment i event)

**Ne smije:**
- Samostalno objaviti ništa
- Pisati testimonijale ili alumni quote-ove bez Anteovog inputa
- Generirati "novi klinički primjer" koji nije iz poznatog izvora

---

#### `supra-grafike`

**Odgovornost:** Canva grafike prema Graphic Layer System standardu.

**Može autonomno:**
- Generirati Canva brief iz QA-prošlenog copy-a
- Predlagati headline + subheadline formulate za Layer 1 i Layer 2
- Provjeravati Layer 1 prema "naziv poglavlja u kliničkom priručniku" testu
- Sugerirati fotografiju ili Canva stock opis

**Mora čekati human review:**
- Svaka grafika s cijenom ili datumom
- Svaka grafika s fotografijom stvarnih polaznika (rights management)
- Svaka grafika koja će ići kao plaćena reklama

**Ne smije:**
- Independently modificirati logo ili brand boje
- Generirati headline koji je imperativ ili pitanje
- Koristiti emojije na grafici

---

#### `supra-ad-creative`

**Odgovornost:** Ad creative za plaćene kampanje (FB/IG ads).

**Može autonomno:**
- Adaptirati existing organic post u ad format (uz QA provjeru)
- Predlagati A/B varijante headline-a za testiranje

**Mora čekati human review:**
- Svaki ad koji ide live (budget = human decision)
- Targeting parametri
- Budget i scheduling

**Posebna pravila za ads:**
```
Ad copy mora biti strogo u granicama Shared Core-a —
ads su plaćena komunikacija i imaju veći doseg od organskog posta.
Nema urgency / scarcity u ad copy-ju.
Nema "ostalo X mjesta" u ad formatima.
```

---

#### `supra-email-sequence`

**Odgovornost:** Newsletter i email sekvence (Brevo).

**Može autonomno:**
- Pisati edukativne newsletter blokove (MODE A)
- Predlagati subject line opcije (konkretna informacija, ne hook)

**Mora čekati human review:**
- Enrollment email sekvence (MODE B)
- Svaki email s datumom, cijenom ili linkom za prijavu
- Welcome email za nove pretplatnike

---

#### `supra-publish-prep`

**Odgovornost:** Final QA + priprema za Anteov review + archive.

**Može autonomno:**
- Pokrenuti Brand Tone Validator na finalnom draftu
- Provjeriti linkove (Tally, WhatsApp)
- Formatirati publish paket za Anteov review
- Archivirati odobrene asete

**Ne smije:**
- Označiti asset kao approved bez Anteovog eksplicitnog odobrenja
- Samostalno zakazati ili objaviti post

---

## 4. HUMAN REVIEW CHECKPOINTS

### Što AI nikad ne publisha autonomno — apsolutno

```
❌ Svaki post s cijenom tečaja
❌ Svaki post s datumom tečaja ili eventa
❌ Svaka enrollment komunikacija (MODE B)
❌ Svaka klinička tvrdnja koja nije iz poznatog Ante-ovog izvora (transkript, bilješka)
❌ Svaki post koji prikazuje ili citira pacijenta ili polaznika
❌ Svaki testimonijal ili alumni quote
❌ Svaki post o HMP (natjecanjski event — specifični rules)
❌ Svaka plaćena reklama (ad)
❌ Svaka web promjena na produkciji
```

### Što AI može predložiti, ali Ante mora potvrditi

```
⚠️ Klinički primjer koji nije direktno iz transkripta
⚠️ "Mjesta su ograničena" fraza — je li to sada faktualno točno?
⚠️ Datum "Na upit" — je li to trenutno stanje?
⚠️ WhatsApp link — je li broj ispravan?
⚠️ Tally link — funkcionira li forma?
```

### Ante-only decisions

```
🔒 Strateška pozicija: koji tečaj se promocionira ove sezone?
🔒 Pricing: cijena, popusti, paket ponude
🔒 Novi klinički slučaj: može li ovo ići u javnost?
🔒 Brand shift: nova tema, novi format, novi kanal
🔒 Crisis response: netko je negativno komentirao, što odgovaramo?
```

---

## 5. ASSET NAMING SYSTEM

Svaki asset dobiva sistematično ime pri kreiranju. Bez iznimke.

### Format imenovanja

```
[TEČAJ/TEMA]_[CONTENT_MODE]_[PLATFORMA]_[FORMAT]_v[VERZIJA]_[STATUS].[EKSTENZIJA]

Skraćenice:
  Tečaj:        ATP (Akupresura & Trigger Point)
                MT1/MT2/MT3/MT4 (Manualna terapija stupnjevi)
                CF (Cross-friction)
                CUP (Cupping)
                LOMI (Lomi Lomi)
                HMP (Hrvatsko masažno prvenstvo)
                EDU (generički edukativni, nije vezan uz tečaj)

  Content mode: edukacija / enrollment / event / alumni / info

  Platforma:    fb / ig / li / news (newsletter) / web

  Format:       sq (1080x1080) / port (1080x1350) / story (1080x1920) /
                land (1200x628) / txt (samo tekst, nema grafike)

  Status:       draft / qa / approved / published / deprecated / archived
```

### Primjeri

```
Tekstovi (caption):
  ATP_edukacija_fb_txt_v1_draft.md
  ATP_edukacija_fb_txt_v2_approved.md
  MT4_enrollment_ig_txt_v1_draft.md
  MT4_enrollment_ig_txt_v2_approved.md
  HMP_event_fb_txt_v1_approved.md
  EDU_QL-krizoboja_li_txt_v1_approved.md

Grafike:
  ATP_edukacija_sq_v1_draft.png
  ATP_edukacija_sq_v2_approved.png
  MT4_enrollment_port_v1_approved.png
  HMP_event_land_v1_approved.png

Newsletter:
  EDU_newsletter_subokc-regija_v1_draft.md
  MT4_newsletter_enrollment-lipanj_v2_approved.md

Web:
  ATP_web_hero-copy_v1_approved.md
  MT4_web_kotizacija_v2_approved.md
```

### Pravila imenovanja

```
1. Uvijek lowercase s crticama (no spaces, no CamelCase u imenu fajla)
2. Verzija uvijek v[broj] — počinje s v1
3. Status uvijek na kraju, prije ekstenzije
4. Datum nije dio naziva fajla — datum je u metadati fajla (created/modified)
5. Ako postoji više varijanti iste platforme (A/B test): dodati _a / _b prije statusa
```

---

## 6. VERSIONING

### Verzije drafta

```
v1        → Pierwszy draft, QA nije proveden
v2        → Revizija nakon QA ili Anteovog feedbacka
v3+       → Daljnje iteracije
```

### Statusi

```
_draft       → U radu, nije prošlo QA
_qa          → QA proveden, čeka human review
_approved    → Ante odobrio, spreman za publish
_published   → Objavljeno (datum objave u archive metadata)
_deprecated  → Više se ne koristi (sadržaj zastario, termin prošao)
_archived    → Publicirano + arhivirano, referentno
```

### Što se čuva, što se briše

```
Čuvati uvijek:
  · _approved verzija (predpublish stanje)
  · _published / _archived verzija (referenca što je izašlo)
  · Sve Anteove revizije (za razumijevanje smjera)

Može se brisati:
  · _draft verzije starije od 30 dana koje nikad nisu prošle QA
  · Duplikati iste verzije (ako postoje v1a i v1b i samo jedan je relevantan)
  · _deprecated asete starije od 1 sezone (osim ako su referentni)
```

---

## 7. DESIGN HANDOFF — COPY → CANVA → EXPORT

### Korak 1 — Canva Brief

Iz QA-prošlenog copy drafta generira se Canva brief:

```markdown
## CANVA BRIEF
Datum: [datum]
Asset ID: [naziv fajla bez statusa i ekstenzije]
Format: [1080x1080 / 1080x1350 / ...]

**LAYER 1 — HEADLINE:**
[max 3 riječi, ALL CAPS]

**LAYER 2 — SUBHEADLINE:**
[jedna rečenica, max 12 riječi]

**LAYER 3 — BODY COPY:**
[2-3 rečenice, bez absolutnih claima]

**FOTOGRAFIJA:**
[opis scene / ime fajla / Canva stock keyword]
[ako vlastita: putanja do fajla]

**LOGO:**
[naziv fajla loga — auto-odabir ili specifičan]

**KONTAKT NA DNU:**
[@suprastudium / tally.so/r/wA5kvD / Zagreb / ...]

**NAPOMENE:**
[sve što nije pokriveno gore]
```

### Korak 2 — Canva Execution

Agent `supra-grafike` (ili Ante) realizira u Canvi prema:
- Graphic Layer System (`03_SOCIAL_GRAPHIC_SYSTEM.md` sekcija 4)
- Visual identity (`03_SOCIAL_GRAPHIC_SYSTEM.md` sekcija 2)

### Korak 3 — Export

```
Format:
  IG/FB square:   PNG, 1080x1080px, RGB, sRGB
  IG/FB portrait: PNG, 1080x1350px, RGB, sRGB
  Story:          PNG, 1080x1920px, RGB, sRGB
  FB/LI cover:    PNG, 1200x628px, RGB, sRGB
  FB/LI post:     PNG, 1200x900px, RGB, sRGB (alternativa)

Kompresija:
  PNG bez kompresije za source fajl
  JPG (85%) za web publish ako je veličina problem

Ime exportiranog fajla:
  Prati naming system iz sekcije 5.
```

### Korak 4 — Crop Validation

Prije approve-a provjeri:
```
☐ 1:1 crop: fokus (lice / ruke / ključna anatomija) nije odrezan
☐ 4:5 crop: tekst nije odrezan, logo vidljiv
☐ 9:16 crop: tekst ne pada u "safe zone" za Instagram stories UI elemente
☐ Thumbnail veličina (200x200px): je li headline čitljiv?
☐ Dark mode: izgleda li grafika isto na dark OS pozadini?
```

### Korak 5 — Mobile Validation

```
☐ Caption first line: radi li bez "Vidi više"?
☐ Grafika na mobile: je li tekst čitljiv na 375px ekranu?
☐ Link u bio: je li ispravno formatiran?
☐ CTA link: funkcionira li na mobitelu (Tally, WhatsApp)?
```

---

## 8. FAILURE RECOVERY

### Dijagnostika tone drift-a

**Simptom: Caption zvuči kao AI copywriter**

```
Prepoznavanje:
  · Fragment triplet ritam (Provjeri. Primijeni. Gotovo.)
  · Previše zaključaka u kratkom tekstu
  · Motivacijska rečenica na kraju bez kliničkog sadržaja
  · "Ovo je razlog zašto..." u zaključku
  · Emocionalno "vi" ("znaš li taj osjećaj kad...")

Popravak:
  → Vratiti u FAZU 3 (draft)
  → Primijeniti Brand Tone Validator ručno, provjera po provjera
  → Specifično: zamijeni sve zaključne rečenice s kliničkim uvidом ili šutnjom
  → Specifično: spoji fragment triplet u jednu prirodnu rečenicu
```

**Simptom: Canva grafika izgubila konzistenciju**

```
Prepoznavanje:
  · Headline je dug (više od 4-5 riječi)
  · Headline je pitanje ili imperativ
  · Koriste se boje izvan palete
  · Font nije Montserrat
  · Bijela pozadina umjesto tamne
  · Emojiji na grafici

Popravak:
  → Povratak na Graphic Layer System (03_SOCIAL_GRAPHIC_SYSTEM.md sekcija 4)
  → Headline rewrite: "naziv poglavlja u kliničkom priručniku" test
  → Vizualni identitet reset: tamna pozadina, gold, bijela, Montserrat
  → Ako je izašlo published: označiti kao deprecated, kreirati ispravnu verziju
```

**Simptom: CTA postaje preagresivan**

```
Prepoznavanje:
  · "Ne propusti!" / "Prijavi se odmah!" / "Dok ima mjesta!"
  · Dva CTA-a u jednom postu
  · Cijena istaknuta u CTA gumbu
  · Urgency framing koji nije faktualan

Popravak:
  → Jedan CTA, miran
  → Zamijeni urgency s faktualnim: "Mjesta su ograničena — radimo u malim grupama."
  → Ako je cijena u CTA tekstu: maknuti, cijena ide samo u kotizacija sekciji
  → Provjeri: je li "zadnja mjesta" faktualno točno? Ako nije — brisati odmah
```

**Simptom: Caption nije platformski specifičan**

```
Prepoznavanje:
  · Isti tekst na FB i IG (copy-paste)
  · IG caption predug (više od 10 rečenica)
  · FB caption prekratak (manje od 5 rečenica za edukativni post)
  · LinkedIn s emojijima

Popravak:
  → Generirati platformske varijante iz originalnog drafta
  → IG: komprimirati, prvu rečenicu ojačati
  → FB: razviti mehanizam, dodati paragraphing
  → LI: reducirati na jedan ključni uvid, ukloniti emojije
```

**Simptom: Post zvuči kao motivacijska platforma**

```
Prepoznavanje:
  · "Postani terapeut koji..."
  · "Svaki terapeut zaslužuje znati..."
  · "Tvoja praksa može biti drugačija."
  · Inspirativni zaključak koji nema klinički sadržaj

Popravak:
  → Ukloni zaključnu rečenicu (negativni prostor je bolji od motivacije)
  → Zamijeni "postani" s "razumijevanje koje traje" ili kliničkim ekvivalentom
  → Provjeri: je li ikoji dio teksta "peer to peer" — ili je postalo "brand to customer"?
```

### Failure Recovery Protocol — redoslijed

```
1. IDENTIFICIRAJ koji je simptom (iz gornje liste)
2. POVRATI u odgovarajuću fazu (obično Faza 3 ili Faza 4)
3. PRIMIJENI specifični popravak
4. PROĐI kroz cijeli Brand Tone Validator (01_SHARED_CORE.md sekcija 15) iznova
5. OZNAČI reviziju: v[sljedeći broj]_draft
6. Ponovo na Fazu 6 (human review) ako je tema klinički osjetljiva
```

---

## 9. CONTENT CALENDAR LOGIC

### Tjedna distribucija (steady state, bez enrollmenta)

```
Ponedjeljak:   IG grafika (MODE A — edukativni)
               + FB post (isti sadržaj, prilagođen format)

Srijeda:       IG reel ili video post (ako ima materijala)
               ili IG grafika — drugi klinički fokus

Petak:         FB long-form edukativni post (MODE A)
               ili IG carousel ako je kompleksnija tema

LinkedIn:      1x tjedno — ponedjeljak ili srijeda
               Kraći, profesionalniji, jedan uvid
```

### Tjedna distribucija (enrollment period — 6 tjedana do tečaja)

```
Tjedan 6-5 do tečaja:   Klinički sadržaj s mostom prema tečaju (MODE A→B)
Tjedan 4-3 do tečaja:   Direktni enrollment postovi (MODE B)
Tjedan 2-1 do tečaja:   Enrollment + "mjesta su ograničena" (faktualno)
Tjedan tečaja:           Alumni content (MODE D), diploma fotografije
```

### Što se ne planira calendar-om

```
· Klinički slučaj koji se dogodi spontano — može ići odmah (MODE A)
· Organizacijska obavijest — kad je relevantno (MODE E)
· Alumni comment koji je vrijedno podijeliti — spontano
```

### Sezonski ritam

```
Siječanj–veljača:  Novi ciklus upisa, enrollment faza za proljetne tečajeve
Ožujak–travanj:   Intenzivan edukativni period, alumni sadržaj
Svibanj–lipanj:   HMP sezona, event komunikacija
Srpanj–kolovoz:   Smanjenа frekvencija, summer break, edukativni sadržaj bez enrollmenta
Rujan–listopad:   Jesen enrollment, novi ciklus
Studeni–prosinac: Zaključak sezone, alumni, planiranje sljedeće godine
```

---

## 10. ARCHIVE I LIFECYCLE END

### Archive struktura (folder)

```
~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/BRAND_ASSETS/
│
├── published/
│   ├── 2026/
│   │   ├── Q1/ (siječanj–ožujak)
│   │   ├── Q2/ (travanj–lipanj)
│   │   ├── Q3/ (srpanj–rujan)
│   │   └── Q4/ (listopad–prosinac)
│
├── approved/       (odobreno, nije još objavljeno)
├── drafts/         (aktivni drafti u radu)
└── deprecated/     (zastarjelo, arhivirano ali referentno)
```

### Lifecycle end — kada asset postaje deprecated

```
Vremenski:
  · Enrollment post za prošlitečaj → deprecated dan tečaja
  · Event post → deprecated tjedan nakon eventa
  · "Na upit" post → deprecated kada termin postane potvrđen ili otkazan

Sadržajno:
  · Post koji sadrži zastarjelu informaciju (stara cijena, stara lokacija)
  · Post koji koristi deprecated fraze (ako je promijenjen brand standard)
  · Post koji je zamijenjen boljom verzijom

Što radimo s deprecated:
  → Premjestiti u /deprecated/ folder
  → Označiti datumom depreciranja
  → Ne brisati — mogu biti referentni za buduće verzije
```

### Referentni aseti — što nikad ne deprecated

```
· Kanonski edukativni post koji je imao visoki doseg
  (čuvati kao primjer "što radi" za tone reference)

· Grafika koja je bila referentni vizualni standard
  (čuvati kao Canva template referencu)

· Ante-ovi direktni inputi i revizije
  (čuvaju se kao brand direction referenca)
```

---

## BRZI REFERENCE — AGENT CHEAT SHEET

Za korištenje na početku svake sesije. Skraćeni podsjetnik za agente.

```
PRIJE SVAKOG OUTPUTA:
  1. Koji content mode? (A/B/C/D/E)
  2. Koji glas? (1/2/3)
  3. Koja platforma? (FB/IG/LI/Newsletter/Web)
  4. Koji CTA mode? (A/B/C/bez)

UVIJEK PROVJERI:
  · Claim certainty — nema absolutnih tvrdnji
  · Forbidden language — nema transformacija/premium/revolucionarno
  · Emoji — nula na webu, nula u tijelu teksta na socialu
  · Fragment triplet — spoji u prirodne rečenice
  · CTA — jedan, miran, bez pritiska

NIKAD BEZ HUMAN REVIEW:
  · Cijena ili datum u tekstu
  · Enrollment komunikacija
  · Medical/anatomical claim koji nije iz poznatog izvora
  · Anything published live

FAILURE CHECK (ako nešto ne zvuči dobro):
  → Je li to iskusni terapeut koji priča kolegi?
  → Je li to observation over persuasion?
  → Bi li ovo moglo biti u kliničkom priručniku?
  Ako odgovor na bilo koje nije DA — repiši.
```

---

_SUPRA BRAND SYSTEM v2 — 04_CONTENT_PIPELINE.md_
_Ante Antić / Učilište Supra Studium_
_28. svibnja 2026._
