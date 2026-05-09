#!/usr/bin/env python3
"""Scan poiExtraKenyaCitiesV2.ts and list POIs with empty/short descriptionAdvanced per language."""
import re, json, sys

PATH = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraKenyaCitiesV2.ts"
with open(PATH, "r", encoding="utf-8") as f:
    src = f.read()

# Find each POI block by id
ids = []
for m in re.finditer(r'id:\s*"([^"]+)"', src):
    ids.append((m.start(), m.group(1)))

# For each id, find the descriptionAdvanced block; we need to extract de/hu/ro/en lengths
# descriptionAdvanced can be either single-line or multi-line dict.
# Strategy: locate "descriptionAdvanced:" then find the matching opening { and balanced close.

def find_desc_adv_block(text, start_idx):
    m = re.search(r'descriptionAdvanced\s*:\s*\{', text[start_idx:])
    if not m:
        return None, None
    abs_start = start_idx + m.end() - 1  # position of '{'
    depth = 0
    i = abs_start
    in_str = False
    str_char = None
    esc = False
    while i < len(text):
        c = text[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == str_char:
                in_str = False
        else:
            if c == '"' or c == "'":
                in_str = True
                str_char = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return abs_start, i
        i += 1
    return None, None

def extract_lang_lengths(block):
    out = {}
    # match each lang key value: lang: "..." (string with possibly escaped quotes)
    # Use a parser similar to above
    for lang in ["de","hu","ro","en"]:
        pattern = re.compile(r'\b' + lang + r'\s*:\s*"', re.MULTILINE)
        m = pattern.search(block)
        if not m:
            out[lang] = 0
            continue
        i = m.end()
        s = []
        esc = False
        while i < len(block):
            c = block[i]
            if esc:
                s.append(c)
                esc = False
            elif c == "\\":
                esc = True
                s.append(c)
            elif c == '"':
                break
            else:
                s.append(c)
            i += 1
        text = "".join(s)
        # decode common escapes for length count
        text = text.replace("\\n","\n").replace('\\"','"').replace("\\\\","\\")
        out[lang] = len(text)
    return out

results = []
for idx, (pos, poi_id) in enumerate(ids):
    end = ids[idx+1][0] if idx+1 < len(ids) else len(src)
    block_start, block_end = find_desc_adv_block(src, pos)
    if block_start is None or block_start > end:
        results.append((poi_id, None))
        continue
    block = src[block_start:block_end+1]
    lengths = extract_lang_lengths(block)
    results.append((poi_id, lengths))

short = []
for poi_id, lengths in results:
    if lengths is None:
        short.append((poi_id, "MISSING"))
        continue
    needs = [l for l in ["de","hu","ro","en"] if lengths[l] < 50]
    if needs:
        short.append((poi_id, {l: lengths[l] for l in ["de","hu","ro","en"]}, needs))

print(f"Total POIs: {len(results)}")
print(f"POIs needing fill: {len(short)}")
for s in short:
    print(s)
