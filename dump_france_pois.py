import re
import json

def extract_pois(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = []
    # match id and get name (it can be name: { de: "..." or name: { "de": "..." )
    pattern = re.compile(r'\{\s*id:\s*["\']([^"\']+)["\'](?:(?!\{id:).)*?name:\s*\{\s*["\']?de["\']?:\s*["\']([^"\']+)["\']', re.DOTALL)
    matches = pattern.findall(content)
    for match in matches:
        pois.append({"id": match[0], "name": match[1], "file": filename})
    return pois

pois1 = extract_pois('lib/visualLab/data/francePoi.ts')
pois2 = extract_pois('lib/visualLab/data/poiExtraFranceCities.ts')

all_pois = pois1 + pois2
with open('france_pois_list.json', 'w', encoding='utf-8') as f:
    json.dump(all_pois, f, indent=2, ensure_ascii=False)

print(f"Total POIs extracted: {len(all_pois)}")
