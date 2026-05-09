import os
import re

files = [
    "lib/visualLab/data/poiExtraGambiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGambiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGambiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGambiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGambiaLifeV2.ts",
    "lib/visualLab/data/poiExtraGambiaNatureV2.ts",
    "lib/visualLab/data/poiExtraGambiaReliefV2.ts"
]

def find_missing(file_path):
    if not os.path.exists(file_path):
        return []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content by "id:" to get individual POI sections
    parts = content.split('id: "')
    missing = []
    for part in parts[1:]:
        poi_id = part.split('"')[0]
        # Check if descriptionAdvanced exists and has "de:"
        if "descriptionAdvanced: {" not in part:
            missing.append(poi_id)
            continue
        
        # Extract descriptionAdvanced block
        da_block_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', part, re.DOTALL)
        if not da_block_match:
            missing.append(poi_id)
            continue
        
        da_block = da_block_match.group(1)
        if 'de: "' not in da_block:
            missing.append(poi_id)
            continue
        
        # Check for empty or placeholder
        de_text_match = re.search(r'de:\s*"([^"]+)"', da_block)
        if not de_text_match:
            missing.append(poi_id)
        else:
            de_text = de_text_match.group(1)
            if not de_text.strip() or de_text.startswith("Ez egy leírás"):
                missing.append(poi_id)

    return missing

for f in files:
    m = find_missing(f)
    for poi_id in m:
        print(f"{f}: {poi_id}")
