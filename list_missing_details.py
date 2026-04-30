
import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts"
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    poi_blocks = re.split(r'id:\s*"', content)[1:]
    print(f"\n--- {file_path} ---")
    for block in poi_blocks:
        poi_id = block.split('"')[0]
        name_de_match = re.search(r'name:\s*\{[^}]*de:\s*"([^"]+)"', block)
        name_de = name_de_match.group(1) if name_de_match else "Unknown"
        
        has_de = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*"([^"]+)"', block, re.DOTALL)
        if desc_adv_match and desc_adv_match.group(1).strip():
            has_de = True
            
        if not has_de:
            print(f"{poi_id} | {name_de}")
