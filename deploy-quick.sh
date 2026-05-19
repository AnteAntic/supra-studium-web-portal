#!/bin/bash

# -------------------------------------------------------
# ⚡ Brzi deploy — samo HTML + JS/CSS assets
# Preskače lovable-uploads/ i videos/ (nisu se promijenili)
# Supra Studium web portal
# -------------------------------------------------------

FTP_HOST="ftp.uciliste-suprastudium.hr"
REMOTE_DIR="public_html"
LOCAL_DIR="dist"

echo "⚡ Build..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build greška. Provjeri kod."
  exit 1
fi

echo "✅ Build gotov. Uploadam samo promijenjene fajlove..."

lftp $FTP_HOST <<EOF
set ssl:verify-certificate no
set ftp:passive-mode on
lcd $LOCAL_DIR
cd $REMOTE_DIR
mirror -R --verbose --exclude lovable-uploads/ --exclude videos/ . .
bye
EOF

if [ $? -eq 0 ]; then
  echo "🚀 Brzi deploy završen!"
  echo "🌍 https://uciliste-suprastudium.hr"
else
  echo "⚠️ Greška. Provjeri vezu ili .netrc."
fi
