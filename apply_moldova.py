import json
import re

with open('md_ro_all.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('lib/visualLab/data/moldovaPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = list(re.finditer(r'id:\s*\"([^\"]+)\"', content))

new_content = ""
last_idx = 0
count = 0

for i, match in enumerate(pois):
    poi_id = match.group(1)
    start_idx = match.start()
    end_idx = pois[i+1].start() if i+1 < len(pois) else len(content)
    
    poi_block = content[start_idx:end_idx]
    
    if poi_id in data:
        desc_text = data[poi_id]['desc'].replace('"', '\\"')
        facts_list = data[poi_id]['facts']
        
        # Replace descriptionAdvanced ro
        def repl_desc(m):
            old = m.group(0)
            if re.search(r'ro:\s*\"\"', old):
                return re.sub(r'ro:\s*\"\"', f'ro: "{desc_text}"', old, count=1)
            return old
        
        poi_block_new = re.sub(r'descriptionAdvanced:\s*\{(.*?)\}', repl_desc, poi_block, flags=re.DOTALL, count=1)
        
        # Replace factsAdvanced ro
        def repl_facts(m):
            old = m.group(0)
            if re.search(r'ro:\s*\[\s*\]', old):
                facts_joined = ", ".join([f'"{f.replace(chr(34), chr(92)+chr(34))}"' for f in facts_list])
                return re.sub(r'ro:\s*\[\s*\]', f'ro: [{facts_joined}]', old, count=1)
            return old
            
        poi_block_new = re.sub(r'factsAdvanced:\s*\{(.*?)\}', repl_facts, poi_block_new, flags=re.DOTALL, count=1)
        
        if poi_block != poi_block_new:
            count += 1
            poi_block = poi_block_new

    new_content += content[last_idx:start_idx] + poi_block
    last_idx = end_idx

new_content += content[last_idx:]

with open('lib/visualLab/data/moldovaPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print(f"Updated {count} POIs successfully!")
