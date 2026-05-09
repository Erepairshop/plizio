import os
import re

files = [
    'lib/visualLab/data/poiExtraEquatorialguineaCitiesV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaEconomicV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaHistoryV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaLandmarksV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaLifeV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaNatureV2.ts',
    'lib/visualLab/data/poiExtraEquatorialguineaReliefV2.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects
    # We look for id: "something",
    pois = re.split(r'\{\s*id:', content)
    for poi in pois[1:]:
        poi_id_match = re.search(r'^\s*\"([^\"]+)\"', poi)
        if poi_id_match:
            poi_id = poi_id_match.group(1)
            
            # Check descriptionAdvanced
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', poi, re.DOTALL)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                if 'hu:' not in desc_adv_content:
                    print(f'{file_path}|{poi_id}')
            else:
                # Also check factsAdvanced just in case
                facts_adv_match = re.search(r'factsAdvanced:\s*\{([^\}]+)\}', poi, re.DOTALL)
                if facts_adv_match:
                    facts_adv_content = facts_adv_match.group(1)
                    if 'hu:' not in facts_adv_content:
                         print(f'{file_path}|{poi_id}')
                else:
                    print(f'{file_path}|{poi_id}|MISSING_ADV_BLOCKS')
