

## "Rasprodano" pečat na sve termine + obavijest za sljedeći tečaj

### Sto se mijenja

Na stranici `/skola-manualne-terapije` sva tri termina su rasprodana. Potrebno je to jasno vizualno prikazati na tri mjesta:

1. **Sticky bar (gornja traka)** -- dodati "RASPRODANO" badge pored svakog termina i promijeniti CTA gumb iz "Prijavi se" u "Obavijesti me"
2. **Hero ticker** -- zamijeniti rotirajuće poruke s jednom jasnom porukom: "Svi termini su rasprodani -- prijavite se za obavijest o novim datumima"
3. **Enrollment sekcija (dolje)** -- dodati crveni "RASPRODANO" pečat dijagonalno preko svake kartice termina, promijeniti CTA gumb u "Obavijesti me za sljedeći termin" koji scrolla do kontakt sekcije

### Detalji implementacije

#### 1. CourseStickyBar -- nova `soldOut` prop (src/components/ui/CourseStickyBar.tsx)
- Dodati `soldOut?: boolean` prop na interface
- Kad je `soldOut=true`:
  - Pored svakog termina prikazati mali crveni badge "Rasprodano"
  - CTA gumb mijenja tekst u "Obavijesti me" i scrolla na `#kontakt` (ContactFooter)
  - Gumb dobiva outline stil umjesto pune gold boje

#### 2. ManualTherapySchoolPage -- tri promjene (src/pages/ManualTherapySchoolPage.tsx)
- **Sticky bar**: dodati `soldOut={true}` prop
- **Hero ticker (linija ~237-249)**: zamijeniti tri ticker poruke jednom statičnom porukom: "Svi termini su trenutno rasprodani. Kontaktirajte nas za obavijest o novim datumima."
- **Enrollment kartice (linija ~1565-1622)**: svaka od 3 kartice dobiva crveni dijagonalni "RASPRODANO" pečat (apsolutno pozicioniran, rotiran -15deg, crveni tekst s bordurom)
- **Enrollment CTA (linija ~1636-1643)**: "Rezerviraj mjesto" mijenja se u "Obavijesti me za sljedeći termin" i umjesto otvaranja Tally forme scrolla na ContactFooter sekciju
- Dodati kratku poruku ispod CTA-a: "Ostavite nam kontakt podatke i javit cemo vam se cim otvorimo novi termin."

#### 3. Vizualni stil pecata
- Pozadina: `bg-red-600/90`
- Tekst: bijeli, bold, uppercase
- Rotacija: `-rotate-12`
- Pozicija: apsolutno centriran na kartici
- Border: `border-2 border-white`
- Padding: `px-4 py-1`
- Zaobljeni kutovi

### Datoteke koje se mijenjaju
- `src/components/ui/CourseStickyBar.tsx` -- nova `soldOut` prop + badge + promjena CTA
- `src/pages/ManualTherapySchoolPage.tsx` -- aktivirati `soldOut`, promijeniti ticker, dodati pecate, promijeniti enrollment CTA

