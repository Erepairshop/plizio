import re
import json

def get_pois(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    return re.findall(r'id: "(.*?)",', content)

files = [
    "lib/visualLab/data/poiExtraChadCitiesV2.ts",
    "lib/visualLab/data/poiExtraChadEconomicV2.ts",
    "lib/visualLab/data/poiExtraChadHistoryV2.ts",
    "lib/visualLab/data/poiExtraChadLandmarksV2.ts",
    "lib/visualLab/data/poiExtraChadLifeV2.ts",
    "lib/visualLab/data/poiExtraChadNatureV2.ts",
    "lib/visualLab/data/poiExtraChadReliefV2.ts"
]

all_pois = []
for f in files:
    for poi_id in get_pois(f):
        all_pois.append({"id": poi_id, "file": f})

print(json.dumps(all_pois, indent=2))
