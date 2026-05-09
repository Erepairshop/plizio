#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Check which POIs need filling: examine descriptionAdvanced block per language."""
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCongoCitiesV2.ts")
text = FILE.read_text(encoding="utf-8")

id_pattern = re.compile(r'id:\s*"([^"]+)"', re.M)
ids = [(m.group(1), m.start()) for m in id_pattern.finditer(text)]

# find descriptionAdvanced block
block_re = re.compile(r'descriptionAdvanced:\s*\{(.*?)\}\s*,\s*factsAdvanced', re.S)
# extract per-lang strings (de:"...", hu:"...", ...)
lang_re = re.compile(r'(de|hu|ro|en)\s*:\s*"((?:[^"\\]|\\.)*)"', re.S)

results = []
for i, (poi_id, start) in enumerate(ids):
    end = ids[i+1][1] if i+1 < len(ids) else len(text)
    block = text[start:end]
    bm = block_re.search(block)
    if not bm:
        results.append((poi_id, {"de":0,"hu":0,"ro":0,"en":0}, "NO_BLOCK"))
        continue
    inner = bm.group(1)
    lengths = {"de":0,"hu":0,"ro":0,"en":0}
    for lm in lang_re.finditer(inner):
        lengths[lm.group(1)] = len(lm.group(2))
    results.append((poi_id, lengths, "OK"))

print(f"Total POIs: {len(results)}")
print(f"{'ID':<35} {'DE':>5} {'HU':>5} {'RO':>5} {'EN':>5}  status")
needs = []
for poi_id, L, status in results:
    miss = [lg for lg in ("de","hu","ro","en") if L[lg] < 50]
    short = [lg for lg in ("de","hu","ro","en") if 50 <= L[lg] < 600]
    flag = ""
    if miss:
        flag = "  MISSING:" + ",".join(miss)
        needs.append((poi_id, miss, status))
    elif short:
        flag = "  SHORT:" + ",".join(short)
    print(f"{poi_id:<35} {L['de']:>5} {L['hu']:>5} {L['ro']:>5} {L['en']:>5}  {status}{flag}")

print(f"\nTotal needing fill: {len(needs)}")
