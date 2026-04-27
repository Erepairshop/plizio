
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/romaniaPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI objects using a simpler separator
pois = re.split(r'}\s*,\s*{', content)

targets = []
for p in pois:
    id_match = re.search(r'id:\s*"([^"]+)"', p)
    if not id_match: continue
    poi_id = id_match.group(1)
    
    # Extract descriptionAdvanced block
    da_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', p, re.DOTALL)
    if da_match:
        da_content = da_match.group(1)
        hu_match = re.search(r'hu:\s*"([^"]*)"', da_content)
        if not hu_match or hu_match.group(1).strip() == "":
            targets.append(poi_id)
    else:
        # If descriptionAdvanced is missing entirely, it's a target
        targets.append(poi_id)

print(f"Targets: {len(targets)}")
for t in targets:
    print(t)
