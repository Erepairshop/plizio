import re
import os

files = [
    "lib/visualLab/data/poiExtraMaliCitiesV2.ts",
    "lib/visualLab/data/poiExtraMaliEconomicV2.ts",
    "lib/visualLab/data/poiExtraMaliHistoryV2.ts",
    "lib/visualLab/data/poiExtraMaliLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMaliLifeV2.ts",
    "lib/visualLab/data/poiExtraMaliNatureV2.ts",
    "lib/visualLab/data/poiExtraMaliReliefV2.ts"
]

missing_ro = []

for file_path in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", file_path)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and check for ro in descriptionAdvanced
    # This is a bit rough but should give us the list
    pois = re.split(r'\{\s*id:', content)[1:]
    for poi in pois:
        poi_id_match = re.search(r'^\s*["\']([^"\']+)["\']', poi)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^}]+)\}', poi, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            if 'ro:' not in desc_adv_content:
                missing_ro.append((file_path, poi_id))
        else:
            missing_ro.append((file_path, poi_id))

print(f"Total missing: {len(missing_ro)}")
for file_path, poi_id in missing_ro:
    print(f"{file_path}|{poi_id}")
