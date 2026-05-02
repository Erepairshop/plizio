import re
import json

def extract_pois(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = []
    
    # We will find all occurrences of `id: "..."`
    for match in re.finditer(r'id:\s*["\']([^"\']+)["\']', content):
        poi_id = match.group(1)
        # find the name
        name_match = re.search(r'name:\s*\{[^\}]*en:\s*["\']([^"\']+)["\']', content[match.start():match.start()+1000])
        name = name_match.group(1) if name_match else poi_id
        pois.append({'id': poi_id, 'name': name})
    return pois

pois1 = extract_pois('lib/visualLab/data/polandPoi.ts')
pois2 = extract_pois('lib/visualLab/data/poiExtraPolandCities.ts')

with open('pois_to_do.json', 'w', encoding='utf-8') as f:
    json.dump({'polandPoi': pois1, 'poiExtraPolandCities': pois2}, f, indent=2)

print(f"Found {len(pois1)} in polandPoi.ts and {len(pois2)} in poiExtraPolandCities.ts")
