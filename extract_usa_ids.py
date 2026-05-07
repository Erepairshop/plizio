import re
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

all_ids = []

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Missing: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by objects loosely
    pois = re.split(r'id:\s*["\']', content)[1:]
    
    for poi_split in pois:
        match = re.search(r'^([^"\']+)', poi_split)
        if match:
            poi_id = match.group(1)
            # check if descriptionAdvanced en exists and is not empty
            
            # Simple heuristic: look at the block of this POI
            # find next id: or end of file
            # Actually, just regex search in the split
            
            block = poi_split[:2000] # should be enough for one POI
            
            has_desc_adv_en = re.search(r'descriptionAdvanced\s*:\s*\{[^\}]*en\s*:\s*["\']([^"\']{5,})["\']', block, re.DOTALL)
            if not has_desc_adv_en:
                all_ids.append(poi_id)

print(f"Total POIs needing en desc: {len(all_ids)}")
with open('usa_ids_to_process.txt', 'w', encoding='utf-8') as f:
    for pid in all_ids:
        f.write(pid + '\n')
