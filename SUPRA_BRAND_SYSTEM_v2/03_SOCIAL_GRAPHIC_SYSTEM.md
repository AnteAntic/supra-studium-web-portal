# SUPRA BRAND SYSTEM v2 — SOCIAL / GRAPHIC SYSTEM
_Verzija: 2.0_
_Datum: 28. svibnja 2026._
_Status: SOURCE OF TRUTH za sve social i graphic outpute_

> Ovaj dokument definira sve što se tiče vizualnog identiteta na socialu,
> grafika (Canva), caption-a, overlay teksta, carousela i publish pripa.
>
> **Čitati zajedno s `01_SHARED_CORE.md`** — filozofija, glasovi, claim certainty i AI behaviour rules
> žive tamo. Ovdje su samo social-specifične implementacije.

---

## SADRŽAJ

1. Karakter social sistema
2. Vizualni identitet — boje, fontovi, logo
3. Layout template — Canva standard
4. Graphic Layer System — 3 layera (ZAKLJUČANO)
5. Scroll-stopper na grafici
6. Fotografija na socialu
7. Caption architecture — FB, IG, LinkedIn
8. Overlay tekst — video i reels
9. Carousel flow
10. Emoji pravila (social specifično)
11. Hashtag sustav
12. Social Tone Validator
13. Publish prep checklist

---

## 1. KARAKTER SOCIAL SISTEMA

Social je "slightly warmer" verzija institucijskog identiteta — **ali ne topli brand, ne community brand, ne lifestyle brand.**

```
Social jest:
  Edukativna institucija koja komunicira s profesionalnom zajednicom.
  Glas stručnjaka koji dijeli znanje kolegi.
  Vizualni identitet koji signalizira ozbiljnost kroz tamni editorial.
  Fotografija koja dokumentira, ne reklamira.

Social nije:
  Motivacijska platforma.
  Wellness brend.
  Community-first brand koji prati "vijesti iz zajednice".
  Brand koji pokušava izgledati "relatable" kroz casual content.
  Brand koji hype-om nadoknađuje nedostatak sadržaja.
```

### Mentalna slika za agente

Zamislite da Supra Studium ima Instagram profil kao **European clinical education institute** —
ne kao online course creator, ne kao personal brand guru, ne kao wellness retreat.

Svaki post koji bi izgledao "previše IG influencer" ili "previše wellness brend" — nije Supra post.

---

## 2. VIZUALNI IDENTITET

### Paleta boja

| Naziv | HEX | Upotreba |
|-------|-----|----------|
| **Tamna pozadina** | `#13192a` | Pozadina svih grafika i prezentacija — DEFAULT |
| **Gold akcent** | `#a58d4e` | Naslovi u boji, linije, badge elementi, logo detalji |
| **Bijela** | `#ffffff` | Glavni tekst na tamnoj pozadini |
| **Krem / svjetli gold** | `#d4b87a` | Sekundarni tekst, podnaslovi, istaknute fraze |
| **Bijela s providnošću** | `#ffffff` / 70% | Body tekst, opisi ispod naslova |

**Apsolutno pravilo:** Uvijek tamna pozadina + gold + bijelo.
**Nikad bijela pozadina s tamnim tekstom** — to nije Supra Studium estetika na socialu.

### Fontovi (Canva)

| Uloga | Font | Weight |
|-------|------|--------|
| Glavni naslov (Headline Layer 1) | Montserrat | ExtraBold (800–900) |
| Podnaslov / akcent (Subheadline Layer 2) | Montserrat | SemiBold (600) |
| Body tekst na grafici (Layer 3) | Montserrat | Regular (400) |
| Istaknuta fraza / quote | Montserrat | Bold Italic (700) |

### Logo — auto-odabir

| Kontekst | Logo fajl |
|----------|-----------|
| Canva post (1:1, 4:5, 16:9) | `logo_kvadrat_gold_crna.png` — gornji lijevi kut |
| Facebook / Instagram cover | `logo_horizontal_gold_crna.png` |
| Profilna slika / story | `logo_badge_gold_crna.png` |
| Gold pozadina grafika | `logo_kvadrat_bijela_gold.png` |
| Prezentacija slajd | `logo_horizontal_gold_crna.png` — ugao |

Logo je uvijek u bijeloj ili gold verziji. Nikad na bijeloj podlozi.

Puna tablica logo varijanti (16 varijanti): vidi `BRAND_VOICE.md` sekcija 2.

---

## 3. LAYOUT TEMPLATE — CANVA STANDARD

### Standardni layout (statična grafika)

```
┌─────────────────────────────────────────────────────┐
│ [LOGO — gornji lijevi kut]                          │
│                                                     │
│ [FOTOGRAFIJA — desna strana]                        │
│ [TEKST — lijeva strana]   │  [sa gold linijom kao   │
│                           │   separatorom]          │
│  HEADLINE (Layer 1)       │                         │
│  Subheadline (Layer 2)    │                         │
│  Body copy (Layer 3)      │                         │
│                           │                         │
│ [KONTAKT / BADGE — dolje] │  [gold badge za datum]  │
└─────────────────────────────────────────────────────┘
```

### Dizajn elementi koji su dio branda

- Gold zakrivljena linija kao separator (desna strana grafike)
- Kružni gold badge za datum / cijenu / lokaciju
- Zlatna vertikalna linija ispred subheadlinea
- Kružni okvir za foto voditelja/organizatora s gold borderom
- Lijevo poravnat tekst — default

### Što uvijek ide na grafiku

```
✅ Logo (gornji lijevi kut)
✅ Headline Layer 1 (bijeli, Montserrat ExtraBold)
✅ Subheadline Layer 2 (gold ili krem, SemiBold)
✅ Kontakt ili @suprastudium (dolje)
✅ Lokacija/datum ako je event (gold badge)
```

### Što nikad ne ide na grafiku

```
❌ Bijela pozadina
❌ Clip art ili generičke ikonice
❌ Previše teksta — ako ne može stati čitljivo, izbaci
❌ Emojiji
❌ Crvene ili narančaste boje (nisu dio palete)
❌ Result claims u headlineu ili subheadlineu
❌ Slogan "Pokret za buduće super-terapeute" kao headline
```

---

## 4. GRAPHIC LAYER SYSTEM — 3 LAYERA

_Status: ✅ ZAKLJUČANO — v1 final. Ne mijenjati bez posebnog dogovora._

Grafika ima tri komunikacijska layera. Svaki layer ima drugačiju funkciju. Ne miješati ih.

### Centralno pravilo graphic headlinea

> **Ako radi kao naziv poglavlja u kliničkom priručniku — prolazi.**
> **Ako zvuči kao naziv tečaja, oglas, ili motivacijska poruka — pada.**

Ovo pravilo odmah eliminira guru cadence, ad energy, influencer wording i pain-free marketing —
a zadržava poster feeling, educational authority i vizualni ritam.

---

### Layer 1 — HEADLINE (visual impact)

**Funkcija:** Zaustaviti scroll. Visual rhythm. Poster-čitljivost.
**Format:** Max 3 riječi. ALL CAPS. Period na kraju. **Nikad glagol.**

```
HEADLINE = [ANATOMSKA IMENICA] + [KLINIČKI KONCEPT]
           ili [ANATOMSKA IMENICA] I [ANATOMSKA IMENICA]
           ili [KLINIČKI TERMIN SAMOSTALNO]
           + PERIOD.
```

Glagol pretvara headline u oglas ili zapovijed.
Imenice i klinički parovi zadržavaju poster energiju i autoritet.

**Biblioteka po temi:**

| Tema | ✅ Radi | ❌ Ne radi |
|------|---------|-----------|
| Križobolja | `QL I KRIŽOBOLJA.` · `LUMBALNI UZORAK.` · `KOMPRESIJA LUMBALA.` · `SEGMENTALNA PROCJENA.` | `RIJEŠIMO BOL.` · `ODMAH REZULTAT.` |
| Vrat | `VRAT I ROTACIJA.` · `SUBOKCIPITALNA REGIJA.` · `CERVIKALNA TRAKCIJA.` | `SLOBODAN POKRET.` · `VRAT BEZ BOLI.` |
| Trigger point | `TRIGGER POINT.` · `ISHEMIJSKA KOMPRESIJA.` · `HIPERIRITABILNA ZONA.` | `TOČKA BOLI.` · `OSLOBODI NAPETOST.` |
| Rame | `ROTATORNA MANŠETA.` · `AC ZGLOB.` · `DUGA GLAVA BICEPSA.` | `SLOBODNO RAME.` · `POKRET BEZ BOLI.` |
| Manualna terapija | `MANUALNA PROCJENA.` · `SEGMENTALNA MOBILNOST.` · `SPINALNA MEHANIKA.` | `SLOBODA POKRETA.` · `PROMIJENI PRISTUP.` |
| Akupresura | `MERIDIJANSKI SUSTAV.` · `LOKALNA TOČKA.` · `DISTALNA TOČKA.` | `HARMONIJA TIJELA.` · `RAVNOTEŽA ENERGIJE.` |
| Cupping | `MIOFASCIJALNA DEKOMPRESIJA.` · `TKIVO I PRITISAK.` · `FASCIJALNI SLOJ.` | `OSLOBODI TIJELO.` · `DETOKS.` |
| Lomi lomi | `LOMI LOMI.` · `FASCIJALNI RITAM.` · `TKIVO I POKRET.` | `WELLNESS TOUCH.` · `SKLAD TIJELA.` |

**Napomena:** Headline ostaje kratak isključivo zbog layout rytma i vizualne čitljivosti —
ne kao simplifikacija sadržaja. Dubinu nosi subheadline.

---

### Layer 2 — SUBHEADLINE (authority layer)

**Funkcija:** Restorirati kredibilitet, dodati klinički mehanizam, kontekst.
**Format:** Jedna rečenica. Max 10–12 riječi (dvije linije layouta). Anatomska preciznost. Bez certainty claima.

```
✅  QL — često hiperiritabilan, često tretiran posljednji.
✅  Subokcipitalna regija: zanemarena varijabla u lumbalnoj procjeni.
✅  Segmentalna mobilnost — polazna točka diferencijalnog razmišljanja.
✅  Trakcija prije rotacije — redoslijed mijenja mehaniku segmenta.
✅  Ishemijska kompresija — lokalizirana, mjerljiva, ponovljiva.

❌  Slobodan pokret od 1. tretmana.                    (certainty claim)
❌  Quadratus lumborum često je hiperiritabilan u...    (predugo — 16+ riječi)
❌  Lumbar roll. Trakcija. Impuls.                      (fragmenti)
❌  Promijeni način rada zauvijek.                      (transformacijski jezik)
```

---

### Layer 3 — BODY COPY na grafici (educational clarification)

**Funkcija:** Kratki praktični uvid iz terapeut-perspektive. 2–3 rečenice max.
**Format:** Prirodne rečenice, bez fragmenata, realistični ishodi.

```
✅  Pokret se poboljšava u ranim tretmanima.
✅  Oslobađanje napetosti u 30–90 sekundi.
✅  Postavljanjem ključnih zglobova postura se normalizira.
✅  Palpacija otkriva što anamneza ne može.

❌  Bol nestaje za 30–90 sec.          (absolutno)
❌  Postura se mijenja odmah.           (certainty)
❌  Povećanje ROM-a odmah.              (instant claim)
❌  Jedina tehnika koja zaista radi.    (ekskluzivni claim)
```

### Proceduralni koraci pri generiranju grafike

```
1. HEADLINE  → 2-3 riječi, anatomski ili proceduralni fokus, nikad glagol, period.
2. TAGLINE   → anatomski keyword par ili klinička ključna riječ (opcionalno)
3. SUBLINE   → jedna precizna klinička rečenica, max 12 riječi, hedged language
4. INSIGHTS  → konkretni uvidi ili koraci — bez "odmah", "od 1. tretmana", "garantirano"
5. KONTAKT   → @suprastudium ili link — uvijek na dnu
```

---

## 5. SCROLL-STOPPER NA GRAFICI

Detaljna filozofija je u `01_SHARED_CORE.md` sekcija 9. Ovdje implementacija za grafike.

### Što zaustavlja scroll na grafici

```
Vizualna snaga headlinea (Layer 1):
  - Kratkoća + kontrast + ALL CAPS = vizualni impakt
  - Anatomski fokus = relevantnost za profesionalnu publiku
  - Period = završnost, pouzdanost

Fotografija koja nosi priču:
  - Documentary moment — ruke na tijelu, kontakt, rad u procesu
  - Čitatelj se prepozna u slici
  - Nije estetska fotografija nego funkcionalna

Napetost između headlinea i subheadlinea:
  - Headline postavlja anatomski fokus
  - Subheadline dodaje mehanizam koji nije očit
  - Čitatelj želi više → čita caption
```

### Što NE zaustavlja scroll (ili šalje krive signale)

```
❌ Pozitivne emocije i smiješci upućeni u kameru
❌ Headline koji obećava rješenje ("RIJEŠIMO BOL.")
❌ Headline koji je pitanje ("IMAŠ LI OVE SIMPTOME?")
❌ Headline koji je imperativ ("NAUČI OVU TEHNIKU.")
❌ Grafika koja izgleda kao ad/promo materijal
❌ Grafika s previše teksta — čitljivost = autoritet
```

### Scroll-stopper za event vs. edukacija

```
Edukativna grafika:
  Headline = anatomija / tehnika / klinički koncept
  Subheadline = jedan precizni klinički uvid
  Fotografija = hands-on, terapeutski rad

Event grafika (HMP, tečaj najava):
  Headline = naziv eventa / tečaja (može biti naziv, ne mora biti anatomski)
  Subheadline = datum, lokacija, ciljna publika
  Badge = konkretni detalji
  Fotografija = grupna / polaznici / event atmosfera
```

---

## 6. FOTOGRAFIJA NA SOCIALU

Detaljna filozofija je u `01_SHARED_CORE.md` sekcija 8. Ovdje social-specifične smjernice.

### Hijerarhija izvora

```
1. Vlastite fotografije s edukacija (UVIJEK PREFERIRANO)
2. Vlastite fotografije iz kliničkog rada (s dozvolom pacijenta)
3. Canva Pro stock — licenciran, klinički neutralan
4. Fotografije s interneta — ZABRANJENO bez licence
```

### Kompozicija koja radi na socialu

```
Verikalni format (4:5) — IG i FB feed:
  Fotografija desno ili cijela pozadina s tamnim overlayem lijevo
  Tekst na lijevoj strani, čitljiv

Kvadrat (1:1) — IG, FB:
  Fotografija desno, tekst lijevo
  Gold separator linija kao vizualni rez

Horizontalni (16:9) — FB cover, LinkedIn, YouTube:
  Logo horizontalni, fotografija u pozadini ili desno
  Tekst lijevo

Story (9:16) — IG/FB stories:
  Fotografija kao pozadina s tamnim overlayem
  Tekst centriran ili gore/dolje
```

### Fotografija koja komunicira autoritet

```
✅ Ruke terapeuta na tijelu pacijenta (klinički rad)
✅ Predavač u akciji (ne pozira — govori, demonstrira)
✅ Polaznici koji rade (grupni rad, tandemi)
✅ Close-up na anatomsku regiju ili tehniku
✅ Dokumentarni trenutak — netko sluša, netko zapisuje, netko vježba

❌ Staged smješak prema kameri
❌ Wellness-style fotografija (bijele prostorije, savršena rasvjeta, staged mir)
❌ Motivacijski stock (stisnute šake, pogled prema gore, "pobjednička" poza)
❌ Neprepoznatljive ruke ili tijela bez konteksta
❌ Fotografija bez terapeuta — anatomski modeli/ilustracije kao jedini vizual
```

---

## 7. CAPTION ARCHITECTURE — PO PLATFORMI

### Temeljna struktura za sve platforme

```
klinički slučaj ili konkretna observacija
  → mehanizam ili "zašto" (klinički)
    → što terapeut s tim može
      → suptilni poziv ili šutnja

ZABRANJENO: hook → drama → CTA
```

### Važno: caption ≠ duplicirani grafički tekst

Caption ne ponavlja ono što piše na grafici.
Caption **produbljuje, kontekstualizira ili proširuje** ono što grafika prikazuje.

```
Grafika kaže: TRIGGER POINT. / QL — često hiperiritabilan, često tretiran posljednji.
Caption dodaje: klinički slučaj gdje je QL bio ključna varijabla koja je nedostajala
               u diferencijalnoj procjeni. Konkretni opis. Uvid. Eventualno poziv.
```

---

### Facebook Caption

**Duljina:**
- MODE A / D (edukacija): 6–15 rečenica
- MODE B / C (enrollment, event): 8–20 rečenica

**Ton:** Glas 1 ili 2, ovisno o content modu.
**Ritam:** Prirodne rečenice, miješane duljine. Nikad 3+ kratka fragmenta zaredom.
**Paragraphing:** Svake 3–4 rečenice novi paragraf.
**Emoji:** Nula u tijelu teksta. Max 2-3 isključivo u CTA bloku.
**Hashtagi:** Ne na Facebooku.

**Specifičnosti:**
- Prva rečenica mora funkcionirati bez "Vidi više" — ne smije biti odrezana na climaxu
- FB publika čita dulje — edukativni sadržaj može biti detaljniji
- Long-form edukativni post (400–800 riječi) je legitiman format
- Bullet liste su prihvatljive samo za logističke informacije (datum, lokacija, cijena) — ne za edukativni sadržaj

**Primjer prve rečenice:**
```
✅ "Pacijent godinu dana na terapiji. Rame i dalje boli."
✅ "Subokcipitalna regija je jedan od najčešće zanemarenih područja u procjeni vrata."
✅ "Na zadnjem seminaru radili smo slučaj koji se često pogrešno dijagnosticira."

❌ "Ovo ću podijeliti s vama jer znam da će promijeniti vaš pristup!"
❌ "Jeste li znali da 80% terapeuta propušta ovaj ključni korak?"
❌ "Danas govorimo o nevjerojatnoj tehnici koja daje rezultate odmah."
```

---

### Instagram Caption

**Duljina:**
- MODE A (edukacija): 4–8 rečenica
- MODE B / C (enrollment, event): 5–10 rečenica + hashtagi

**Ton:** Isti kao FB, ali komprimiraniji i direktniji.
**Ritam:** Svaka rečenica zaslužuje vlastiti red ili kratki paragraf.
**Emoji:** Max 2-3 u cijelom captionu, isključivo u CTA zoni, isključivo funkcionalni.
**Hashtagi:** 6–10, tematski relevantni, na kraju odvojeni od teksta razmakom ili separatorom.

**Specifičnosti:**
- Prva rečenica mora raditi bez "Više" gumba — IG prikazuje samo 1-2 linije
- Grafika nosi vizualnu težinu — caption produbljuje i kontekstualizira
- Svaka rečenica mora "zarađivati" svoju poziciju (IG publika je brža od FB)
- Caption ne duplicira grafički tekst — caption dodaje što grafika ne može reći

**Primjer IG caption-a (MODE A):**
```
Subokcipitalna regija. Jedan od najčešće zanemarenih područja u procjeni vrata.

Kad pacijent opisuje bol "iza oka" ili difuznu glavobolju bez jasnog uzroka —
ovo je regija koja vrijedi provjeriti.

Četiri mala mišića, svaki s vlastitim obrasom upućene boli.
Palpacija je proces, ne rutina.

To je ono što gledamo na Manualna terapija 4. stupanj — vrat.

#manualnaterapija #vrat #subokcipitalnaregiija #trigger #fizioterapija
#edukacija #zagreb #suprastudium
```

---

### LinkedIn Caption

**Duljina:** 5–12 rečenica

**Ton:** Glas 1 ili Glas 3. Malo formalniji od FB. Kolega-iz-prakse ali profesionalan.

**Ritam:** Jedan uvid po postu. LI publika skenira — svaki paragraf mora raditi samostalno.

**Emoji:** Nula.

**Hashtagi:** 3–5, profesionalni i tematski.

**Specifičnosti:**
- LI publika reagira na specifičnost i kliničku preciznost više nego na storytelling
- "Koji je tvoj pristup ovome?" kao završno pitanje — funkcionira na LI
- Nije platforma za direktnu prodaju tečajeva — edukativni sadržaj, ne enrollment
- Duža tišina između postova je OK — bolje rjeđi ali precizan sadržaj

**Razlikovanje od FB:**
```
FB caption može ići u priču i detalj — čitatelj ima strpljenje
LI caption ide direktno u uvid — čitatelj skenira i procjenjuje
```

---

### Newsletter Caption (Brevo)

**Ton:** Glas 1 ili 2. Intimniji od social medija — newsletter je privilegirani kanal.

**Duljina:** 150–300 riječi po emailu u sekvenci.

**Struktura:**
```
1. Osobni uvod ili klinička observacija (2-3 rečenice)
2. Edukativni ili informacijski core (4-8 rečenica)
3. Most prema akciji (1-2 rečenice)
4. CTA — jedan, jasan, bez pritiska
```

**Subject line filozofija:**
```
Konkretna informacija > kreativni hook

✅ "Četiri razloga zašto vrat boli — i jedan koji se propušta"
✅ "Manualna terapija 4. stupanj — vrat: upis otvoren za lipanj"
❌ "Ovo će promijeniti tvoj pristup terapiji"
❌ "Nešto posebno te čeka u ovom mailu"
```

**Greeting:** Osobno (ime) — nikad "Dragi pretplatniče."

**Zabranjeno:** Ne počinjati s "U ovom newsletteru ćemo..." — direktno u sadržaj.

---

## 8. OVERLAY TEKST — VIDEO I REELS

Overlay tekst je tekst koji se pojavljuje na videu (Reels, TikTok, story s videom).
Funkcionira kao Layer 1 + Layer 2 grafičkog sustava — ali u pokretu.

### Pravila za overlay tekst

```
✅ Overlay je kratak — max 5-7 riječi po kadrу
✅ Anatomski ili proceduralni fokus
✅ Može biti glagol ako opisuje proceduru (npr. "palpiramo", "procjenjujemo")
   — ali ne imperativ koji je zapovijed ili CTA ("pritisni", "slobodi", "osjeti")
✅ Font dosljedan s vizualnim identitetom (Montserrat, bijela ili gold)
✅ Pozadinska kontrastnost — tekst mora biti čitljiv
```

### Zabranjeni overlay tekstovi

```
❌ "Ovo će promijeniti sve."
❌ "Ne propusti ovo!"
❌ "Tajna tehnika terapeuta."
❌ Pitanja koja manipuliraju: "Imaš li ove simptome?"
❌ Emoji u overlay tekstu
❌ Urgency fraze: "Sada!" / "Odmah!" / "Dok traje!"
```

### Overlay za Reels — sekvencijalni prikaz

Kada video prikazuje proceduru (npr. palpacija u koracima):

```
Kadar 1: Anatomska regija — naziv (npr. "SUBOKCIPITALNA REGIJA")
Kadar 2: Procedura — opis koraka (npr. "palpacija u dubinu")
Kadar 3: Klinički uvid — observacija (npr. "reakcija tkiva pod prstima")
Kadar 4: Zaključak (opcionalan) — bez motivacije, bez CTA osim kontakta

Format: kratke fraze, ne rečenice
Ton: proceduralni, ne dramatski
```

### Caption za video post

Caption uz video prati iste smjernice kao platformska caption arhitektura (sekcija 7).
Razlika: caption uz video **ne opisuje što se vidi** (to je posao videa) —
caption daje klinički kontekst, pozadinu ili uvid koji video ne može reći.

---

## 9. CAROUSEL FLOW

Carousel je multi-frame grafički format (FB i IG).
Svaki frame je kao stranica kliničke prezentacije — logičan slijed, ne nasumični fragmenati.

### Struktura carousela

```
Frame 1 — HOOK (Layer 1 logika)
  Anatomski fokus ili klinički problem
  Vizualni impact — zaustavlja scroll
  Max 3 riječi + fotografija

Frame 2 — KONTEKST
  Zašto je ova regija / tehnika / slučaj relevantan
  Jedna klinička rečenica
  Može biti Layer 2 logika (subheadline)

Frame 3-5 — SADRŽAJ (Layer 3 logika)
  Koraci, observacije, klinički detalji
  Svaki frame nosi jedan uvid — ne previše informacija po frameu
  Fotografija ili ilustracija gdje pomaže razumijevanju

Zadnji frame — ZAKLJUČAK + KONTAKT
  Jedan uvid kao završna misao (bez motivacijske rečenice)
  Kontakt / @suprastudium / link
  Opcionalan CTA (Mode A ili bez)
```

### Pravila carousela

```
✅ Svaki frame funkcionira samostalno — ali ima smisla u kontekstu slijeda
✅ Vizualni identitet konzistentan kroz sve frameove
✅ Logo uvijek na prvom frameu, opcija za zadnji
✅ Jedan uvid po frameu — ne gužvati informacije

❌ Carousel koji počne s "NE PROPUSTI!" ili urgency framom
❌ Zadnji frame s "prijavi se dok ima mjesta!" bez prethodnog edukativnog sadržaja
❌ Frameovi koji samo promoviraju bez davanja vrijednosti
❌ Miješanje tipografija ili boja unutar jednog carousela
```

### Carousel za enrollment (MODE B)

```
Frame 1:  Klinička tema vezana uz sadržaj tečaja (ne "dođi na tečaj")
Frame 2:  Mehanizam ili "zašto" — zašto je ova tema važna u praksi
Frame 3:  Što tečaj konkretno pokriva (ne "što ćeš postati")
Frame 4:  Detalji: datum, lokacija, format, cijena
Frame 5:  Kontakt i prijava — jedan CTA
```

---

## 10. EMOJI PRAVILA — SOCIAL SPECIFIČNO

Social specifična razrada. Opće pravilo je u `00_ARCHITECTURE.md`.

### Gdje su emojiji dozvoljeni (social)

```
Isključivo u CTA / kontakt bloku, na kraju posta.

Standard:
  📩 Prijavi se: tally.so/r/wA5kvD
  💬 WhatsApp: wa.me/385958558953
  📍 Zagreb | @suprastudium

Ovi emojiji su funkcionalni navigatori — pomažu skeniranju.
Nisu dekoracija. Nisu "enerjizacija" teksta.
```

### Gdje emojiji nisu dozvoljeni (social)

```
❌ U prvoj rečenici (hook)
❌ U tijelu edukativnog teksta
❌ U zaključku ili kliničkom uvidu
❌ Na grafici (niti jedan emoji na grafici)
❌ Overlay tekstu na videu
❌ U subject lineu newslettera
```

### Kvantitativno ograničenje

```
Ukupno po postu: max 2-3 emojija
Svi moraju biti u CTA/kontakt zoni
Ako CTA funkcionira bez emojija — ne dodavati

LinkedIn: nula emojija. Bez iznimke.
```

### Emojiji koji su prihvatljivi (funkcionalni)

```
📩  📧  — email / prijava (funkcionalni)
💬  📱  — WhatsApp / kontakt (funkcionalni)
📍  🏢  — lokacija (funkcionalni)
🔗       — link (funkcionalni)
```

### Emojiji koji nisu prihvatljivi

```
🔥 💪 🙌 ✨ 🎯 🚀 — hype / motivacija / influencer energy
❤️ 💙 🤝 😊     — emotivna toplina / wellness ton
⚡ 👇 👆 ➡️     — urgency / direction clicks
🏆 🥇           — achievement framing (osim za HMP u kontekstu natjecanja)
```

---

## 11. HASHTAG SUSTAV

### Instagram hashtagi

**Broj:** 6–10 po postu (ne više — ne manje ako je edukativan post)
**Pozicija:** Na kraju captiona, odvojen razmakom ili separatorom od teksta

**Primarna lista (uvijek dostupna):**
```
#manualnaterapija #manualnaterapeija #fizioterapija
#triggerpoint #masaža #terapija
#edukacija #zagreb #suprastudium #učilište
```

**Tematski hashtagi (dodati prema sadržaju):**
```
Vrat / glava:    #vrat #cervikalna #subokcipitalna #glavobolja
Leđa / lumbal:  #leđa #križobolja #lumbal #ql
Rame:           #rame #rotatornomanšeta #bol
Akupresura:     #akupresura #meridijani #kinezioterapija
Cross-friction: #crossfriction #funkcionalnasaža #tetiva
Cupping:        #cupping #vakuumterapija #fascija
Lomi lomi:      #lomilomi #havajskasaža #fascijalnipokret
HMP:            #hrvatskomasažnoprvensvo #hmp #natjecanje
```

**Zabranjeni hashtagi:**
```
❌ #wellness #relax #spa #wellbeing #mindfulness (krivi ton / krivo pozicioniranje)
❌ #besplatno #akcija #popust #promo (nije Supra komunikacija)
❌ Hashtagi bez veze s temom posta (spam taktika)
```

### Facebook hashtagi

Na Facebooku se **ne koriste hashtagi** u standardnim postovima.
Iznimka: event postovi mogu imati 1-2 hashtaga (#suprastudium #hmp).

### LinkedIn hashtagi

3–5, profesionalni i tematski. Uvijek relevantni.
```
#manualnaterapija #fizioterapija #kliničkaedukacija #terapija #zdravstvo
```

---

## 12. SOCIAL TONE VALIDATOR

Primijeni na svaki finalni social output (grafika + caption) prije isporuke.

### Provjera 1 — Grafički headline

> Zvuči li headline kao naziv poglavlja u kliničkom priručniku?

```
Ako da: prolazi.
Ako zvuči kao oglas, motivacijska fraza ili imperativ: repiši.
```

### Provjera 2 — Caption struktura

> Prati li caption strukturu: slučaj → mehanizam → vrijednost → poziv?

```
Ako prati hook → drama → CTA: repiši.
```

### Provjera 3 — Caption ≠ kopija grafike

> Dodaje li caption nešto što grafika ne može reći?

```
Ako caption samo ponavlja headline i subheadline grafike: repiši.
Caption mora nositi vlastitu vrijednost.
```

### Provjera 4 — Emoji check

> Jesu li svi emojiji u CTA/kontakt zoni? Je li ih max 2-3?

```
Emoji u tijelu teksta: ukloni.
Emoji na grafici: ukloni.
```

### Provjera 5 — Claim certainty

> Postoji li absolutna tvrdnja u grafici ili captionu?

```
Absolutna tvrdnja: zamijeni observational ekvivalentom.
(vidi 01_SHARED_CORE.md sekcija 6)
```

### Provjera 6 — Fragment triplet

> Postoje li 3+ kratka fragmenta zaredom u captionu?

```
Ako da: spoji u prirodne rečenice.
```

### Provjera 7 — Fotografija

> Je li fotografija dokumentarna i klinički relevantna?

```
Staged wellness fotografija: zamijeni vlastitom ili neutralnim stockom.
Stock koji nosi coaching / wellness / spa energiju: zamijeni.
```

### Provjera 8 — Platformska specifičnost

> Je li caption specifičan za platformu (FB ≠ IG ≠ LinkedIn)?

```
Isti caption za sve platforme: nije prihvatljivo.
Diferenciraj prema sekciji 7.
```

---

## 13. PUBLISH PREP CHECKLIST

Koristiti prije svakog postanja. Brza provjera — ne analiza.

### Grafika

```
☐ Headline: max 3 riječi, ALL CAPS, period, bez glagola
☐ Subheadline: jedna rečenica, max 12 riječi, bez certainty claima
☐ Body copy: bez "odmah", "od 1. tretmana", "garantirano"
☐ Boje: tamna pozadina + gold + bijela (nije bijela pozadina)
☐ Logo: prisutan, na ispravnom položaju, ispravna varijanta
☐ Nema emojija na grafici
☐ Fotografija: dokumentarna, terapeutski kontekst, vlastita ili licencirana
☐ Nema bijele pozadine
```

### Caption

```
☐ Prva rečenica: funkcionira bez "Vidi više" / "Više" gumba
☐ Struktura: slučaj → mehanizam → vrijednost → poziv (ne hook → drama → CTA)
☐ Caption ne duplicira grafički tekst
☐ Nema fragment tripleta
☐ Nema absolutnih result claima
☐ Nema zabranjenih fraza (transformacija externally, revolucionarno, premium, ...)
☐ CTA: jedan, miran, bez pritiska
☐ Emojiji: samo u CTA zoni, max 2-3
☐ Hashtagi: samo na IG (6-10), ne na FB, 3-5 na LinkedIn
```

### Platforma

```
☐ Je li caption prilagođen specifičnoj platformi?
☐ FB: paragraphing, bez hashtaga, može biti dulje
☐ IG: komprimirano, prva rečenica jaka, hashtagi na kraju
☐ LinkedIn: nula emojija, jedan uvid, profesionalan ton
☐ Newsletter: osobno, direktno u sadržaj, jedan CTA
```

### Sadržaj

```
☐ Content mode prepoznat (A/B/C/D/E)?
☐ Ispravni glas za taj mode (1/2/3)?
☐ Audience sloj u glavi (default: Sloj 2)?
☐ CTA mode u skladu s modom (A/B/C ili bez)?
```

---

_SUPRA BRAND SYSTEM v2 — 03_SOCIAL_GRAPHIC_SYSTEM.md_
_Ante Antić / Učilište Supra Studium_
_28. svibnja 2026._
