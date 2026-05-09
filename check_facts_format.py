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
    
    if "factsAdvanced" in block:
         if "de: [" not in block[block.find("factsAdvanced"):]:
              print(f"ID: {poi_id} - factsAdvanced.de NOT AN ARRAY")

