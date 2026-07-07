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
| GSC — Domain property (DNS) | 🟡 **Pripremljen, čeka tvoj DNS TXT zapis** |
| Bing Webmaster Tools | 🟡 **Čeka tvoju prijavu** (ne mogu unositi lozinku) |

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

### 1.5 Domain property (pripremljeno, čeka tebe)
Uz URL-prefiks property, započeo sam i **Domain property** (`uciliste-suprastudium.hr`) i spremio ga kao "potvrdi kasnije". Domain property pokriva **sve subdomene i http+https** — robusnije za SEO. Za dovršetak **ti** trebaš dodati DNS TXT zapis kod registrara domene (ja nemam pristup registraru):

```
Tip zapisa: TXT
Host / Name: @   (root domene uciliste-suprastudium.hr)
Vrijednost:  google-site-verification=bWaIKAeMCa0rgQEM72xXcyUmfo1dI4Cqd7G5TZhn2Uo
TTL:         zadano (npr. 3600)
```

**Koraci:** prijava kod registrara domene → DNS postavke → dodaj TXT zapis gore → spremi → u GSC-u otvori Domain property i klikni "Potvrdi". DNS propagacija zna potrajati do nekoliko sati.

---

## 2. Bing Webmaster Tools — čeka tvoju prijavu

Otvorio sam `bing.com/webmasters`. **Nisi prijavljen**, a prijavu i autorizaciju ne mogu odraditi umjesto tebe (ne unosim lozinke niti odobravam OAuth pristup).

**Preporučeni minimalni put (najbrži):**
1. Otvori https://www.bing.com/webmasters i klikni **Sign In** (prijavi se **Google računom dublay2@gmail.com** radi koraka 2).
2. Na početnom ekranu odaberi **"Import your sites from Google Search Console"** → odobri pristup.
   - Bing tada **automatski** preuzme verificirani property i **sitemap** iz GSC-a — nema ručne verifikacije ni ponovnog slanja sitemapa.
3. Ako ne želiš import: **Add site** → `https://uciliste-suprastudium.hr/` → verifikacija **HTML meta tag** (mogu ti dodati isti stil taga u `index.html` i redeployati, kao za Google), pa u Bingu **Submit sitemap**: `https://uciliste-suprastudium.hr/sitemap.xml`.

> Bing je važan i za **AI pretragu** — ChatGPT Search i Copilot koriste Bingov indeks. Zato je ovaj korak vrijedan iako je Bingov tržišni udio manji.

**Kad se prijaviš, javi — mogu te dalje voditi kroz import ili dodati Bing meta tag u kod i deployati.**

---

## 3. Preporuke (redoslijed)

1. **Sada (5 min):** dodaj DNS TXT zapis (sekcija 1.5) i dovrši Bing prijavu + import (sekcija 2).
2. **Za 2–3 dana:** provjeri u GSC-u — je li sitemap status "Uspješno", jesu li se stranice počele indeksirati (izvještaj "Stranice"), ima li novih upozorenja.
3. **Za 2–3 tjedna:** provjeri "Uspješnost" (Performance) — upiti, pozicije, klikovi za "manualna terapija edukacija", "trigger point tečaj", "tečaj masaže zagreb".
4. **Nastavi po** [`SEO_AEO_STRATEGY.md`](SEO_AEO_STRATEGY.md): Google Business Profile + recenzije, NAP konzistentnost, YouTube opisi, pillar tekstovi (E-E-A-T).
5. **Ne diraj web** do idućih većih izmjena — pusti Google/Bing da reindeksiraju.

---

## Napomena o screenshotovima
Sve gornje nalaze (potvrda vlasništva, čist status ručnih kazni i sigurnosti, status svake URL-inspekcije, sitemap) pregledao sam uživo u tvom pregledniku tijekom postavljanja. Screenshotovi su vidljivi u tijeku sesije; ako želiš spremljene slike pojedinih ekrana u repo, javi pa ih izvezem.
