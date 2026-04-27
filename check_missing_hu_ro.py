import re
import os

files = ['lib/visualLab/data/poiExtraRo1.ts', 'lib/visualLab/data/poiExtraRo2.ts']
missing_hu = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = re.split(r'id:\s*"', content)[1:]
    for poi in pois:
        poi_id = poi.split('"')[0]
        
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            # Find hu key inside
            hu_match = re.search(r'hu:\s*"([^"]*)"', desc_adv_content)
            if not hu_match or hu_match.group(1).strip() == "":
                missing_hu.append((file_path, poi_id))
        else:
            missing_hu.append((file_path, poi_id))

for file_path, poi_id in missing_hu:
    print(f"{file_path}: {poi_id}")
