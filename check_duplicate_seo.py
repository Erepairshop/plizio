
import re

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Improved regex to find POI objects
pois = re.split(r'\{\s+id:', content)[1:]

descriptions = {}

for p in pois:
    poi_id_match = re.search(r'^ "([^"]+)"', p)
    if not poi_id_match: continue
    poi_id = poi_id_match.group(1)
    
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', p, re.DOTALL)
    if desc_adv_match:
        en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_match.group(1))
        if en_match:
            en_val = en_match.group(1).strip()
            if en_val in descriptions:
                descriptions[en_val].append(poi_id)
            else:
                descriptions[en_val] = [poi_id]

for desc, ids in descriptions.items():
    if len(ids) > 1:
        print(f"Duplicate description found for POIs: {ids}")
        print(f"Content: {desc[:100]}...")
