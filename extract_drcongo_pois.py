import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraDrcongoCitiesV2.ts",
    "lib/visualLab/data/poiExtraDrcongoEconomicV2.ts",
    "lib/visualLab/data/poiExtraDrcongoHistoryV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLandmarksV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLifeV2.ts",
    "lib/visualLab/data/poiExtraDrcongoNatureV2.ts",
    "lib/visualLab/data/poiExtraDrcongoReliefV2.ts"
]

pois = []
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Very basic extraction: looking for blocks of POI objects
        # Find all id: "..." and name: { ..., hu: "..." }
        matches = re.finditer(r'id:\s*"([^"]+)"', content)
        for match in matches:
            poi_id = match.group(1)
            # Find the block for this POI
            block_start = content.rfind('{', 0, match.start())
            # Find the next id: to approximate block end, or file end
            next_match = content.find('id:', match.end())
            if next_match == -1:
                next_match = len(content)
            block = content[block_start:next_match]
            
            # Check if descriptionAdvanced exists and has hu
            if 'descriptionAdvanced' in block:
                desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*\}', block, re.DOTALL)
                if desc_adv_match:
                    desc_adv_block = desc_adv_match.group(0)
                    if 'hu:' in desc_adv_block and '""' not in desc_adv_block.split('hu:')[1].split(',')[0]:
                         # Might already have it, let's verify if it's not empty
                         hu_match = re.search(r'hu:\s*"([^"]+)"', desc_adv_block)
                         if hu_match and len(hu_match.group(1).strip()) > 10:
                             continue # skip
            
            # Extract name to help with generation
            name_hu = ""
            name_match = re.search(r'name:\s*\{[^\}]*hu:\s*"([^"]+)"', block)
            if name_match:
                name_hu = name_match.group(1)
            
            pois.append({
                "id": poi_id,
                "name": name_hu,
                "file": file
            })
    except Exception as e:
        print(f"Error reading {file}: {e}")

with open('drcongo_pois_to_process.json', 'w', encoding='utf-8') as out:
    json.dump(pois, out, ensure_ascii=False, indent=2)

print(f"Extracted {len(pois)} POIs")
