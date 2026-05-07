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

missing_pois = []

for filepath in files:
    full_path = os.path.join(".", filepath)
    if not os.path.exists(full_path):
        continue
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        parts = content.split('id: "')
        for part in parts[1:]:
            id_val = part.split('"', 1)[0]
            
            # Find descriptionAdvanced block. The block could be empty or missing.
            adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', part, re.DOTALL)
            needs_ro = False
            
            if adv_match:
                adv_content = adv_match.group(1)
                if not re.search(r'ro:\s*"([^"]|\\")+"', adv_content):
                    needs_ro = True
            else:
                needs_ro = True
                
            if needs_ro:
                name_match = re.search(r'name:\s*\{.*?en:\s*"([^"]+)".*?\}', part, re.DOTALL)
                name = name_match.group(1) if name_match else id_val
                missing_pois.append({"id": id_val, "name": name})
                
    except Exception as e:
        pass

with open("missing_usa_ro.json", "w", encoding="utf-8") as f:
    json.dump(missing_pois, f, indent=2)

print(f"Found {len(missing_pois)} POIs missing RO.")
