import re
import json

files = ['lib/visualLab/data/poiExtraAndorraCities.ts', 'lib/visualLab/data/poiExtraAndorraOther.ts']
missing = []

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"](.*?)\n\s*\}', content, re.DOTALL)
    for poi_id, block in blocks:
        # Check if descriptionAdvanced.de is empty or missing
        de_desc_match = re.search(r'descriptionAdvanced:\s*\{[\s\S]*?de:\s*[\'"]([^\'"]*)[\'"]', block)
        de_facts_match = re.search(r'factsAdvanced:\s*\{[\s\S]*?de:\s*\[([\s\S]*?)\]', block)
        
        has_de_content = False
        if de_desc_match and len(de_desc_match.group(1).strip()) > 0:
            has_de_content = True
            
        if has_de_content:
            continue
            
        hu_desc = ""
        hu_facts = []
        
        # Get descriptionAdvanced.hu
        hu_desc_match = re.search(r'descriptionAdvanced:\s*\{[\s\S]*?hu:\s*[\'"]([^\'"]*)[\'"]', block)
        if hu_desc_match:
            hu_desc = hu_desc_match.group(1)
            
        # Get factsAdvanced.hu
        hu_facts_match = re.search(r'factsAdvanced:\s*\{[\s\S]*?hu:\s*\[([\s\S]*?)\]', block)
        if hu_facts_match:
            facts_str = hu_facts_match.group(1)
            hu_facts = re.findall(r'[\'"]([^\'"]*)[\'"]', facts_str)
            
        missing.append({
            'file': file,
            'id': poi_id,
            'hu_desc': hu_desc,
            'hu_facts': hu_facts
        })

with open('missing_de.json', 'w', encoding='utf-8') as f:
    json.dump(missing, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(missing)} POIs.")
