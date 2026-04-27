import re
import os

files = [
    'lib/visualLab/data/poiExtraHu2.ts',
    'lib/visualLab/data/poiExtraHu3.ts'
]

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    poi_blocks = re.findall(r'id:\s*"([^"]+)"(.*?)(?=id:|$)', content, re.DOTALL)
    
    missing_en = []
    for poi_id, block in poi_blocks:
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
        has_en_desc = False
        if desc_adv_match:
            en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_match.group(1))
            if en_match and en_match.group(1).strip():
                has_en_desc = True
        
        if not has_en_desc:
            missing_en.append(poi_id)
            
    return missing_en

for f in files:
    ids = analyze_file(f)
    print(f"FILE: {f}")
    for poi_id in ids:
        print(poi_id)
