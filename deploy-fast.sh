#!/bin/bash

# -------------------------------------------------------
# ⚡ Brzi deploy (bez backupiranja)
# Supra Studium web portal
# -------------------------------------------------------

FTP_HOST="ftp.uciliste-suprastudium.hr"
REMOTE_DIR="public_html"
LOCAL_DIR="dist"

echo "⚡ Pokrećem brzi build i upload bez backupiranja..."
npm run build && cp "public/.htaccess" "dist/.htaccess"

if [ $? -ne 0 ]; then
  echo "❌ Greška u buildu. Provjeri kod!"
  exit 1
fi

echo "✅ Build gotov. Spajam se na FTP..."

lftp $FTP_HOST <<EOF
set ssl:verify-certificate no
set ftp:passive-mode on
lcd $LOCAL_DIR
cd $REMOTE_DIR
mirror -R --delete --verbose
bye
EOF

if [ $? -eq 0 ]; then
  echo "🚀 Brzi upload završen!"
  echo "🌍 Web je sada aktivan na: https://uciliste-suprastudium.hr"
else
  echo "⚠️ Greška tijekom uploada! Provjeri vezu ili .netrc."
fi

