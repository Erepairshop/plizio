import re
import os

files = [
    "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
    "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
    "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
    
    for poi_id in ids:
        id_pos = content.find(f'id: "{poi_id}"')
        if id_pos == -1:
            id_pos = content.find(f"id: '{poi_id}'")
        
        if id_pos != -1:
            desc_adv_pos = content.find('descriptionAdvanced:', id_pos)
            if desc_adv_pos != -1:
                search_area = content[desc_adv_pos:desc_adv_pos+2000]
                en_match = re.search(r'en:\s*["\']([^"\']*)["\']', search_area)
                if not en_match:
                     print(f"MISSING_EN_KEY|{file_path}|{poi_id}")
                elif not en_match.group(1).strip():
                     print(f"EMPTY_EN_VALUE|{file_path}|{poi_id}")
                else:
                    val = en_match.group(1)
                    if len(val) < 50:
                        print(f"SHORT_EN_VALUE|{file_path}|{poi_id}|{len(val)}")
            else:
                print(f"MISSING_DESC_ADV|{file_path}|{poi_id}")

