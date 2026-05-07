import re
import json

files = ['lib/visualLab/data/francePoi.ts', 'lib/visualLab/data/poiExtraFranceCities.ts']
pois = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find blocks
    # We match id: "..." and then try to find name.en or name.de
    blocks = content.split('id: "')
    for block in blocks[1:]:
        id_val = block.split('"', 1)[0]
        # find name: { ... }
        name_match = re.search(r'name:\s*\{[^\}]*en:\s*"([^"]+)"', block)
        name = name_match.group(1) if name_match else id_val
        pois.append({"id": id_val, "name": name, "file": filepath})

with open('france_pois_list.json', 'w', encoding='utf-8') as f:
    json.dump(pois, f, indent=2)
