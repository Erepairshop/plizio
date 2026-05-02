import re
import json

def extract(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find id and name.hu
    pois = []
    # Match POI objects roughly
    blocks = re.finditer(r'id:\s*"([^"]+)",.*?name:\s*\{(.*?)\}', content, re.DOTALL)
    for block in blocks:
        poi_id = block.group(1)
        name_block = block.group(2)
        m = re.search(r'hu:\s*"([^"]+)"', name_block)
        name_hu = m.group(1) if m else poi_id
        pois.append({"id": poi_id, "name": name_hu})
    return pois

pois1 = extract('lib/visualLab/data/czechrepublicPoi.ts')
pois2 = extract('lib/visualLab/data/poiExtraCzechRepublicCities.ts')

with open('cz_pois.json', 'w', encoding='utf-8') as f:
    json.dump({"main": pois1, "extra": pois2}, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(pois1)} main POIs and {len(pois2)} extra POIs.")
