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
            
            # Split the file by "id:" to get POI blocks
            parts = content.split('id: "')
            for part in parts[1:]: # Skip the first part before the first id
                poi_id = part.split('"', 1)[0]
                
                # We need to find if there is a 'descriptionAdvanced:' block
                # and if it contains 'ro:'
                # To do this reliably, just check if 'ro:' exists inside descriptionAdvanced block
                # A simple way: find descriptionAdvanced:, then the next property (like factsAdvanced or faq or })
                if 'descriptionAdvanced:' in part:
                    desc_part = part.split('descriptionAdvanced:')[1]
                    # Cut it at factsAdvanced: or faq: or the end of the object
                    end_idx = len(desc_part)
                    for keyword in ['factsAdvanced:', 'faq:', 'historyPeriod:']:
                        idx = desc_part.find(keyword)
                        if idx != -1 and idx < end_idx:
                            end_idx = idx
                    desc_part = desc_part[:end_idx]
                    
                    if 'ro:' not in desc_part:
                        missing.append(poi_id)
                else:
                    missing.append(poi_id)
    except FileNotFoundError:
        print(f"File not found: {file}")

print(f"Total missing ro: {len(missing)}")
with open('honduras_missing_ro_v2.txt', 'w') as f:
    for m in missing:
        f.write(m + "\n")
