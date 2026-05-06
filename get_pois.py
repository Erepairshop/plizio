import re
import os

files = [
    "lib/visualLab/data/poiExtraPeruCitiesV2.ts",
    "lib/visualLab/data/poiExtraPeruEconomicV2.ts",
    "lib/visualLab/data/poiExtraPeruLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPeruLifeV2.ts",
    "lib/visualLab/data/poiExtraPeruNatureV2.ts",
    "lib/visualLab/data/poiExtraPeruReliefV2.ts"
]

base_path = "/mnt/c/Users/User/plizio-repo/"

for file_path in files:
    full_path = os.path.join(base_path, file_path)
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple split by { at the start of a POI object
    # This is a bit crude but might work for extraction
    pois = re.split(r'\n  \{', content)
    for poi in pois[1:]: # Skip the part before the first POI
        poi_id_match = re.search(r'id: "([^"]+)"', poi)
        if not poi_id_match: continue
        poi_id = poi_id_match.group(1)
        
        name_en_match = re.search(r'en: "([^"]+)"', re.search(r'name: \{[^}]+\}', poi).group(0))
        name_en = name_en_match.group(1) if name_en_match else "Unknown"
        
        desc_en_match = re.search(r'en: "([^"]+)"', re.search(r'description: \{[^}]+\}', poi).group(0))
        desc_en = desc_en_match.group(1) if desc_en_match else ""
        
        has_desc_adv = False
        desc_adv_match = re.search(r'descriptionAdvanced: \{[^}]+\}', poi, re.DOTALL)
        if desc_adv_match:
            en_adv_match = re.search(r'en: "([^"]*)"', desc_adv_match.group(0))
            if en_adv_match and en_adv_match.group(1).strip():
                has_desc_adv = True
        
        if not has_desc_adv:
            print(f"FILE: {file_path} | ID: {poi_id} | NAME: {name_en} | DESC: {desc_en}")
