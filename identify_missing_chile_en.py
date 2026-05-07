import re
import os

files = [
    "lib/visualLab/data/poiExtraChileCitiesV2.ts",
    "lib/visualLab/data/poiExtraChileEconomicV2.ts",
    "lib/visualLab/data/poiExtraChileHistoryV2.ts",
    "lib/visualLab/data/poiExtraChileLandmarksV2.ts",
    "lib/visualLab/data/poiExtraChileLifeV2.ts",
    "lib/visualLab/data/poiExtraChileNatureV2.ts",
    "lib/visualLab/data/poiExtraChileReliefV2.ts"
]

def find_missing_en(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find objects. This is not perfect but should work for this structure.
    # We look for id: "..." and then check descriptionAdvanced and factsAdvanced
    poi_blocks = re.findall(r'\{\s*id:\s*"([^"]+)"(.*?)\},', content, re.DOTALL)
    
    missing = []
    for poi_id, body in poi_blocks:
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', body)
        facts_adv_match = re.search(r'factsAdvanced:\s*\{([^\}]+)\}', body)
        
        has_desc_en = False
        if desc_adv_match:
            if 'en:' in desc_adv_match.group(1) and not re.search(r'en:\s*""', desc_adv_match.group(1)):
                has_desc_en = True
        
        has_facts_en = False
        if facts_adv_match:
            if 'en:' in facts_adv_match.group(1) and not re.search(r'en:\s*\[\s*\]', facts_adv_match.group(1)):
                has_facts_en = True
        
        if not has_desc_en or not has_facts_en:
            missing.append(poi_id)
            
    return missing

all_missing = {}
for f in files:
    if os.path.exists(f):
        m = find_missing_en(f)
        if m:
            all_missing[f] = m

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing")
    for poi_id in ids:
        print(f"  - {poi_id}")
