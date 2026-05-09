import re
import os

files = [
    "lib/visualLab/data/poiExtraGuineaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuineaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuineaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuineaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuineaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuineaNatureV2.ts"
]

total_pois = 0
missing_de = 0

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = content.split('id: "')[1:]
    for poi_content in pois:
        poi_id = poi_content.split('"')[0]
        total_pois += 1
        
        has_de = False
        match = re.search(r'descriptionAdvanced:\s*{([^}]+)}', poi_content, re.DOTALL)
        if match:
            desc_adv_block = match.group(1)
            if 'de:' in desc_adv_block:
                m_de = re.search(r'de:\s*["\'`]([^"\'`]+)["\'`]', desc_adv_block)
                if m_de and m_de.group(1).strip():
                    has_de = True
        
        if not has_de:
            print(f"MISSING OR EMPTY DE: {poi_id} in {file_path}")
            missing_de += 1

print(f"Total POIs checked: {total_pois}")
print(f"Total missing/empty DE: {missing_de}")
