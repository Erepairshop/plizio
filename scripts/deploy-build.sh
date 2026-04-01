#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=/home/borota25/Desktop/plizio/scripts/deploy-common.sh
source "$SCRIPT_DIR/deploy-common.sh"

cd "$LOCAL_REPO"

log "Generating OG images"
node scripts/generate-og.mjs

log "Running preflight"
npm run preflight

log "Building static export"
npx next build

test -f "$LOCAL_REPO/out/index.html" || die "Build finished without out/index.html"
test -d "$LOCAL_REPO/out/_next" || die "Build finished without out/_next"

log "Build OK: out/ is ready"
