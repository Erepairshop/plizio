import json
import re

with open('ro_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('lib/visualLab/data/norwayPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = list(re.finditer(r'id:\s*\"([^\"]+)\"', content))
new_content = content[:pois[0].start()] if pois else content
last_idx = pois[0].start() if pois else 0
count = 0

for i, match in enumerate(pois):
    poi_id = match.group(1)
    start_idx = match.start()
    end_idx = pois[i+1].start() if i+1 < len(pois) else len(content)
    
    poi_block = content[start_idx:end_idx]
    
    if poi_id in data:
        desc_text = data[poi_id]['description'].replace('"', '\\"')
        facts_list = data[poi_id]['facts']
        
        # Build facts string carefully
        facts_str = '[\n        '
        facts_str += ',\n        '.join([f'"{f.replace(chr(34), chr(92)+chr(34))}"' for f in facts_list])
        facts_str += '\n      ]'
        
        # Replace empty description ro: "" with the new text. We replace the LAST empty ro.
        desc_blocks = list(re.finditer(r'descriptionAdvanced:\s*\{(.*?)\}', poi_block, re.DOTALL))
        if desc_blocks:
            last_desc = desc_blocks[-1]
            old_str = last_desc.group(0)
            new_str = re.sub(r'ro:\s*\"\"', f'ro: "{desc_text}"', old_str, count=1)
            if old_str != new_str:
                poi_block = poi_block[:last_desc.start()] + new_str + poi_block[last_desc.end():]
                count += 1
                
        # Replace empty facts ro: []
        facts_blocks = list(re.finditer(r'factsAdvanced:\s*\{(.*?)\}', poi_block, re.DOTALL))
        if facts_blocks:
            last_fact = facts_blocks[-1]
            old_str = last_fact.group(0)
            new_str = re.sub(r'ro:\s*\[\s*\]', f'ro: {facts_str}', old_str, count=1)
            if old_str != new_str:
                poi_block = poi_block[:last_fact.start()] + new_str + poi_block[last_fact.end():]

    new_content += poi_block

with open('lib/visualLab/data/norwayPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print(f"Updated {count} POIs successfully!")
