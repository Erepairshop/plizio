import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match POI blocks
matches = list(re.finditer(r'id:\s*["\']([^"\']+)["\']', content))

for i in range(len(matches)):
    start = matches[i].start()
    end = matches[i+1].start() if i + 1 < len(matches) else len(content)
    block = content[start:end]
    
    poi_id = matches[i].group(1)
    
    if "descriptionAdvanced" not in block:
        print(f"ID: {poi_id} - MISSING descriptionAdvanced")
    if "factsAdvanced" not in block:
        print(f"ID: {poi_id} - MISSING factsAdvanced")
