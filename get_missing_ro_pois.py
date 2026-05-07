
import re
import os

file_paths = [
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoCitiesV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoEconomicV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoHistoryV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoLandmarksV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoLifeV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoNatureV2.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMoroccoReliefV2.ts"
]

ids_to_update = []
all_poi_ids = []

for file_path in file_paths:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # This pattern is more robust. It looks for a POI object block.
        # It assumes that each POI object starts with `{` and is followed by `id:`.
        # And it ends with `}` followed by an optional comma.
        poi_blocks = re.findall(r'\{\s*id:\s*"[^"]+"[\s\S]*?\}', content)

        for block in poi_blocks:
            id_match = re.search(r'id:\s*"([^"]+)"', block)
            if not id_match:
                continue
            
            poi_id = id_match.group(1)
            all_poi_ids.append(poi_id)

            # Check if 'descriptionAdvanced' is missing
            if 'descriptionAdvanced' not in block:
                ids_to_update.append(poi_id)
                continue

            # Check if 'ro' is empty or missing within 'descriptionAdvanced'
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', block)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                ro_match = re.search(r'ro:\s*(""|\[\s*\])', desc_adv_content)
                if ro_match:
                    ids_to_update.append(poi_id)
                elif 'ro:' not in desc_adv_content:
                    ids_to_update.append(poi_id)

    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

# Remove duplicates
unique_ids_to_update = sorted(list(set(ids_to_update)))

print("POIs to update:")
for poi_id in unique_ids_to_update:
    print(poi_id)

print(f"\nTotal unique POIs to update: {len(unique_ids_to_update)}")
print(f"Total POIs scanned: {len(all_poi_ids)}")
