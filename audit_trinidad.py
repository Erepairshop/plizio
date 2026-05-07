import os
import re

files = [
    "lib/visualLab/data/poiExtraTrinidadCitiesV2.ts",
    "lib/visualLab/data/poiExtraTrinidadEconomicV2.ts",
    "lib/visualLab/data/poiExtraTrinidadHistoryV2.ts",
    "lib/visualLab/data/poiExtraTrinidadLandmarksV2.ts",
    "lib/visualLab/data/poiExtraTrinidadLifeV2.ts",
    "lib/visualLab/data/poiExtraTrinidadNatureV2.ts",
    "lib/visualLab/data/poiExtraTrinidadReliefV2.ts"
]

def find_missing_hu(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks
    # This is rough but should give us the IDs
    pois = re.findall(r'id:\s*"([^"]+)"', content)
    
    missing = []
    for poi_id in pois:
        # Find the block for this POI
        # Search for the block starting with this ID
        block_match = re.search(r'id:\s*"' + poi_id + r'".*?image:', content, re.DOTALL)
        if block_match:
            block = block_match.group(0)
            # Check if descriptionAdvanced has hu content
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
            if desc_adv_match:
                desc_adv = desc_adv_match.group(1)
                if 'hu: ""' in desc_adv or 'hu:' not in desc_adv:
                    missing.append(poi_id)
                    continue
            else:
                missing.append(poi_id)
                continue
            
            # Check if factsAdvanced has hu content
            facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
            if facts_adv_match:
                facts_adv = facts_adv_match.group(1)
                if 'hu: []' in facts_adv or 'hu: [""]' in facts_adv or 'hu:' not in facts_adv:
                    if poi_id not in missing:
                        missing.append(poi_id)
            else:
                if poi_id not in missing:
                    missing.append(poi_id)

    return missing

for f in files:
    missing = find_missing_hu(f)
    print(f"{f}: {len(missing)} missing hu content")
    for m in missing:
        print(f"  {m}")
