#!/usr/bin/env bash
# Delta deploy: regenerate POI HTMLs for a given list of POI IDs and rsync to VPS.
# Bypass the full Next build (~30 min) when only POI content (descAdv/sights/facts) changed.
#
# Usage:
#   bash scripts/deploy-poi-delta.sh <poi_ids_file>
#   bash scripts/deploy-poi-delta.sh _changed_pois.txt
#
# Input file: one POI id per line (e.g. "schwachhausen-extra")
#
# What it does:
#   1. Runs generate-poi-html.mts with POI_IDS_FILE filter → writes to out/<lang>/.../index.html
#   2. rsyncs the resulting HTMLs to the VPS active release symlink target
#   3. Skips Next build (sitemap, _next/, app pages) — those stay frozen from last deploy
#
# What it does NOT do:
#   - sitemap regen (use full GH Action if POIs added/removed)
#   - update _next/ assets (use full build for CSS/JS/component changes)
#   - touch country-map static HTMLs (run build-static-maps.mts separately)

set -euo pipefail

POI_IDS_FILE="${1:-}"
if [ -z "$POI_IDS_FILE" ] || [ ! -f "$POI_IDS_FILE" ]; then
  echo "usage: $0 <poi_ids_file>" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

POI_COUNT=$(wc -l < "$POI_IDS_FILE" | tr -d ' ')
echo "[delta] $(date +%H:%M:%S) starting delta deploy for $POI_COUNT POIs from $POI_IDS_FILE"

# 1. Ensure out/ exists (we write into it but expect prior full build to have populated _next/, app pages)
if [ ! -d "out" ]; then
  echo "[delta] FATAL: out/ does not exist — run a full build first." >&2
  exit 2
fi

# 2. Generate ONLY the targeted POI HTMLs
echo "[delta] $(date +%H:%M:%S) running generate-poi-html.mts (filtered)..."
POI_IDS_FILE="$POI_IDS_FILE" OUT_DIR="out" \
  node --experimental-strip-types scripts/generate-poi-html.mts 2>&1 | grep -vE "MODULE_TYPELESS|Reparsing|type.*module|trace-warnings" | tail -20

# 3. Collect the changed HTML paths for targeted rsync (newer than this run's start)
RSYNC_LIST="$(mktemp)"
trap "rm -f $RSYNC_LIST" EXIT
# Find all HTML files written in the last 10 minutes (delta-deploy run window)
find out -name "index.html" -newer "$POI_IDS_FILE" -type f > "$RSYNC_LIST" || true
HTML_COUNT=$(wc -l < "$RSYNC_LIST" | tr -d ' ')
echo "[delta] $(date +%H:%M:%S) HTMLs to deploy: $HTML_COUNT"
if [ "$HTML_COUNT" -eq 0 ]; then
  echo "[delta] no HTMLs touched — nothing to deploy"
  exit 0
fi

# 4. rsync to VPS active release
# Per memory: VPS deploy pipeline uses /home/erik/plizio/releases/<ts> with current → symlink
VPS_HOST="${VPS_HOST:-erik@100.111.54.55}"
VPS_CURRENT="${VPS_CURRENT:-/home/erik/plizio/current}"

echo "[delta] $(date +%H:%M:%S) rsyncing $HTML_COUNT files to $VPS_HOST:$VPS_CURRENT ..."
rsync -avz --files-from="$RSYNC_LIST" --relative ./ "$VPS_HOST:$VPS_CURRENT/" 2>&1 | tail -10

echo "[delta] $(date +%H:%M:%S) done. $POI_COUNT POIs × 4 langs ≈ $HTML_COUNT HTMLs deployed."
