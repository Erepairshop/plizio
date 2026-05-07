import re
import json

with open('lib/visualLab/data/romaniaPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = []
parts = content.split('id: "')
for part in parts[1:]:
    id_match = re.match(r'^([^"]+)",', part)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    desc_adv = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', part)
    needs_desc = False
    if desc_adv:
        hu_match = re.search(r'hu:\s*"(.*?)"', desc_adv.group(1))
        if not hu_match or len(hu_match.group(1).strip()) < 10:
            needs_desc = True
    else:
        needs_desc = True
        
    facts_adv = re.search(r'factsAdvanced:\s*\{([^}]+)\}', part)
    needs_facts = False
    if facts_adv:
        hu_match = re.search(r'hu:\s*\[(.*?)\]', facts_adv.group(1), re.DOTALL)
        if not hu_match:
            needs_facts = True
        else:
            items = re.findall(r'"([^"]+)"', hu_match.group(1))
            if len(items) < 2:
                needs_facts = True
    else:
        needs_facts = True
        
    if needs_desc or needs_facts:
        pois.append(poi_id)

print(json.dumps(pois))
