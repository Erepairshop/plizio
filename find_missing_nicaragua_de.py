import re
import os

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POI IDs
    all_poi_ids = re.findall(r'id:\s*"(.*?)"', content)
    
    # Find POIs with descriptionAdvanced
    with_desc_adv = re.findall(r'id:\s*"(.*?)".*?descriptionAdvanced:', content, re.DOTALL)
    
    missing_desc_adv = set(all_poi_ids) - set(with_desc_adv)
    for poi_id in missing_desc_adv:
        print(f"MISSING_DESC_ADV: {poi_id} in {file_path}")

    # Check those that HAVE descriptionAdvanced but might have issues
    pois_with_desc = re.findall(r'id:\s*"(.*?)".*?descriptionAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
    for poi_id, desc_block in pois_with_desc:
        if 'de:' not in desc_block or re.search(r'de:\s*""', desc_block) or re.search(r'de:\s*\'\'', desc_block):
            print(f"MISSING_DE: {poi_id} in {file_path}")
