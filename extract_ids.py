import re

def extract(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    pois = re.findall(r'id:\s*"([^"]+)",\s*type:\s*"[^"]+",\s*parent:\s*"[^"]+",\s*coords:\s*\[[^\]]+\],\s*name:\s*\{\s*de:\s*"([^"]+)"', content)
    return pois

cz_pois = extract('lib/visualLab/data/czechrepublicPoi.ts')
ex_pois = extract('lib/visualLab/data/poiExtraCzechRepublicCities.ts')

with open('poi_names.txt', 'w', encoding='utf-8') as f:
    for pid, name in cz_pois:
        f.write(f"{pid}|{name}\n")
    for pid, name in ex_pois:
        f.write(f"{pid}|{name}\n")
