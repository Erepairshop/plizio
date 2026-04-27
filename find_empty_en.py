import re
import os

files = [
    "lib/visualLab/data/poiExtraDeLebenWirtschaft.ts",
    "lib/visualLab/data/poiExtraDeCities.ts",
    "lib/visualLab/data/poiExtraDe1.ts",
    "lib/visualLab/data/poiExtraDe2.ts",
    "lib/visualLab/data/poiExtraDe3a.ts",
    "lib/visualLab/data/poiExtraDe3b.ts",
    "lib/visualLab/data/poiExtraDe4a.ts",
    "lib/visualLab/data/poiExtraDe4b.ts"
]

def get_empty_en_ids(file_path):
    if not os.path.exists(file_path):
        return []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # This regex is a bit loose but should work for identifying POI blocks
    # We look for ID and then check descriptionAdvanced.en
    # A more robust way is to split by { and } but TS is not regular.
    # Let's try splitting by 'id:'
    pois = content.split('id: "')
    empty_ids = []
    for poi in pois[1:]: # skip first part before first id
        poi_id = poi.split('"')[0]
        # Find descriptionAdvanced block within this POI
        # We assume it's before the next 'id: "'
        # Look for descriptionAdvanced: { ... en: ""
        desc_adv_match = re.search(r'descriptionAdvanced:\s*{[^}]*en:\s*""', poi)
        if desc_adv_match:
            empty_ids.append(poi_id)
    return empty_ids

all_empty = {}
for f in files:
    ids = get_empty_en_ids(f)
    if ids:
        all_empty[f] = ids

for f, ids in all_empty.items():
    print(f"{f}: {len(ids)} POIs")
    for poi_id in ids:
        print(f"  - {poi_id}")
