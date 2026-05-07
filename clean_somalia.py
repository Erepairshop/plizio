import re
import os

def clean_file(file_path):
    print(f"Cleaning {file_path}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Preliminary cleanup
    content = re.sub(r'\},,', '},', content)
    content = re.sub(r',,', ',', content)
    
    # Fix the } } field: pattern
    content = re.sub(r'\}\s*\}\s*([a-z][A-Za-z]+):', r', \1:', content)

    match = re.search(r'(export const \w+: POI\[\] = \[)(.*)(\];)', content, re.DOTALL)
    if not match: 
        print(f"Could not find POI array in {file_path}")
        return
    prefix, array_content, suffix = match.groups()
    
    # Split by the pattern { id: "..." or just id: "..."
    # We'll use a more flexible split and then clean up each block
    blocks = re.split(r'id:\s*"', array_content)
    
    new_array_parts = []
    # The first block is usually empty or contains whitespace before the first POI
    for block in blocks[1:]:
        # block now starts with the ID value itself, e.g. mogadishu-port-economic-v2", ...
        id_end = block.find('"')
        if id_end == -1: continue
        poi_id = block[:id_end]
        
        poi_data = {'id': poi_id}
        rest_of_block = block[id_end:]
        
        # Simple fields
        for field in ['type', 'parent', 'image']:
            # Look for field: "..."
            m = re.search(rf'\b{field}\s*:\s*"([^"]*)"', rest_of_block)
            if m: poi_data[field] = m.group(1)
        
        # Coords
        m = re.search(r'\bcoords\s*:\s*\[\s*([^\]]*)\s*\]', rest_of_block)
        if m: poi_data['coords'] = m.group(1)

        # Complex fields
        for field in ['name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced']:
            occurrences = []
            start_pos = 0
            while True:
                # Use word boundary to avoid matching description for descriptionAdvanced
                field_match = re.search(rf'\b{field}\s*:\s*\{{', rest_of_block[start_pos:])
                if not field_match: break
                
                start_index = start_pos + field_match.end() - 1
                brace_count = 0
                end_index = -1
                for i in range(start_index, len(rest_of_block)):
                    if rest_of_block[i] == '{': brace_count += 1
                    elif rest_of_block[i] == '}':
                        brace_count -= 1
                        if brace_count == 0:
                            end_index = i
                            break
                if end_index != -1:
                    occ = rest_of_block[start_index+1:end_index].strip()
                    occurrences.append(occ)
                    start_pos = end_index + 1
                else: break
            
            if occurrences:
                merged = {}
                for occ in occurrences:
                    # Find lang keys
                    for lang_match in re.finditer(r'\b(de|hu|ro|en)\s*:\s*', occ):
                        lang = lang_match.group(1)
                        val_start = lang_match.end()
                        if val_start >= len(occ): continue
                        
                        if occ[val_start] == '"':
                            # String
                            val_end = -1
                            for i in range(val_start+1, len(occ)):
                                if occ[i] == '"' and occ[i-1] != '\\':
                                    val_end = i
                                    break
                            if val_end != -1: merged[lang] = occ[val_start:val_end+1]
                        elif occ[val_start] == '[':
                            # Array
                            b_count = 0
                            val_end = -1
                            for i in range(val_start, len(occ)):
                                if occ[i] == '[': b_count += 1
                                elif occ[i] == ']':
                                    b_count -= 1
                                    if b_count == 0:
                                        val_end = i
                                        break
                            if val_end != -1: merged[lang] = occ[val_start:val_end+1]
                poi_data[field] = merged

        # Reconstruct POI
        parts = [f'    id: "{poi_data["id"]}"']
        if 'type' in poi_data: parts.append(f'    type: "{poi_data["type"]}"')
        if 'parent' in poi_data: parts.append(f'    parent: "{poi_data["parent"]}"')
        if 'coords' in poi_data: parts.append(f'    coords: [{poi_data["coords"]}]')
        for f in ['name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced']:
            if f in poi_data:
                inner = [f'      {l}: {poi_data[f][l]}' for l in ['de', 'hu', 'ro', 'en'] if l in poi_data[f]]
                if inner:
                    parts.append(f'    {f}: {{\n' + ',\n'.join(inner) + '\n    }')
        if 'image' in poi_data: parts.append(f'    image: "{poi_data["image"]}"')
        new_array_parts.append('  {\n' + ',\n'.join(parts) + '\n  }')

    new_content = prefix + '\n' + ',\n'.join(new_array_parts) + '\n' + suffix
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

files = [
    "lib/visualLab/data/poiExtraSomaliaCitiesV2.ts",
    "lib/visualLab/data/poiExtraSomaliaEconomicV2.ts",
    "lib/visualLab/data/poiExtraSomaliaHistoryV2.ts",
    "lib/visualLab/data/poiExtraSomaliaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSomaliaLifeV2.ts",
    "lib/visualLab/data/poiExtraSomaliaNatureV2.ts",
    "lib/visualLab/data/poiExtraSomaliaReliefV2.ts"
]

for f in files:
    if os.path.exists(f):
        clean_file(f)
    else:
        print(f"File not found: {f}")
