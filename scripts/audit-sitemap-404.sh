#!/usr/bin/env bash
# Crawl all sitemap URLs and produce a list of 404/410 URLs.
# Output: public/data/_bad-poi-urls.json (used at build-time by app/sitemap.ts to exclude them).
# Usage:  bash scripts/audit-sitemap-404.sh
# Resumes if interrupted (skips URLs already in tmp/sitemap-status.txt).

set -uo pipefail
SITE="https://plizio.com"
TMP="${TMPDIR:-/tmp}/sitemap-audit"
mkdir -p "$TMP"
URLS="$TMP/urls.txt"
STATUS="$TMP/status.txt"
BAD_JSON="C:/Users/User/plizio-repo/public/data/_bad-poi-urls.json"

PARALLEL="${PARALLEL:-24}"

echo "[$(date +%H:%M:%S)] fetching sitemap index..."
# Enumerate sitemap chunks (try 1..40 until 404)
> "$URLS"
for i in $(seq 1 40); do
  xml=$(curl -s -w "HTTPSTATUS:%{http_code}" "$SITE/sitemap-$i.xml")
  code="${xml##*HTTPSTATUS:}"
  body="${xml%HTTPSTATUS:*}"
  if [ "$code" = "200" ]; then
    n=$(echo "$body" | grep -c '<loc>')
    echo "  sitemap-$i.xml: $n URLs"
    echo "$body" | grep -oE '<loc>[^<]+</loc>' | sed 's|<loc>||; s|</loc>||' >> "$URLS"
  else
    break
  fi
done
TOTAL=$(wc -l < "$URLS")
echo "[$(date +%H:%M:%S)] total URLs: $TOTAL"

# Resume: skip URLs already checked
if [ -f "$STATUS" ]; then
  CHECKED=$(wc -l < "$STATUS")
  echo "[$(date +%H:%M:%S)] resuming, already checked: $CHECKED"
  # Extract checked URLs (col 2) and subtract from URLS
  awk '{print $2}' "$STATUS" | sort -u > "$TMP/checked.txt"
  sort -u "$URLS" > "$TMP/all_sorted.txt"
  comm -23 "$TMP/all_sorted.txt" "$TMP/checked.txt" > "$TMP/todo.txt"
  REMAINING=$(wc -l < "$TMP/todo.txt")
  echo "[$(date +%H:%M:%S)] remaining: $REMAINING"
else
  cp "$URLS" "$TMP/todo.txt"
fi

# Parallel curl. -s silent, -o discard body, --max-time 10s per URL, write status+url.
echo "[$(date +%H:%M:%S)] starting parallel curl x$PARALLEL ..."
cat "$TMP/todo.txt" | xargs -P "$PARALLEL" -I {} \
  curl -s -o /dev/null --max-time 10 -w "%{http_code} {}\n" {} >> "$STATUS"

# Tally
echo "[$(date +%H:%M:%S)] done. tally:"
awk '{print $1}' "$STATUS" | sort | uniq -c | sort -rn | head -10

# Extract 404 + 410 URLs to JSON
echo "[$(date +%H:%M:%S)] writing bad URL list..."
awk '$1 == "404" || $1 == "410" {print $2}' "$STATUS" | sort -u > "$TMP/bad.txt"
BAD=$(wc -l < "$TMP/bad.txt")
echo "[$(date +%H:%M:%S)] bad URLs: $BAD"

# Write JSON: array of path-only URLs (no host) that should be excluded from sitemap.
node -e "
const fs=require('fs');
const lines=fs.readFileSync('$STATUS','utf8').split('\n').filter(Boolean);
const bad=new Set();
for(const ln of lines){
  const sp=ln.indexOf(' ');
  if(sp<0)continue;
  const code=ln.slice(0,sp);
  const url=ln.slice(sp+1);
  if(code==='404'||code==='410'){
    bad.add(url.replace(/^https?:\/\/[^/]+/,''));
  }
}
const arr=Array.from(bad).sort();
fs.writeFileSync('$BAD_JSON',JSON.stringify(arr,null,1));
console.log('saved',arr.length,'bad URLs to $BAD_JSON');
"
ls -la "$BAD_JSON"
