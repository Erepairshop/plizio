import re
import os

files = [
    "lib/visualLab/data/poiExtraGhanaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGhanaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGhanaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGhanaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGhanaLifeV2.ts",
    "lib/visualLab/data/poiExtraGhanaNatureV2.ts",
    "lib/visualLab/data/poiExtraGhanaReliefV2.ts"
]

for file in files:
    if not os.path.exists(file):
        print(f"File not found: {file}")
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.split(r'id: "', content)[1:]
    for poi in pois:
        poi_id = poi.split('"')[0]
        if "descriptionAdvanced: {" in poi:
            # check if it has de:
            # descriptionAdvanced: { ... de: "..." ... }
            block = re.search(r'descriptionAdvanced: \{([^\}]*)\}', poi, re.DOTALL)
            if block:
                inner = block.group(1)
                if 'de:' not in inner:
                    print(f"Missing de in descriptionAdvanced for {poi_id} in {file}")
            else:
                print(f"Found descriptionAdvanced: but could not parse block for {poi_id} in {file}")
        else:
            print(f"Missing descriptionAdvanced for {poi_id} in {file}")
