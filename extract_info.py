import re
import json

def extract_pois(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = content.split('id: "')
    result = []
    for poi in pois[1:]:
        poi_id = poi.split('"')[0]
        
        name_match = re.search(r'name:\s*\{\s*[^}]*en:\s*"([^"]+)"', poi)
        name = name_match.group(1) if name_match else ""
        
        en_desc_match = re.search(r'descriptionAdvanced:\s*\{[^}]*en:\s*"([^"]+)"', poi)
        en_desc = en_desc_match.group(1) if en_desc_match else ""
        
        if 'descriptionAdvanced: {\n      de: ""' in poi or 'descriptionAdvanced: {\n        de: ""' in poi or 'descriptionAdvanced: {\n      de: "",' in poi:
            result.append({"id": poi_id, "name": name, "en_desc": en_desc})
            
    return result

r1 = extract_pois('lib/visualLab/data/icelandPoi.ts')
r2 = extract_pois('lib/visualLab/data/poiExtraIcelandCities.ts')

with open('missing_pois.json', 'w', encoding='utf-8') as f:
    json.dump(r1 + r2, f, indent=2, ensure_ascii=False)
