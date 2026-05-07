import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match descriptionAdvanced blocks
matches = re.finditer(r'descriptionAdvanced:\s*{', content)

for m in matches:
    start = m.end()
    # Find closing brace
    brace_count = 1
    i = start
    while brace_count > 0 and i < len(content):
        if content[i] == '{': brace_count += 1
        elif content[i] == '}': brace_count -= 1
        i += 1
    block = content[start:i-1]
    
    if 'de:' not in block:
        # Find the ID preceding this
        prev_content = content[:m.start()]
        id_match = re.findall(r'id:\s*["\']([^"\']+)["\']', prev_content)
        poi_id = id_match[-1] if id_match else "unknown"
        print(f"ID: {poi_id} - descriptionAdvanced has NO 'de:' field")

# Same for factsAdvanced
matches = re.finditer(r'factsAdvanced:\s*{', content)

for m in matches:
    start = m.end()
    brace_count = 1
    i = start
    while brace_count > 0 and i < len(content):
        if content[i] == '{': brace_count += 1
        elif content[i] == '}': brace_count -= 1
        i += 1
    block = content[start:i-1]
    
    if 'de:' not in block:
        prev_content = content[:m.start()]
        id_match = re.findall(r'id:\s*["\']([^"\']+)["\']', prev_content)
        poi_id = id_match[-1] if id_match else "unknown"
        print(f"ID: {poi_id} - factsAdvanced has NO 'de:' field")
