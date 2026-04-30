import re

file_path = 'lib/visualLab/data/croatiaPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# This is a very simple parser for the TS file structure
# We look for blocks between { and } in the croatiaAllPoi array

# First, find the array content
match = re.search(r'export const croatiaAllPoi = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find croatiaAllPoi array")
    exit()

array_content = match.group(1)

# Split by POI objects. This is tricky because objects contain nested objects.
# We'll use a more robust way: find "id: " and then find the closing brace.
poi_blocks = []
current_pos = 0
while True:
    id_match = re.search(r'id: "([^"]+)"', array_content[current_pos:])
    if not id_match:
        break
    
    start_id = current_pos + id_match.start()
    poi_id = id_match.group(1)
    
    # Find the start of the object { before this id
    obj_start = array_content.rfind('{', 0, start_id)
    
    # Find the matching } for this {
    brace_count = 0
    obj_end = -1
    for i in range(obj_start, len(array_content)):
        if array_content[i] == '{':
            brace_count += 1
        elif array_content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                obj_end = i + 1
                break
    
    if obj_end != -1:
        poi_blocks.append((poi_id, array_content[obj_start:obj_end]))
        current_pos = obj_end
    else:
        break

for poi_id, block in poi_blocks:
    missing_desc = False
    missing_facts = False
    
    # Check descriptionAdvanced.ro
    desc_match = re.search(r'descriptionAdvanced:\s*{[^}]*ro:\s*"([^"]*)"', block, re.DOTALL)
    if not desc_match or not desc_match.group(1).strip():
        missing_desc = True
        
    # Check factsAdvanced.ro
    # Look for factsAdvanced: { ... ro: [ ... ]
    facts_match = re.search(r'factsAdvanced:\s*{[^}]*ro:\s*\[(.*?)\]', block, re.DOTALL)
    if not facts_match:
        missing_facts = True
    else:
        # Check if the array is empty or contains only empty strings
        items = re.findall(r'"([^"]*)"', facts_match.group(1))
        if not items or all(not x.strip() for x in items):
            missing_facts = True
            
    if missing_desc or missing_facts:
        print(f"POI {poi_id}: Missing RO SEO (Desc: {missing_desc}, Facts: {missing_facts})")
    else:
        print(f"POI {poi_id}: OK")
