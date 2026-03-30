#!/usr/bin/env bash
set -euo pipefail

LOCAL_REPO="/home/borota25/Desktop/plizio"
SSH_HOST="72.61.100.230"
SSH_PORT="65002"
SSH_USER="u660905446"
TARGET_DIR="~/domains/plizio.com/public_html"
REMOTE_STAGING=".deploy-out"
ARCHIVE_NAME="plizio-out.tar.gz"
LOCAL_ARCHIVE="/tmp/$ARCHIVE_NAME"
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=8192}"

log() {
  printf '\n[%s] %s\n' "$(date '+%H:%M:%S')" "$1"
}

die() {
  printf '\n[ERROR] %s\n' "$1" >&2
  exit 1
}

ssh_cmd() {
  ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "$@"
}
