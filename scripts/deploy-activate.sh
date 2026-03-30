#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=/home/borota25/Desktop/plizio/scripts/deploy-common.sh
source "$SCRIPT_DIR/deploy-common.sh"

log "Checking remote staging"
ssh_cmd "
  cd $TARGET_DIR &&
  test -f $REMOTE_STAGING/index.html &&
  test -d $REMOTE_STAGING/_next
" || die "Remote staging is incomplete"

log "Activating new export on server"
ssh_cmd "
  cd $TARGET_DIR &&
  rm -rf _next next_static &&
  cp -r $REMOTE_STAGING/* . &&
  if [ -d _next ]; then mv _next next_static; fi &&
  rm -rf $REMOTE_STAGING $ARCHIVE_NAME
"

log "Verifying deployed routes"
ssh_cmd "
  cd $TARGET_DIR &&
  test -f index.html &&
  test -d astrokemia &&
  test -d kemiatest &&
  test -d next_static
"

log "Deploy activation OK"
