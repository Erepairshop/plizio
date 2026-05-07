import re
import os

files = [
    "lib/visualLab/data/poiExtraSudanCitiesV2.ts",
    "lib/visualLab/data/poiExtraSudanEconomicV2.ts",
    "lib/visualLab/data/poiExtraSudanHistoryV2.ts",
    "lib/visualLab/data/poiExtraSudanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSudanLifeV2.ts",
    "lib/visualLab/data/poiExtraSudanNatureV2.ts",
    "lib/visualLab/data/poiExtraSudanReliefV2.ts"
]

missing_hu = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # This is a very rough parser, but should work for this structure
    pois = re.split(r'}\s*,\s*{', content)
    for poi in pois:
        id_match = re.search(r'id:\s*"([^"]+)"', poi)
        if id_match:
            poi_id = id_match.group(1)
            # Check for descriptionAdvanced hu
            has_desc_hu = re.search(r'descriptionAdvanced:\s*{[^}]*hu:\s*"[^"]+"', poi)
            # Check for factsAdvanced hu
            has_facts_hu = re.search(r'factsAdvanced:\s*{[^}]*hu:\s*\[', poi)
            
            if not (has_desc_hu and has_facts_hu):
                missing_hu.append(poi_id)

print("\n".join(missing_hu))
