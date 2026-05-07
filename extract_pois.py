import os
import re
import json

files = [
    "lib/visualLab/data/poiExtraDrcongoCitiesV2.ts",
    "lib/visualLab/data/poiExtraDrcongoEconomicV2.ts",
    "lib/visualLab/data/poiExtraDrcongoHistoryV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLandmarksV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLifeV2.ts",
    "lib/visualLab/data/poiExtraDrcongoNatureV2.ts",
    "lib/visualLab/data/poiExtraDrcongoReliefV2.ts"
]

pois = []
for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # extract objects
    # this regex is simple, might not capture nested braces well, but for standard POIs it's often ok.
    # Actually, a better way is just to find id and name.
    
    # Let's just find id and hu name for all POIs.
    # We can split by 'id: "'
    parts = content.split('id: "')
    for p in parts[1:]:
        poi_id = p.split('"', 1)[0]
        
        # see if it lacks descriptionAdvanced hu
        if 'descriptionAdvanced' not in p or 'hu:' not in p.split('descriptionAdvanced')[1].split('}')[0]:
            # find hu name
            hu_name_match = re.search(r'hu:\s*"([^"]+)"', p)
            hu_name = hu_name_match.group(1) if hu_name_match else "Unknown"
            pois.append({"id": poi_id, "name": hu_name})

with open("drcongo_pois_to_process.json", "w", encoding="utf-8") as out:
    json.dump(pois, out, indent=2, ensure_ascii=False)
