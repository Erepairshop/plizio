
import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find IDs and check if they have descriptionAdvanced.de
    # This won't be perfect for the messy EconomicV2 but it's a start
    pois = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"\nFile: {file_path}")
    print(f"Total POIs found by ID: {len(pois)}")
    
    # Find POIs missing descriptionAdvanced.de
    # We look for the block between IDs
    poi_blocks = re.split(r'id:\s*"', content)[1:]
    missing_de = 0
    for block in poi_blocks:
        poi_id = block.split('"')[0]
        # Check if descriptionAdvanced exists and has a non-empty de field
        has_de = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*"([^"]+)"', block, re.DOTALL)
        if desc_adv_match and desc_adv_match.group(1).strip():
            has_de = True
        
        if not has_de:
            missing_de += 1
            # print(f"  Missing DE: {poi_id}")
            
    print(f"Missing descriptionAdvanced.de: {missing_de}")
