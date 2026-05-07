import re
import json

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

all_pois = []
for file_path in files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
            # Find all POIs using regex. Assuming id is like id: "mg-something"
            # It's better to find blocks
            poi_blocks = re.split(r'id:\s*"([^"]+)"', content)[1:]
            for i in range(0, len(poi_blocks), 2):
                poi_id = poi_blocks[i]
                poi_content = poi_blocks[i+1]
                
                # Check if descriptionAdvanced exists and has de: "..."
                if "descriptionAdvanced:" not in poi_content:
                    all_pois.append(poi_id)
                else:
                    desc_adv = poi_content.split("descriptionAdvanced:")[1].split("facts:")[0].split("factsAdvanced:")[0]
                    # check if de: "" or missing de:
                    if 'de: ""' in desc_adv or 'de:' not in desc_adv:
                        all_pois.append(poi_id)
    except FileNotFoundError:
        print(f"File not found: {file_path}")

print(json.dumps(all_pois))
