import re
import json

files = [
    "lib/visualLab/data/poiExtraGhanaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGhanaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGhanaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGhanaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGhanaLifeV2.ts",
    "lib/visualLab/data/poiExtraGhanaNatureV2.ts",
    "lib/visualLab/data/poiExtraGhanaReliefV2.ts"
]

results = []
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Split by id:
            parts = content.split('id: "')
            for part in parts[1:]:
                id_val = part.split('"')[0]
                # Check if it has descriptionAdvanced de
                # simple heuristic: find the next '}' before the next 'id:' or end
                end_poi = part.find('},')
                if end_poi == -1:
                     end_poi = part.find('}]')
                
                poi_content = part[:end_poi]
                if 'descriptionAdvanced: {' not in poi_content or 'de: "' not in poi_content.split('descriptionAdvanced: {')[1].split('}')[0]:
                    results.append(id_val)
                elif 'descriptionAdvanced: {' in poi_content:
                     # Check if de is empty
                     desc_adv = poi_content.split('descriptionAdvanced: {')[1].split('}')[0]
                     if 'de: ""' in desc_adv or 'de: ""' in desc_adv:
                          results.append(id_val)
                     elif 'de:' not in desc_adv:
                          results.append(id_val)
                          
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(json.dumps(results))
