
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI blocks
poi_blocks = re.split(r'\n  \{', content)[1:]

targets = []
for block in poi_blocks:
    id_match = re.search(r'id: "([^"]+)"', block)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    # Check for descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
    if not desc_adv_match:
        targets.append(poi_id)
        continue
    
    desc_content = desc_adv_match.group(1)
    hu_match = re.search(r'hu:\s*"([^"]*)"', desc_content)
    if not hu_match or hu_match.group(1).strip() == "":
        targets.append(poi_id)

print(f"Total targets: {len(targets)}")
for t in targets:
    print(t)
