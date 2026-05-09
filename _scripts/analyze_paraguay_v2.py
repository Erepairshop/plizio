#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Analyze poiExtraParaguayCitiesV2.ts and list which descriptionAdvanced langs are empty/<50 chars."""
import re
import json
import sys
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraParaguayCitiesV2.ts")
text = FILE.read_text(encoding="utf-8")

# Find each POI block by id
# We'll split on top-level '{' starting at "id: \"..."
# Simpler: find each "id:" position then walk braces.

# Find positions of 'id: "'
id_positions = [(m.start(), m.group(1)) for m in re.finditer(r'id:\s*"([^"]+)"', text)]

# For each POI, find descriptionAdvanced block
# pattern: descriptionAdvanced: { de: "...", hu: "...", ro: "...", en: "..." }

results = []
for i, (pos, pid) in enumerate(id_positions):
    end = id_positions[i+1][0] if i+1 < len(id_positions) else len(text)
    block = text[pos:end]
    # Find descriptionAdvanced: { ... }
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    if not m:
        results.append((pid, {"de": 0, "hu": 0, "ro": 0, "en": 0, "missing": True}))
        continue
    start = m.end()
    # Walk braces
    depth = 1
    j = start
    while j < len(block) and depth > 0:
        c = block[j]
        if c == '"':
            # skip string
            j += 1
            while j < len(block) and block[j] != '"':
                if block[j] == '\\':
                    j += 2
                    continue
                j += 1
            j += 1
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
        j += 1
    inner = block[start:j-1]
    lengths = {}
    for lang in ("de", "hu", "ro", "en"):
        # Capture the string for that lang
        lm = re.search(r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"', inner)
        if lm:
            s = lm.group(1)
            # de-escape minimally
            s = s.replace('\\"', '"').replace('\\\\', '\\')
            lengths[lang] = len(s)
        else:
            lengths[lang] = 0
    results.append((pid, lengths))

# Print summary: which need filling (any lang <50)
need = []
for pid, lens in results:
    short = [l for l in ("de","hu","ro","en") if lens.get(l,0) < 50]
    if short:
        need.append((pid, short, lens))

print(f"Total POIs: {len(results)}")
print(f"POIs needing fill: {len(need)}")
for pid, short, lens in need:
    print(f"  {pid}: missing/short={short} | lens={lens}")
