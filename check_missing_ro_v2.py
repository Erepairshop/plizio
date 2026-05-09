
import os

files = [
    "lib/visualLab/data/poiExtraAlgeriaCitiesV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaEconomicV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaHistoryV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaLifeV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaNatureV2.ts",
    "lib/visualLab/data/poiExtraAlgeriaReliefV2.ts"
]

def find_missing_ro(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_poi = None
    in_desc_adv = False
    in_facts_adv = False
    has_ro_desc = False
    has_ro_facts = False
    has_desc_adv = False
    has_facts_adv = False

    for line in lines:
        if 'id: "' in line:
            if current_poi:
                # Check previous POI
                if not has_desc_adv:
                    print(f"MISSING_DESC_ADV: {current_poi} in {file_path}")
                elif not has_ro_desc:
                    print(f"MISSING_RO_DESC: {current_poi} in {file_path}")
                
                if not has_facts_adv:
                    print(f"MISSING_FACTS_ADV: {current_poi} in {file_path}")
                elif not has_ro_facts:
                    print(f"MISSING_RO_FACTS: {current_poi} in {file_path}")
            
            current_poi = line.split('"')[1]
            in_desc_adv = False
            in_facts_adv = False
            has_ro_desc = False
            has_ro_facts = False
            has_desc_adv = False
            has_facts_adv = False
        
        if 'descriptionAdvanced: {' in line:
            in_desc_adv = True
            has_desc_adv = True
        if 'factsAdvanced: {' in line:
            in_facts_adv = True
            has_facts_adv = True
        
        if in_desc_adv and 'ro:' in line:
            # Check if it's not empty
            if 'ro: ""' not in line:
                has_ro_desc = True
        
        if in_facts_adv and 'ro:' in line:
            if 'ro: ""' not in line:
                has_ro_facts = True
        
        if '}' in line:
            if in_desc_adv and line.strip().startswith('}'):
                in_desc_adv = False
            elif in_facts_adv and line.strip().startswith('}'):
                in_facts_adv = False

    # Check last POI
    if current_poi:
        if not has_desc_adv:
            print(f"MISSING_DESC_ADV: {current_poi} in {file_path}")
        elif not has_ro_desc:
            print(f"MISSING_RO_DESC: {current_poi} in {file_path}")
        
        if not has_facts_adv:
            print(f"MISSING_FACTS_ADV: {current_poi} in {file_path}")
        elif not has_ro_facts:
            print(f"MISSING_RO_FACTS: {current_poi} in {file_path}")

for f in files:
    find_missing_ro(f)
