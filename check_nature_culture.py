import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def check_array(array_name):
    match = re.search(f'export const {array_name}: POI\\[\\] = \\[(.*?)\\];', content, re.DOTALL)
    if not match:
        print(f"Array {array_name} not found")
        return
    
    array_content = match.group(1)
    # Split by { ... }
    poi_blocks = re.findall(r'{(.*?)}', array_content, re.DOTALL)
    for block in poi_blocks:
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', block)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        has_desc = "descriptionAdvanced" in block
        has_facts = "factsAdvanced" in block
        print(f"{array_name} - {poi_id}: Desc={has_desc}, Facts={has_facts}")

check_array("finlandNature")
check_array("finlandCulture")
