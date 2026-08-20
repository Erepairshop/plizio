#!/usr/bin/env bash
set -uo pipefail

LANG_CODE="$1"
LANG_NAME="$2"
WORK="/home/erik/plizio-translations/informatika-k6-20260820"
QUEUE="translation-work/informatika-k6/queue-$LANG_CODE.json"
OUTPUT="$WORK/result-$LANG_CODE.jsonl"
mkdir -p "$WORK"

set -a
source /home/erik/plizio-audits/poi-only-technical-20260731/.azure-openai.env
set +a

status=1
for pass in 1 2 3; do
  echo "Translation pass $pass for $LANG_CODE"
  python3 scripts/test-translation/run-azure-informatika-translation.py \
    --queue "$QUEUE" \
    --output "$OUTPUT" \
    --language-name "$LANG_NAME"
  status=$?
  if [ "$status" -eq 0 ]; then
    break
  fi
done
exit "$status"
