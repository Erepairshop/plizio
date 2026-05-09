#!/usr/bin/env python3
"""Analyze poiExtraPakistanCitiesV2.ts: find POI ids and which langs in descriptionAdvanced are short/empty/missing."""
import re
import json
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraPakistanCitiesV2.ts")
text = FILE.read_text(encoding="utf-8")

# Find all POI blocks via id: "..."
id_pattern = re.compile(r'id:\s*"([^"]+)"')
ids = [(m.start(), m.group(1)) for m in id_pattern.finditer(text)]
print(f"Total POI ids found: {len(ids)}")

# For each POI, find descriptionAdvanced block (first one) within its scope
# Scope: from this id position to next id position (or EOF)
results = []
for i, (pos, pid) in enumerate(ids):
    end = ids[i+1][0] if i+1 < len(ids) else len(text)
    block = text[pos:end]
    # find first descriptionAdvanced
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    if not m:
        results.append({"id": pid, "missing_block": True, "langs": {}})
        continue
    # extract until matching close brace
    start = m.end() - 1  # the '{'
    depth = 0
    j = start
    while j < len(block):
        c = block[j]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                break
        j += 1
    inner = block[start+1:j]
    # parse simple "lang: \"...\"," entries
    langs = {}
    for lang in ("de", "hu", "ro", "en"):
        # match lang: "..." with optional escaped quotes
        lm = re.search(rf'{lang}:\s*"((?:\\.|[^"\\])*)"', inner)
        if lm:
            raw = lm.group(1)
            # unescape minimally for length count
            unescaped = raw.encode().decode('unicode_escape', errors='replace')
            langs[lang] = len(unescaped)
        else:
            langs[lang] = 0
    results.append({"id": pid, "missing_block": False, "langs": langs})

# Print summary: which need filling (any lang < 50)
need = []
for r in results:
    if r["missing_block"]:
        need.append((r["id"], "ALL"))
        continue
    short_langs = [l for l, n in r["langs"].items() if n < 50]
    if short_langs:
        need.append((r["id"], ",".join(short_langs)))

print(f"POIs needing fill: {len(need)}")
for pid, langs in need:
    print(f"  {pid}: {langs}")

# also print sizes for all
print("\n--- Full size table ---")
for r in results:
    if r["missing_block"]:
        print(f"  {r['id']}: MISSING")
    else:
        print(f"  {r['id']}: " + " ".join(f"{l}={n}" for l,n in r["langs"].items()))
