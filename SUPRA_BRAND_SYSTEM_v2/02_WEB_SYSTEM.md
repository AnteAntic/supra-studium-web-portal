# SUPRA BRAND SYSTEM v2 — WEB SYSTEM
_Verzija: 2.0_
_Datum: 28. svibnja 2026._
_Status: SOURCE OF TRUTH za web / institutional sistem_

> Ovaj dokument definira sve što se tiče weba: UX logiku, section hijerarhiju,
> tipografiju, boje, CTA disciplinu, enrollment flow, komponente, motion i mobile UX.
>
> **Čitati zajedno s `01_SHARED_CORE.md`** — filozofija, glasovi, claim certainty i AI behaviour
> žive tamo. Ovdje su web-specifične implementacije.
>
> **Referentna implementacija:** `src/pages/ManualTherapySchoolPage.tsx`
> To je najzrelija course stranica. Ekstrakcija obrazaca iz nje, ne copy-paste.

---

## SADRŽAJ

1. Karakter web sistema
2. Paleta — web specifično
3. Tipografija — skala i hijerarhija
4. Page struktura — sekcijska hijerarhija
5. Hero section — zaključani obrazac
6. Section patterns — biblioteca komponenti
7. CTA disciplina na webu
8. Enrollment flow — konverzija bez sales page energije
9. Navigation i sticky bar
10. Footer
11. Motion i animacija
12. Image direction za web
13. Mobile UX
14. Zabranjeni UI elementi — kompletna lista
15. Web copy rules
16. Web QA checklist

---

## 1. KARAKTER WEB SISTEMA

### Tri riječi

**Calm. Clinical. Editorial.**

Svaka stranica mora proći filter tih triju riječi.
Ako element nije ni calm, ni clinical, ni editorial — nema mjesta na stranici.

### Mentalna slika za agente i developere

Web treba izgledati kao:
- Privatni klinički institut s tradicijom
- Journal kliničke edukacije — art-directed, ali informativan
- Dokumentarni film koji opisuje metodu — ne prodaje je

Web ne smije izgledati kao:
- Online course marketplace
- Startup SaaS landing page
- Wellness retreat
- Motivacijska platforma
- Glassmorphism luxury funnel

### Kako web "prodaje" bez da prodaje

Konverzija na Supra webu dolazi iz:

```
1. Institucijskog povjerenja — ne iz persuazije
2. Kliničke specifičnosti — ne iz benefit lista
3. Jasnih faktualnih informacija — cijena, datum, lokacija, što se konkretno radi
4. Niskofrikcijskog kontakta — Tally forma ili WhatsApp, bez barijera
5. Respektiranja profesionalne inteligencije — čitatelj zna što mu treba

Nikad iz:
- Urgency / scarcity
- Emocionalne manipulacije ("samo zamislite što biste mogli...")
- Social proof railova (koliko ljudi se prijavilo, countdown timer)
- Benefit lista s iconama i checkmarkovima
- Cijena u CTA gumbu
```

Idealni posjetitelj dođe, pročita, prepozna da je ovo za njega, klikne "Pošalji upit" —
bez da je bio gurnut, zastrašen ili obećanjem impresioniran.

---

## 2. PALETA — WEB SPECIFIČNO

Web paleta je drugačija od social palete.
Social: tamna pozadina (`#13192a`) + gold + bijela.
Web: off-white editorial + warm off-black + muted brass.

### Primarne boje (web)

| Naziv | HEX / vrijednost | Upotreba |
|-------|-----------------|----------|
| **Off-white pozadina** | `#FAF8F4` | Primarna pozadina stranice |
| **Documentary dark** | `#0e0e0e` | Tamne sekcije (Metoda section) |
| **Warm off-black** | `#141311` | Kotizacija i dark enrollment sekcije |
| **Row separator** | `#201e1a` | Separator između redova u tamnim sekcijama |
| **Primary text** | `#1F1D1A` | Naslovi i body tekst na svijetloj pozadini |
| **Secondary text** | `#3b3b3b` | Body tekst, opisi |
| **Off-white text** | `#ede9e3` | Primarni tekst na tamnoj pozadini |
| **Muted text (dark bg)** | `rgba(237,233,227,0.38)` | Sekundarni tekst na tamnoj pozadini |
| **Brass akcent** | `#B89A4F` | Eyebrow text, field labels, gold detalji |
| **Muted brass** | `#9e8a46` | PDF linkovi, muted akcenti |
| **CTA gold** | `bg-[#c9a832]/90` | CTA gumb na tamnoj pozadini |

### Pravila palete

```
Nikad bg-black (#000000) — koristiti #141311 ili #0e0e0e
Nikad pure #ffffff text na tamnoj pozadini — koristiti #ede9e3
Bijela pozadina (#FAF8F4) je primarna za light sekcije
#13192a (dark navy) je za social, ne za web

Border opacity: rgba(0,0,0,0.08) za light sekcije
Separator: bg-[#e3e3e3] ili gap-px tehnika za observation cards
```

---

## 3. TIPOGRAFIJA — SKALA I HIJERARHIJA

### Font stack

```
Headline / display: Playfair Display (serif)
Body / UI:          Sistemski sans-serif (Tailwind default stack)
```

Playfair daje editorial karakter bez "luxury" konekcije.
Sistemski sans je institucijski, ne brended.

### Tipografska skala po elementu

| Element | Klasa / veličina | Font | Boja / opacity |
|---------|-----------------|------|----------------|
| Eyebrow label | `text-[10px] uppercase tracking-[0.28em]` | sans | `#B89A4F` |
| Field label (facts band) | `9.5px uppercase tracking-[0.25em]` | sans | `#B89A4F` |
| Hero headline | `text-2xl sm:text-3xl md:text-[2rem]` | Playfair SemiBold | `white` |
| H2 section heading | `font-playfair text-3xl` | Playfair | `#1F1D1A` ili `white` |
| H3 subsection | `font-playfair text-xl` | Playfair | `#1F1D1A` |
| Facts band value | `18px font-medium` | sans | `#0e0e0e` |
| Facts band detail | `12px font-normal` | sans | `#3b3b3b` |
| Body tekst (light bg) | `text-sm leading-relaxed` | sans | `#3b3b3b` ili `#1F1D1A` |
| Body tekst (dark bg) | `text-sm text-white/55` | sans | `rgba(255,255,255,0.55)` |
| Muted list (dark bg) | `text-sm text-white/70` | sans | `rgba(255,255,255,0.70)` |
| Observation card quote | `text-sm font-playfair italic` | Playfair Italic | `#1F1D1A` |
| CTA primary | `text-xs uppercase tracking-wider` | sans | context-dependent |
| CTA secondary | `text-sm` | sans | `white/80` |
| PDF link | `text-[10px] uppercase tracking-[0.2em]` | sans | `#9e8a46` |

### Pravila tipografije

```
Headline: Mixed case — nikad all-caps na hero headlineu. Playfair, manje nego što se čini.
Eyebrow: UVIJEK uppercase + tracking. Nikad Playfair za eyebrow.
Body: Ne pretrpavati. Manji tekst + više zraka > veći tekst + manje zraka.
Duljina linije: Idealno 65-75 znakova po liniji. max-w-2xl ili max-w-prose na body tekstovima.
```

---

## 4. PAGE STRUKTURA — SEKCIJSKA HIJERARHIJA

Ovo je **idealna course page** struktura. Ne funnel, ne feature page.

```
1.  HERO
    Video background, gradient overlay, klinički positioning headline.
    Vidi sekciju 5 za detalje.

2.  FACTS BAND
    4-kolumni info strip: trajanje, certifikat, polaznici, razina.
    Faktografski. Ne benefit-driven.

3.  KRATKA OBSERVACIJA
    2-4 rečenice. Stvarni problem u kliničkoj praksi.
    "Što terapeuti često vide, a ne znaju riješiti."
    Glas 1. Ne marketing uvod.

4.  OBSERVATION CARDS
    3 kartice. "Što počinješ primjećivati" — ne "Što ćeš naučiti."
    Klinički framing. Observacijski, ne benefit.

5.  CLINICAL SNAPSHOTS
    2-3 konkretna klinička slučaja s anatomskim detaljem.
    Blockquote format. Svaki slučaj ima uvid.

6.  METODA
    Tamna sekcija. Što je metoda, zašto radi mehanički.
    Bez "jedinstven pristup". Proceduralnost > inspiracija.

7.  PROGRAM PO DANIMA
    Konkretan. Dan 1: ovo. Dan 2: ovo.
    Bez poetičnih naziva dana. Bez "transformacijski journey".

8.  PREDAVAČ
    Filozofija, ne ego biografija.
    Što Ante vjeruje o kliničkom razmišljanju — ne lista postignuća.

9.  KOTIZACIJA I TERMIN
    Čisto. Cijena, datum, lokacija, format.
    Bez "investiraj u sebe". Bez scarcity.

10. FAQ
    "Najčešća pitanja prije početka." (točka na kraju)
    Glas 3. Informacija bez ukrasa.

11. CTA ZAKLJUČNA SEKCIJA
    Miran. Profesionalan.
    Jedan CTA gumb ili forma. Bez urgency.
```

### Što ova struktura nije

```
❌ Ne počinje s "Zašto ovaj program" benefit listom
❌ Ne sadrži social proof rail (testimonijali u horizontalnom scroll)
❌ Ne sadrži countdown timer ili "ostala X mjesta" badge
❌ Ne sadrži FAQ koji pita "Je li ovo pravo za mene?" (to je coaching funnel uzorak)
❌ Ne završava s "Ne čekaj — upiši se danas!"
```

---

## 5. HERO SECTION — ZAKLJUČANI OBRAZAC

_Status: ✅ ZAKLJUČANO — v1 final. Pilot implementiran na AkupresuraPage.tsx._

### Tehnički parametri

```
Video overlay gradient:
  linear-gradient(100deg, rgba(0,0,0,0.78) 0%, ..., transparent 78%)
  Lijeva strana tamnija (tekst zona), desna atmosferična (video zona)

Layout:
  items-end pb-[18%] md:pb-[16%]
  Content je podignut od dna, ne centriran

Container:
  max-w-2xl — dovoljno širok da headline ima zrak

Headline tipografija:
  font-playfair font-semibold text-2xl sm:text-3xl md:text-[2rem]
  Mixed case — nikad all-caps
  Manji nego što se čini intuitivno — to je namjerno
  Bez TextShimmer ili bilo kakve animacije na tekstu
```

### Hero copy pravila

```
HEADLINE:
  Klinički positioning — ne marketinška poruka
  Opisuje gdje terapeut VEĆ JEST — ne kamo će ići
  Primjer: "Kada znaš da si / na pravom mjestu."

  Zabranjeno:
  ❌ "Postani terapeut koji..." (obećanje budućnosti)
  ❌ "Transformiraj svoju praksu" (transformacijski jezik)
  ❌ "Jedini program koji..." (ekskluzivni claim)

SUBHEADLINE:
  text-sm text-white/72 — vidljiv ali sekundaran
  Prepoznaje profesionalnu stvarnost čitatelja
  Glas 1 ili Glas 3

CTA PRIMARY:
  rounded-sm uppercase tracking-wider text-xs — institutional stamp
  Tekst: "Saznaj više" / "Pogledaj program" / "Pošalji upit"
  Nikad: "Upiši se odmah!" / "Rezerviraj mjesto sada!" / cijena u gumbu

CTA SECONDARY:
  Plain <button> bez pozadine
  Em-dash prefix: "— Pogledaj video"
  Ili: "— Program i termini"
```

### Što hero section nije

```
❌ Ne sadrži feature listu ("✓ 3 dana praktičnog rada ✓ Certifikat...")
❌ Ne sadrži social proof ("200+ polaznika zadovoljno")
❌ Ne sadrži cijenu u hero zoni
❌ Ne sadrži urgency ("Upisi zatvaraju...")
❌ Overlay nije bg-black/50 — gubi atmosferu videa
❌ Glassmorphism card oko headline teksta
```

---

## 6. SECTION PATTERNS — BIBLIOTECA KOMPONENTI

### Facts Band (Info Strip)

Ispod hero videa. 4 kolumne. Kompaktan.

```
field label:  9.5px · uppercase · tracking-[0.25em] · #B89A4F
value:        18px · font-medium · #0e0e0e
detail:       12px · font-normal · #3b3b3b
padding:      py-7 px-6 md:px-8
border:       rgba(0,0,0,0.08)
```

Sadržaj: Trajanje / Certifikat / Max. polaznika / Razina
Ne: "Što ćeš dobiti" / "Benefit 1 / Benefit 2"

---

### Observation Cards

Za "što počinješ primjećivati" blokove. Observacijski, ne benefit.

```tsx
<div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
  {cards.map((card) => (
    <div className="bg-[#FAF8F4] px-8 py-10">
      <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
        "{card.text}"
      </p>
    </div>
  ))}
</div>
```

`gap-px bg-[#e3e3e3]` = tanki separator bez vidljive granice.
Tekst uvijek Playfair italic — kao zapisana observacija, ne bullet point.

**Copy pravila za observation cards:**
```
✅ "Pacijent koji je bio na tretmanima godinu dana, bez jasnog napretka."
✅ "Bol koja se premješta — ali ne nestaje."
✅ "Tretiraš simptom, a uzrok ostaje nepromijenjen."

❌ "Naučit ćeš precizne tehnike koje daju rezultate."
❌ "Postani terapeut koji razumije mehaniku boli."
❌ "Dobij certifikat koji se prepoznaje u struci."
```

---

### Clinical Blockquote

Za konkretne kliničke slučajeve iz prakse. Anatomski detalj.

```tsx
<blockquote className="border-l border-[#a58d4e]/30 pl-8">
  <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
    {/* Opis slučaja — specifičan, anatomski */}
  </p>
  <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
    {/* Uvid / zaključak terapeuta */}
  </p>
</blockquote>
```

Gold left border (`#a58d4e` na 30% opacity) = institucijski marker, ne dekoracija.

---

### Metoda Section (Dark)

```tsx
<section className="py-24 px-6 bg-[#0e0e0e]">
  <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F]">Metoda</p>
  <h2 className="font-playfair text-3xl text-white">...</h2>
  <p className="text-sm text-white/55">...</p>
  <li className="text-sm text-white/70">
    <span className="w-1 h-1 rounded-full bg-[#a58d4e]" />
    {/* bullet točka */}
  </li>
</section>
```

`#0e0e0e` = documentary dark (drugačiji od `#141311` warm off-black u kotizaciji).
Razlika je intencionalna — kontrast unutar iste stranice.

---

### Editorial Pricing Table (Kotizacija)

```tsx
<div className="space-y-px bg-[#201e1a]">
  <div className="bg-[#141311] grid grid-cols-[1fr_auto_auto_auto] gap-6 px-8 py-6">
    <div>
      <p className="text-sm text-[#ede9e3] font-medium">{naziv}</p>
      <p className="text-xs mt-0.5" style={{ color: 'rgba(237,233,227,0.32)' }}>{lokacija}</p>
    </div>
    <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(237,233,227,0.38)' }}>{datum}</p>
    <p className="text-sm text-[#ede9e3]">{cijena}</p>
    <a ...>PDF Program →</a>
  </div>
</div>
```

PDF link tekst: uvijek **"PDF Program →"** — ne "PDF →", ne "Preuzmi", ne "Raspored →".

**Copy pravila za kotizaciju:**
```
Samo faktualno. Cijena. Datum. Lokacija. Format. Što je uključeno.

❌ "Investicija u tvoju budućnost: 1.200 kn"
❌ "Po cijeni jednog vikenda možeš..."
❌ "Early bird: ograničeno"

✅ "1.200 kn · uključuje materijal i certifikat"
✅ "Datum: 14–16. lipnja 2026. · Zagreb"
✅ "Mjesta su ograničena — radimo u malim grupama."
```

---

### FAQ Section

```
Eyebrow:  "Česta pitanja"  — text-[10px] uppercase tracking-[0.28em] · #B89A4F
Heading:  "Najčešća pitanja prije početka."
          font-playfair · text-3xl · #1F1D1A
```

Uvijek točka na kraju headinga.
Ne "FAQ", ne "Pitanja i odgovori", ne "Imaš pitanja?".

**Copy pravila za FAQ:**
```
Glas 3 dominira — institucijski, jasan, bez osobnih referenci.
Odgovori su direktni i potpuni.
Ne završavati FAQ pitanjima s "Hoće li ovo promijeniti moju praksu?" (coaching framing).

Standardna pitanja:
  "Je li program namijenjen polaznicima bez iskustva?"
  "Što je uključeno u kotizaciju?"
  "Kako izgleda certifikat i je li priznat?"
  "Koliko polaznika ima u grupi?"
  "Što donijeti na tečaj?"
```

---

### Predavač Section

Filozofija, ne ego biografija.

```
Struktura:
  1. Jedan uvid o tome kako Ante razmišlja o terapiji (ne "tko sam ja")
  2. Kratki klinički kontekst — iz čega je nastao ovaj pristup
  3. Iskustvo kao broj, ne kao titule (npr. "15+ godina kliničkog rada")
  4. Fotografija: dokumentarna, u radu — ne portretna s nasmješenim pogledom u kameru
```

**Zabranjeno u predavač sekciji:**
```
❌ "Moja misija je..."
❌ "Vjerujem da svaki terapeut može..."
❌ "Promijenio sam živote stotina terapeuta."
❌ Popis certifikata i titula bez konteksta
❌ Motivacijska biografija ("iz male klinike do...")
```

---

## 7. CTA DISCIPLINA NA WEBU

### Temeljni princip weba

Web CTA je **poziv na informaciju** — ne poziv na kupnju.

Čitatelj koji je spreman, sam će kliknuti.
Cilj nije "konvertirati" — cilj je ukloniti trenje između čitatelja i sljedećeg koraka.

### CTA hijerarhija na stranici

```
Primarna akcija (jedna po stranici):
  "Pošalji upit" → Tally forma
  "Rezerviraj mjesto" → Tally forma (kad je termin potvrđen)

Sekundarna akcija (opcionalna):
  "PDF Program →" (u kotizaciji)
  "— Pogledaj video" (u hero sekciji)

Sticky bar CTA (uvijek vidljiv na scroll):
  Isti tekst kao primarna akcija
  Bez cijene u sticky baru
```

### CTA gumb stilovi

```
PRIMARY (dark bg, warm gold):
  bg-[#c9a832]/90 hover:bg-[#c9a832]
  text-[#1F1D1A] — tamni tekst na gold gumbu
  rounded-sm — institutional stamp, ne rounded-2xl

PRIMARY (light bg, dark):
  bg-[#1F1D1A] hover:bg-[#141311]
  text-white
  rounded-sm

SECONDARY (plain button):
  Bez pozadine, bez bordera
  Em-dash prefix: "— Pogledaj video"
  text-white/80

PDF link:
  text-[10px] uppercase tracking-[0.2em]
  Boja: #9e8a46 → hover: #ede9e3
  Uvijek: "PDF Program →"
```

### Zabranjeni CTA stilovi

```
❌ rounded-2xl (SaaS karakter)
❌ scale(1.05) hover efekt (prenaglašen)
❌ Cijena u tekstu CTA gumba ("Upiši se — 1.200 kn")
❌ Urgency u CTA gumbu ("Rezerviraj dok ima mjesta!")
❌ Dva primarna CTA-a blizu jedan drugom
❌ CTA s ikonom/emojijom (strogo zabranjeno na webu)
```

---

## 8. ENROLLMENT FLOW — KONVERZIJA BEZ SALES PAGE ENERGIJE

### Što je enrollment flow na Supra webu

Enrollement flow nije "funnel" — to je **informacijska putanja** koja čitatelju
daje sve što treba znati, bez manipulacije.

```
Korak 1 — Prepoznavanje
  Hero headline opisuje gdje terapeut već jest.
  Čitatelj misli: "Ovo je za mene."

Korak 2 — Provjera relevantnosti
  Observation cards, klinički slučajevi, program po danima.
  Čitatelj misli: "Da, ovo je ono što mi treba u praksi."

Korak 3 — Provjera institucije
  Predavač sekcija, metoda, format.
  Čitatelj misli: "Ovo zvuči ozbiljno, ne kao generični seminar."

Korak 4 — Provjera logistike
  Kotizacija, termin, lokacija, što je uključeno.
  Čitatelj misli: "U redu, organizacija i cijena su jasni."

Korak 5 — Razrješenje sumnje
  FAQ.
  Čitatelj misli: "Sva pitanja koja sam imao — odgovorena."

Korak 6 — Akcija
  Sticky bar ili zaključna sekcija.
  Čitatelj klikne "Pošalji upit" ili "Rezerviraj mjesto".
```

### Što narušava enrollment flow

```
❌ Urgency badgevi koji prekidaju čitanje
❌ Popup forme koje se pojavljuju prije nego čitatelj dođe do kotizacije
❌ Social proof rail koji oduzima fokus od sadržaja
❌ Previše CTA-a po stranici (CTA fatigue)
❌ Cijene skrivene iza "kontaktirajte nas" (čitatelj zatvori stranicu)
❌ FAQ koji je marketing pitch prerušen u pitanja

✅ Cijena vidljiva bez klikanja
✅ Tally forma = niskofrikcijski kontakt (ne mailto:)
✅ WhatsApp link dostupan (terapeuti komuniciraju WhatsAppom)
✅ Sticky bar koji prati scroll ali ne ometa čitanje
```

### Sticky bar konvencija

| Status termina | CTA tekst | Link |
|----------------|-----------|------|
| Potvrđen datum | "Rezerviraj mjesto" | Tally forma za rezervaciju |
| Nepotvrđen ("Na upit") | "Pošalji upit" | `https://tally.so/r/wA5kvD` |
| Rasprodano | "Obavijesti me" | `#kontakt` |

Datum se prikazuje točno kao: `Zagreb · 14–16. lipnja`
"Na upit" je legitiman — ne "Uskoro", ne "Termin se potvrđuje".

---

## 9. NAVIGATION I STICKY BAR

### Navigacija

```
Logo: gornji lijevi kut
Links: Programi · O Učilištu · Raspored · Kontakt
Stilizacija: minimalna, bez hover animacija s naglašenim efektima
Background: bijeli ili proziran — ne tamni dropdown
Mobile: hamburger menu, clean lista
```

**Zabranjeno u nav:**
```
❌ "Prijavi se odmah!" kao nav link
❌ Dropdown s previše opcija (kognitivno opterećenje)
❌ Mega menu koji zauzima pola ekrana
❌ Urgency badge u nav baru ("2 mjesta!")
```

### Sticky bar

Prati scroll na course stranicama.
Prikazuje: naziv tečaja (skraćen) · datum · CTA gumb.

```
Mobile: CTA gumb na punoj širini ispod informacija
Desktop: info lijevo, CTA desno
Theme: "light" (bijela pozadina) ili "dark" — ovisno o sekciji ispod
Gap: sticky bar ne smije imati vidljiv razmak do nav bara
```

---

## 10. FOOTER

### Struktura footera

```
Lijevo:   Logo + kratki opis institucije (Glas 3, 1-2 rečenice)
Centar:   Navigacijski linkovi + programi
Desno:    Kontakt: adresa, email, telefon, WhatsApp link
Dolje:    © 2026 Učilište Supra Studium · Sva prava zadržana
```

### Footer copy pravila

```
Opis institucije (footer):
  Glas 3, max 2 rečenice.
  "Učilište Supra Studium pruža edukaciju iz manualne terapije za licencirane terapeute
  i fizioterapeute. Sjedište: Zagreb."

Zabranjeno u footeru:
❌ "Pridruži nam se i postani super-terapeut!"
❌ Newsletter signup s "Ne propusti naše novosti!"
❌ Social media ikone s "Zaprati nas!"

Dozvoljeno u footeru:
✅ Linkovi na social profile bez CTA-a
✅ Adresa i kontakt
✅ Link na PDF programi (ako postoje)
```

---

## 11. MOTION I ANIMACIJA

### Jedini dozvoljeni reveal pattern

```tsx
const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};
```

**Samo opacity.** Nikad `y` translate reveal na course pages.

Y-axis motion (`y: 16 → 0`) daje "landing page" karakter koji nije Supra.
Opacity fade je dokumentarni reveal — sadržaj se pojavljuje, ne uskoči.

### Stagger

```
Liste: custom={i * 0.07}
Prateći sadržaj: custom={0.15}
```

### Zabranjene animacije

```
❌ scale(1.05) hover na gumbima i karticama
❌ Y-axis scroll reveal
❌ TextShimmer ili bilo koji shimmer efekt na tekstu
❌ Parallax efekti koji usporavaju scroll
❌ Bounce animacije
❌ Autoplay animirani elementi koji privlače pozornost od sadržaja
```

### Video

```
Video u hero sekciji: autoplay, muted, loop, bez kontrola
Reduced-motion: video se ne reproducira (koristiti poster sliku)
Poster slika: uvijek definirana (thumbnail koji odgovara estetici)
```

---

## 12. IMAGE DIRECTION ZA WEB

### Tretman slika

```css
filter: grayscale(8%)   /* blago desaturiranje — konzistentnost između fotografa */
```

Ne B&W. Ne dramatično desaturirano. Samo 8% — jedva vidljivo ali unifikujuće.

### Portretne slike predavača

```tsx
style={{
  filter: "grayscale(8%)",
  objectPosition: "[prilagoditi za fokus na lice]",
  transform: "scale(1.08–1.12)",
  transformOrigin: "center top"
}}
```

### Aspect ratios

```
Portret predavača:          aspect-[4/5]
Dokumentacijske slike:      aspect-[3/4]  (3-col grid)
Full-bleed intermezzo:      h-[55vh]
Hero video poster:          16/9 (ne 9/16)
```

### Zabranjeni tretmani

```
❌ filter: brightness(1.1) saturate(1.2) — previše warm/wellness
❌ Dramatični vignetteri kao overlay na statičnim slikama
❌ Stock-photo estetika (plave rukavice, staged hospital, bijele kute)
❌ Fotografija koja ne prikazuje terapeutski rad (lifestyle, nature, abstract)
```

### Dozvoljeni motivi na webu

```
✅ Parovi u radu — terapeut radi na pacijentu
✅ Demonstracija tehnike — predavač i polaznici
✅ Anatomske vizualizacije — klinički ilustrativne
✅ Grupne fotografije s diplomiranjem
✅ Prirodno osvjetljenje kliničkog prostora
```

---

## 13. MOBILE UX

### Temeljni princip

Mobile iskustvo mora biti **jednako institucijsko** kao desktop.
Sužavanje ekrana ne opravdava sužavanje standarda.

### Specifična pravila

```
Hero headline na mobile:
  text-2xl — nikad manji od 22px
  Vidljiv bez scrollanja u prvim 3 sekunde
  Poster slika mora biti klinički relevantna (ne blur placeholder)

Facts band na mobile:
  2x2 grid umjesto 4-kolumni
  Ista tipografska skala, ne smanjivati

Observation cards na mobile:
  Vertikalni stack (md:grid-cols-3 → default stack na mobile)
  Padding: px-6 py-8 (ne smanjivati ispod px-4)

Kotizacija na mobile:
  Grid se adaptira na 2-kolumni ili vertikalni stack
  Cijena uvijek vidljiva bez horizontalnog scrolla

Sticky bar na mobile:
  CTA gumb na punoj širini
  Datum i info iznad gumba
  Min height: dovoljno za touch target (44px+)

Tekst na mobile:
  Body text: min 14px (text-sm)
  Ne koristiti text-xs za body paragraphe na mobile
  Line height: leading-relaxed minimum
```

### Zabranjeno na mobile

```
❌ Horizontalni scroll osim za namjerne galerije
❌ Touch target manji od 44px za sve interaktivne elemente
❌ Tekst koji se reflow-uje ispod 320px viewport-a
❌ Popup forme koje blokiraju content na mobile
❌ Video autoplay bez poster slike na mobile
❌ Fixed positioned elementu koji blokiraju scroll na mobile
```

---

## 14. ZABRANJENI UI ELEMENTI — KOMPLETNA LISTA

Ovi elementi **nikad** ne smiju biti na Supra webu. Bez iznimke. Bez diskusije.

### Vizualni elementi

```
❌ rounded-2xl na CTA gumbima (SaaS karakter)
❌ scale(1.05) hover efekt na gumbima i karticama
❌ bg-black/50 overlay preko videa (gubi atmosferu)
❌ Glassmorphism card kao hero content wrapper
❌ Crveni ili narančasti urgency badgevi
❌ Countdown timer bilo gdje na stranici
❌ Animirani progress bar "samo X mjesta ostalo"
❌ Social proof ticker ("Ana iz Splita se upravo prijavila")
❌ TextShimmer ili shimmer efekti na tekstu
❌ Y-axis scroll reveal (landing page karakter)
❌ bg-black ili #000000 pozadina (koristiti #141311)
❌ Pure #ffffff tekst na tamnoj pozadini (koristiti #ede9e3)
❌ Emojiji bilo gdje na stranici (niti u footeru)
```

### Sadržajni pattern anti-pattern

```
❌ Benefit lista s ikona + naslov + tekst grid (online course marketplace uzorak)
❌ Testimonijal karusel (carousel testimonials)
❌ "Stotine zadovoljnih polaznika" social proof counter
❌ Pricing plan kartica s "Najpopularnije!" badgeom
❌ Before/after usporedba ("Prije Supre / Nakon Supre")
❌ Feature vs. competitor tablica ("Mi vs. oni")
❌ Guru fotografija (ruke sklopljene, ozbiljan pogled, profesionalna studijska rasvjeta)
❌ "O meni" sekcija s listom certifikata i nagrada
```

### Copy pattern anti-pattern

```
❌ Hero headline koji je motivacijska poruka
❌ "Transformiraj svoju praksu" bilo gdje
❌ "Jedinstven pristup koji garantira..." (ekskluzivni + guarantee claim)
❌ Cijena u CTA gumbu
❌ Urgency copy ("Upisi se zatvaraju u...")
❌ Scarcity copy ("Ostala 3 mjesta!")
❌ Social proof copy ("Pridruži se 200+ terapeuta koji...")
❌ Benefit-first hero subheadline ("Naučit ćeš X, Y i Z")
```

---

## 15. WEB COPY RULES

Detaljna filozofija je u `01_SHARED_CORE.md`. Ovdje samo web-specifične primjene.

### Glas po sekciji

```
Hero:           Glas 1 (terapeut-edukator koji identificira klinički kontekst)
                ili Glas 3 (institucija koja se pozicionira)

Kratka observ.: Glas 1 — klinički problem iz prakse

Observation cards: Glas 1 — observacijski, iz kliničke stvarnosti

Clinical snap:  Glas 1 — specifičan slučaj, anatomski detalj

Metoda:         Glas 3 (institucija objašnjava) ili Glas 1 (terapeut objašnjava mehanizam)

Program po dan.: Glas 3 — proceduralnost, bez poetičnih naziva

Predavač:       Glas 1 u prvom licu — Ante govori direktno, ali bez guru framinga

Kotizacija:     Glas 3 — informacija bez ukrasa

FAQ:            Glas 3 — jasan, direktan, potpun

CTA sekcija:    Glas 3 — "Sljedeći korak je jednostavan."
```

### Subheadline filozofija (kritično)

> **Supra subheadline prepoznaje gdje terapeut već jest — ne kamo će ići.**

```
Stari marketing: "Naučit ćeš kako tretirati rame za 3 dana."
Supra ton:       "Za terapeute koji u svakodnevnoj praksi sreću pacijente
                  s kroničnom boli ramena i traže sistematičan pristup procjeni."

Razlika: "naučit ćeš" = obećanje budućnosti / "za terapeute koji" = prepoznavanje sadašnjosti
```

### Duljine copy-a po sekciji

```
Hero headline:          1-2 linije, max 8-10 riječi
Hero subheadline:       1-3 rečenice
Kratka observacija:     2-4 rečenice (paragraph)
Observation card:       1-2 rečenice po kartici
Clinical snapshot:      3-5 rečenica (slučaj + uvid)
Metoda paragraf:        3-6 rečenica po paragraphu
Program opis (dnevni):  2-4 rečenice po danu
Predavač paragraf:      max 3 paragrafa
FAQ odgovor:            2-5 rečenica — direktan, potpun, bez dodavanja nepotrebnog
```

---

## 16. WEB QA CHECKLIST

Koristiti prije deploya svake stranice ili izmjene.

### Layout i vizual

```
☐ Off-white pozadina (#FAF8F4) — nije bijela (#ffffff)
☐ Tamne sekcije: #0e0e0e (Metoda) / #141311 (Kotizacija)
☐ Nema bg-black niti #000000 pozadina
☐ Tekst na tamnoj pozadini: #ede9e3 (ne #ffffff)
☐ Brass akcent: #B89A4F (ne #FFD700 ili slični)
☐ CTA gumb: rounded-sm (ne rounded-2xl)
☐ Nema scale(1.05) hover na gumbima
☐ Nema countdown timera
☐ Nema urgency badgeva
☐ Nema emojija
```

### Hero sekcija

```
☐ Overlay gradient: lijevo tamniji, desno atmosferično
☐ Video poster slika definirana
☐ Headline: Playfair, mixed case, max ~8 riječi
☐ Headline ne sadrži transformacijski jezik
☐ CTA primary: rounded-sm, uppercase, bez cijene
☐ CTA secondary: plain button s em-dash
☐ Nema feature liste u hero zoni
```

### Copy

```
☐ Subheadline prepoznaje gdje terapeut jest (ne kamo će ići)
☐ Nema absolutnih result claima
☐ Kotizacija sekcija: samo faktualno
☐ FAQ: Glas 3, točka na kraju headinga
☐ Program po danima: konkretan, bez poetičnih naziva
☐ Predavač sekcija: filozofija, ne lista certifikata
☐ Nema "transformiraj", "premium", "jedinstven", "garantirano"
```

### Motion

```
☐ Jedino opacity fade reveal (ne Y-axis)
☐ Reduced-motion: animacije isključene, video pauziran
☐ Video: autoplay muted loop, poster definiran
```

### Mobile

```
☐ Hero headline vidljiv bez scrolla (mobile viewport)
☐ Sticky bar: CTA touch target min 44px
☐ Observation cards: vertikalni stack na mobile
☐ Nema horizontalnog scrolla osim namjernih galerija
☐ Body tekst: min text-sm (14px) na mobile
```

### Enrollment flow

```
☐ Cijena vidljiva bez klikanja
☐ Sticky bar CTA tekst odgovara statusu termina
☐ Tally forma ili WhatsApp link dostupan
☐ Nema popup formi
☐ Jedan primarni CTA po sekciji
```

---

_SUPRA BRAND SYSTEM v2 — 02_WEB_SYSTEM.md_
_Ante Antić / Učilište Supra Studium_
_28. svibnja 2026._
