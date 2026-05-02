import re
import json

def get_pois(filename):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
    
    pois = []
    # Find all POI objects roughly
    blocks = re.findall(r'\{\s*id:\s*"([^"]+)",[\s\S]*?name:\s*\{[^}]*de:\s*"([^"]+)"', content)
    for _id, de_name in blocks:
        pois.append({"id": _id, "name_de": de_name})
    return pois

pois_main = get_pois("lib/visualLab/data/polandPoi.ts")
pois_extra = get_pois("lib/visualLab/data/poiExtraPolandCities.ts")

with open("poland_pois.json", "w", encoding="utf-8") as f:
    json.dump({"main": pois_main, "extra": pois_extra}, f, ensure_ascii=False, indent=2)

print(f"Found {len(pois_main)} in main, {len(pois_extra)} in extra")
