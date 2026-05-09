
import os
import re

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
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI objects and their descriptionAdvanced
    # This is rough but should work for identifying missing 'de' keys or empty strings
    pois = re.split(r'\}\s*,\s*\{', content)
    for poi in pois:
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Check for descriptionAdvanced
        if 'descriptionAdvanced' not in poi:
            print(f"MISSING descriptionAdvanced: {poi_id} in {file_path}")
            continue
            
        de_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*["\']([^"\']*)["\']', poi)
        if not de_match or de_match.group(1).strip() == "":
            print(f"EMPTY/MISSING de in descriptionAdvanced: {poi_id} in {file_path}")
