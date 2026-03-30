#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=/home/borota25/Desktop/plizio/scripts/deploy-common.sh
source "$SCRIPT_DIR/deploy-common.sh"

cd "$LOCAL_REPO"

test -f "$LOCAL_REPO/out/index.html" || die "Missing out/index.html. Run deploy-build.sh first."
test -d "$LOCAL_REPO/out/_next" || die "Missing out/_next. Run deploy-build.sh first."

log "Packing out/ into archive"
rm -f "$LOCAL_ARCHIVE"
tar -C "$LOCAL_REPO/out" -czf "$LOCAL_ARCHIVE" .

test -f "$LOCAL_ARCHIVE" || die "Failed to create $LOCAL_ARCHIVE"

log "Uploading archive to server"
scp -P "$SSH_PORT" "$LOCAL_ARCHIVE" "$SSH_USER@$SSH_HOST:$TARGET_DIR/"

log "Extracting archive into remote staging"
ssh_cmd "
  cd $TARGET_DIR &&
  rm -rf $REMOTE_STAGING &&
  mkdir -p $REMOTE_STAGING &&
  tar -xzf $ARCHIVE_NAME -C $REMOTE_STAGING
"

log "Verifying remote staging"
ssh_cmd "
  cd $TARGET_DIR &&
  test -f $REMOTE_STAGING/index.html &&
  test -d $REMOTE_STAGING/_next
"

log "Cleaning local archive"
rm -f "$LOCAL_ARCHIVE"

log "Upload OK: remote staging is ready"
