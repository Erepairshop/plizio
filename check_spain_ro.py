import re
import json

files = [
    "lib/visualLab/data/spainPoi.ts",
    "lib/visualLab/data/poiExtraSpainCities.ts",
    "lib/visualLab/data/poiExtraSpainHistory.ts",
    "lib/visualLab/data/poiExtraSpainOther.ts"
]

missing_adv = 0
empty_ro_desc = 0
empty_ro_facts = 0
total_pois = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Simple regex to split into POI blocks
    pois = re.split(r'id:\s*"', content)[1:]
    for poi in pois:
        total_pois += 1
        if 'descriptionAdvanced' not in poi:
            missing_adv += 1
        else:
            if 'ro: ""' in poi or 'ro: ""' in poi.replace(' ', ''):
                empty_ro_desc += 1
            if 'ro: []' in poi or 'ro: []' in poi.replace(' ', ''):
                empty_ro_facts += 1

print(f"Total POIs: {total_pois}")
print(f"Missing descriptionAdvanced field entirely: {missing_adv}")
print(f"Has empty ro desc: {empty_ro_desc}")
print(f"Has empty ro facts: {empty_ro_facts}")
