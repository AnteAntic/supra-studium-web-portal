#!/bin/bash

# -------------------------------------------------------
# 🚀 Automatski deploy za Supra Studium web portal
# -------------------------------------------------------

FTP_HOST="ftp.uciliste-suprastudium.hr"
REMOTE_DIR="public_html"
LOCAL_DIR="dist"
BACKUP_FILE="backup_$(date +%Y-%m-%d_%H-%M-%S).zip"

echo "🧱 Pokrećem build projekta..."
npm run build && cp "public/.htaccess" "dist/.htaccess"

if [ $? -ne 0 ]; then
  echo "❌ Greška u buildu. Provjeri kod!"
  exit 1
fi

echo "✅ Build gotov."
echo "💾 Kreiram backup trenutnog weba..."

# FTP backup
lftp $FTP_HOST <<EOF
set ssl:verify-certificate no
set ftp:passive-mode on
cd $REMOTE_DIR
lcd ~/Downloads
mirror -c --verbose $REMOTE_DIR backups/
bye
EOF

echo "📦 Backup spremljen u ~/Downloads/backups/"
echo "🌐 Uploadam novi build na server..."

# FTP upload koristeći .netrc (bez lozinke u skripti)
lftp $FTP_HOST <<EOF
set ssl:verify-certificate no
set ftp:passive-mode on
lcd $LOCAL_DIR
cd $REMOTE_DIR
mirror -R --delete --verbose
bye
EOF

if [ $? -eq 0 ]; then
  echo "🚀 Upload završen!"
  echo "🌍 Web je sada aktivan na: https://uciliste-suprastudium.hr"
else
  echo "⚠️ Greška tijekom uploada! Provjeri vezu."
fi
