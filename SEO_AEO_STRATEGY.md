# SEO & AEO Strategija — Supra Studium
*Akcijski dokument za Antu · srpanj 2026 · dopuna tehničkim izmjenama iz Faza A–C*

Cilj: kad netko pita Google **ili** ChatGPT/Perplexity "gdje se educirati za manualnu terapiju u Hrvatskoj", odgovor treba biti Supra Studium.

---

## 1. Odmah nakon deploya (30 min, jednokratno)

1. **Google Search Console** — https://search.google.com/search-console
   - Dodaj property `uciliste-suprastudium.hr` (domain property, verifikacija kroz DNS ili postojeći HTML tag).
   - Submit sitemap: `https://uciliste-suprastudium.hr/sitemap.xml`.
   - "URL inspection" → zatraži indeksiranje za naslovnicu + 7 course stranica.
2. **Bing Webmaster Tools** — https://www.bing.com/webmasters
   - Uvezi property iz Search Consolea (1 klik). **Bing indeks hrani ChatGPT search** — ovo je najizravniji AEO potez.
3. Provjeri redirecte: `http://` i `www.` sada moraju vraćati 301 na `https://uciliste-suprastudium.hr` (popravljeno u Fazi C).

## 2. Google Business Profile (najjači lokalni + AI signal)

- Napravi/preuzmi profil "Učilište Supra Studium" (kategorija: *obrazovna ustanova / škola masaže*), adresa u Zagrebu, telefon +385 95 85 58 953, web link.
- **Recenzije polaznika**: nakon svake edukacije pošalji polaznicima direktan link za recenziju (QR kod na zadnjem predavanju radi najbolje). Cilj: 30+ recenzija s prosjekom 4.8+. AI asistenti izravno citiraju GBP recenzije kad preporučuju.
- Objavi 1× mjesečno na profilu (termin edukacije s fotografijom — može iz Metricool arhive).

## 3. NAP konzistentnost (Name, Address, Phone)

Svugdje identično: **Učilište Supra Studium · [adresa] · +385 95 85 58 953 · info@uciliste-suprastudium.hr**

- Provjeri/upiši: Google Business, Facebook page info, Instagram bio link, LinkedIn company, YouTube kanal "About", lokalni direktoriji (npr. poslovni.hr, tvrtke.hr, misterwhat.hr).
- Svaka nekonzistencija (stari broj, stara adresa) razvodnjava signal — AI modeli agregiraju te izvore.

## 4. YouTube (već imaš kanal — iskoristi ga za SEO)

- U opis **svakog** videa dodaj prvi red: link na relevantnu course stranicu + jedna rečenica što je edukacija.
- Nazivi videa neka sadrže pojam koji ljudi traže: "manualna terapija edukacija", "trigger point tečaj", "cupping tečaj Zagreb".
- Prikvači komentar s linkom na `/raspored`.

## 5. Sadržaj koji AI citira (pillar tekstovi)

AI asistenti citiraju **definicijski, autorski sadržaj** — ne prodajne stranice. Plan: 1 tekst mjesečno, klinički ton (Ante edukator glas), 800–1200 riječi, na webu kao nova ruta ili sekcija:

1. "Što je trigger point i kako ga terapeut prepoznaje palpacijom" 
2. "Akupresura vs. trigger point terapija — u čemu je razlika"
3. "Kako izgleda školovanje manualnog terapeuta u Hrvatskoj" (E-E-A-T zlato — nitko to nije napisao)
4. "Cupping u kliničkoj praksi: što kaže tkivo, a što marketing"
5. "Kalabaš masaža — porijeklo i miofascijalna primjena"

Pravila: autor uvijek potpisan ("Ante Antić, međunarodni sudac masažnih prvenstava"), poštuj TEXT_QUALITY_RULES.md (nikad apsolutni klinički claimovi), interno linkaj na course stranicu.

> Napomena: dok je web SPA bez prerenderinga, AI crawleri slabo čitaju React sadržaj. Pillar tekstovi maksimalni učinak dobivaju tek s **prerenderom (Phase 2)** — do tada ih Google čita, AI djelomično.

## 6. E-E-A-T (Ante kao imenovani stručnjak)

- Na `/o-ucilistu` već postoji biografija — dodaj istu kratku bio (2 rečenice + slika) na dno svake course stranice koju Ante vodi.
- LinkedIn: osobni profil povezan s company page; objavi pillar tekstove i tamo.
- Traži da te partneri (Body Balance poliklinika, World Federation of Massage) linkaju s njihovih stranica — 2-3 kvalitetna backlinika iz struke vrijede više od 50 direktorija.

## 7. Mjerenje (mjesečni ritual, 15 min)

- Search Console → Performance: prati upite "manualna terapija edukacija", "tečaj masaže zagreb", "trigger point tečaj" — pozicija i klikovi.
- PageSpeed Insights (https://pagespeed.web.dev) za naslovnicu — Core Web Vitals moraju ostati zeleni.
- Test AI vidljivosti: jednom mjesečno pitaj ChatGPT/Perplexity *"najbolja edukacija za manualnu terapiju u Hrvatskoj"* i zabilježi spominje li Supra Studium (i s kojim izvorom).

## 8. Phase 2 backlog (tehnički, za zasebnu sesiju)

- **Prerender/SSG** — statički HTML za sve rute; najveći preostali AEO potez (AI crawleri tada vide pun sadržaj + JSON-LD).
- Pillar tekstovi kao rute (`/znanje/...`) — tek nakon prerendera.
- lite-youtube-embed (brži LCP na stranicama s YouTube videima).
- Inline FAQ-ove (Akupresura, Cupping, 3DS, CFM) izvući u data arrayeve → FAQPage schema.
- courseSchedules.ts konsolidacija (single source of truth za datume — schema se onda generira iz istog izvora).

---

## Što je već napravljeno (tehnička podloga, srpanj 2026)

✅ 301 redirecti (http/www) · ✅ per-route title/description/canonical/OG · ✅ Course + BreadcrumbList + FAQPage JSON-LD · ✅ sitemap očišćen i svjež · ✅ llms.txt · ✅ assets 110 MB → ~22 MB (WebP, opisna imena) · ✅ width/height na slikama (CLS 0) · ✅ footer link-grid · ✅ 1 h1 po stranici · ✅ alt tekstovi na svim slikama
