import re
import os

def analyze_pois(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI objects
    poi_matches = re.finditer(r'\{[^{]*?id:\s*"([^"]+)"', content, re.DOTALL)
    
    missing_desc = []
    missing_facts = []
    
    for match in poi_matches:
        poi_id = match.group(1)
        if "denmark" not in poi_id.lower() and "dk" not in poi_id.lower():
            # Check if parent is denmark
            start = match.start()
            # find parent
            parent_match = re.search(r'parent:\s*"([^"]+)"', content[start:start+200])
            if not parent_match or (parent_match.group(1).lower() != "denmark" and parent_match.group(1).lower() != "dk"):
                continue

        start = match.start()
        # Find next id: or end of array
        next_match = re.search(r'id:\s*"', content[match.end():])
        if next_match:
            end = match.end() + next_match.start()
        else:
            # try to find end of object
            end = match.end() + 1000 # crude
        
        poi_block = content[start:end]
        
        if 'descriptionAdvanced' not in poi_block:
            missing_desc.append((file_path, poi_id))
        else:
            # Check if en is empty
            if re.search(r'descriptionAdvanced:\s*\{[^}]*?en:\s*""', poi_block, re.DOTALL) or \
               re.search(r'descriptionAdvanced:\s*\{[^}]*?en:\s*\'\'', poi_block, re.DOTALL):
                missing_desc.append((file_path, poi_id))

        if 'factsAdvanced' not in poi_block:
            missing_facts.append((file_path, poi_id))
        else:
            if re.search(r'factsAdvanced:\s*\{[^}]*?en:\s*\[\]', poi_block, re.DOTALL):
                missing_facts.append((file_path, poi_id))

    return missing_desc, missing_facts

all_missing_desc = []
all_missing_facts = []

for root, dirs, files in os.walk('lib/visualLab/data'):
    for file in files:
        if file.endswith('.ts') and not file.startswith('.'):
            missing_desc, missing_facts = analyze_pois(os.path.join(root, file))
            all_missing_desc.extend(missing_desc)
            all_missing_facts.extend(missing_facts)

print(f"Total missing descriptionAdvanced.en: {len(all_missing_desc)}")
for f, m in all_missing_desc:
    print(f"  - {f}: {m}")
print(f"Total missing factsAdvanced.en: {len(all_missing_facts)}")
for f, m in all_missing_facts:
    print(f"  - {f}: {m}")
