import re
import os

files = [
    "lib/visualLab/data/poiExtraElsalvadorCitiesV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorEconomicV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorHistoryV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorLandmarksV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorLifeV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorNatureV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorReliefV2.ts"
]

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects (roughly)
    # This is a bit naive but should work for identifying missing de in descriptionAdvanced
    pois = re.split(r'\{\s*id:', content)[1:]
    missing = []
    for p in pois:
        id_match = re.search(r'["\'](.*?)["\']', p)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', p, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            if 'de:' not in desc_adv_content or re.search(r'de:\s*["\']\s*["\']', desc_adv_content):
                missing.append(poi_id)
        else:
            # If descriptionAdvanced is missing entirely
            missing.append(poi_id)
            
    return missing

all_missing = {}
for f in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", f)
    if os.path.exists(full_path):
        missing = find_missing_de(full_path)
        if missing:
            all_missing[f] = missing

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing")
    for i in ids:
        print(f"  - {i}")
