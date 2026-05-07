import re
import os

files = [
    "lib/visualLab/data/poiExtraThailandCitiesV2.ts",
    "lib/visualLab/data/poiExtraThailandEconomicV2.ts",
    "lib/visualLab/data/poiExtraThailandHistoryV2.ts",
    "lib/visualLab/data/poiExtraThailandLandmarksV2.ts",
    "lib/visualLab/data/poiExtraThailandLifeV2.ts",
    "lib/visualLab/data/poiExtraThailandNatureV2.ts",
    "lib/visualLab/data/poiExtraThailandReliefV2.ts"
]

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and check for de descriptionAdvanced
    # This is a bit rough but should work for identifying missing ones
    pois = re.split(r'\}\s*,\s*\{', content)
    missing_ids = []
    for poi in pois:
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
        if id_match:
            poi_id = id_match.group(1)
            # Check if descriptionAdvanced exists and has a non-empty de field
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*["\']([^"\']*)["\']', poi)
            if not desc_adv_match or not desc_adv_match.group(1).strip():
                missing_ids.append(poi_id)
    return missing_ids

all_missing = {}
for f in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", f)
    missing = find_missing_de(full_path)
    if missing:
        all_missing[f] = missing

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing")
    for poi_id in ids:
        print(f"  {poi_id}")
