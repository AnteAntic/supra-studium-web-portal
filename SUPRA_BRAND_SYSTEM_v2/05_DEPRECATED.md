# SUPRA BRAND SYSTEM v2 — DEPRECATED
_Verzija: 2.0_
_Datum: 28. svibnja 2026._
_Status: REFERENTNI DOKUMENT — mapa nasljeđa_

> Ovaj dokument je mapa svega što je zastarjelo ili migrirano.
> Nije source of truth ni za što.
> Svrha: agent koji pronađe stari dokument zna ovdje provjeriti što je zamijenilo što.
>
> **Pravilo:** Ako stari dokument i novi sustav kontradiktorni — novi sustav pobjeđuje.
> Lista konflikata i njihova razrješenja: `00_ARCHITECTURE.md` sekcija "Aktivni konflikti".

---

## SADRŽAJ

1. Registry deprecated dokumenata
2. Što se migrira, što ostaje kao referenca
3. AI_WORKFLOW.md i AI_STATUS.md — status i buduće ažuriranje
4. Chronologija — što je kad zastarjelo i zašto
5. Što NE RADITI sa starim dokumentima

---

## 1. REGISTRY DEPRECATED DOKUMENATA

---

### BRAND_VOICE.md
**Lokacija:** `~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/BRAND_VOICE.md`
**Datum nastanka:** 23. ožujka 2026.
**Status:** ⚠️ PARCIJALNO AKTIVAN — čitati samo označene sekcije

| Sekcija | Status | Zamijenjena s |
|---------|--------|---------------|
| Sek. 1 — Tko smo | ❌ DEPRECATED | Filozofija → `01_SHARED_CORE.md`; slogan → deprecated (vidi arhitektura) |
| Sek. 2 — Vizualni identitet (boje, fontovi, logo) | ✅ AKTIVAN | Ostaje mjerodavan — logo tablica 16 varijanti, boje za social |
| Sek. 3 — Glas i ton | ❌ DEPRECATED | `01_SHARED_CORE.md` → Tri glasa branda |
| Sek. 4 — Ciljana publika | ✅ AKTIVAN | Referenca; audience layers prošireni u `01_SHARED_CORE.md` sek.13 |
| Sek. 5 — Aktivni programi | ✅ AKTIVAN | Operativna referenca za nazive tečajeva |
| Sek. 6 — Linkovi i kontakti | ✅ AKTIVAN | Operativna referenca, uvijek ažurirati ovdje |
| Sek. 7 — Vrijednosti brenda | ⚠️ PARCIJALNO DEPRECATED | "Transformacija" kao vrijednost: deprecated; ostalo → `01_SHARED_CORE.md` sek.1 |
| Sek. 8 — Canva smjernice | ✅ AKTIVAN | Prošireno u `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Sek. 9 — Pisanje postova | ❌ DEPRECATED | `01_SHARED_CORE.md` + `03_SOCIAL_GRAPHIC_SYSTEM.md` |
| Sek. 10 — Hashtagi | ✅ AKTIVAN | Prošireno u `03_SOCIAL_GRAPHIC_SYSTEM.md` sek.11 |
| Sek. 11 — Napomene za Claude | ❌ DEPRECATED | `01_SHARED_CORE.md` sek.16 (AI Behaviour Rules) |

**Što raditi s fajlom:**
Ne brisati. Dodati na početak fajla:
```
> LEGACY — Čitati samo sekcije 2, 4, 5, 6, 8, 10.
> Sve ostalo zamijenjeno SUPRA_BRAND_SYSTEM_v2/.
> Datum depreciranja: 28. svibnja 2026.
```

**Zašto ostaje:**
Sekcija 2 sadrži kompletnu tablicu logo varijanti (16 fajlova) i puni specifikacije boja za social.
Sekcija 6 sadrži sve linkove i kontakte — operativna referenca koja se mora ažurirati samo ovdje.

---

### SUPRA_LANGUAGE_SYSTEM_v2.md
**Lokacija:** `~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/SUPRA_LANGUAGE_SYSTEM_v2.md`
**Datum nastanka:** 14. svibnja 2026.
**Status:** ❌ ARHIVIRAN — sav sadržaj migriran

| Sekcija v2 | Migrirana u |
|------------|------------|
| 1. Brand Philosophy | `01_SHARED_CORE.md` sek.1 |
| 2. Authority Model | `01_SHARED_CORE.md` sek.2 |
| 3. Tri glasa branda | `01_SHARED_CORE.md` sek.3 |
| 4. Content Modes A/B/C/D/E | `01_SHARED_CORE.md` sek.12 + `04_CONTENT_PIPELINE.md` sek.2 |
| 5. Audience Sophistication Layers | `01_SHARED_CORE.md` sek.13 |
| 6. Claim Certainty System | `01_SHARED_CORE.md` sek.6 |
| 7. Graphic Layer System | `03_SOCIAL_GRAPHIC_SYSTEM.md` sek.4 |
| 8. Caption Architecture | `03_SOCIAL_GRAPHIC_SYSTEM.md` sek.7 |
| 9. Newsletter + Web Copy Tone | `02_WEB_SYSTEM.md` sek.15 + `03_SOCIAL_GRAPHIC_SYSTEM.md` sek.7 |
| 10. CTA Philosophy | `01_SHARED_CORE.md` sek.7 |
| 11. Negative Space Rules | `01_SHARED_CORE.md` sek.11 |
| 12. Cadence Library | `01_SHARED_CORE.md` sek.14 |
| 13. AI Decision Tree | `01_SHARED_CORE.md` → Decision Tree (kraj dokumenta) |
| 14. Brand Tone Validator | `01_SHARED_CORE.md` sek.15 |

**Što raditi s fajlom:**
Ne brisati. Dodati na početak fajla:
```
> ARHIVA — Sav sadržaj migriran u SUPRA_BRAND_SYSTEM_v2/.
> Ovaj fajl više nije source of truth ni za što.
> Datum arhiviranja: 28. svibnja 2026.
> Destinacije migracije: vidi 05_DEPRECATED.md u web portalu.
```

**Zašto ostaje:**
Historijska referenca. Pokazuje tijek razvoja sustava i može pomoći
u budućim decision-making procesima kad se pita "zašto je nešto ovako definirano".

---

### BRAND_TONE_RULES.md
**Lokacija:** `~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/_SKILLS/BRAND_TONE_RULES.md`
**Datum nastanka:** 13. svibnja 2026.
**Status:** ❌ FULLY DEPRECATED

**Što je sadržavao:**
- Graphic layer system (3 layera)
- Brand tone validator (6 provjera)
- Forbidden cadence i primjeri
- Power hooks vs. pisane objave distinkcija

**Što ga je zamijenilo:**
Sav sadržaj je ušao u `SUPRA_LANGUAGE_SYSTEM_v2.md` (koji je zatim migriran dalje).
Finalna destinacija: `01_SHARED_CORE.md` i `03_SOCIAL_GRAPHIC_SYSTEM.md`.

**Što raditi s fajlom:**
Ne brisati. Dodati na početak:
```
> DEPRECATED — Zamijenjen SUPRA_BRAND_SYSTEM_v2/.
> Ne koristiti ni za reference.
> Datum depreciranja: 28. svibnja 2026.
```

**Posebna napomena za skill agente:**
Skill `supra-grafike` i `supra-copy-editing` su prethodno koristili ovaj fajl kao primarni input.
Nakon migracije sustava, ti skillovi trebaju biti ažurirani da referenciraju novi sustav.
Ažuriranje skillova: buduća sesija. Do tada — skillovi funkcioniraju, samo su pravila u novom fajlu.

---

### BRAND_SYSTEM.md
**Lokacija:** `/supra-studium-web-portal/BRAND_SYSTEM.md` (web portal root)
**Datum nastanka:** raniji datum (distilat iz SUPRA_LANGUAGE_SYSTEM_v2.md)
**Status:** ⚠️ PRIVREMENO AKTIVAN → planirano deprecated

**Što sadrži:**
Distilat SUPRA_LANGUAGE_SYSTEM_v2.md namijenjen za AI orchestration unutar web portala.
Koristi ga `scripts/orchestrator.js` kao jedan od 3 context fajla koji se šalju GPT-4o.

**Zašto još uvijek aktivan:**
`scripts/orchestrator.js` hardcodes-a putanje: `CLAUDE.md + BRAND_SYSTEM.md + AI_STATUS.md`.
Dok se orchestrator ne ažurira, BRAND_SYSTEM.md mora ostati prisutan i konzistentan.

**Plan depreciranja:**
```
Korak 1: Ažurirati scripts/orchestrator.js da čita iz SUPRA_BRAND_SYSTEM_v2/
          (ili da čita 01_SHARED_CORE.md + kontekstualni dokument po potrebi)
Korak 2: Ažurirati AI_WORKFLOW.md s novim referencama
Korak 3: Označiti BRAND_SYSTEM.md deprecated
Korak 4: Opcija — BRAND_SYSTEM.md postaje automatski generiran "snapshot"
          iz 01_SHARED_CORE.md za potrebe orchestratora
```

**Što raditi s fajlom SADA:**
Zadržati. Ne mijenjati. Ne dodavati sadržaj koji nije u novom sustavu.
Ako dođe do konflikta između BRAND_SYSTEM.md i SUPRA_BRAND_SYSTEM_v2/ — novi sustav pobjeđuje.

---

## 2. ŠTO SE MIGRIRA, ŠTO OSTAJE KAO REFERENCA

### Shema migriranosti

```
BRAND_VOICE.md
  Sekcije 2, 4, 5, 6, 8, 10 → OSTAJU AKTIVNE (ne migriraju)
  Sekcije 1, 3, 7, 9, 11    → DEPRECATED (migrirane u 01_SHARED_CORE.md)

SUPRA_LANGUAGE_SYSTEM_v2.md
  Cijeli sadržaj             → MIGRIRAN (vidi tablica u sekciji 1)
  Fajl                       → OSTAJE KAO ARHIVA

BRAND_TONE_RULES.md
  Cijeli sadržaj             → MIGRIRAN
  Fajl                       → OSTAJE (označen deprecated)

BRAND_SYSTEM.md
  Sadržaj                    → DJELOMIČNO AKTIVAN (orchestrator ga čita)
  Fajl                       → OSTAJE dok se orchestrator ne ažurira
```

### Jedina stvar iz starih dokumenata koja NEMA ekvivalenta u novom sustavu

**BRAND_VOICE.md sekcija 6 — Linkovi i kontakti:**
Tally link, WhatsApp, email, adresa, social handle, telefon.
Ovo je **operativna referenca** koja se ažurira samo u jednom fajlu.
Novi sustav na nju *referira*, ali ju ne duplicira.

Kad se kontakti ili linkovi promijene: ažurirati **samo** u BRAND_VOICE.md sekciji 6.
Novi sustav automatski inherita tu informaciju.

---

## 3. AI_WORKFLOW.md I AI_STATUS.md — STATUS I BUDUĆE AŽURIRANJE

### AI_WORKFLOW.md
**Lokacija:** `/supra-studium-web-portal/AI_WORKFLOW.md`
**Status:** ⚠️ FUNKCIONALAN ALI REFERENCIRA STARE DOKUMENTE

**Što opisuje:**
Orchestration workflow: `AI_STATUS.md` → `orchestrator.js` → GPT-4o → `NEXT_CLAUDE_PROMPT.md` → Claude Code.

**Problem:**
`orchestrator.js` šalje GPT-4o trojicu kontekst fajlova: `CLAUDE.md + BRAND_SYSTEM.md + AI_STATUS.md`.
GPT-4o generira prompts za Claude Code koristeći taj stariji brand kontekst.

**Kad to postaje problem:**
Kada GPT-4o počne generirati prompts s deprecated frazama ili starim pravilima
jer čita BRAND_SYSTEM.md umjesto novog sustava.

**Buduće ažuriranje (nije hitno, ali je planirano):**
```
Opcija A: orchestrator.js šalje 01_SHARED_CORE.md umjesto BRAND_SYSTEM.md
          (direktna zamjena, minimalna promjena u skripti)

Opcija B: orchestrator.js šalje cijeli SUPRA_BRAND_SYSTEM_v2/ sažetak
          (zahtijeva "summary generator" korak)

Opcija C: BRAND_SYSTEM.md se ažurira da bude sync s novim sustavom
          (najmanji otpor, ali duplicira sadržaj)

Preporuka: Opcija A — direktna zamjena na 01_SHARED_CORE.md
```

### AI_STATUS.md
**Lokacija:** `/supra-studium-web-portal/AI_STATUS.md`
**Status:** ✅ AKTIVAN — operativni dokument

**Što sadrži:**
Trenutni status stranica i "Next Task" brief za orchestrator.
Nema brand pravila — samo projektni status.

**Preporučena izmjena:**
Ažurirati "Page Status" tablicu prema aktualnom stanju (neke stranice mogle su napredovati).
Sadržaj je operational, ne brand — nije predmet depreciranja.

---

## 4. CHRONOLOGIJA — ŠTO JE KAD ZASTARJELO I ZAŠTO

```
23. ožujka 2026.
  Nastaje BRAND_VOICE.md — prva kompletna definicija branda.
  Status tada: jedini dokument. Autoritet za sve.

13. svibnja 2026.
  Nastaje BRAND_TONE_RULES.md u _SKILLS folderu.
  Svrha: specifičnija pravila za AI skill agente.
  Problem koji je riješio: BRAND_VOICE.md bio je previše općenit za AI operativnu upotrebu.

14. svibnja 2026.
  Nastaje SUPRA_LANGUAGE_SYSTEM_v2.md.
  Svrha: "AI operating system" koji zamjenjuje tone/voice sekcije BRAND_VOICE.md-a.
  Problem koji je riješio: rasuta istina u dva dokumenta, nekonzistentnost između njih.
  Što nije riješio: razliku između web i social sistema.

28. svibnja 2026.
  Nastaje SUPRA_BRAND_SYSTEM_v2/ — ovaj sustav.
  Svrha: konsolidacija, razdvajanje web/social, governance layer, pipeline.
  Problem koji rješava: SUPRA_LANGUAGE_SYSTEM_v2 nije razlikovao web od social,
  nije imao pipeline, nije imao agent boundaries, nije imao failure recovery.

  Isti dan deprecated:
    · SUPRA_LANGUAGE_SYSTEM_v2.md → arhiviran
    · BRAND_TONE_RULES.md → deprecated
    · BRAND_VOICE.md → parcijalno deprecated (sekcije 3, 7, 9, 11)
    · BRAND_SYSTEM.md → privremeno aktivan, planirano deprecated
```

### Zašto svaki dokument nije odmah zamijenio prethodnika

Nije postojao nagli rez — svaki dokument je nastajao kao nadogradnja problema
koji je prethodnik eksponirao u praksi. Ni jedan od njih nije bio "pogrešan" —
svaki je bio točan za svoju fazu razvoja sustava.

Novi sustav ne poništava prethodne — inkorporira ono što je u njima bilo ispravno
i rješava ono što je nedostajalo.

---

## 5. ŠTO NE RADITI SA STARIM DOKUMENTIMA

### Zabranjeno

```
❌ Brisati stare dokumente bez konzultacije s Anteom
   Stari dokumenti su historijska referenca za evoluciju brand sustava.

❌ Dodavati novi sadržaj u deprecated sekcije starih dokumenata
   Ako treba nešto ažurirati — ažurira se u novom sustavu, ne u starom.

❌ Koristiti deprecated sekcije kao source of truth čak i "privremeno"
   "Privremeno" uvijek postane trajno.

❌ Miješati stare i nove smjernice u istom outputu
   Ako postoji konflikt, novi sustav uvijek pobjeđuje.

❌ Kreirati novi brand dokument izvan SUPRA_BRAND_SYSTEM_v2/
   Sva nova brand pravila idu u odgovarajući v2 dokument.
   Ako ništa ne odgovara — proširiti 01_SHARED_CORE.md ili kreirati 06_APPENDIX.md.
```

### Dozvoljeno

```
✅ Čitati BRAND_VOICE.md sekcije 2, 4, 5, 6, 8, 10 kao operativnu referencu
✅ Čitati SUPRA_LANGUAGE_SYSTEM_v2.md kao historijsku referencu
✅ Koristiti AI_STATUS.md i AI_WORKFLOW.md kao operativne alate
✅ Referirati na BRAND_SYSTEM.md dok orchestrator nije ažuriran
✅ Označiti stare fajlove kao deprecated (dodati header napomenu)
```

---

## SLJEDEĆI KORACI — PLANIRANI (ne izvršavati bez posebnog dogovora)

```
1. MIGRACIJA U COWORK OS
   Premjestiti ili linkati SUPRA_BRAND_SYSTEM_v2/ u iCloud Cowork OS
   strukture gdje žive BRAND_VOICE.md i SUPRA_LANGUAGE_SYSTEM_v2.md.
   Cilj: jedan canonical folder koji sadrži cijeli brand sustav.

2. ORCHESTRATOR UPDATE
   Ažurirati scripts/orchestrator.js da šalje 01_SHARED_CORE.md
   umjesto BRAND_SYSTEM.md u GPT-4o kontekst.
   Ažurirati AI_WORKFLOW.md s novim referencama.

3. SKILL UPDATE
   Ažurirati supra-copy-editing, supra-grafike, supra-publish-prep,
   supra-ad-creative, supra-email-sequence da referenciraju novi sustav.
   (Nije hitno — skillovi funkcioniraju i s postojećim pravilima.)

4. BRAND_SYSTEM.md → DEPRECATED
   Nakon orchestrator updatea, označiti BRAND_SYSTEM.md deprecated.
   Opcija: transformirati u auto-generiran snapshot iz 01_SHARED_CORE.md.

5. VISUAL DENSITY RULES / DESIGN STRESS TEST
   Zasebna sesija: visual density rules, mobile crop failures,
   carousel readability, subtitle spacing, CTA fatigue, contrast failures.

6. SHARED_CORE_FAST.md (opcionalno)
   Kondenzirana verzija 01_SHARED_CORE.md za agente koji ne trebaju
   čitati 30KB prije svakog kratkog outputa.
   Format: agent cheat sheet, max 2 stranice.
```

---

_SUPRA BRAND SYSTEM v2 — 05_DEPRECATED.md_
_Ante Antić / Učilište Supra Studium_
_28. svibnja 2026._
