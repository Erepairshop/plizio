
import re
import json

file_path = 'lib/visualLab/data/romaniaPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pois = []
start_pos = 0
while True:
    match = re.search(r'\{\s*id:\s*\"([^\"]+)\"', content[start_pos:])
    if not match:
        break
    
    idx = start_pos + match.start()
    id = match.group(1)
    
    brace_count = 0
    end_idx = -1
    for i in range(idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break
    
    if end_idx != -1:
        poi_block = content[idx:end_idx]
        pois.append({'id': id, 'block': poi_block, 'start': idx, 'end': end_idx})
        start_pos = end_idx
    else:
        start_pos = idx + 1

# Extract name and description for context
for poi in pois:
    block = poi['block']
    name_match = re.search(r'name:\s*(\{.*?\})', block, re.DOTALL)
    desc_match = re.search(r'description:\s*(\{.*?\})', block, re.DOTALL)
    facts_match = re.search(r'facts:\s*(\{.*?\})', block, re.DOTALL)
    
    poi['name'] = name_match.group(1) if name_match else None
    poi['description'] = desc_match.group(1) if desc_match else None
    poi['facts'] = facts_match.group(1) if facts_match else None

with open('poi_data.json', 'w', encoding='utf-8') as f:
    json.dump(pois, f, ensure_ascii=False, indent=2)
print(f'Found {len(pois)} POIs')
