#!/usr/bin/env bash
set -uo pipefail

LANG_CODE="$1"
LANG_NAME="$2"
QUEUE_PATH="${3:-translation-work/biologie-test/queue.json}"
OUTPUT_NAME="${4:-result-$LANG_CODE.jsonl}"
WORK="/home/erik/plizio-translations/biologie-test-20260820"
mkdir -p "$WORK"

set -a
source /home/erik/plizio-audits/poi-only-technical-20260731/.azure-openai.env
set +a

status=1
for pass in 1 2 3; do
  echo "Translation pass $pass for $LANG_CODE"
  python3 scripts/test-translation/run-azure-biologie-translation.py \
    --queue "$QUEUE_PATH" \
    --output "$WORK/$OUTPUT_NAME" \
    --language-name "$LANG_NAME"
  status=$?
  if [ "$status" -eq 0 ]; then
    break
  fi
done
exit "$status"
