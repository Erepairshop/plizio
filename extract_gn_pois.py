import re
import json

files = [
    "lib/visualLab/data/poiExtraGuineaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuineaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuineaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuineaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuineaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuineaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuineaReliefV2.ts"
]

missing_pois = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Find all POI blocks
            # This is a bit naive but works for standard formatting
            blocks = content.split('id: "')
            for block in blocks[1:]:
                id_match = re.search(r'^([^"]+)"', block)
                if not id_match:
                    continue
                poi_id = id_match.group(1)
                
                # Check if descriptionAdvanced exists and has de
                has_desc_adv_de = bool(re.search(r'descriptionAdvanced:\s*\{[^}]*de:', block, re.DOTALL))
                if not has_desc_adv_de:
                    name_match = re.search(r'name:\s*\{[^}]*de:\s*"([^"]+)"', block, re.DOTALL)
                    name = name_match.group(1) if name_match else "Unknown"
                    missing_pois.append({'id': poi_id, 'name': name})
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(json.dumps(missing_pois, indent=2))
