
import re

file_path = 'lib/visualLab/data/hungaryPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find POI objects
# It's not perfect but should get us most of them
poi_pattern = re.compile(r'\{\s+id:\s*"([^"]+)",[\s\S]*?name:\s*\{"de":\s*"([^"]+)"', re.MULTILINE)

matches = poi_pattern.findall(content)

for poi_id, name_de in matches:
    # Check if descriptionAdvanced.de exists and is not empty
    desc_adv_pattern = re.compile(rf'id:\s*"{poi_id}"[\s\S]*?descriptionAdvanced:\s*\{{\s*"de":\s*"([^"]*)"', re.MULTILINE)
    desc_match = desc_adv_pattern.search(content)
    
    has_desc = False
    if desc_match and desc_match.group(1):
        has_desc = True
    
    print(f"{poi_id}|{name_de}|{has_desc}")
