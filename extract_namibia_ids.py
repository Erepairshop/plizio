import re
import json

files = [
    "lib/visualLab/data/poiExtraNamibiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNamibiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNamibiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLifeV2.ts",
    "lib/visualLab/data/poiExtraNamibiaNatureV2.ts",
    "lib/visualLab/data/poiExtraNamibiaReliefV2.ts"
]

all_missing = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file}: {e}")
        continue
        
    # Find all POI objects. A POI object roughly starts with '{' and has an 'id:'.
    # It's safer to split by 'id: "' and check the block until the next 'id: "' or end of file.
    blocks = content.split('id: "')
    for block in blocks[1:]:
        poi_id = block.split('"')[0]
        # Check if descriptionAdvanced exists and has "en:" inside the block
        if "descriptionAdvanced:" in block:
            desc_adv_block = block.split("descriptionAdvanced:")[1].split("facts:")[0].split("factsAdvanced:")[0].split("id:")[0]
            if "en:" in desc_adv_block:
                en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_block)
                if en_match and en_match.group(1).strip() != "":
                    continue # It has content
        all_missing.append(poi_id)

print(json.dumps(all_missing))
