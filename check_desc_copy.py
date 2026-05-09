import re
import os

file_path = "lib/visualLab/data/poiExtraMadagascarNatureV2.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

matches = list(re.finditer(r'id:\s*"([^"]+)"', content))

for i in range(len(matches)):
    poi_id = matches[i].group(1)
    start_pos = matches[i].start()
    end_pos = matches[i+1].start() if i + 1 < len(matches) else content.find('];', start_pos)
    block = content[start_pos:end_pos]
    
    desc_match = re.search(r'description:\s*\{[^de:]*de:\s*"([^"]*)"', block, re.DOTALL)
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^de:]*de:\s*"([^"]*)"', block, re.DOTALL)
    
    if desc_match and desc_adv_match:
        if desc_match.group(1).strip() == desc_adv_match.group(1).strip():
            print(f"ID: {poi_id} - description is COPY")

