import re
import json

missing = []

for filepath in ['lib/visualLab/data/francePoi.ts', 'lib/visualLab/data/poiExtraFranceCities.ts']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    blocks = text.split('id: "')
    for block in blocks[1:]:
        id_val = block.split('"', 1)[0]
        
        needs_desc = True
        desc_start = block.find('descriptionAdvanced:')
        if desc_start != -1:
            desc_end = block.find('}', desc_start)
            desc_block = block[desc_start:desc_end+1]
            if 'ro: ""' not in desc_block and '"ro": ""' not in desc_block and '"ro":""' not in desc_block:
                if 'ro:' in desc_block or '"ro":' in desc_block:
                    needs_desc = False
                    
        needs_facts = True
        fa_start = block.find('factsAdvanced:')
        if fa_start != -1:
            fa_end = block.find(']', block.find('ro:', fa_start))
            if fa_end == -1: fa_end = len(block)
            fa_block = block[fa_start:fa_end+1]
            # Find the ro array specifically
            ro_match = re.search(r'\"?ro\"?\s*:\s*\[(.*?)\]', block[fa_start:], re.DOTALL)
            if ro_match:
                content = ro_match.group(1).strip()
                if content != '':
                    needs_facts = False

        if needs_desc or needs_facts:
            missing.append({'id': id_val, 'desc': needs_desc, 'facts': needs_facts, 'file': filepath})

print(f"Total missing: {len(missing)}")
for m in missing[:15]:
    print(f"{m['id']}: desc={m['desc']}, facts={m['facts']}")
