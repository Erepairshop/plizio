import os
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

missing = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content by '  {\n    id:' or '  { id:' to isolate POIs roughly
    # A more robust regex to find POI blocks:
    pois = re.split(r'\{\s*id:\s*"(.*?)"', content)
    
    # The first element is before the first POI
    for i in range(1, len(pois), 2):
        poi_id = pois[i]
        poi_body = pois[i+1]
        
        # Check if descriptionAdvanced exists
        adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi_body, re.DOTALL)
        if adv_match:
            adv_block = adv_match.group(1)
            # Check if ro: exists inside descriptionAdvanced block
            if not re.search(r'\bro\s*:\s*["`\']', adv_block):
                missing.append(poi_id)
        else:
            missing.append(poi_id)

with open('missing_ro_usa.json', 'w') as f:
    json.dump(missing, f, indent=2)

print(f"Total missing: {len(missing)}")
