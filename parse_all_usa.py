import json
import re

files = [
    'lib/visualLab/data/poiExtraUsaCitiesV2.ts',
    'lib/visualLab/data/poiExtraUsaEconomicV2.ts',
    'lib/visualLab/data/poiExtraUsaHistoryV2.ts',
    'lib/visualLab/data/poiExtraUsaLandmarksV2.ts',
    'lib/visualLab/data/poiExtraUsaLifeV2.ts',
    'lib/visualLab/data/poiExtraUsaNatureV2.ts',
    'lib/visualLab/data/poiExtraUsaReliefV2.ts'
]

results = []

for file_path in files:
    with open('/mnt/c/Users/User/plizio-repo/' + file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('id: "')
    for i in range(1, len(parts)):
        part = parts[i]
        poi_id = part.split('"', 1)[0]
        
        # name
        name = poi_id
        name_match = re.search(r'name:\s*\{[^}]*en:\s*"([^"]+)"', part)
        if name_match:
            name = name_match.group(1)
            
        desc_adv = ""
        desc_idx = part.find('descriptionAdvanced:')
        if desc_idx != -1:
            facts_idx = part.find('factsAdvanced:', desc_idx)
            if facts_idx == -1: facts_idx = len(part)
            desc_block = part[desc_idx:facts_idx]
            
            en_idx = desc_block.find('en:')
            if en_idx != -1:
                start_quote = desc_block.find('"', en_idx)
                if start_quote != -1:
                    # we must be careful with escaped quotes, let's use a simple approach
                    # regex to get string
                    en_match = re.search(r'en:\s*"((?:[^"\\]|\\.)*)"', desc_block)
                    if en_match:
                         desc_adv = en_match.group(1)
        
        # Check if missing, empty, or corrupted
        is_bad = False
        if not desc_adv:
            is_bad = True
        elif 'completely entirely' in desc_adv:
            is_bad = True
            
        if is_bad:
            results.append({
                "id": poi_id,
                "name": name,
                "file": file_path
            })

print(f'Found {len(results)} POIs to regenerate.')
with open('pois_to_regen.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
