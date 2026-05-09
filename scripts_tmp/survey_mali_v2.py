# -*- coding: utf-8 -*-
import re, json, sys

path = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraMaliCitiesV2.ts"
with open(path, encoding="utf-8") as f:
    src = f.read()

# Find each POI block by id
id_re = re.compile(r'id:\s*"([^"]+)"')
ids = [(m.group(1), m.start()) for m in id_re.finditer(src)]

# For each id, find descriptionAdvanced block (if exists) up to next id (or end)
results = []
for i, (poi_id, start) in enumerate(ids):
    end = ids[i+1][1] if i+1 < len(ids) else len(src)
    block = src[start:end]
    # find descriptionAdvanced
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    info = {"id": poi_id, "has_descAdv": False, "lens": {"de":0,"hu":0,"ro":0,"en":0}}
    if m:
        info["has_descAdv"] = True
        # extract block - count braces
        s = m.end()
        depth = 1
        j = s
        while j < len(block) and depth > 0:
            c = block[j]
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            j += 1
        adv = block[s:j-1]
        # find each lang
        for lang in ["de","hu","ro","en"]:
            mm = re.search(rf'{lang}:\s*"((?:[^"\\]|\\.)*)"', adv)
            if mm:
                info["lens"][lang] = len(mm.group(1))
    results.append(info)

print(f"Total POIs: {len(results)}")
missing = []
for r in results:
    short = [l for l,n in r["lens"].items() if n < 50]
    if short:
        missing.append((r["id"], short, r["lens"]))
        print(f"{r['id']}: missing/short = {short}, lens={r['lens']}")
print(f"\nTotal POIs needing fill: {len(missing)}")
