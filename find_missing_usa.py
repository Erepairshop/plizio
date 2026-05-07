import re
import glob
import json

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

missing_ids = []

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # split by POI object, roughly
        parts = content.split('id: "')
        for part in parts[1:]:
            poi_id = part.split('"', 1)[0]
            if not poi_id.startswith('us-'):
                continue
                
            # extract the descriptionAdvanced block
            desc_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', part)
            needs_update = False
            
            if desc_match:
                inner = desc_match.group(1)
                # check if en: exists and is not empty
                en_match = re.search(r'en:\s*"([^"\\]*(?:\\.[^"\\]*)*)"', inner)
                if not en_match:
                    needs_update = True
                else:
                    if en_match.group(1).strip() == "":
                        needs_update = True
            else:
                needs_update = True
                
            if needs_update:
                missing_ids.append(poi_id)

print(json.dumps(missing_ids))
