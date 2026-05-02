
import re
import json

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI objects. This is a bit tricky with regex but we can try to match the start of an object.
# Each POI is usually { id: "...", ... }
# We'll use a more robust way to find the objects.

poi_matches = re.finditer(r'\{\s+id: "([^"]+)",', content)

pois_to_update = []

for match in poi_matches:
    start_index = match.start()
    # Find the end of this object. This is simplified, assuming objects don't have deeply nested structures that would break it.
    # In this file, POIs are relatively flat or have known nested structures like name, description, etc.
    
    # Let's just find the next 'id:' or the end of the array '];'
    next_match = re.search(r'\{\s+id: "([^"]+)",', content[match.end():])
    if next_match:
        end_index = match.end() + next_match.start()
    else:
        # Try to find the end of the export
        end_index = content.find('];', match.end())
        if end_index == -1:
            end_index = content.find('};', match.end())
    
    poi_block = content[start_index:end_index]
    poi_id = match.group(1)
    
    desc_adv_en = re.search(r'descriptionAdvanced:\s*\{[^}]*en:\s*"([^"]*)"', poi_block, re.DOTALL)
    facts_adv_en = re.search(r'factsAdvanced:\s*\{[^}]*en:\s*\[([^\]]*)\]', poi_block, re.DOTALL)
    
    needs_desc = False
    if not desc_adv_en or not desc_adv_en.group(1).strip():
        needs_desc = True
        
    needs_facts = False
    if not facts_adv_en or not facts_adv_en.group(1).strip():
        needs_facts = True
    
    if needs_desc or needs_facts:
        pois_to_update.append({
            'id': poi_id,
            'needs_desc': needs_desc,
            'needs_facts': needs_facts
        })

print(json.dumps(pois_to_update, indent=2))
