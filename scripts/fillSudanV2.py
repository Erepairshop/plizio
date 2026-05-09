# -*- coding: utf-8 -*-
"""Scan Sudan V2 POI file, list all POI ids and current descriptionAdvanced lengths per language."""
import re, json, sys

PATH = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraSudanCitiesV2.ts"
with open(PATH, "r", encoding="utf-8") as f:
    src = f.read()

# Find every POI block by id then descriptionAdvanced object
# id pattern
id_re = re.compile(r'id:\s*"([^"]+)"')
ids = [m.group(1) for m in id_re.finditer(src)]

# For each POI, locate descriptionAdvanced block
# Use a regex that captures the object content non-greedily
da_re = re.compile(r'(id:\s*"([^"]+)"[\s\S]*?descriptionAdvanced:\s*\{)([\s\S]*?)(\n\s*\},)')

results = []
for m in da_re.finditer(src):
    poi_id = m.group(2)
    body = m.group(3)
    # extract de/hu/ro/en strings
    langs = {}
    for lang in ("de","hu","ro","en"):
        lm = re.search(rf'{lang}:\s*"((?:[^"\\]|\\.)*)"', body)
        langs[lang] = len(lm.group(1)) if lm else 0
    results.append((poi_id, langs))

print(f"Total POIs found: {len(ids)}")
print(f"DescriptionAdvanced blocks: {len(results)}")
for poi_id, L in results:
    short = [l for l,n in L.items() if n < 600]
    if short:
        print(f"  {poi_id}: <600 in {short}  lengths={L}")
print("---")
# Print also POIs missing DA entirely
da_ids = {r[0] for r in results}
missing = [i for i in ids if i not in da_ids]
print(f"POIs with NO descriptionAdvanced block: {len(missing)}")
for i in missing:
    print("  ", i)
