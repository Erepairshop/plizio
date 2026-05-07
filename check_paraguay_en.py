import re
import os

files = [
    "lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
    "lib/visualLab/data/poiExtraParaguayHistoryV2.ts",
    "lib/visualLab/data/poiExtraParaguayLandmarksV2.ts",
    "lib/visualLab/data/poiExtraParaguayLifeV2.ts"
]

base_path = "/mnt/c/Users/User/plizio-repo/"

missing = []

for file_name in files:
    full_path = os.path.join(base_path, file_name)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find blocks. Note: this is a bit naive but should work for identifying missing en.
    # We find each 'id: "..."' and then look for the next 'descriptionAdvanced' block.
    
    poi_matches = re.finditer(r'id:\s*"([^"]+)"', content)
    for match in poi_matches:
        poi_id = match.group(1)
        start_pos = match.start()
        # Find the end of this POI object (next 'id:' or end of array)
        next_poi = re.search(r'id:\s*"([^"]+)"', content[match.end():])
        end_pos = match.end() + next_poi.start() if next_poi else len(content)
        
        poi_block = content[start_pos:end_pos]
        
        # Check if descriptionAdvanced has en
        desc_adv_match = re.search(r'descriptionAdvanced:\s*{[^}]*}', poi_block, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(0)
            if 'en:' not in desc_adv_content or re.search(r'en:\s*""', desc_adv_content) or re.search(r'en:\s*\'\'', desc_adv_content):
                missing.append((poi_id, file_name))
        else:
            missing.append((poi_id, file_name))

for poi_id, file_name in missing:
    print(f"{poi_id} | {file_name}")

