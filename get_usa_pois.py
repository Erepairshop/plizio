import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

results = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract POI objects roughly by splitting on "id:"
        parts = content.split('id: "')
        for part in parts[1:]:
            id = part.split('"', 1)[0]
            
            # Extract the whole object roughly until the next id or end of array
            # We don't need a perfect parser, just enough to check if ro: exists in descriptionAdvanced
            obj_content = part
            
            # Find descriptionAdvanced block
            desc_adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^}]+)\}', obj_content)
            needs_ro = True
            
            if desc_adv_match:
                desc_adv_block = desc_adv_match.group(1)
                if 'ro:' in desc_adv_block:
                    ro_match = re.search(r'ro:\s*"([^"]+)"', desc_adv_block)
                    if ro_match and ro_match.group(1).strip() != "":
                        needs_ro = False
            
            if needs_ro:
                name_match = re.search(r'name\s*:\s*\{[^}]*en:\s*"([^"]+)"', obj_content)
                name = name_match.group(1) if name_match else id
                results.append({"id": id, "name": name, "file": file})
    except Exception as e:
        print(f"Error reading {file}: {e}")

with open('usa_missing_ro.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f"Found {len(results)} POIs needing RO descriptions.")
