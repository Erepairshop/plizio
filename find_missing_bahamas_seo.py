import re
import os

files = [
    "lib/visualLab/data/poiExtraBahamasCitiesV2.ts",
    "lib/visualLab/data/poiExtraBahamasEconomicV2.ts",
    "lib/visualLab/data/poiExtraBahamasHistoryV2.ts",
    "lib/visualLab/data/poiExtraBahamasLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBahamasLifeV2.ts",
    "lib/visualLab/data/poiExtraBahamasNatureV2.ts",
    "lib/visualLab/data/poiExtraBahamasReliefV2.ts"
]

def find_missing(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects
    pois = re.split(r'}\s*,\s*{', content)
    missing_ids = []
    
    for poi in pois:
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)
        
        # Check if descriptionAdvanced exists and has a non-empty en field
        # We need to handle multiple occurrences of descriptionAdvanced because of the corruption seen
        desc_adv_matches = re.findall(r'descriptionAdvanced:\s*{([^}]+)}', poi, re.DOTALL)
        
        has_en = False
        for desc_body in desc_adv_matches:
            en_match = re.search(r'en:\s*["\']([^"\']*)["\']', desc_body)
            if en_match and en_match.group(1).strip():
                has_en = True
                break
        
        if not has_en:
            missing_ids.append(poi_id)
            
    return missing_ids

all_missing = {}
for f in files:
    missing = find_missing(f)
    if missing:
        all_missing[f] = missing

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing")
    for poi_id in ids:
        print(f"  - {poi_id}")

