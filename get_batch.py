import json
import subprocess

# Run the find_missing_ro script to get all missing POIs
# (Using the logic from the previous turn)
import re
import os

files = [
    "lib/visualLab/data/poiExtraSouthsudanCitiesV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanEconomicV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanHistoryV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanLifeV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanNatureV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanReliefV2.ts"
]

missing_ro = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    poi_blocks = re.split(r'}\s*,\s*{', content)
    for block in poi_blocks:
        id_match = re.search(r'id:\s*"(.*?)"', block)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
        has_desc_ro = False
        if desc_adv_match:
            ro_match = re.search(r'ro:\s*"(.*?)"', desc_adv_match.group(1))
            if ro_match and ro_match.group(1).strip():
                has_desc_ro = True
        
        facts_adv_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
        has_facts_ro = False
        if facts_adv_match:
            ro_match = re.search(r'ro:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
            if ro_match and ro_match.group(1).strip():
                has_facts_ro = True
        
        if not has_desc_ro or not has_facts_ro:
            name_match = re.search(r'name:\s*\{(.*?)\}', block, re.DOTALL)
            en_name = ""
            if name_match:
                en_name_match = re.search(r'en:\s*"(.*?)"', name_match.group(1))
                if en_name_match:
                    en_name = en_name_match.group(1)
            
            desc_match = re.search(r'description:\s*\{(.*?)\}', block, re.DOTALL)
            en_desc = ""
            if desc_match:
                en_desc_match = re.search(r'en:\s*"(.*?)"', desc_match.group(1))
                if en_desc_match:
                    en_desc = en_desc_match.group(1)
            
            missing_ro.append({
                "id": poi_id,
                "name": en_name,
                "description": en_desc,
                "file": file_path
            })

# Output first batch
batch_size = 25
batch_num = 1
start = (batch_num - 1) * batch_size
end = start + batch_size
batch = missing_ro[start:end]

print(json.dumps(batch, indent=2))
