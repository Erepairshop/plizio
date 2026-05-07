import re
import os

files = [
    "lib/visualLab/data/poiExtraSingaporeCitiesV2.ts",
    "lib/visualLab/data/poiExtraSingaporeEconomicV2.ts",
    "lib/visualLab/data/poiExtraSingaporeHistoryV2.ts",
    "lib/visualLab/data/poiExtraSingaporeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSingaporeLifeV2.ts",
    "lib/visualLab/data/poiExtraSingaporeNatureV2.ts",
    "lib/visualLab/data/poiExtraSingaporeReliefV2.ts"
]

def find_missing_en(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks
    # Looking for id and descriptionAdvanced
    pois = re.split(r'}\s*,\s*{', content)
    missing_ids = []
    
    for poi in pois:
        id_match = re.search(r'id:\s*"([^"]+)"', poi)
        if id_match:
            poi_id = id_match.group(1)
            desc_adv_match = re.search(r'descriptionAdvanced:\s*{([^}]+)}', poi, re.DOTALL)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_content)
                if not en_match or not en_match.group(1).strip():
                    missing_ids.append(poi_id)
            else:
                # descriptionAdvanced missing entirely
                missing_ids.append(poi_id)
    return missing_ids

all_missing = {}
for f in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", f)
    missing = find_missing_en(full_path)
    if missing:
        all_missing[f] = missing

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing")
    for poi_id in ids:
        print(f"  {poi_id}")
