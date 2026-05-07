import re
import json

files = [
    "lib/visualLab/data/poiExtraGuineaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuineaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuineaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuineaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuineaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuineaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuineaReliefV2.ts"
]

missing_pois = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by objects loosely
    blocks = re.split(r'id:\s*[\'"]([^\'"]+)[\'"]', content)
    for i in range(1, len(blocks), 2):
        poi_id = blocks[i]
        block_content = blocks[i+1]
        
        # Get name.en
        name_match = re.search(r'name:\s*\{.*?en:\s*[\'"](.*?)[\'"]', block_content, re.DOTALL)
        name_en = name_match.group(1) if name_match else poi_id
        
        # Check if descriptionAdvanced exists and has en
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', block_content)
        needs_generation = True
        if desc_adv_match:
            en_match = re.search(r'en:\s*[\'"](.*?)[\'"]', desc_adv_match.group(1), re.DOTALL)
            if en_match and len(en_match.group(1).strip()) > 50:
                needs_generation = False
        
        if needs_generation:
            missing_pois.append({"id": poi_id, "name": name_en})

print(json.dumps(missing_pois, indent=2))
