# Supra Studium — Design System
## Course Page Reference (extracted from ManualTherapySchoolPage)

> ManualTherapySchoolPage je referentna implementacija. Ovi obrasci su kanon —  
> primjenjivati ih na buduće stranice, ne retroaktivno prepisivati ATP/CFM.

---

## 1. HERO FACTS BAND

Vizualni tretman za 4-kolumni info strip ispod hero videa.

**Typography scale (CourseHero.tsx):**
```
field label:  9.5px · uppercase · tracking-[0.25em] · color #B89A4F
value:       18px   · font-medium · color #0e0e0e
detail:      12px   · font-normal · color #3b3b3b
cell padding: py-7 px-6 md:px-8
```

**Pravilo:** Info strip, ne feature card. Kompaktan, bez decorative elemenata.  
Spacing između field/value/detail: `mb-2` / `mt-1`.  
Border opacity: `rgba(0,0,0,0.08)`.

---

## 2. WARM OFF-BLACK SECTION

Za tamne sekcije (kotizacija, dark metoda, dark pozadine).

```
Section bg:         #141311   (ne pure black, ne #0e0e0e)
Row separator gap:  bg-[#201e1a]
Primary text:       #ede9e3   (off-white, ne #ffffff)
Secondary text:     rgba(237,233,227,0.38)
Muted text:         rgba(237,233,227,0.32)
Brass accent:       #9e8a46   (muted brass, ne #B89A4F)
CTA gold:           bg-[#c9a832]/90 hover:bg-[#c9a832] · text: #1F1D1A
```

**Pravilo:** Nikad `bg-black` ili `bg-[#000000]`. Off-black daje toplu, kliničku atmosferu;  
čista crna daje wellness/luxury kontrast koji nije Supra.

---

## 3. EDITORIAL PRICING TABLE (KOTIZACIJA)

Grid za tablicu termina i cijena.

```tsx
// Wrapper separator
<div className="space-y-px bg-[#201e1a]">

// Svaki red
<div className="bg-[#141311] grid grid-cols-[1fr_auto_auto_auto] gap-6 px-8 py-6 items-center">
  <div>
    <p className="text-sm text-[#ede9e3] font-medium">{naziv}</p>
    <p className="text-xs mt-0.5" style={{ color: 'rgba(237,233,227,0.32)' }}>{lokacija}</p>
  </div>
  <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(237,233,227,0.38)' }}>{datum}</p>
  <p className="text-sm text-[#ede9e3]">{cijena}</p>
  <a href={pdf} ...>PDF Program →</a>
</div>
```

**PDF link:**  
`text-[10px] uppercase tracking-[0.2em]` · color `#9e8a46` → hover `#ede9e3`  
Tekst uvijek: **"PDF Program →"** (ne "PDF →", ne "Raspored →", ne "Preuzmi")

---

## 4. FAQ HEADING PATTERN

```
Eyebrow:  "Česta pitanja"   · text-[10px] uppercase tracking-[0.28em] · #B89A4F
Heading:  "Najčešća pitanja prije početka."
          font-playfair · text-3xl · #1F1D1A
```

**Pravilo:** Uvijek točka na kraju headinga. Ne "FAQ", ne "Pitanja i odgovori".  
Naslov govori "ovo je za tebe kad razmišljaš o upisu" — kontekstualan, ne generičan.

---

## 5. STICKY BAR CTA CONVENTION

Izbor teksta CTA gumba ovisno o statusu termina:

| Status termina | `ctaText` prop | `ctaHref` |
|----------------|---------------|-----------|
| Potvrđeni datum | `"Rezerviraj mjesto"` | Tally forma za rezervaciju |
| Nepotvrđeni datum ("Na upit") | `"Pošalji upit"` | `https://tally.so/r/wA5kvD` |
| Rasprodano | `soldOut={true}` → "Obavijesti me" | `#kontakt` |

**Primjer za nepotvrđene termine (MT pattern):**
```tsx
<CourseStickyBar
  locations={[{ city: "Zagreb", dates: "Na upit" }]}
  price=""
  ctaText="Pošalji upit"
  ctaHref="https://tally.so/r/wA5kvD"
  theme="light"
/>
```

**Lokacija u sticky baru:**  
Prikazuje se točno kao `city · dates`. Datum "Na upit" je legitiman.  
Nikad "Termin se potvrđuje" ili "Uskoro".

---

## 6. MOTION — DOCUMENTARY REVEAL

```tsx
const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

// Primjena:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

**Pravilo:** Samo `opacity` — nikad `y` translate reveal na course pages.  
Y-axis motion (npr. `y: 16 → 0`) daje "landing page" karakter koji nije Supra.  
Staggered delay: `custom={i * 0.07}` za liste, `custom={0.15}` za prateći sadržaj.

---

## 7. IMAGE DIRECTION

**Tretman:**
```css
filter: grayscale(8%)    /* blago desaturiranje, ne B&W */
```

**Za portretne slike predavača:**
```tsx
style={{
  filter: "grayscale(8%)",
  objectPosition: "[prilagoditi za fokus na lice]",
  transform: "scale(1.08–1.12)",
  transformOrigin: "center top"
}}
```

**Aspect ratios:**
- Portretne slike predavača: `aspect-[4/5]`
- Dokumentacijske slike (3-col grid): `aspect-[3/4]`
- Full-bleed intermezzo: `h-[55vh]`

**Zabranjeno:**
- `filter: brightness(1.1) saturate(1.2)` — previše warm/wellness
- Dramatični vignetteri kao overlay na statičnim slikama
- Stock-photo estetika (plave rukavice, staged hospital settings)

**Dozvoljeno:**
- Stvarne edukacijske situacije: parovi u radu, demonstracije, anatomske vizualizacije
- Prirodno osvjetljenje kliničkog prostora
- Blagi grayscale za konzistentnost između verschieditih kamera/fotografa

---

## 8. DARK METODA SECTION

Za sadržajne sekcije na tamnoj pozadini (metode, koncepti, filozofija programa):

```tsx
<section className="py-24 px-6 bg-[#0e0e0e]">
  {/* Eyebrow */}
  <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F]">Metoda</p>
  
  {/* Heading */}
  <h2 className="font-playfair text-3xl text-white">...</h2>
  
  {/* Body text */}
  <p className="text-sm text-white/55">...</p>
  
  {/* Lista */}
  <li className="text-sm text-white/70">
    <span className="w-1 h-1 rounded-full bg-[#a58d4e]" /> {/* bullet */}
  </li>
</section>
```

Napomena: Metoda sekcija koristi `#0e0e0e` (documentary dark), dok Kotizacija koristi  
`#141311` (warm off-black). Razlika je intencionalna — kontrast unutar iste stranice.

---

## 9. OBSERVATION CARDS

Za "što počinješ primjećivati" / klinički opservacijski blokovi:

```tsx
<div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
  {cards.map((card, i) => (
    <div className="bg-[#FAF8F4] px-8 py-10">
      <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
        "{card.text}"
      </p>
    </div>
  ))}
</div>
```

`gap-px bg-[#e3e3e3]` stvara tanki separator između kartica bez granica.  
Playfair italic za kratke observacijske citate — ne za body text.

---

## 10. CLINICAL BLOCKQUOTE

Za kliničke situacije / primjere iz prakse:

```tsx
<blockquote className="border-l border-[#a58d4e]/30 pl-8">
  <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
    {/* Klinički opis */}
  </p>
  <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
    {/* Zaključak/uvid */}
  </p>
</blockquote>
```

---

## ZABRANJENA ESTETIKA

Ne koristiti na course pages:

| Pattern | Zašto ne |
|---------|---------|
| `rounded-2xl` na CTA gumbima | SaaS, ne institucija |
| `scale(1.05)` hover na gumbima | Prenaglašen |
| `bg-black/50` overlay video | Gubi atmosferu videa |
| Glassmorphism card | Luxury funnel, ne dokumentarno |
| `y: [16, 0]` scroll reveal | Landing page karakter |
| `TextShimmer` na headlineu | Prenaglašen |
| Crveni urgency badge | Izravno zabranjeno |
| Cijena u primarnom CTA gumbu | Zabranjeno |
| Pure `#ffffff` text na tamnoj pozadini | Koristiti `#ede9e3` |
| Pure `bg-black` ili `#000000` | Koristiti `#141311` ili `#0e0e0e` |
