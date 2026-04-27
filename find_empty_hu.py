import re

file_path = 'lib/visualLab/data/poiExtraRo2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

poi_blocks = re.split(r'\{\s*id:', content)[1:]
empty_ids = []

for block in poi_blocks:
    id_match = re.search(r'^\s*"([^"]+)"', block)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    if 'descriptionAdvanced' not in block:
        empty_ids.append(poi_id)
        continue
    
    da_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
    if da_match:
        da_content = da_match.group(1)
        if 'hu:' not in da_content:
            empty_ids.append(poi_id)

for eid in empty_ids:
    print(eid)
