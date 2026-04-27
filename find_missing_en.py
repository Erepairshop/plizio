import re
import os

files = [
    'lib/visualLab/data/poiExtraHu1.ts',
    'lib/visualLab/data/poiExtraHu2.ts',
    'lib/visualLab/data/poiExtraHu3.ts'
]

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI objects
    # This is rough but should work for identifying IDs and their status
    poi_blocks = re.findall(r'id:\s*"([^"]+)"(.*?)(?=id:|$)', content, re.DOTALL)
    
    missing_en = []
    for poi_id, block in poi_blocks:
        # Check descriptionAdvanced.en
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
        has_en_desc = False
        if desc_adv_match:
            en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_match.group(1))
            if en_match and en_match.group(1).strip():
                has_en_desc = True
        
        # Check factsAdvanced.en
        facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
        has_en_facts = False
        if facts_adv_match:
            en_match = re.search(r'en:\s*\[([^\]]*)\]', facts_adv_match.group(1), re.DOTALL)
            if en_match and en_match.group(1).strip():
                has_en_facts = True
        
        if not has_en_desc:
            missing_en.append(poi_id)
            
    return missing_en

all_missing = {}
for f in files:
    if os.path.exists(f):
        all_missing[f] = analyze_file(f)

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} missing EN")
    for poi_id in ids[:10]:
        print(f"  - {poi_id}")
    if len(ids) > 10:
        print(f"  ... and {len(ids)-10} more")
