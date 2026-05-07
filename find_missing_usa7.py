import re
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
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            parts = content.split('id: "')
            for part in parts[1:]:
                poi_id = part.split('"', 1)[0]
                if not poi_id.startswith('us-'):
                    continue
                
                # Check for the different issues in the block
                needs_update = False
                
                if '."s ' in part:
                    needs_update = True
                if "This location is a key geographic" in part:
                    needs_update = True
                if 'en: ""' in part or 'en: ""' in part.replace(" ", ""):
                    needs_update = True
                
                # Check if descriptionAdvanced or en is missing completely in this part
                if 'descriptionAdvanced:' not in part:
                    needs_update = True
                
                if needs_update:
                    missing_ids.append(poi_id)
                    
    except Exception as e:
        pass

missing_ids = list(set(missing_ids))
print(json.dumps(missing_ids))
print(f"\nTotal: {len(missing_ids)}")
