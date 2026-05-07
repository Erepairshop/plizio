import re
import glob
import json

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

all_ids = []
missing_ids = []

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Use regex to find all objects with an 'id'
            matches = re.finditer(r'id:\s*"([^"]+)"', content)
            for match in matches:
                poi_id = match.group(1)
                all_ids.append(poi_id)
                
                # Let's find the block for this POI
                # Find the index of this id
                start_idx = match.start()
                # Find the next id index
                next_match = re.search(r'id:\s*"', content[start_idx+10:])
                end_idx = start_idx + 10 + next_match.start() if next_match else len(content)
                
                block = content[start_idx:end_idx]
                
                desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', block)
                if not desc_adv_match:
                    missing_ids.append(poi_id)
                else:
                    en_match = re.search(r'en:\s*"([^"\\]*(?:\\.[^"\\]*)*)"', desc_adv_match.group(1))
                    if not en_match or en_match.group(1).strip() == "":
                        missing_ids.append(poi_id)

    except Exception as e:
        print(f"Error {file_path}: {e}")

print("ALL_COUNT:", len(all_ids))
print("MISSING_COUNT:", len(missing_ids))
# print("MISSING:", json.dumps(missing_ids))
