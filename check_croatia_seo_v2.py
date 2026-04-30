import re

file_path = 'lib/visualLab/data/croatiaPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# First, find the array content
match = re.search(r'export const croatiaAllPoi = \[(.*)\];', content, re.DOTALL)
if not match:
    # If the array is not closed properly, find the start
    match = re.search(r'export const croatiaAllPoi = \[(.*)', content, re.DOTALL)

array_content = match.group(1)

# Find all { ... } blocks by tracking braces
poi_blocks = []
brace_count = 0
current_block = ""
in_block = False

for i in range(len(array_content)):
    char = array_content[i]
    if char == '{' and brace_count == 0:
        in_block = True
        current_block = char
        brace_count += 1
    elif char == '{' and in_block:
        current_block += char
        brace_count += 1
    elif char == '}' and in_block:
        current_block += char
        brace_count -= 1
        if brace_count == 0:
            # End of a top-level POI object
            id_match = re.search(r'id: "([^"]+)"', current_block)
            if id_match:
                poi_blocks.append((id_match.group(1), current_block))
            in_block = False
    elif in_block:
        current_block += char

for poi_id, block in poi_blocks:
    # Check descriptionAdvanced.ro
    desc_match = re.search(r'descriptionAdvanced:\s*{[^}]*ro:\s*"([^"]*)"', block, re.DOTALL)
    has_desc = desc_match and desc_match.group(1).strip()
        
    # Check factsAdvanced.ro
    facts_match = re.search(r'factsAdvanced:\s*{[^}]*ro:\s*\[(.*?)\]', block, re.DOTALL)
    has_facts = False
    if facts_match:
        items = re.findall(r'"([^"]*)"', facts_match.group(1))
        if items and any(x.strip() for x in items):
            has_facts = True
            
    print(f"POI {poi_id}: Desc: {'OK' if has_desc else 'MISSING'}, Facts: {'OK' if has_facts else 'MISSING'}")
