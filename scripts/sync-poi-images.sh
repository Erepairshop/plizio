#!/usr/bin/env bash
# Rsync public/poi-images/ to plizio.com server.
# Designed for incremental sync: only new/changed webp files transfer.
# Runs from WSL (uses ~/.ssh/plizio_gh_deploy key).
set -euo pipefail

SSH_KEY="$HOME/.ssh/plizio_gh_deploy"
SSH_PORT="65002"
SSH_USER="u660905446"
SSH_HOST="72.61.100.230"
LOCAL_DIR="/mnt/c/Users/User/plizio-repo/public/poi-images/"
REMOTE_DIR="domains/plizio.com/public_html/poi-images/"
NTFY="http://127.0.0.1:8888/plizio-borota25-alerts"

ntfy() { curl -s -X POST -d "[poi-img-sync] $1" "$NTFY" > /dev/null 2>&1 || true; }

if [ ! -f "$SSH_KEY" ]; then
  echo "ERROR: ssh key not found at $SSH_KEY" >&2
  ntfy "HIBA: ssh kulcs hianyzik"
  exit 1
fi

count=$(ls -1 "$LOCAL_DIR" 2>/dev/null | wc -l)
ntfy "start, helyi $count fajl"

rsync -az --partial --info=stats2 \
  -e "ssh -i $SSH_KEY -p $SSH_PORT -o BatchMode=yes -o StrictHostKeyChecking=accept-new" \
  "$LOCAL_DIR" \
  "$SSH_USER@$SSH_HOST:$REMOTE_DIR"

rc=$?
if [ $rc -eq 0 ]; then
  ntfy "kesz, sync OK"
else
  ntfy "HIBA rc=$rc"
fi
exit $rc
