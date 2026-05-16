# 🚀 SUPRA STUDIUM - DEPLOYMENT CHECKLIST

**Brzi deployment proces - korak po korak**

---

## 📍 PRIJE POČETKA

Otvorite terminal i idite u folder projekta:

```bash
cd "/Users/ante/01_Projekti/Supra Studium/Web design/backup html/supra-studium-web-portal"
```

---

## 1️⃣ PRIHVATI PROMJENE U VS CODE-u

**Gdje:** VS Code → Continue panel  
**Što:** Klikni gumb **"Accept"** da primijeniš promjene na datoteku

*(Vite će se automatski reloadati)*

---

## 2️⃣ PROVJERI U BROWSER-u

**Gdje:** http://localhost:8080/raspored  
**Što:** Provjeri da se promjene vide

---

## 3️⃣ GIT - DODAJ PROMJENE

Kopiraj i lijepljenje u terminal:

```bash
git add src/pages/RasporedPage.tsx
git add public/.htaccess
git commit -m "Update Raspored courses: fix dates"
```

**Što čeka:** Trebalo bi vidjeti:
```
[main xxxxxx] Update Raspored courses: fix dates
 2 files changed, XX insertions(+), XX deletions(-)
```

---

## 4️⃣ NAPRAVI PRODUCTION BUILD

```bash
npm run build
```

**Što čeka:** 
```
✓ built in X.XXs
```

*(Upozorenja je OK - nisu kritična)*

---

## 5️⃣ DEPLOYMENT NA SERVER (FINALNO!)

```bash
./deploy.sh
```

**Što se desava:**
1. Pravi backup (~/Downloads/backups/)
2. Uploadava dist/ na server
3. ✅ Gotovo!

**Provjera na** → https://uciliste-suprastudium.hr/raspored

---

## 📝 BILJEŠKE

- Svaki put **moraš** biti u `/supra-studium-web-portal` direktoriju
- `~/.netrc` datoteka mora sadržavati FTP kredencijale
- Build datoteke ostaju u `dist/` folderу (sigurno za testiranje)

---

## 🔄 SLJEDEĆI PUT - SAMO KOPIRAJ OVO

```bash
# 1. Prihvati u VS Code (Accept button)
# 2. Provjeri localhost:8080/raspored

# 3. Terminal naredbe:
git add src/pages/RasporedPage.tsx
git add public/.htaccess
git commit -m "Update Raspored courses: [OPIS PROMJENE]"

# 4. Build
npm run build

# 5. Deploy
./deploy.sh
```

---

**Vrijeme: ~5-10 minuta ukupno** ⏱️
