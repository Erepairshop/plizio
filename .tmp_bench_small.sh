#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
MODEL="$1"
LABEL="$2"
OUTDIR="/mnt/c/Users/User/plizio-repo/.tmp_bench/$LABEL"
mkdir -p "$OUTDIR"
rm -f "$OUTDIR/capitals.json" "$OUTDIR/run.log" "$OUTDIR/timing.txt"
export OUTPUT_PATH="$OUTDIR/capitals.json"
cd /mnt/c/Users/User/plizio-repo
START_TS=$(date +%s)
PROMPT="$(cat /mnt/c/Users/User/prompt_bench_small.txt)
OUTPUT_PATH=$OUTPUT_PATH"
/usr/local/bin/gemini --yolo -m "$MODEL" -p "$PROMPT" > "$OUTDIR/run.log" 2>&1
EX=$?
END_TS=$(date +%s)
echo "ELAPSED_SEC=$((END_TS - START_TS))" > "$OUTDIR/timing.txt"
echo "EXIT=$EX" >> "$OUTDIR/timing.txt"
ls -la "$OUTDIR/" >> "$OUTDIR/timing.txt"
