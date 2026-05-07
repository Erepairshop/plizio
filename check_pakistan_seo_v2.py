import re
import os

files = [
    "lib/visualLab/data/poiExtraPakistanCitiesV2.ts",
    "lib/visualLab/data/poiExtraPakistanEconomicV2.ts",
    "lib/visualLab/data/poiExtraPakistanHistoryV2.ts",
    "lib/visualLab/data/poiExtraPakistanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPakistanLifeV2.ts",
    "lib/visualLab/data/poiExtraPakistanNatureV2.ts",
    "lib/visualLab/data/poiExtraPakistanReliefV2.ts"
]

all_ids = []
with open('all_pakistan_ids.txt', 'r') as f:
    all_ids = [line.strip() for line in f if line.strip()]

# Load all content from all files
all_content = ""
for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            all_content += f.read()

# Check each ID
missing_en = []
for poi_id in all_ids:
    # Find the POI block for this ID
    # This is tricky because the block can be complex.
    # We look for the ID and then the next descriptionAdvanced.
    match = re.search(r'id: "' + re.escape(poi_id) + r'".*?descriptionAdvanced: \{(.*?)\}', all_content, re.DOTALL)
    if match:
        desc_block = match.group(1)
        if '"en":' not in desc_block and 'en:' not in desc_block:
            missing_en.append(poi_id)
        elif 'en: ""' in desc_block or '"en": ""' in desc_block:
            missing_en.append(poi_id)
    else:
        # Check if it has descriptionAdvanced at all
        id_match = re.search(r'id: "' + re.escape(poi_id) + r'"', all_content)
        if id_match:
            # It exists but maybe no descriptionAdvanced
            missing_en.append(poi_id)
        else:
            # ID itself is missing from the files!
            print(f"ID {poi_id} not found in any file!")
            missing_en.append(poi_id)

for mid in missing_en:
    print(mid)
