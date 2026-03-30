#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

"$SCRIPT_DIR/deploy-build.sh"
"$SCRIPT_DIR/deploy-upload.sh"
"$SCRIPT_DIR/deploy-activate.sh"

printf '\nDeploy complete.\n'
