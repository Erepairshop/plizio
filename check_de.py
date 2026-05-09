import re
import os

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POI objects
    # This is a very simple parser, might need adjustment
    pois = re.findall(r'id: "(.*?)".*?descriptionAdvanced: \{(.*?)\}', content, re.DOTALL)
    
    for poi_id, desc_adv in pois:
        if 'de:' not in desc_adv:
            print(f"Missing 'de' in {file_path}: {poi_id}")
        else:
            # Check if it's empty
            match = re.search(r'de: "(.*?)"', desc_adv)
            if match and not match.group(1).strip():
                print(f"Empty 'de' in {file_path}: {poi_id}")
