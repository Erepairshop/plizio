
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
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects
    pois = re.split(r'\}\s*,\s*\{', content)
    for poi in pois:
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        missing = []
        
        # Check descriptionAdvanced.de
        de_desc_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*["\']([^"\']*)["\']', poi)
        if not de_desc_match or de_desc_match.group(1).strip() == "":
            missing.append("descriptionAdvanced.de")
            
        # Check factsAdvanced.de
        # factsAdvanced: { de: [...] }
        de_facts_match = re.search(r'factsAdvanced:\s*\{[^}]*de:\s*\[([^\]]*)\]', poi)
        if not de_facts_match or de_facts_match.group(1).strip() == "":
            missing.append("factsAdvanced.de")
            
        if missing:
            print(f"{poi_id} in {file_path} is missing: {', '.join(missing)}")
