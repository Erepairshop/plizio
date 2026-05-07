import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of id: "..."
matches = list(re.finditer(r'id:\s*["\']([^"\']+)["\']', content))

print(f"Total POIs: {len(matches)}")

for i in range(len(matches)):
    start = matches[i].start()
    end = matches[i+1].start() if i + 1 < len(matches) else len(content)
    block = content[start:end]
    
    poi_id = matches[i].group(1)
    
    has_desc_adv = "descriptionAdvanced" in block
    de_desc = "MISSING"
    if has_desc_adv:
        m = re.search(r'descriptionAdvanced:\s*{[^}]*de:\s*["\']([^"\']*)["\']', block, re.DOTALL)
        if m:
            de_desc = "EMPTY" if not m.group(1).strip() else "FILLED"
        else:
            de_desc = "NOT_FOUND_IN_BLOCK"
            
    has_facts_adv = "factsAdvanced" in block
    de_facts = "MISSING"
    if has_facts_adv:
        m = re.search(r'factsAdvanced:\s*{[^}]*de:\s*\[(.*?)\]', block, re.DOTALL)
        if m:
            de_facts = "EMPTY" if not re.search(r'["\'][^"\']+["\']', m.group(1)) else "FILLED"
        else:
            de_facts = "NOT_FOUND_IN_BLOCK"
            
    print(f"{poi_id}: Desc={de_desc}, Facts={de_facts}")

