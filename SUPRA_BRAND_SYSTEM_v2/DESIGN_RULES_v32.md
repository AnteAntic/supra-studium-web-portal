# DESIGN RULES — Učilište Supra Studium
_Verzija 3.2 — 28. svibnja 2026. — Harmoniziran s SUPRA_BRAND_SYSTEM_v2_

Pravila za sve grafike koje izlaze pod imenom Supra Studium ili Ante Antić.
Primjenjuje se na: Python generator (`supra_brand/generate()`), Canva grafike i sve vizualne outpute.

**Companion dokumenti:**
- Ton, glas, claim certainty, CTA filozofija, forbidden language: `SUPRA_BRAND_SYSTEM_v2/01_SHARED_CORE.md`
- Graphic layer system, caption arhitektura, social specifike: `SUPRA_BRAND_SYSTEM_v2/03_SOCIAL_GRAPHIC_SYSTEM.md`
- Text quality, medicinska terminologija: `TEXT_QUALITY_RULES.md`
- `BRAND_VOICE.md` je LEGACY — čitati isključivo sekcije 2, 4, 5, 6, 8, 10.

---

## ULOGA

Grafike predstavljaju Supra Studium kao kliničku edukativnu instituciju u manualnoj terapiji.
Grafike moraju izgledati: **profesionalno · klinički kredibilno · čisto · medicinski uvjerljivo**.

Ciljana publika: terapeuti, fizioterapeuti, studenti zdravstvenih usmjerenja u Hrvatskoj.
Ne dizajniraš za opću populaciju — dizajniraš za educirane praktičare koji **odmah prepoznaju loš sadržaj**.

Mentalni model: European clinical education institute — ne online course creator, ne wellness brend.

### HARD RULES — uvijek vrijede, bez iznimke

```
1. Svaki dizajn MORA pripadati jednom od 3 templatea:
   → Hook / Edukacija / Klinički
   Ako ne pripada → redesign koncepta.

2. NE izmišljaj layout. Koristi isključivo Template System.

3. Max 1 vizualni element po grafici.
   Max 3 tekstualna bloka.
   Jedan fokus — uvijek.

4. Boje: isključivo brand paleta.
   Fontovi: isključivo brand stack.
   Logo: uvijek na svom mjestu.

5. CTA:
   Enrollment / event grafike (Template 2): CTA je obavezan.
   Edukativne / authority grafike (Template 1 i 3): CTA je opcionalan.
   Grafika bez CTA-a je legitiman format — negativni prostor je dizajn.
   URL: uciliste-suprastudium.hr (ne tally.so na vizualima).
```

---

## BRAND VIZUALNI IDENTITET

### Boje — maksimalno 3 po grafici
| Naziv | HEX | RGB | Primjena |
|---|---|---|---|
| Dark Navy (BG) | `#13192a` | (19,25,42) | Pozadina svih grafika |
| Gold | `#a58d4e` | (165,141,78) | Headline, naglasci, CTA label |
| Cream Gold | `#d4b87a` | (212,184,122) | Subheadline, sekundarni naglasci |
| Gold Dim | `#645529` | (100,85,41) | Annotation linije, tihe labele |
| White | `#ffffff` | (255,255,255) | Tijelo teksta |
| White Dim | `#bec3d2` | (190,195,210) | Sekundarni tekst, CTA URL |
| Bone/Cortex | `#202840` | (32,40,64) | Anatomske ilustracije — kost |
| Nerve Active | `#58401a` | (88,64,26) | Živci pod kompresijom, istaknuti neuralni put |
| Nerve Passive | `#3d2c12` | (61,44,18) | Živci u pozadini, indirektni |
| CTA Background | `#101622` | (16,22,34) | CTA zona — suptilno tamnija od BG |

**NERVE boja je isključivo za neuralne strukture (živci, pleksusi).** Ne koristiti za mišiće ili kosti.

**Pozadina — gradient opcija (za bolji mobilni kontrast):**
```
Umjesto flat BG (#13192a), koristi vertikalni gradient:
  vrh  → (19, 25, 42)    ← standard dark navy
  dno  → (24, 32, 52)    ← 10–12% svjetliji
Gradient nikad ne smije biti vidljiv kao "sweep" — mora izgledati kao depth, ne kao efekt.
```

Ako koristiš više od 3 boje na jednoj grafici → **redesign**.

### Fontovi — ovaj stack, ne drugi
| Font | Primjena |
|---|---|
| **BigShoulders-Bold** | Headline (caps, bold, veliki — uvijek dominantan) |
| **CrimsonPro-Italic** | Italic subheadline / emocionalni hook |
| **WorkSans-Regular** | Body tekst, labele, CTA URL |
| **WorkSans-Bold** | Naglašeni body, CTA label |
| **GeistMono-Regular** | Numeriranje, reference oznake |

**TYPOGRAPHY WEIGHT RULE:** Headline mora dominirati. Ako headline i body imaju isti vizualni weight → povećaj headline ili smanji body. Hijerarhija mora biti odmah čitljiva.

### Logo
Uvijek koristi logo iz `BRAND_ASSETS/logo/`. Automatski odabir:
- IG post (1080×1080): `logo_kvadrat_gold_crna.png` — gornji lijevi kut, 88×88px
- Story (1080×1920): `logo_badge_gold_crna.png`
- Banner (horizontalni): `logo_horizontal_gold_crna.png`

### Signature marca (obavezno na svakoj grafici)
- Gornja gold linija (1px) — vrh grafike
- Donja gold linija (1px) — iznad CTA zone
- Lijevi gold border bar (3px, vertikalni) — identifikator branda čak bez loga
- Broj grafike u GeistMono — gornji desni kut

---

## TEMPLATE SYSTEM — OBAVEZNI PRVI KORAK

Svaka grafika pripada jednom od 3 tipa. **Odaberi tip PRIJE nego počneš dizajnirati.**

```
Ako ne znaš koji tip → pitaj se:
"Što ova grafika treba napraviti?"

  Zaustaviti scroll + prodati pažnju → HOOK
  Informirati o seminaru / prijavi   → EDUKACIJA
  Pokazati stručnost / educirati     → KLINIČKI
```

Ako grafika ne pripada ni jednom tipu jasno → **redesign koncepta**, ne dizajna.

---

### TEMPLATE 1 — HOOK (Pain → Attention)

Koristi za: oglase, scroll-stopper postove, edukacijski marketing.

```
STRUKTURA:
┌──────────────────────────────────────────────┐
│ [LOGO]                               [broj]  │
│ ══════════════════════════════════════════   │
│                                              │
│  HEADLINE                │  SIGNATURE        │
│  (CAPS · gold + white)   │  VIZUAL           │
│                          │  (anatomija ili   │
│  Subline italic          │   minimal)        │
│  ─────────────           │                  │
│  Body 2–3 retka          │                  │
│  Bold highlight          │                  │
│                          │                  │
│ ══════════════════════════════════════════   │
│ ● CTA AKCIJA  link  ·  wa.me  @handle        │
└──────────────────────────────────────────────┘
```

**Font veličine — točno ovo:**
| Element | Font | Veličina |
|---|---|---|
| Headline (red 1) | BigShoulders-Bold | 98–106px |
| Headline (red 2–3) | BigShoulders-Bold | 78–86px |
| Subline | CrimsonPro-Italic | 40–44px |
| Body | WorkSans-Regular | 21–23px |
| Bold highlight | WorkSans-Bold | 21–23px |
| Insight blok | WorkSans-Regular | 19–21px |
| CTA label | WorkSans-Bold | 14–15px |
| CTA URL | WorkSans-Regular | 13–14px |

**Primjer copy (referentni):**
```
PACIJENT
GODINU DANA
NA TERAPIJI.

Rame i dalje boli.

Nitko nije palpirao intertuberkularni kanal.
Nitko nije provjerio tetivu duge glave bicepsa.

→ Problem nije u terapiji. Problem je u dijagnostici.
```

---

### TEMPLATE 2 — EDUKACIJA / NAJAVA

Koristi za: najave seminara, datume, prijave, tečajeve.

```
STRUKTURA:
┌──────────────────────────────────────────────┐
│ [LOGO]                               [broj]  │
│ ══════════════════════════════════════════   │
│                                              │
│  HEADLINE                │  SIGNATURE        │
│  (naziv edukacije)       │  VIZUAL           │
│                          │  (minimal, grid,  │
│  Benefit subline         │   linija)         │
│  ─────────────           │                  │
│  📅 datum                │                  │
│  📍 lokacija             │                  │
│  ⏱ trajanje             │                  │
│                          │                  │
│  ✔ stvar 1               │                  │
│  ✔ stvar 2               │                  │
│  ✔ stvar 3               │                  │
│                                              │
│ ══════════════════════════════════════════   │
│ ● PRIJAVI SE  link  @handle                  │
└──────────────────────────────────────────────┘
```

**Font veličine:**
| Element | Font | Veličina |
|---|---|---|
| Headline (naziv) | BigShoulders-Bold | 72–88px |
| Benefit subline | CrimsonPro-Italic | 36–40px |
| Info blok (datum/lok.) | WorkSans-Bold | 22–24px |
| Bullets | WorkSans-Regular | 20–22px |
| CTA label | WorkSans-Bold | 15–16px |

**Primjer copy:**
```
AKUPRESURA &
TRIGGER POINT TERAPIJA

Klinički pristup palpaciji, dijagnostici i tretmanu.

27.–29. 03.  ·  Zagreb  ·  3 dana

✔ Glavobolja i cervikalni sindrom
✔ Bol u vratu i ramenima
✔ Lumbosakralni sindrom

Detalji i prijava → uciliste-suprastudium.hr
```

---

### TEMPLATE 3 — KLINIČKI / AUTHORITY

Koristi za: edukaciju publike, prikaz znanja, authority building, karijelske postove.

```
STRUKTURA:
┌──────────────────────────────────────────────┐
│ [LOGO]                               [broj]  │
│ ══════════════════════════════════════════   │
│                                              │
│  NASLOV (manji nego hook)                    │
│  → konkretna anatomska tema                  │
│                                              │
│        ANATOMSKI VIZUAL                      │
│        (glavni fokus, centar ili desno)      │
│        Labele: latinski + HR                 │
│                                              │
│  KRATKI TEKST (1–2 rečenice)                 │
│  → klinički insight                          │
│                                              │
│  TAKEAWAY LINE (bold)                        │
│  → zaključak koji praktičar odmah koristi    │
│                                              │
│ ══════════════════════════════════════════   │
│ ● SAZNAJ VIŠE  link  @handle                 │
└──────────────────────────────────────────────┘
```

**Font veličine:**
| Element | Font | Veličina |
|---|---|---|
| Naslov teme | BigShoulders-Bold | 64–78px |
| Klinički tekst | WorkSans-Regular | 21–23px |
| Takeaway bold | WorkSans-Bold | 22–24px |
| Anatomske labele | WorkSans-Bold | 14–15px |
| Labele sublabel | WorkSans-Regular | 12–13px |

**Primjer copy:**
```
INTERTUBERKULARNI
KANAL

Tetiva duge glave bicepsa prolazi kroz ovaj kanal.
Ako je iritirana → bol u ramenu.

→ Često se ignorira u terapiji. Uvijek palpirati.
```

---

### SIGNATURE SYSTEM — OBAVEZNO NA SVAKOM TEMPLATEU

Ovo je ono što čini brand prepoznatljivim bez loga:

```
✔ Gornja gold linija (1px) — vrh grafike
✔ Donja gold linija (1px) — iznad CTA zone
✔ Lijevi gold bar (3px, vertikalni) — zlatni accent od gore do dole
✔ Logo top left (86–88px)
✔ Broj grafike top right (GeistMono 11px, gold dim)
✔ Gold dot (●) ispred CTA teksta
✔ @suprastudium handle bottom right
✔ CTA zona ima suptilni tamniji background (#161e30)
```

---

## STANDARDNI LAYOUT

Svaka grafika ima 5 elemenata, ovim redoslijedom:

```
1. HEADLINE    → max 3 riječi po retku, max 3 retka ukupno · ALL CAPS · bold · odmah hvata pažnju
               Anatomski ili proceduralni fokus. Nikad glagol. Period na kraju.
               (Python generator podržava multi-line headline — svaki redak max 3 riječi)
2. SUBLINE     → jedna klinička rečenica · max 12 riječi · hedged language · italic serif
3. BODY        → 2–3 rečenice · konkretno · observational framing · bez absolutnih claimova
4. INSIGHT     → ključna stručna poruka (gold sidebar block) — opcionalno
5. CTA         → dolje, vizualno odvojen — obavezan za Template 2, opcionalan za Template 1 i 3
```

### Kompozicija za IG post (1080×1080)
```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]                                          [01]    │
│ ═══════════════════════════════════════════════════════ │  ← gold linija
│                                                         │
│  HEADLINE (gold)  │                                     │
│  SUBLINE          │   VIZUALNI ELEMENT                  │
│  ───────          │   (anatomija ili minimal)           │
│  Body tekst       │                                     │
│  Insight blok     │                                     │
│                                                         │
│ ═══════════════════════════════════════════════════════ │  ← gold linija
│ CTA LABEL    uciliste-suprastudium.hr  @suprastudium    │
└─────────────────────────────────────────────────────────┘
  ↑ gold bar (lijevo, 3px)
```

---

## PRAVILO 1 — JEDAN FOKUS (VISUAL FOCUS RULE)

Svaka grafika ima **jedan i samo jedan** vizualni fokus.

Pitanje koje moraš postaviti:
> "Što korisnik vidi PRVO u 1 sekundi?"

Ako odgovor nije **headline** → redesign.

Ako postoji više elemenata koji se bore za pažnju:
- smanji sve osim najvažnijeg
- ukloni sve što ne podupire glavnu poruku
- prazno mjesto nije greška — ono je design

**Zabranjeno:** dva jednako dominantna headlinea, vizual koji je jači od teksta, CTA koji vizualno kompetira s headlineom.

---

## PRAVILO 2 — NO GENERIC AI VISUAL

Vizualni element **ne smije izgledati kao generički AI output**.

### ✅ Anatomska ilustracija (prioritet 1)
- Mora izgledati anatomski uvjerljivo — kao iz medicinskog atlasa, ne kao dekoracija
- **Frontalni pogled** preferiran — odmah prepoznatljiv bez anatomskog predznanja
- Aksijalni presjek samo ako tema to zahtijeva
- Boje: korteks u `#202840`, tetive/ligamenti u **gold**, oznake diskretno u ANN plavom
- Max 2 labele po grafici — veće, čitljive na mobitelu
- Labele: latinski naziv + hrvatska oznaka u zagradi
- **Realism cilj:** educational illustration (trenutna razina: 8/10) → medical atlas authority (cilj: 10/10). Svaka nova grafika treba biti anatomski preciznija od prethodne.

#### Problem Zone Marker — OBAVEZAN na kliničkim graficama
Svaka grafika koja prikazuje kompresiju, upalu, bol ili ozljedu mora imati vizualni marker:

```python
# STANDARD: glow ring oko problematične zone
# Primjer — kompresijska točka piriformis:
for r in range(16, 8, -2):
    alpha = int(220 * (16-r)/8)
    comp_col = (min(255, NERVE[0]+alpha), max(0, NERVE[1]-alpha//3), 0)
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=comp_col)

# Gold orbit ring (ambient marker):
for r in [20, 22, 24]:
    for a in range(0, 360, 5):
        px = cx + r * cos(rad); py = cy + r * sin(rad) * 0.7
        draw.ellipse([px-1,py-1,px+1,py+1], fill=GOLD_FAINT)
```

Marker mora biti: **subtilan ali odmah čitljiv**. Ne smije izgledati kao "efekt" — treba izgledati kao informacija.

#### Mišićna tekstura — uvjetni standard
```
KORISTI (mišić je fokus grafike):
  → horizontalne sweep linije, tamnije od fill boje, razmak 6–8px

NE KORISTI (fokus je na živcu, kanalu, ili hvatištu):
  → flat fill je čišći i daje živcu/tetivi više prostora
```

### ✅ Ultra-minimal (prioritet 2, kad anatomija nije relevantna)
- Čiste linije, geometrija, highlight
- Svaki element ima funkciju — nema dekoracije
- Puno negativnog prostora

### Foto integracija via Canva — novi standard
**Supra Studium koristi realne fotografije kao vizualni element** u Canva templateima.

Prednosti:
- autentičnost (pravi terapeuti, pravi pacijenti, pravi tretmani)
- lakše aludira na konkretni tečaj (ATP, MT, Cupping...)
- Canva MCP omogućava automatsku selekciju po temi

Pillow/Illustracija: zadržava se za anatomske dijagrame i kliničke vizuale gdje foto nije prikladan.

### ❌ Zabranjeno
- Generički krugovi bez kliničkog konteksta
- Dekorativni elementi bez funkcije
- Stock-foto estetika kao primarni vizual
- Previše labela (više od 2 na IG postu)
- Boje koje nisu iz brand palete

---

## PRAVILO 3 — CTA MORA IMATI TEŽINU (CTA POWER RULE)

CTA nije afterthought — to je cilj cijele grafike.

### Pravila:
- Mora se odmah uočiti (vizualno odvojen od ostatka gold linijom)
- Mora imati **akcijsku riječ**: "Saznaj više", "Prijavi se", "Pogledaj program"
- URL mora biti vidljiv i točan (vidi tablicu dolje)
- Nikad ne nestaje u pozadini

### URL tablica (uvijek točno ovo):
| Situacija | CTA |
|---|---|
| Opće informacije, "saznaj više" | `uciliste-suprastudium.hr` |
| Direktna prijava / obrazac | `tally.so/...` samo na landing/formi |
| WhatsApp kontakt | `wa.me/385958558953` |
| Instagram handle | `@suprastudium` |

**Na grafikama:** uvijek `uciliste-suprastudium.hr`. Nikad tally.so direktno na vizualu.

Ako CTA nije odmah vidljiv → redesign.

---

## PRAVILO 4 — BREATHING ROOM

**Negativni prostor nije praznina. On je dio dizajna.**

Institucijski autoritativni dizajni agresivno koriste prazninu. Generički dizajni su nabijeni elementima.

Pravila:
- Ako grafika izgleda "puna" → ukloni jedan element
- Headline treba prostora da diše — ne smije biti stiješnjen
- Između svake sekcije mora biti vidljiv razmak
- Ilustracija treba prostora oko sebe — ne smije se doticati teksta

**Test:** Pokrij rukom svaki element i pitaj: "Postaje li grafika jasnijaili konfuznija?" Ako konfuznija → element je potreban. Ako ništa → ukloni ga.

---

## PRAVILO 5 — MOBILE FIRST

Sve grafike se gledaju na telefonu. Dizajniraj za mali ekran.

Provjeri mentalno pri 40% veličine:
- Headline čitljiv? ✓
- Labele na ilustraciji čitljive? ✓
- CTA URL vidljiv? ✓
- Logo prepoznatljiv? ✓

Ako bilo što nije čitljivo na telefonu → povećaj ili ukloni.

**Tekst na grafici: max 8–10 riječi po retku.**

---

## PRAVILO 6 — KIRURŠKA PRECIZNOST (THE SURGEON'S TABLE)

> "Što izostavljaš iz dizajna jednako je važno kao što uključuješ."

Kao kirurg koji ne ostavlja ništa suvišno u operacijskom polju — svaki element na grafici mora biti opravdan.

Prije finala postavi za svaki element pitanje:
> "Zašto je ovo ovdje?"

Ako ne znaš odgovor → ukloni.

Ovo je razlika između institucijskog autoriteta i generičkog dizajna. Restraint je signal znanja.

---

## PRAVILO 3 SEKUNDE

Mentalni test za svaku grafiku:

> Zamisliti da je prikazuješ nekome na 3 sekunde. Mogu li odgovoriti:
> 1. O čemu je ovo? (tema)
> 2. Što tu dobivaš? (vrijednost)
> 3. Za koga je ovo? (terapeuti, ne laici)

Ako ne → redesign. Bez kompromisa.

---

## TEKST NA GRAFICI — MEDICAL ACCURACY

Svaki tekst prolazi kroz `TEXT_QUALITY_RULES.md`:
- 100% točna medicinska terminologija (hrvatska norma)
- Vlastita imena označena ako nisu potvrđena
- Bez generičkih AI fraza
- CTA uvijek točan URL

---

## DESIGN QA — AUTO IMPROVEMENT LOOP

### 3 pitanja (brzi test)
Nakon svakog drafta, postavi ova tri pitanja:

```
1. Je li jasno u 1 sekundi?
   → Što korisnik vidi prvo? Mora biti headline.
   → Ako nije → redesign.

2. Komunicira li klinički autoritet?
   → Bi li se sramio pokazati ovo kolegama terapeuta?
   → Ako da → redesign.

3. Ima li višak elemenata?
   → Za svaki element: "Zašto je ovo ovdje?"
   → Ako ne znaš odgovor → ukloni.
```

### Ako draft ne prođe 3 pitanja — konkretno identificiraj problem:
- ✓ "Body font je 18px, na mobitelu nije čitljiv"
- ✓ "Anatomska ilustracija nije odmah prepoznatljiva"
- ✓ "CTA URL se gubi u pozadini"
- ✗ "Nije dovoljno dobro" — preneopćenito, ne pomaže

### Iteracija
Napravi v2 (ispravlja problem) i v3 (klinički pomak — uvjerljivije, preciznije).
Prikaži samo **FINAL** — verziju s najboljim rezultatom na 3 pitanja.

---

## FINALNI CHECK — INSTITUCIJSKI STANDARD TEST

> Zamisliti da ovo objavljuje edukacijska institucija s ozbiljnim kliničkim programima.
>
> Terapeuti koji vide ovu grafiku odlučuju je li ovaj program relevantan za njihovu praksu.
>
> **Pitanje: Komunicira li ova grafika klinički autoritet i institucijsku ozbiljnost?**

Ako odgovor nije odmah "da" → unaprjedi. Nema kompromisa.

Konkretne provjere:
- Izgleda li kao da je iza toga ozbiljna institucija?
- Je li anatomska ilustracija klinički uvjerljiva?
- Je li headline dovoljno jak da zaustavi scroll?
- Bi li se sramio pokazati ovo kolegama terapeuta?

---

## OUTPUT SPECIFIKACIJE

| Format | Dimenzije | Namjena |
|---|---|---|
| IG Post | 1080 × 1080 px | Feed (default) |
| IG Story | 1080 × 1920 px | Stories |
| IG Reels Cover | 1080 × 1350 px | Reel thumbnail |
| Facebook Post | 1200 × 630 px | FB feed |
| Newsletter Header | 600 × 250 px | Brevo header |

**Default bez posebne specifikacije: 1080×1080 PNG.**

---

---

## CANVA ASSET SYSTEM

Sve Canva grafike se rade pomoću Canva MCP alata. Ovo su ID-evi koji se koriste za svaki zadatak.

### Folder IDs

| Folder | Canva ID | Sadržaj |
|--------|----------|---------|
| SUPRA_PHOTOS | `FAHGvgD3OEA` | Sve fotografije za postove (36+ slika) |
| Supra_Logo | `FAHGv7RRch4` | Sve logo varijante (11, 12, 14, 26) |

### Template Design

| Design | Canva ID | Stranice |
|--------|----------|---------|
| SUPRA STUDIUM 1x1 POST | `DAGfD-FUknA` | Stranice 1-3 su aktivni templati; 4-7 su gotovi primjeri (mogu se obrisati) |

### Template Page Mapping

| Stranica | Template tip | Kada koristiti |
|----------|-------------|----------------|
| **Stranica 1** | `SUPRA_TEMPLATE_OGLAS` | Najava seminara, prijava, datumi |
| **Stranica 2** | `SUPRA_TEMPLATE_INFO` | Edukativni content, klinički uvid |
| **Stranica 3** | `SUPRA_TEMPLATE_EDUKACIJA` | Tematski postovi, authority building |
| Stranice 4–7 | Gotovi primjeri | Referenca — nisu templati, mogu se obrisati |

### Logo Selekcija

| Logo naziv | Canva folder | Kada koristiti |
|-----------|-------------|----------------|
| `Supra STudium Logo 12` | FAHGv7RRch4 | **Tamna pozadina** (dark navy — naši standard postovi) |
| `Supra STudium Logo 11` | FAHGv7RRch4 | **Svjetla pozadina** (bijela, siva — eventualni light varijante) |
| `Supra STudium Logo 14` | FAHGv7RRch4 | Horizontalni banner format |
| `Supra STudium Logo 26` | FAHGv7RRch4 | Alternativna kvadratna varijanta |

### Foto Selekcija iz SUPRA_PHOTOS

Fotografije su imenovane po konvenciji: `[TECAJ]_[dijelo_tijela]_[opis].jpg`

Primjeri:
- `ATP_ledja_gornji_*` — ATP tečaj, gornji dio leđa
- `ATP_uho_*` — ATP tečaj, uho (akupresura)
- `ATP_noga_*` — ATP tečaj, noga
- `ATP_kuk_*` — ATP tečaj, kuk
- `ATP_glava_*` — ATP tečaj, glava
- `MT_vrat_*` — MT tečaj, vrat
- `MT_trup_*` — MT tečaj, trup
- `MT_leda_*` — MT tečaj, leđa
- `MT_rame_*` — MT tečaj, rame
- `MT_teorija_*` — MT tečaj, teorija/predavanje

**Za selekciju:** koristi `list-folder-items` na FAHGvgD3OEA i filtriraj po temi posta.

### Canva Workflow za novi post

```
1. Odredi tip posta:
   Najava seminara  → Stranica 1 (OGLAS)
   Info/edukativni  → Stranica 2 (INFO)
   Tematski post    → Stranica 3 (EDUKACIJA)

2. Selekcija fotografije:
   list-folder-items FAHGvgD3OEA → filtriraj po temi iz content fajla

3. Selekcija loga:
   Dark pozadina  → Logo 12
   Light pozadina → Logo 11

4. Generiranje dizajna:
   generate-design s odabranim templateom, fotografijom i tekstom iz content fajla

5. Export:
   export-design → PNG → spremi u BRAND_ASSETS/
```

---

## REFERENTNI PRIMJERI

- **Post: Tetiva bicepsa** — frontalni pogled humerus + zlatna tetiva kroz kanal, "PACIJENT GODINU DANA NA TERAPIJI." → benchmark za edukativne postove, ocjena 8/10
- **Kompozicija:** lijevo tekst (55%), desno ilustracija (45%) — dokazano funkcionira
- **Gold bar lijevo** + gornja/donja linija = brand marker koji radi čak i bez loga

---

_Pravila su tu da te oslobode od odlučivanja, ne da te ograniče._
_Unutar ovog okvira: puna kreativna sloboda._
