# Search Console & Bing Webmaster — Izvještaj o postavljanju
*Datum: 2026-07-07 · Izvedeno kroz Ante-ov Chrome (bez API-ja)*

---

## Sažetak

| Stavka | Status |
|---|---|
| Google Search Console — property | ✅ **Kreiran i verificiran** (URL-prefiks) |
| GSC — sitemap.xml | ✅ Poslan (početni status "couldn't fetch" — prolazno, vidi niže) |
| GSC — indeksiranje glavnih stranica | ✅ Zatraženo za svih 9 |
| GSC — ručne kazne (manual actions) | ✅ Nema |
| GSC — sigurnosni problemi | ✅ Nema |
| GSC — Domain property (DNS) | ✅ **Verificiran** (DNS TXT dodan u cPanel Zone Editor) |
| Bing Webmaster Tools | ✅ **Postavljen** (import iz GSC-a, sitemap crawlan, 9 stranica poslano) |
| Bonus popravak — meta description naslovnice | ✅ **Skraćen i deployan** (Bing flag) |

---

## 1. Google Search Console

**Račun:** dublay2@gmail.com (tvoj). Prije ovoga **nije postojao** nijedan property za domenu.

### 1.1 Property i verifikacija
- Kreiran **URL-prefiks property**: `https://uciliste-suprastudium.hr/`
- Verifikacija: **HTML meta tag** (`google-site-verification`). Tag je dodan u `index.html` `<head>` i deployan na produkciju; Google je potvrdio **"Vlasništvo je potvrđeno"**.
- ⚠️ **Ne uklanjati** ovaj meta tag iz `index.html` — Google povremeno reverificira; uklanjanje bi ukinulo verifikaciju.

### 1.2 Sitemap
- Poslan: `https://uciliste-suprastudium.hr/sitemap.xml` (11 URL-ova).
- Početni status u GSC-u: **"Nije moguće dohvatiti"**. Provjereno da je ovo **prolazno početno stanje**, ne stvarni problem:
  - Googlebot dohvaća sitemap: **HTTP 200**, `application/xml`, valjan XML.
  - Referenciran u `robots.txt` (`Sitemap: …/sitemap.xml`).
  - Potvrda da Google čita sitemap: URL inspekcije stranica prikazuju **"Otkriće → Sitemaps: …/sitemap.xml"**.
  - **Očekivano:** status prelazi u "Uspješno" unutar nekoliko sati do 1–2 dana. Ponovno provjeriti; ne treba nikakva akcija.

### 1.3 Zatraženo indeksiranje (9 glavnih stranica)
| Stranica | Zatečeno stanje | Akcija |
|---|---|---|
| `/` (naslovnica) | Već indeksirana | Re-indeksiranje zatraženo |
| `/lomi-lomi` | Već indeksirana | Re-indeksiranje zatraženo |
| `/skola-manualne-terapije` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/crossfriction-funkcionalna-masaza` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/akupresura-trigger-point` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/cupping-terapija` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/calabash-certifikacija` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/3d-advanced-therapeutic-stretching` | Otkriveno, nije indeksirano | Indeksiranje zatraženo |
| `/raspored` | Otkriveno (preko sitemapa **i** internog linka s naslovnice) | Indeksiranje zatraženo |

**Nalaz:** naslovnica i Lomi Lomi su Googleu bili poznati od prije (stranica je već postojala). Ostalih 7 stranica Google je **otkrio preko novog sitemapa** ("Otkriveno – trenutačno nije indeksirano") — to je uredno stanje za svježe/ažurirane stranice i indeksiranje slijedi nakon obrade zahtjeva (obično dani do ~2 tjedna).

### 1.4 Provjere problema
- **Ručne radnje (kazne):** ✅ "Nije otkrivena nijedna poteškoća."
- **Sigurnosne poteškoće:** ✅ "Nije otkrivena nijedna poteškoća."
- **HTTPS:** ✅ Sve inspicirane stranice poslužuju se preko HTTPS-a.
- **Canonical:** ✅ Bez konflikata na razini pojedinačnih URL-ova (svaka inspekcija prijavljuje vlastiti canonical; nema "Duplicate without user-selected canonical"). Agregatni izvještaj "Indeksiranje stranice" je **još u obradi** (novi property) — ponovno provjeriti za nekoliko dana.
- **Mobile Usability:** taj izvještaj **više ne postoji** u Search Consoleu (Google ga je ukinuo u prosincu 2023.). Mobilnu upotrebljivost pratimo kroz PageSpeed/Core Web Vitals umjesto toga.
- **Core Web Vitals:** trenutno bez podataka — treba terenske podatke (obično ~28 dana prometa). Provjeriti kasnije.

### 1.5 Domain property — ✅ VERIFICIRAN (2026-07-08)
Uz URL-prefiks property, dovršen je i **Domain property** (`uciliste-suprastudium.hr`) koji pokriva **sve subdomene i http+https**. DNS TXT zapis dodan je kroz **cPanel → Zone Editor** na root domene:

```
Tip: TXT · Name: uciliste-suprastudium.hr. · TTL: 300
Vrijednost: google-site-verification=bWaIKAeMCa0rgQEM72xXcyUmfo1dI4Cqd7G5TZhn2Uo
```

Potvrđeno: zapis vidljiv na oba autoritativna nameservera (ns1/ns2.mojsite.com) i na Google resolveru (8.8.8.8); GSC → **"Vlasništvo je potvrđeno"** (metoda: Pružatelj naziva domene).

**⚠️ Ne uklanjati** ni ovaj DNS TXT zapis ni HTML meta tag — Google povremeno reverificira.

**Napomene s implementacije:**
- TTL je morao biti **300** (ne 14400) jer postojeći SPF TXT na rootu ima TTL 300, a cPanel traži isti TTL za sve TXT zapise istog imena.
- Kod prvog unosa TXT vrijednosti kroz preglednik jedan znak se izobličio (veliko `I` → malo `l` u `…1dI4…`), pa GSC verifikacija nije prošla. Ispravljeno postavljanjem točne vrijednosti (potvrđeno hexdumpom protiv verificiranog meta taga).

### Rezultat: u GSC-u postoje **obje** verzije propertyja
- ✅ **Domain:** `uciliste-suprastudium.hr` (sc-domain)
- ✅ **URL-prefiks:** `https://uciliste-suprastudium.hr/`

---

## 2. Bing Webmaster Tools — ✅ postavljeno

Ante se prijavio i uvezao site iz Google Search Consolea. Dovršeno (2026-07-08):

- **Site verificiran** (auto, kroz GSC import) — property `uciliste-suprastudium.hr` aktivan.
- **Sitemap:** automatski uvezen i **uspješno crawlan** — status **Success**, **11 URL-ova otkriveno**, 0 grešaka, 0 upozorenja. (Bing je crawlao odmah — brže od Googlea.)
- **Indeksiranje zatraženo za svih 9 glavnih stranica** preko "URL Submission" (dnevna kvota 10.000 URL-ova — praktički neograničeno): naslovnica + 7 course stranica + `/raspored`.
- **Naslovnica:** Bing "URL Inspection" → **"Indexed successfully / URL can be indexed by Bing"** ✅; **2 markup tipa** (naš JSON-LD se čita) ✅.
- **Nema crawl grešaka ni sigurnosnih problema.**

### Nalaz i popravak: meta description naslovnice
Bing "URL Inspection" (i **Bing Index** i **Live URL**) javio je grešku **"Meta Description too long or too short"** na naslovnici. Statički opis u `index.html` bio je ~185 znakova (predugačak; ideal 120–160).
- ✅ **Popravljeno:** skraćeno na ~137 znakova, buildano, deployano na produkciju i commitano. Bing će novi opis pokupiti pri idućem crawlu (re-indeksiranje već zatraženo).

### Nalaz: "H1 tag missing" (bio je zastarjeli keš — riješeno)
Bingov **keširani** crawl (Bing Index) prikazivao je "H1 tag missing" na naslovnici, ali **Live URL** (svjež dohvat) tu grešku **više ne prikazuje** — h1 je prisutan i Bing ga vidi. To je bio keš od prije Faza C deploya; nije potrebna nikakva akcija.

> Bing je važan i za **AI pretragu** — ChatGPT Search i Copilot koriste Bingov indeks.

---

## 3. Preporuke (redoslijed)

1. **Ništa hitno — sve je postavljeno** (GSC URL-prefiks + Domain, Bing, sitemapi, indeksiranje). Ostaje samo praćenje.
2. **Za 2–3 dana:** provjeri u GSC-u — je li sitemap status "Uspješno", jesu li se stranice počele indeksirati (izvještaj "Stranice"), ima li novih upozorenja. U Bingu provjeri je li nova (kraća) meta description pokupljena.
3. **Za 2–3 tjedna:** provjeri "Uspješnost"/"Search Performance" (GSC i Bing) — upiti, pozicije, klikovi za "manualna terapija edukacija", "trigger point tečaj", "tečaj masaže zagreb".
4. **Nastavi po** [`SEO_AEO_STRATEGY.md`](SEO_AEO_STRATEGY.md): Google Business Profile + recenzije, NAP konzistentnost, YouTube opisi, pillar tekstovi (E-E-A-T).
5. **Ne diraj web** do idućih većih izmjena — pusti Google/Bing da reindeksiraju.

> **Napomena za Phase 2 (prerender):** Bingov keširani crawl pokazao je "H1 missing" jer Bing slabije izvršava JavaScript od Googlea. Na živom dohvatu h1 se vidi, ali ovo je još jedan dokaz da SPA bez prerendera ovisi o izvršavanju JS-a — što potvrđuje da je **prerender/SSG najveći preostali AEO potez** (AI crawleri i Bing tada dobivaju pun statički HTML).

---

## Napomena o screenshotovima
Sve gornje nalaze (potvrda vlasništva, čist status ručnih kazni i sigurnosti, status svake URL-inspekcije, sitemap) pregledao sam uživo u tvom pregledniku tijekom postavljanja. Screenshotovi su vidljivi u tijeku sesije; ako želiš spremljene slike pojedinih ekrana u repo, javi pa ih izvezem.
