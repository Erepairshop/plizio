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

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and check for descriptionAdvanced.en
    # This is a bit rough but should give us an idea.
    pois = re.findall(r'id: "(.*?)".*?descriptionAdvanced: \{(.*?)\}', content, re.DOTALL)
    for poi_id, desc_block in pois:
        if '"en":' not in desc_block and 'en:' not in desc_block:
            print(f"Missing en in {file_path}: {poi_id}")
        elif 'en: ""' in desc_block or '"en": ""' in desc_block:
            print(f"Empty en in {file_path}: {poi_id}")

    # Also check for missing descriptionAdvanced entirely
    all_ids = re.findall(r'id: "(.*?)"', content)
    ids_with_desc = [p[0] for p in pois]
    for i in all_ids:
        if i not in ids_with_desc:
            print(f"Missing descriptionAdvanced entirely in {file_path}: {i}")
