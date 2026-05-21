# BRAND SYSTEM — Supra Studium
> Distilled from SUPRA_LANGUAGE_SYSTEM_v2.md for AI orchestration use.
> Source: ~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/SUPRA_LANGUAGE_SYSTEM_v2.md

---

## 1. BRAND PHILOSOPHY

Supra Studium ne prodaje tehnike. Prodaje sposobnost razmišljanja koja postaje vidljiva kroz ruke.

Brand informira, pokazuje, demonstrira. **Ne motivira. Ne transformira. Ne inspirira** u smislu coachinga.

Povjerenje dolazi iz preciznosti, ne iz topline. Ako tekst zvuči kao da želi da se čitatelj osjeća dobro — nije Supra tekst.

**Centralna napetost:** "pristup vs. nagađanje" — jedina napetost koja smije pokretati narativ.

---

## 2. AUTHORITY MODEL

Supra se pozicionira kao institucija koja razvija **kliničko razmišljanje kroz praksu** — ne instituicija koja podučava tehnike.

| "Tehnika" pozicioniranje | "Kliničko razmišljanje" pozicioniranje |
|--------------------------|---------------------------------------|
| "Naučit ćeš X tehniku" | "Naučit ćeš kada X — i kada ne X" |
| "Tretman koji radi" | "Pristup koji se može ponoviti" |
| "Rezultati od 1. tretmana" | "Razumijevanje koje traje" |
| "Dodaj alat u toolkit" | "Promijeni način čitanja pacijenta" |

Authority se **demonstrira**, ne deklarira. Ne kaže se "mi razvijamo kliničko razmišljanje" — pokazuje se kroz sadržaj koji prikazuje kliničko razmišljanje u akciji.

---

## 3. TRI GLASA BRANDA

### Glas 1 — Terapeut-edukator
**Kada:** Edukativni sadržaj, course pages, klinički postovi  
**Ton:** Observational, klinički precizan, kolega-iz-prakse. Fokus na slučaju/mehanizmu, ne na osobi.

### Glas 2 — Organizator-pokretač
**Kada:** Event najave, upisi, pozivi za prijavu  
**Ton:** Direktan, konkretan, miran entuzijazam bez hypea.

### Glas 3 — Institucija
**Kada:** Web stranica, opisi programa, FAQ, logistika  
**Ton:** Profesionalan, jasan, bez osobnih referenci. Informacija bez ukrasa.

**Pravilo:** Jedan post = jedan glas. Ne miješati.

---

## 4. CLAIM CERTAINTY SYSTEM

### Zabranjeni registar (absolutni claims)
- "Uklanja bol" / "Garantira rezultat" / "Resetira živčani sustav"
- "Transformira postura" / "Od 1. tretmana" / "Uvijek radi"
- "Jedini pristup koji..."

### Dozvoljeni registar (observational/practical)
- "Često vidimo poboljšanje" / "U praksi, kod mnogih pacijenata"
- "Može pomoći u slučajevima gdje..." / "Napetost se smanjuje"
- "Ova regija često sudjeluje u obrascu boli"
- "Vrijedi provjeriti u diferencijalnoj procjeni"

### Observational vocabulary
`često` · `u praksi` · `kod mnogih pacijenata` · `može pomoći` · `često vidimo` · `vrijedi provjeriti` · `u slučajevima gdje` · `jedan od mogućih uzroka` · `dio diferencijalnog razmišljanja` · `postepeno`

---

## 5. FORBIDDEN VS ALLOWED CADENCE

### Zabranjeno nikad koristiti

**Openinzi:**
- "Ovo me promijenilo." / "Nisam mogao vjerovati." / "Zamislite..."
- "U današnjem dinamičnom svijetu..."

**Zaključci/CTA:**
- "Ne propusti!" / "Javi se ODMAH!" / "Ovo je zadnja šansa!"
- "Investiraj u sebe!" / "Postani bolji terapeut!"

**Vrijednosni iskazi:**
- "Transformativno iskustvo." / "Life-changing." / "Revolucionarni pristup."
- "Jedinstven u Hrvatskoj." / "Nema drugog takvog programa."

**Ritam — fragment triplet:**
- Fragment. Fragment. Fragment. → uvijek spoji u prirodne rečenice

### Allowed — karakteristični Supra ritam

**Openinzi koji rade:**
- "Pacijent godinu dana na terapiji. Rame i dalje boli." (klinički slučaj kao uvod)
- "Subokcipitalna regija je jedan od najčešće zanemarenih područja..."
- "Na zadnjem seminaru radili smo slučaj koji se često pogrešno dijagnosticira."

**Prijelazi koji rade:**
- "Evo zašto to radi." / "Konkretno, to znači..." / "U praksi, to izgleda ovako."

**Zaključci koji rade:**
- "To je ono što gledamo na [naziv tečaja]."
- "Ako ovo prepoznaješ u svojoj praksi — vrijedi razgovarati."
- (bez zaključka — uvid koji završi sam po sebi)

---

## 6. CTA PHILOSOPHY

**CTA Mode A — Edukativni moment (bez transakcije):**
```
✅  "Info o sljedećem ciklusu: tally.so/r/wA5kvD"
✅  "Više o [temi] — link u bio."
❌  "Prijavi se dok ima mjesta!" / "Ne propusti ovu priliku!"
```

**CTA Mode B — Pre-enrollment:**
```
✅  "Sljedeći termin: [datum], Zagreb. Prijave: tally.so/r/wA5kvD"
✅  "Mjesta su ograničena — radimo u malim grupama. Prijave otvorene."
❌  "Mjesta lete!" / "Investiraj u sebe — odmah!"
```

**Standardni CTA blok:**
```
📩 Prijavi se: tally.so/r/wA5kvD
💬 WhatsApp: wa.me/385958558953
📍 Zagreb | @suprastudium
```

**Pravilo:** Jedan CTA po postu, bez iznimke. Post bez CTA-a je legitiman format.

---

## 7. WEB COPY RULES (relevantno za Claude Code prompts)

### Hero section pravila
- **Headline:** Klinički positioning, ne marketinška poruka. Mixed case, ne all-caps. Confident, manji.
- **Subheadline:** Prepoznaje gdje terapeut **već jest** — ne kamo će ići. Glas 3 ili Glas 1.
- **CTA primary:** `rounded-sm uppercase tracking-wider text-xs` — institutional stamp
- **CTA secondary:** plain button s em-dash prefix

### Zabranjeni UI elementi (iz CLAUDE.md)
- Crveni urgency badgevi ("Ostala X mjesta!")
- Cijena u glavnom CTA gumbu
- `rounded-2xl` na CTA gumbima
- `scale: 1.05` hover efekti na gumbima
- Full black overlay (bg-black/50) preko videa
- Glassmorphism card kao hero content wrapper

### Idealna page struktura
1. Hero — klinički positioning
2. Kratka observacija — stvarni problem u praksi
3. "Što počinješ primjećivati" — observation cards, ne benefit cards
4. Clinical snapshots — 2–3 konkretna slučaja
5. Metoda — tehnika s mehanizmom
6. Program po danima — konkretno, bez poetičnih naziva
7. Predavač — filozofija, ne ego biografija
8. Cijena i termin — čisto, bez "investiraj u sebe"
9. FAQ
10. CTA — miran, profesionalan

---

## 8. AI DECISION TREE (za generiranje svakog outputa)

```
1. Content tip? → MODE A (edukacija) / B (upis) / C (event) / D (alumni) / E (info)
2. Glas? → Mode A/D = Glas 1 | Mode B = Glas 1→2 | Mode C = Glas 2 | Mode E = Glas 3
3. Audience sloj? → default Sloj 2 (iskusni praktičar, 3+ godina)
4. Platforma? → FB (dulje) / IG (komprimirano) / Web (Glas 3 dominira)
5. CTA tip? → Mode A = informativni ili bez | Mode B = direktna prijava
6. Claim certainty check → absolutna tvrdnja? → zamijeni observational registrom
7. Negativni prostor → previše zaključaka/CTA? → ukloni zadnju rečenicu
```
