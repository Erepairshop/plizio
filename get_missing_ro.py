import re

files = [
    "lib/visualLab/data/poiExtraHondurasCitiesV2.ts",
    "lib/visualLab/data/poiExtraHondurasEconomicV2.ts",
    "lib/visualLab/data/poiExtraHondurasHistoryV2.ts",
    "lib/visualLab/data/poiExtraHondurasLandmarksV2.ts",
    "lib/visualLab/data/poiExtraHondurasLifeV2.ts",
    "lib/visualLab/data/poiExtraHondurasNatureV2.ts",
    "lib/visualLab/data/poiExtraHondurasReliefV2.ts"
]

missing = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Simple regex to find POI blocks
            pois = re.finditer(r'{\s*id:\s*"([^"]+)",(.*?)(?=\n\s*{|\];)', content, re.DOTALL)
            for poi in pois:
                poi_id = poi.group(1)
                poi_content = poi.group(2)
                
                # Check if descriptionAdvanced has ro
                if 'descriptionAdvanced:' in poi_content:
                    desc_adv = poi_content.split('descriptionAdvanced:')[1].split('factsAdvanced:')[0] if 'factsAdvanced:' in poi_content else poi_content.split('descriptionAdvanced:')[1]
                    if 'ro: "' not in desc_adv:
                        missing.append(poi_id)
                else:
                    missing.append(poi_id)
    except FileNotFoundError:
        print(f"File not found: {file}")

print(f"Total missing ro: {len(missing)}")
with open('honduras_missing_ro.txt', 'w') as f:
    for m in missing:
        f.write(m + "\n")
