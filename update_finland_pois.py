import re
import os

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# This is a very basic parser for the POI objects in the TS file.
# It assumes a certain structure (which we saw in the read_file output).

def get_poi_blocks(text):
    # Match objects inside arrays or exported constants
    # This regex is a bit optimistic but should work for the current file structure
    # We look for something that starts with { and has an id: "..."
    # and ends with }, (with possible nesting)
    
    # Actually, let's just find the POI objects.
    # They are either in an array [...] or assigned to a const.
    
    # We can split the content by lines and look for { and }
    pass

# Instead of complex parsing, let's use a more targeted approach.
# We will identify each POI by its ID and then check/add the fields.

poi_ids = re.findall(r'id:\s*"([^"]+)"', content)
print(f"Found {len(poi_ids)} POIs")

# For each POI, we need to find its block.
# We'll use the id to find the start and then find the matching closing brace.

def find_object_bounds(text, start_pos):
    brace_count = 0
    in_string = False
    quote_char = ''
    
    for i in range(start_pos, len(text)):
        char = text[i]
        if char in ['"', "'", '`'] and (i == 0 or text[i-1] != '\\'):
            if not in_string:
                in_string = True
                quote_char = char
            elif char == quote_char:
                in_string = False
        
        if not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    return i + 1
    return -1

# We will iterate through the IDs and store their blocks and positions.
pois_info = []
for poi_id in poi_ids:
    pattern = rf'id:\s*"{poi_id}"'
    match = re.search(pattern, content)
    if match:
        # Go back to find the opening { of the POI object
        start_pos = content.rfind('{', 0, match.start())
        end_pos = find_object_bounds(content, start_pos)
        if end_pos != -1:
            pois_info.append({
                'id': poi_id,
                'start': start_pos,
                'end': end_pos,
                'block': content[start_pos:end_pos]
            })

print(f"Successfully located {len(pois_info)} POI blocks")

