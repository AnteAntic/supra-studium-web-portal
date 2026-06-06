# SUPRA STUDIUM — Social Media Design System v1
> Design System & Content Export za Vizzy / batch workflow
> Verzija 1.0 — Lipanj 2026
> Izvedeno iz: DESIGN.md · BRAND_SYSTEM.md · docs/design-system.md · ManualTherapySchoolPage.tsx

---

# 1) BRAND DESIGN SYSTEM (v1)

---

## 1.1 Formati i dimenzije

| Format | Dimenzija | Omjer | Primjena |
|--------|-----------|-------|----------|
| Instagram feed — portret | 1080 × 1350 px | 4:5 | Edukativni postovi, promo seminara, testimoniali |
| Instagram story | 1080 × 1920 px | 9:16 | Event najave, kratki ukazi, CTA |
| Facebook feed — portret | 1200 × 1500 px | 4:5 | Duži edukativni content, promo |
| Instagram feed — kvadrat | 1080 × 1080 px | 1:1 | Provocative statement, minimalističke quote kartice |
| LinkedIn single image | 1200 × 628 px | 1.91:1 | Institutional content, program info (opcionalno) |

**Default za batch workflow:** 1080 × 1350 (4:5). Ostali formati kao resize varijante.

---

## 1.2 Safe area, grid, margine

### Instagram feed (1080 × 1350 px)
```
Safe area top:     108 px  (10% — prostor za UI overlay)
Safe area bottom:  108 px  (10% — prostor za like/comment bar)
Safe area left:    72 px   (6.7%)
Safe area right:   72 px   (6.7%)

Radni prostor (active area): 936 × 1134 px
```

**Grid:**
- 12 kolona · gutter: 24 px · column width: ~54 px
- Baseline grid: 8 px (sve visine i razmaci višekratnici od 8)
- Horizontalni ritam: content u kolone 2–11 (od lijevog ruba 72 px do desnog 72 px)

### Instagram story (1080 × 1920 px)
```
Safe area top:     192 px  (10% — kamera/status bar)
Safe area bottom:  256 px  (13.3% — swipe up / sticker zona)
Safe area left:    72 px
Safe area right:   72 px

Radni prostor (active area): 936 × 1472 px
```

### Facebook feed (1200 × 1500 px)
```
Safe area top:     120 px
Safe area bottom:  120 px
Safe area left:    80 px
Safe area right:   80 px

Radni prostor: 1040 × 1260 px
```

### Spacing tokeni (standardni, višekratnici od 8)

| Token | px | Primjena |
|-------|----|----------|
| space-1 | 8 px | Mikro razmaci, line gap |
| space-2 | 16 px | Razmak između label i vrijednosti |
| space-3 | 24 px | Unutarnji padding blokova (kompaktniji) |
| space-4 | 32 px | Standardni padding kartica |
| space-5 | 40 px | Padding promatračkih kartica |
| space-6 | 48 px | Razmak između sekcija |
| space-8 | 64 px | Veći sekcijski razmak |
| space-12 | 96 px | Veliki vertikalni razmak na story formatu |

---

## 1.3 Tipografija

### Fontovi

| Font | Uloga | Fallback |
|------|-------|---------|
| **Playfair Display** | Headlinevi (H1, H2, observacijski citati) | Georgia, "Times New Roman", serif |
| **Inter** | Sve ostalo: body, CTA, footer, label, eyebrow | -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif |

> **Pravilo:** Playfair Display isključivo za headline. Nikad za body, label, CTA.

---

### H1 — Glavni hook

| Parametar | Vrijednost |
|-----------|------------|
| Font | Playfair Display |
| Weight | SemiBold (600) |
| Size — feed (1080×1350) | 62–72 px |
| Size — story (1080×1920) | 72–84 px |
| Size — kvadrat (1080×1080) | 56–68 px |
| Line-height | 1.15 (115%) |
| Letter-spacing | -0.01em (blago negativan za veće veličine) |
| Boja na tamnoj pozadini | #ede9e3 |
| Boja na svijetloj pozadini | #1F1D1A |
| Maks broj znakova | 60 |
| Maks broj redaka | 3 |
| Case | Mixed case — **nikad all-caps** |
| Stil | Upright (ne italic) — italic rezerviran za observacijske citate |

**Primjer:** *"Tkivo govori. Palpacija je slušanje."*

---

### H2 — Podnaslov / kontekstualni statement

| Parametar | Vrijednost |
|-----------|------------|
| Font | Inter |
| Weight | Regular (400) ili Medium (500) za naglasak |
| Size — feed | 28–34 px |
| Size — story | 34–40 px |
| Line-height | 1.45 (145%) |
| Letter-spacing | 0 |
| Boja na tamnoj pozadini | rgba(237, 233, 227, 0.72) |
| Boja na svijetloj pozadini | #3b3b3b |
| Maks broj znakova | 90 |
| Maks broj redaka | 3 |

**Primjer:** *"Tečaj za terapeute koji već rade i žele razumjeti zašto nešto ne funkcionira."*

---

### Body — Kratko objašnjenje / klinička observacija

| Parametar | Vrijednost |
|-----------|------------|
| Font | Inter |
| Weight | Regular (400) |
| Size — feed | 22–26 px |
| Size — story | 26–30 px |
| Line-height | 1.6 (160%) |
| Letter-spacing | 0 |
| Boja na tamnoj pozadini | rgba(237, 233, 227, 0.55) |
| Boja na svijetloj pozadini | #5F5A52 |
| Maks broj znakova | 140 |
| Maks broj redaka | 4 |

> **Napomena:** Body tekst se koristi samo ako layout to zahtijeva (edukativni/testimonial). Kod provocative statement i quote layouta — body se izostavlja.

---

### CTA — Gumb / poziv

| Parametar | Vrijednost |
|-----------|------------|
| Font | Inter |
| Weight | Medium (500) |
| Size | 18–20 px |
| Line-height | 1.0 |
| Letter-spacing | 0.22em |
| Case | UPPERCASE |
| Boja teksta | #1F1D1A (na zlatnoj pozadini) ili #ede9e3 (na tamnom outline-u) |
| Boja pozadine | #c9a832 (zlatna, filled) ili transparent (outline) |
| Border | 1px solid rgba(255,255,255,0.30) za outline varijantu |
| Padding | 16px vertikalno · 32px horizontalno |
| Border-radius | 2 px (rounded-sm — institutionalni stamp) |
| Maks duljina teksta | 24 znaka |

**Primjer CTA tekstova:**
1. `PRIJAVI SE`
2. `REZERVIRAJ MJESTO`
3. `POŠALJI UPIT`
4. `INFO O TEČAJU`
5. `POGLEDAJ PROGRAM`
6. `SAZNAJ VIŠE`
7. `POŠALJI PORUKU`
8. `OBAVIJESTI ME`
9. `PRIJAVE OTVORENE`
10. `PREUZMI PDF`

---

### Eyebrow — Label iznad naslova

| Parametar | Vrijednost |
|-----------|------------|
| Font | Inter |
| Weight | Regular (400) |
| Size | 18–20 px |
| Letter-spacing | 0.28em |
| Case | UPPERCASE |
| Boja | #B89A4F (brass, uvijek — ne bijela, ne tamna) |
| Maks duljina | 30 znaka |

**Primjeri:** `AKUPRESURA` · `TRIGGER POINT METODA` · `MANUALNA TERAPIJA` · `SUPRA STUDIUM`

---

### Footer — Sitni tekst / logistika

| Parametar | Vrijednost |
|-----------|------------|
| Font | Inter |
| Weight | Regular (400) |
| Size | 16–18 px |
| Letter-spacing | 0.08em |
| Case | Lowercase ili mixed case |
| Boja na tamnoj pozadini | rgba(237, 233, 227, 0.38) |
| Boja na svijetloj pozadini | #5F5A52 |
| Maks duljina | 60 znaka |

---

## 1.4 Boje i kontrast

### Primarne boje

| Naziv | HEX | Primjena |
|-------|-----|----------|
| Brand Dark (Off-black) | `#141311` | Primarni tamni background (warm kotizacija dark) |
| Documentary Dark | `#0e0e0e` | Sekundarni tamni background (klinički/metoda) |
| Row Separator | `#201e1a` | Separator linije unutar dark sekcija |
| Primary Text Light | `#1F1D1A` | Sav tekst na svijetlim pozadinama |
| Secondary Text Light | `#3b3b3b` | Body text na svijetlim pozadinama |
| Muted Text Light | `#5F5A52` | Pomoćni/footer text na svijetlim pozadinama |

### Sekundarne / surface boje

| Naziv | HEX | Primjena |
|-------|-----|----------|
| Warm Cream (page bg) | `#F4F1EA` | Pozadina world-facing layouta, light bg |
| Card Cream | `#FAF8F4` | Observation cards, testimonial bg |
| Off-white (dark surfaces) | `#ede9e3` | Primarni tekst na tamnim backgroundima |
| Separator Light | `#e3e3e3` | Grid gap u observation card sekcijama |

### Brass / accent (gold)

| Naziv | HEX | Primjena |
|-------|-----|----------|
| Brass Primary | `#B89A4F` | Eyebrow tekst, decorativni akcenti |
| Brass Muted | `#9e8a46` | Muted brass na tamnim bg, border akcenti |
| Brass Alt | `#a58d4e` | Bullet točke, blockquote border |
| CTA Gold (filled) | `#c9a832` | Primarni CTA gumb background (90% opacity default) |
| CTA Gold Hover | `#c9a832` | 100% opacity on hover |

### Background varijante

| Varijanta | Background | Primarni tekst | Sekundarni tekst | Eyebrow |
|-----------|-----------|----------------|------------------|---------|
| LIGHT | `#F4F1EA` | `#1F1D1A` | `#3b3b3b` | `#B89A4F` |
| DARK_WARM | `#141311` | `#ede9e3` | `rgba(237,233,227,0.38)` | `#9e8a46` |
| DARK_DOCUMENTARY | `#0e0e0e` | `#ede9e3` | `rgba(237,233,227,0.55)` | `#B89A4F` |
| CARD_CREAM | `#FAF8F4` | `#1F1D1A` | `#3b3b3b` | `#B89A4F` |

### Pravila kontrasta

- **Bijeli tekst na tamnoj pozadini:** Koristiti `#ede9e3`, nikad `#ffffff`. Off-white daje kliničku toplu atmosferu.
- **Tamni tekst na crnom:** Nikad. Uvijek light-on-dark ili dark-on-light.
- **CTA gumb (zlatna podloga):** Tekst uvijek `#1F1D1A` — tamni tekst na zlatnoj podlozi. Nikad bijeli tekst na zlatnoj.
- **Outline CTA (tamna podloga):** Border `rgba(255,255,255,0.30)`, tekst `#ede9e3`.
- **Nikad `#000000`** kao background. Nikad `#ffffff` kao tekst.
- Minimalni kontrast ratio: 4.5:1 (WCAG AA) za sve tekst elemente.

---

## 1.5 Hijerarhija i pravila sadržaja na vizualu

### Osnovno pravilo: jedna poruka po vizualu

Svaki vizual komunicira jednu jasnu ideju — kliničku observaciju, program info, testimonial ili provocative statement. Ne miješati teme.

### Maksimalni broj elemenata po layoutu

| Layout tip | Eyebrow | H1 | H2 | Body | CTA | Footer |
|------------|---------|----|----|----|-----|--------|
| Provocative statement | ○ opcionalno | ✓ obavezno | ✗ | ✗ | ✗ | ✓ obavezno |
| Quote / observacija | ✓ | ✓ | ○ | ✗ | ✗ | ✓ |
| Edukativno | ✓ | ✓ | ✓ | ✓ | ○ | ✓ |
| Promo seminara | ✓ | ✓ | ✓ | ○ | ✓ | ✓ |
| Testimonial | ✗ | ✓ (citat) | ✓ (ime/uloga) | ✗ | ✗ | ✓ |
| Event najava | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Pravilo:** Post bez CTA-a je legitiman format. Ako nema transakcijskog konteksta — ne dodavati CTA.

### Pravila naglašavanja

- **Bold (Inter Medium 500):** Koristi se za jedno ključno mjesto u H2 ili body tekstu. Maks jedna bold fraza po elementu.
- **CAPS:** Isključivo eyebrow i CTA. Nikad u H1 ili body tekstu.
- **Italic (Playfair Display):** Isključivo za observacijske citate u testimonial layoutima.
- **Underline:** Zabranjeno na social grafici.
- **Boja za naglasak:** `#B89A4F` (brass) za eyebrow, nikad za naglasak unutar rečenice.

---

## 1.6 Foto pravila (obrada i korištenje)

### Kada koristiti fotku instruktora

- Promo seminara (foto + info)
- Testimonial s instruktorom u kadru
- "Filozofija" content — kad je autorstvo relevantno
- **Nikad** za čisto edukativni/klinički content (tada koristiti apstraktni background ili tamnu pozadinu)

### Kada koristiti apstraktni background

- Provocative statement
- Quote / observacijska kartica
- Klinički edukativni sadržaj gdje foto ometaju fokus teksta
- **Opcije:** jednobojna pozadina (`#141311`, `#0e0e0e`, `#F4F1EA`) ili blago teksturirana (noise/grain overlay)

### Crop pravila

- **Portret instruktora:** Kadar od pojasa ili prsa prema gore. Nikad full-body kao background (gubi fokus).
- **Dokumentacijska foto (rad u grupi, demonstracija):** Kadar na ruke + pacijent ili instruktor + polaznici.
- **Objektne pozicije:** Subjekt nikad na samom rubu kadra. Minimum 10% slobodnog prostora oko subjekta.
- **Horizontalni kadar:** Koristiti kao full-bleed background, uvijek s gradijentnim overlayem.

### Color grading

- **Grayscale:** Blagi desaturacijski efekt — `grayscale(8%)`. Nikad pun B&W, nikad jarko zasićeno.
- **Brightness:** Ne mijenjati. Ako je ekspozicija loša — koristiti overlay.
- **Contrast:** Blagi boost kontrasta dopušten: `contrast(1.05–1.08)`.
- **Warmth:** Blago toplo je u redu. Hladna/plava tonacija nije Supra.

### Overlay vrijednosti

| Situacija | Overlay |
|-----------|---------|
| Foto kao full background (tekst zóna lijevo) | `linear-gradient(100deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 40%, transparent 78%)` |
| Foto kao full background (tekst u centru) | `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 75%, rgba(0,0,0,0.82) 100%)` |
| Foto kao dekorativni element (lijeva polovina) | `opacity: 0.82` na foto, ostatak jednobojna pozadina |
| Grain/noise tekstura | `opacity: 0.04–0.06` bijeli noise overlay na tamnoj pozadini |

### Što izbjegavati

- `brightness(1.1) saturate(1.2)` — previše wellness/warm
- Dramatičan vinjetter kao glavni overlay na statičnim fotkama
- Stock-photo estetika (plave rukavice, staged hospital settings, kamera/microscope stock)
- Filtri koji daju "Instagram retro" look
- Puna crna podloga `bg-black/50` — gubi atmosferu

---

## 1.7 CTA komponenta

### Filled CTA (primarni — za promo i event)

```
Pozadina:       #c9a832 (90% opacity default, 100% hover)
Tekst:          #1F1D1A · Inter Medium 500 · 18–20px · UPPERCASE · tracking 0.22em
Padding:        16px vertikalno · 32px horizontalno
Border-radius:  2px (institutionalni stamp, ne SaaS rounded)
Širina:         Auto (po sadržaju) ili fiksna 320px za centrirane layoute
Pozicija:       Lijevo-dolje u text bloku ili centrirano u donjoj trećini vizuala
```

### Outline CTA (sekundarni — za edukativni content)

```
Pozadina:       transparent
Border:         1px solid rgba(255,255,255,0.30)
Tekst:          #ede9e3 · Inter Regular 400 · 18px · UPPERCASE · tracking 0.22em
Padding:        14px vertikalno · 28px horizontalno
Border-radius:  2px
```

### Tekstualni CTA bez gumba (za edukativni/observacijski content)

```
Format:         "— Tekst linka" (em-dash prefix, lowercase ili mixed case)
Font:           Inter · Regular · 20–22px
Boja:           rgba(237,233,227,0.70) na tamnoj bg
```

### Primjeri CTA tekstova (10) — svi na hrvatskom

1. `PRIJAVI SE`
2. `REZERVIRAJ MJESTO`
3. `POŠALJI UPIT`
4. `INFO O TEČAJU`
5. `POGLEDAJ PROGRAM`
6. `PRIJAVE OTVORENE`
7. `SAZNAJ VIŠE`
8. `POŠALJI PORUKU`
9. `OBAVIJESTI ME`
10. `PREUZMI PDF PROGRAM`

---

## 1.8 Footer komponenta

### Sadržaj footera

| Element | Format | Obavezno |
|---------|--------|---------|
| Instagram handle | `@suprastudium` | Da |
| Web | `uciliste-suprastudium.hr` | Opcionalno |
| Logo (wordmark) | Horizontalni, svjetla varijanta | Opcionalno |
| Grad | `Zagreb` | Samo za event/promo |

**Standardni footer string:** `@suprastudium · uciliste-suprastudium.hr`

### Pozicija i stil

```
Pozicija:          Donji desni kut unutar safe area
                   Bottom: safe_area_bottom + 16px
                   Right: safe_area_right

Font:              Inter · Regular 400
Size:              16–18 px
Letter-spacing:    0.08em
Case:              Lowercase

Boja (tamna bg):   rgba(237,233,227,0.38)
Boja (svijetla bg): #5F5A52

Separator:         · (centered dot) između handle i web
                   Boja: rgba(237,233,227,0.20) na tamnoj bg
```

### Logo pozicija (ako se koristi)

```
Pozicija:   Donji lijevi kut ili gornji lijevi kut
Veličina:   Visina 32–40 px (wordmark)
Opacity:    0.72 na tamnoj bg · 0.85 na svijetloj bg
Format:     SVG preferred, PNG fallback
```

### Separator line (ako se koristi)

```
Linija iznad footera:   1px solid rgba(237,233,227,0.12)
Margin top:             16px
Width:                  100% unutar safe area (ili 200px fiksno za desni kut)
```

---

## 1.9 DO / DON'T (10 + 10)

### ✅ DO — 10 pravila što se smije

1. **Koristiti Playfair Display za headline** — serif autoritet, klinička elegancija.
2. **Mixed case za H1** — "Tkivo govori." Ne "TKIVO GOVORI".
3. **Off-white `#ede9e3` na tamnim površinama** — nikad čisti bijeli.
4. **Off-black `#141311` / `#0e0e0e` za tamne backgrounde** — nikad `#000000`.
5. **Eyebrow uvijek u `#B89A4F`** — brass daje institucionalnu signaturu.
6. **Jedan CTA po vizualu** (ili nula, ako nema transakcijskog konteksta).
7. **Direktivni gradijentni overlay na foto backgroundu** — lijeva zona tamna (tekst), desna atmosferična.
8. **Blago grayscale na svim fotkama** — `grayscale(8%)` za konzistentnost.
9. **Observacijski jezik** — "Često vidimo...", "U praksi...", "Vrijedi provjeriti..." — nikad apsolutni claims.
10. **Jedna poruka po vizualu** — fokus, ne lista benefita.

### ❌ DON'T — 10 pravila što se ne smije

1. **Ne koristiti `rounded-2xl` na CTA gumbima** — SaaS estetika, ne institucija. Maks `border-radius: 4px`.
2. **Ne stavljati cijenu u CTA gumb** — "PRIJAVI SE" da; "PRIJAVI SE (1.200 €)" ne.
3. **Ne koristiti crvene urgency elemente** — "Ostala 3 mjesta!", "ZADNJA ŠANSA" — zabranjeno.
4. **Ne koristiti glassmorphism** — frosted glass, backdrop-filter blur kao dizajnerski element nije Supra.
5. **Ne koristiti gradient tekst** (`background-clip: text`) — dekorativno, prazno.
6. **Ne koristiti all-caps H1** — nikad. Mixed case je brand standard.
7. **Ne koristiti `#ffffff` bijeli tekst direktno** — uvijek `#ede9e3` (off-white, toplo).
8. **Ne koristiti tri-fragment ritam** — "Brže. Bolje. Sigurnije." → spoji u normalnu rečenicu.
9. **Ne koristiti wellness/luxury fotografije** — staged, stock, plave rukavice, pretjerano lijepe ruke.
10. **Ne stavljati više od 3 tekstualna elementa (H1+H2+body)** bez jasnog vizualnog prioriteta — hijerarhija mora biti čitljiva u 2 sekunde.

---

# 2) LAYOUT LIBRARY

---

## LAYOUT_01 — Provocative Clinical Statement

**Namjena:** Edukativni hook za feed. Provocative observacija iz kliničke prakse — privlači terapeute koji prepoznaju problem.

**Background:** `#141311` (tamni warm off-black). Bez fotografije.

**Struktura (odozgo prema dolje):**
```
[top safe area: 108px]
[prazno: 80px]

[EYEBROW]          — lijevo poravnanje
[48px razmak]
[H1]               — lijevo poravnanje, maks 2 reda
[prazno: 32px]
[DEKORATIVNA LINIJA] — 1px solid #9e8a46, širina 48px, lijevo

[stretch do dna]

[FOOTER]           — donji desni kut, safe area
[bottom safe area: 108px]
```

**Tipografija:**
- EYEBROW: Inter · 18px · `#B89A4F` · uppercase · tracking 0.28em
- H1: Playfair Display SemiBold · 68px · `#ede9e3` · line-height 1.12 · maks 2 retka
- FOOTER: Inter 16px · `rgba(237,233,227,0.38)` · tracking 0.08em

**Horizontalne pozicije:**
- Svi elementi: left-align · left-margin: 72px · right-margin: 144px (tekst ne ide do ruba)

**Dummy primjer:**
```
TRIGGER POINT METODA

"Pacijent godinu dana
na terapiji.
Rame i dalje boli."
                                    @suprastudium
```

---

## LAYOUT_02 — Promo Seminara (Foto + Info)

**Namjena:** Najava ili promo termina. Fotografija predavača kao background, tekst u lijevoj tekstnoj zoni.

**Background:** Full-bleed fotografija instruktora + direktivni gradijentni overlay.

**Overlay:**
```
linear-gradient(105deg,
  rgba(20,19,17,0.88) 0%,
  rgba(20,19,17,0.65) 38%,
  rgba(20,19,17,0.20) 62%,
  transparent 78%
)
```

**Struktura:**
```
[top safe area: 108px]
[prazno: 56px]

[EYEBROW]          — lijevo, 72px od ruba
[24px razmak]
[H1]               — lijevo, maks 2 retka
[20px razmak]
[H2]               — lijevo, maks 2 retka
[40px razmak]
[METAINFO BLOK]    — datum · lokacija · trajanje (3 reda, svaki 20px razmak)
[stretch]
[CTA GUMB]         — lijevo, širina 280px
[32px razmak]
[FOOTER]           — donji desni kut
[bottom safe area: 108px]
```

**Tipografija:**
- EYEBROW: Inter · 18px · `#B89A4F` · uppercase · tracking 0.28em
- H1: Playfair Display SemiBold · 64px · `#ede9e3` · line-height 1.15
- H2: Inter Regular · 28px · `rgba(237,233,227,0.72)` · line-height 1.45
- METAINFO: Inter Regular · 20px · `rgba(237,233,227,0.55)` · tracking 0.06em
- CTA: Inter Medium · 18px · `#1F1D1A` na `#c9a832` bg

**Dummy primjer:**
```
AKUPRESURA I TRIGGER POINT

Rad koji ne nagađa.

Tečaj za terapeute koji već rade
i žele razumjeti zašto nešto
ne funkcionira.

Zagreb · 14–15. rujna 2026
2 dana · 16 sati

[ PRIJAVI SE ]

                                    @suprastudium
```

---

## LAYOUT_03 — Edukativno (Klinička tema, light bg)

**Namjena:** Edukativni post s kratkom kliničkom observacijom. Bez foto, sve tipografija.

**Background:** `#F4F1EA` (warm cream). Bez fotografije.

**Struktura:**
```
[top safe area: 108px]
[80px razmak]

[EYEBROW]          — lijevo, 72px od ruba
[32px razmak]
[H1]               — lijevo, maks 3 retka
[24px razmak]
[SEPARATOR]        — 1px solid rgba(0,0,0,0.12), full width unutar safe area
[24px razmak]
[BODY TEKST]       — lijevo, maks 4 retka
[stretch]
[FOOTER]           — donji desni kut
[bottom safe area: 108px]
```

**Tipografija:**
- EYEBROW: Inter · 18px · `#B89A4F` · uppercase · tracking 0.28em
- H1: Playfair Display SemiBold · 62px · `#1F1D1A` · line-height 1.15
- BODY: Inter Regular · 24px · `#3b3b3b` · line-height 1.6
- FOOTER: Inter 16px · `#5F5A52` · tracking 0.08em

**Dummy primjer:**
```
SUBOKCIPITALNA REGIJA

Jedna od najčešće
zanemarenih zona
u diferencijaciji
cervikalne boli.

Subokcipitalni mišići reagiraju na
kompresiju, ne samo na istezanje.
Procjena bez palpacije ove regije
ostavlja dio slike nepotpunim.

                                    @suprastudium
```

---

## LAYOUT_04 — Testimonial

**Namjena:** Iskustvo polaznika. Playfair italic citat, ime i uloga ispod.

**Background:** `#FAF8F4` (card cream) ili `#F4F1EA`.

**Struktura:**
```
[top safe area: 108px]
[96px razmak]

[NAVODNIK — dekorativni element] — Playfair · 120px · #B89A4F · opacity 0.20 · lijevo
  (apsolutno pozicioniran, ne utječe na flow)

[H1 — CITAT]       — Playfair Display Italic · 52px · #1F1D1A · line-height 1.3 · lijevo
[48px razmak]
[SEPARATOR]        — 1px solid #9e8a46 · width 40px · lijevo
[24px razmak]
[IME]              — Inter Medium · 22px · #1F1D1A
[8px razmak]
[ULOGA]            — Inter Regular · 18px · #5F5A52
[stretch]
[FOOTER]           — donji desni kut
[bottom safe area: 108px]
```

**Tipografija:**
- H1 (citat): Playfair Display Italic · 52px · `#1F1D1A` · line-height 1.3 · maks 4 retka
- IME: Inter Medium 500 · 22px · `#1F1D1A`
- ULOGA: Inter Regular · 18px · `#5F5A52`
- FOOTER: Inter 16px · `#5F5A52`

**Dummy primjer:**
```
"Razumio sam što palpacija
zapravo znači tek kad sam
to vidio na sebi — ne na
anatomskim modelima."

──────
Marko Horvat
fizioterapeut, 4 godine prakse

                                    @suprastudium
```

---

## LAYOUT_05 — Event Najava (Story format — 1080×1920)

**Namjena:** Instagram story za najavu termina. Vertikalni format, prominentni datum i lokacija.

**Background:** `#141311` + blaga noise tekstura (opacity 0.04).

**Struktura:**
```
[top safe area: 192px]
[56px razmak]

[LOGO / WORDMARK]  — centrirano, opacity 0.72, visina 36px
[64px razmak]
[EYEBROW]          — centrirano
[32px razmak]
[H1]               — centrirano, maks 2 retka, veći font
[48px razmak]
[DATUM BLOK]       — centrirano, bordered box
  datum · lokacija · trajanje
[64px razmak]
[CTA GUMB]         — centrirano, širina 380px, filled gold
[24px razmak]
[SEKUNDARNI CTA]   — centrirano, plain tekst s em-dash
[stretch]
[FOOTER]           — centrirano, bottom safe area zona
[bottom safe area: 256px]
```

**Tipografija:**
- EYEBROW: Inter · 20px · `#B89A4F` · uppercase · tracking 0.28em
- H1: Playfair Display SemiBold · 84px · `#ede9e3` · line-height 1.10
- DATUM: Inter Regular · 30px · `rgba(237,233,227,0.72)` · letter-spacing 0.06em
- LOKACIJA: Inter Regular · 24px · `rgba(237,233,227,0.55)`
- CTA: Inter Medium · 20px · `#1F1D1A` · uppercase · tracking 0.22em · na `#c9a832`
- SEKUNDARNI CTA: Inter · 22px · `rgba(237,233,227,0.55)` · "— Više informacija"
- FOOTER: Inter 18px · `rgba(237,233,227,0.38)` · centrirano

**DATUM BLOK:**
```
Border: 1px solid rgba(237,233,227,0.12)
Border-radius: 2px
Padding: 24px 40px
Margin: auto (centrirano)
```

**Dummy primjer:**
```
         [logo]

    AKUPRESURA · TRIGGER POINT

    "Pristup koji se
     može ponoviti."

    ┌─────────────────────────────┐
    │   14–15. rujna 2026         │
    │   Zagreb                    │
    │   2 dana · 16 sati          │
    └─────────────────────────────┘

    [ REZERVIRAJ MJESTO ]
      — Više informacija

              @suprastudium
```

---

## LAYOUT_06 — Split Screen (Foto lijevo, Tekst desno)

**Namjena:** Promo s foto predavača, text zone desno. Horizontalna kompozicija prilagođena 4:5.

**Background:** `#141311` za text zonu, fotografija za lijevu polovicu.

**Struktura:**
- **Lijeva polovina (0–492px):** Fotografija predavača, `object-fit: cover`, `grayscale(8%)`. Vertikalni gradijentni fade na desnom rubu prema `#141311`.
- **Desna polovina (540–1008px):** Text zona na `#141311`.

```
DESNA ZONA (lijevi rub = 564px od lijevog ruba grafike):

[top safe area + 80px razmak]

[EYEBROW]
[28px]
[H1]         — maks 2 retka
[20px]
[H2]         — maks 2 retka
[40px]
[META INFO]
  Datum
  Lokacija
  Trajanje
[stretch]
[CTA]        — lijevo u zoni desne polovice
[32px]
[FOOTER handle]
[bottom safe area]
```

**Fade na granici:**
```
gradient: linear-gradient(90deg, transparent 0%, rgba(20,19,17,0.60) 60%, #141311 100%)
Width: 120px, pozicioniran na desnom rubu foto zone
```

---

## LAYOUT_07 — Edukativna Lista (3 klinička uvida)

**Namjena:** Edukativni post koji prikazuje 3 observacije ili 3 koraka metode. Bez CTA.

**Background:** `#0e0e0e` (documentary dark).

**Struktura:**
```
[top safe area: 108px]
[64px razmak]

[EYEBROW]          — lijevo, 72px od ruba
[24px razmak]
[H1]               — lijevo, maks 1–2 retka
[48px razmak]

[ITEM 01]
  [BROJ]   — Inter Bold · 11px · #B89A4F · uppercase · tracking 0.3em · "01"
  [8px]
  [TEKST]  — Inter Regular · 26px · #ede9e3 · line-height 1.5 · maks 2 retka
[32px razmak]
[1px separator]    — rgba(237,233,227,0.10) · full width
[32px razmak]

[ITEM 02]          — isti format
[32px razmak]
[1px separator]
[32px razmak]

[ITEM 03]          — isti format

[stretch]
[FOOTER]           — donji desni kut
[bottom safe area: 108px]
```

**Dummy primjer:**
```
PALPACIJA

Tri razine procjene
tkivnog odgovora.

01
Površinska napetost — reakcija
kože i fascie na blagi dodir.

──────────────────────────────
02
Mišićni tonus — razlika između
aktivnog i pasivnog otpora.

──────────────────────────────
03
Trigger točka — lokaliziran
ishemijski odgovor na pritisak.

                                    @suprastudium
```

---

## LAYOUT_08 — Quiet Statement (Minimal)

**Namjena:** Jedan kratki statement. Bez eyebrowa, bez footera (samo handle). Visok negativni prostor.

**Background:** `#F4F1EA` (world-facing cream) ili `#141311`.

**Struktura:**
```
[top safe area: 108px]
[VERTIKALNI CENTAR — sve vertikalno centrirano]

  [H1]  — centrirano horizontalno
         Playfair Display SemiBold
         66–72px · line-height 1.12

[VERTIKALNI CENTAR END]

[FOOTER]  — donji desni ili centrirani donji kut
[bottom safe area: 108px]
```

**Pravila:**
- Maksimalno 2 retka H1
- Nikakvi drugi elementi (bez eyebrowa, bez CTA, bez body teksta)
- Visoki negativni prostor = poruka je sama po sebi dovoljna
- Tekst: `#1F1D1A` na light bg ili `#ede9e3` na dark bg

**Dummy primjer (light bg):**
```
"Akupresura nije
relaksacija."

                                    @suprastudium
```

---

# 3) ASSET MANIFEST

| Asset Name | Asset Type | Format | Preporučena dimenzija | Gdje se koristi | Obavezno |
|------------|-----------|--------|----------------------|-----------------|---------|
| supra-logo-light | Logo wordmark | SVG / PNG | SVG · PNG 400×80px @2x | Footer na tamnim bg, story centralni logo | **DA** |
| supra-logo-dark | Logo wordmark | SVG / PNG | SVG · PNG 400×80px @2x | Footer na svijetlim bg | **DA** |
| supra-logo-icon | Logo mark (simbol) | SVG / PNG | SVG · PNG 120×120px @2x | Watermark, kvadratni formati | Opcionalno |
| supra-logo-stacked-light | Logo stacked (vertikalan) | SVG / PNG | SVG · PNG 240×200px @2x | Story central element | Opcionalno |
| instructor-ante-portrait | Foto instruktora | JPG | 2160×2700px (4:5 @2x) | Layout_02, Layout_06, web hero | **DA** |
| instructor-stosic-portrait | Foto instruktora | JPG | 2160×2700px (4:5 @2x) | Layout_02, Layout_06 | **DA** |
| instructor-awudi-portrait | Foto instruktora | JPG | 2160×2700px (4:5 @2x) | Layout_02, Layout_06 | **DA** |
| seminar-dokumentacija-01 | Foto edukacije (rad u grupi) | JPG | 2160×2700px (4:5 @2x) ili 2160×1620px (4:3) | Edukativni postovi, web | Opcionalno |
| seminar-dokumentacija-02 | Foto edukacije (demonstracija) | JPG | 2160×2700px | Background za Layout_02 | Opcionalno |
| seminar-dokumentacija-03 | Foto edukacije (detalj ruku) | JPG | 2160×2700px | Edukativni content, klinički detalji | Opcionalno |
| pattern-noise-overlay | Tekstura / noise | PNG | 1080×1350px · grayscale noise | Overlay na tamnim bg (opacity 4–6%) | Opcionalno |
| pattern-grain-story | Tekstura / grain za story | PNG | 1080×1920px · grayscale noise | Story bg overlay | Opcionalno |
| font-playfair-display | Font file | TTF / OTF / WOFF2 | — | Headline svih vizuala | **DA** |
| font-inter-regular | Font file | TTF / OTF / WOFF2 | — | Svi ne-headline elementi | **DA** |
| font-inter-medium | Font file | TTF / OTF / WOFF2 | — | CTA, naglasci, brojevi | **DA** |
| font-inter-semibold | Font file | TTF / OTF / WOFF2 | — | Opcionalni naglasci u body | Opcionalno |
| color-palette-swatches | Brand palette | ASE / JSON | — | Reference za Vizzy/Figma/PS | Preporučeno |
| cta-button-light | UI element | SVG | 320×56px | Layout_02, Layout_05 (filled gold) | Preporučeno |
| cta-button-outline | UI element | SVG | 320×52px | Layout_02, outline varijanta | Opcionalno |

### Napomene uz asset manifest

- **Foto instruktora:** Isporučiti u 4:5 omjeru (portretni kadar od pojasa gore). Bez pozadine studia — preferirani su prostori kliničkih edukacija ili neutralna pozadina.
- **Font licence:** Inter je otvoreni font (SIL Open Font License). Playfair Display isto (SIL OFL). Slobodno se može koristiti komercijalno.
- **Logo varijante:** Obavezno imati i SVG i PNG. SVG za skaliranje, PNG @2x (double resolution) za bitmap exportove.
- **Noise overlay:** Generirati kao bijeli šum na crnoj pozadini, export kao PNG s transparencijom. Koristiti samo opacity blend mode.

---

# 4) BATCH CONTENT EXPORT — CSV SPEC + PRIMJERI

---

## 4.1 CSV Header (obavezna polja)

```csv
post_id,platform,format,layout_id,language,headline,subheadline,body_text,cta_text,footer_text,image_asset_id,color_variant,overlay_style,caption,hashtags,publish_datetime,notes
```

### Opis polja

| Polje | Tip | Opis | Primjer vrijednosti |
|-------|-----|------|---------------------|
| `post_id` | string | Jedinstveni ID posta | `SS_2026_001` |
| `platform` | enum | Platforma objave | `instagram` · `facebook` · `linkedin` |
| `format` | enum | Dimenzija | `feed_4x5` · `story_9x16` · `square_1x1` · `fb_4x5` |
| `layout_id` | enum | Koji layout koristiti | `LAYOUT_01` … `LAYOUT_08` |
| `language` | enum | Jezik copy-ja | `hr` · `en` |
| `headline` | string | H1 tekst (maks 60 znakova) | `Tkivo govori. Palpacija je slušanje.` |
| `subheadline` | string | H2 tekst (maks 90 znakova) ili prazno | `Tečaj za terapeute koji žele razumjeti zašto nešto ne funkcionira.` |
| `body_text` | string | Body paragraph (maks 140 znakova) ili prazno | `Subokcipitalna regija jedan je od najčešće zanemarenih područja u diferencijalnoj procjeni.` |
| `cta_text` | string | Tekst CTA gumba (maks 24 znaka) ili prazno | `PRIJAVI SE` |
| `footer_text` | string | Footer string | `@suprastudium · uciliste-suprastudium.hr` |
| `image_asset_id` | string | ID iz Asset Manifesta ili prazno | `instructor-ante-portrait` · `NONE` |
| `color_variant` | enum | Pozadinska varijanta | `DARK_WARM` · `DARK_DOCUMENTARY` · `LIGHT` · `CARD_CREAM` |
| `overlay_style` | enum | Tip overlaya ako ima foto | `directional_left` · `bottom_fade` · `none` |
| `caption` | string | Instagram/Facebook caption (slobodni tekst, može biti dugačak) | "Pacijent..." |
| `hashtags` | string | Hashtagovi, razdvojeni razmakom | `#akupresura #triggerpoint #manualna` |
| `publish_datetime` | ISO 8601 | Datum i vrijeme objave | `2026-07-14T09:00:00+02:00` |
| `notes` | string | Interno — napomene za dizajnera | `Koristiti kadar bez vidljive odjeće instruktora` |

---

## 4.2 Primjer CSV-a (6 redova)

```csv
post_id,platform,format,layout_id,language,headline,subheadline,body_text,cta_text,footer_text,image_asset_id,color_variant,overlay_style,caption,hashtags,publish_datetime,notes
SS_2026_EDU_01,instagram,feed_4x5,LAYOUT_03,hr,Subokcipitalna regija nije samo cervikalni bol.,"Ova zona sudjeluje u obrascima boli koji sežu daleko izvan vrata.","Procjena bez palpacije subokcipitalnih mišića ostavlja dio kliničke slike nepotpunim. U praksi — vrijedi uvijek provjeriti.",,@suprastudium · uciliste-suprastudium.hr,NONE,LIGHT,none,"Subokcipitalna regija jedna je od najčešće zanemarenih zona u diferencijalnoj procjeni cervikalne boli. Mišići koji tu sjedaju — rectus capitis posterior major i minor, obliquus capitis superior i inferior — reagiraju na kompresiju, ne samo na istezanje.

Ovo je zona koja se često propušta jer bol iz nje rijetko ostaje lokalna.

Više o tome na tečaju Akupresure i Trigger Point Metode — info u bio.","#akupresura #triggerpoint #fizioterapija #manualna #suprastudium #cervikalnbol #palpacija",2026-07-08T09:00:00+02:00,Edukativni post bez CTA-a. Ton: Glas 1 (terapeut-edukator). Nema CTA na vizualu — samo u captionu.
SS_2026_EDU_02,instagram,feed_4x5,LAYOUT_07,hr,Tri razine procjene tkivnog odgovora.,,,,@suprastudium · uciliste-suprastudium.hr,NONE,DARK_DOCUMENTARY,none,"Svaki tretman počinje čitanjem tkiva — ne protokolom.

01. Površinska napetost — kako koža i fascija reagiraju na blagi dodir
02. Mišićni tonus — razlika između aktivnog i pasivnog otpora
03. Trigger točka — lokaliziran ishemijski odgovor koji govori o obrascu boli

Ovo nije liste tehnika. Ovo je redoslijed razmišljanja.

Info o sljedećem ciklusu: link u bio.","#triggerpoint #akupresura #manualna #fizioterapija #suprastudium #palpacija #tkivo",2026-07-15T09:00:00+02:00,Lista format. 3 itema. Bez body teksta u CSV-u — content je u samim itemima (layout generira iz headline + notes polja). Napomena dizajneru: numeracija stilizirati kao 01/02/03 u boji #B89A4F.
SS_2026_PROMO_01,instagram,feed_4x5,LAYOUT_02,hr,"Rad koji ne nagađa.","Akupresura i Trigger Point Metoda — Zagreb, rujan 2026.","2 dana · 16 sati · Mala grupa.",PRIJAVI SE,@suprastudium · uciliste-suprastudium.hr,instructor-ante-portrait,DARK_WARM,directional_left,"Sljedeći termin: 14–15. rujna 2026, Zagreb.

Tečaj za terapeute koji već rade i žele razumjeti zašto nešto kod određenih pacijenata ne funkcionira.

Radimo u malim grupama. Mjesta su ograničena.

Prijave: tally.so/r/wA5kvD
WhatsApp: wa.me/385958558953","#akupresura #triggerpoint #suprastudium #tečaj #fizioterapija #zagreb #manualna",2026-07-22T09:00:00+02:00,Promo post s fotografijom Ante. CTA gumb: filled gold. Overlay: directional_left (tekst zona lijevo-tamna). Datum i lokacija u metainfo bloku ispod H2.
SS_2026_PROMO_02,facebook,fb_4x5,LAYOUT_02,hr,"Palpacija je rječnik. Metoda je gramatika.","Akupresura i Trigger Point Metoda — Zagreb, rujan 2026.","14–15. rujna · 16 sati · Mala grupa (maks 12 polaznika).",INFO O TEČAJU,@suprastudium · uciliste-suprastudium.hr,seminar-dokumentacija-01,DARK_WARM,directional_left,"U praksi, palpacija bez metode je nagađanje. Metoda bez palpacije je protokol bez uvida.

Na tečaju Akupresure i Trigger Point Metode radimo oba — kroz konkretne slučajeve, demonstracije i supervised rad u parovima.

Sljedeći termin: 14–15. rujna 2026, Zagreb.
Maks 12 polaznika.

Prijave i informacije: tally.so/r/wA5kvD

Pitanja: WhatsApp wa.me/385958558953","#akupresura #triggerpoint #manualna #fizioterapija #suprastudium #edukacija #zagreb #tečaj #palpacija",2026-07-24T11:00:00+02:00,Facebook format — duži caption je u redu. Vizual isti kao IG promo ali s dokumentacijskom fotografijom umjesto portreta instruktora. Overlay: directional_left.
SS_2026_TEST_01,instagram,feed_4x5,LAYOUT_04,hr,"""Razumio sam što palpacija zapravo znači tek kad sam to vidio na sebi.""","Marko Horvat · fizioterapeut, 4 godine prakse",,,,NONE,CARD_CREAM,none,"Jedan od naših polaznika o tome zašto anatomski modeli i knjige nisu dovoljni.

Palpacija se uči rukama — na živom tkivu, uz korekciju u realnom vremenu.

Info o sljedećem ciklusu: link u bio.","#testimonial #akupresura #triggerpoint #suprastudium #fizioterapija #edukacija",2026-07-29T09:00:00+02:00,"Testimonial layout. H1 = citat u Playfair italic. H2 = ime i uloga. Ime i uloga su fiktivni placeholder — zamijeniti stvarnim izjavama prije objave. Vizual bez fotografije, cream background."
SS_2026_STMT_01,instagram,square_1x1,LAYOUT_08,hr,"Akupresura nije relaksacija.",,,,@suprastudium,NONE,LIGHT,none,"Akupresura nije masaža. Nije relaksacija. Nije wellness tretman.

To je klinički pristup koji koristi specifičan pritisak na točkama za modulaciju bolnog obrasca — s jasnom logikom, procjenom prije i procjenom poslije.

Razlika nije u tehnici. Razlika je u razmišljanju.","#akupresura #suprastudium #triggerpoint #fizioterapija #kliničko",2026-08-05T09:00:00+02:00,"Provocative statement format. Samo H1, nema body teksta na vizualu. Kvadrat (1x1) format. Visok negativni prostor. Tekst centriran. Light background #F4F1EA."
```

---

## 4.3 Render instrukcije (10 bullet pointa)

1. **Mapiranje `layout_id` → struktura:** Svaki `layout_id` (LAYOUT_01–LAYOUT_08) odgovara precizno opisanom layoutu iz Sekcije 2 ovog dokumenta. Učitaj odgovarajući layout recept i primijeni sve parametre (pozicije, tipografiju, padding) točno kao što je opisano. Nemoj improvizirati pozicije elemenata.

2. **Mapiranje `image_asset_id` → fotografija:** Vrijednost ovog polja odgovara nazivu u Asset Manifestu (Sekcija 3). Ako je vrijednost `NONE` — ne koristiti fotografiju, koristiti jednobojnu pozadinu prema `color_variant`. Ako je ID naveden — koristiti odgovarajuću fotografiju s overlayem specificiranim u `overlay_style` polju.

3. **Primjena `color_variant`:** `DARK_WARM` = `#141311` pozadina. `DARK_DOCUMENTARY` = `#0e0e0e`. `LIGHT` = `#F4F1EA`. `CARD_CREAM` = `#FAF8F4`. Boje teksta i eyebrowa automatski slijede pravila iz Sekcije 1.4 ovog dokumenta za odabranu varijantu.

4. **Duljina teksta — fallback pravila:** Ako `headline` prelazi maksimalan broj znakova ili redaka za odabrani layout, skrati tekst do zadnje prirodne rečenične granice. Nikad rezati rečenicu na sredini. Ako nije moguće skratiti bez gubitka smisla — označi u outputu kao `[TEXT_OVERFLOW]` za review.

5. **`overlay_style` vrijednosti:** `directional_left` = gradijent koji tamniji s lijeva prema transparentnom desno (koristi vrijednost iz Sekcije 1.6). `bottom_fade` = gradijent koji tamniji odozdo prema vrhu (za vertikalno pozicionirani tekst). `none` = bez overlaya (jednobojni bg ili nema foto).

6. **Fallback ako nema fotografije (`image_asset_id = NONE`):** Automatski koristiti jednobojnu pozadinu prema `color_variant`. Eventualno dodati noise overlay (pattern-noise-overlay asset, opacity 0.04–0.06) ako je varijanta `DARK_WARM` ili `DARK_DOCUMENTARY`.

7. **`cta_text` je prazan:** Ako je `cta_text` polje prazno — ne generirati CTA gumb na vizualu. Post bez CTA-a je legitiman format. Ne dodavati CTA po defaultu.

8. **Tipografski fallback:** Ako Playfair Display nije dostupan pri renderu — koristiti Georgia kao fallback. Nikad Arial, Helvetica ili generički sans-serif za headline. Ako Inter nije dostupan — koristiti -apple-system / Segoe UI.

9. **Tretiranje `notes` polja:** `notes` su interne napomene za dizajnera i ne renderiraju se na vizualu. Pažljivo ih pročitati — mogu sadržavati specifične instrukcije za crop, boju, varijante sadržaja ili placeholder oznake.

10. **Batch konzistentnost:** Svi vizuali unutar jedne batch grupe (isti `platform` i `format`) moraju imati konzistentne margine, safe area i font veličine — čak i ako dolaze iz različitih layout recepata. Footer element (`footer_text`) uvijek zauzima isti položaj unutar safe area bez obzira na layout.

---

*Dokument generiran: 6. lipnja 2026.*  
*Izvor: DESIGN.md · BRAND_SYSTEM.md · docs/design-system.md · ManualTherapySchoolPage.tsx*  
*Verzija 1.0 — za Vizzy / internu upotrebu*
