import os
import re
import json

files = [
    "lib/visualLab/data/poiExtraJamaicaCitiesV2.ts",
    "lib/visualLab/data/poiExtraJamaicaEconomicV2.ts",
    "lib/visualLab/data/poiExtraJamaicaHistoryV2.ts",
    "lib/visualLab/data/poiExtraJamaicaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraJamaicaLifeV2.ts",
    "lib/visualLab/data/poiExtraJamaicaNatureV2.ts",
    "lib/visualLab/data/poiExtraJamaicaReliefV2.ts"
]

results = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file}: {e}")
        continue

    # Split into POI blocks roughly
    blocks = re.split(r'\{\s*id:\s*["\']', content)
    for block in blocks[1:]:
        # extract id
        id_match = re.match(r'([^"\']+)', block)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        # extract name en
        name_match = re.search(r'name:\s*\{[^\}]*en:\s*["\']([^"\']+)["\']', block)
        name_en = name_match.group(1) if name_match else poi_id
        
        # check if descriptionAdvanced en exists
        has_en_desc = re.search(r'descriptionAdvanced:\s*\{[^\}]*en:\s*["\']', block)
        
        if not has_en_desc:
            results.append({
                "id": poi_id,
                "name": name_en,
                "file": file
            })

with open("jamaica_pois_to_process.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Found {len(results)} POIs to process.")
