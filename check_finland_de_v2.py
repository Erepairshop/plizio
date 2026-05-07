import re

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects
    # We look for objects that have an id: "..."
    # and then check their descriptionAdvanced and factsAdvanced
    
    # Find all occurrences of descriptionAdvanced
    desc_adv_matches = re.finditer(r'id:\s*"([^"]+)"(.*?)(descriptionAdvanced:\s*{[^{}]*de:\s*"([^"]*)"[^{}]*})', content, re.DOTALL)
    
    missing_desc = []
    for match in desc_adv_matches:
        poi_id = match.group(1)
        de_val = match.group(4).strip()
        if de_val == "":
            missing_desc.append(poi_id)
            
    # Find all occurrences of factsAdvanced
    facts_adv_matches = re.finditer(r'id:\s*"([^"]+)"(.*?)(factsAdvanced:\s*{[^{}]*de:\s*\[\s*\][^{}]*})', content, re.DOTALL)
    
    missing_facts = []
    for match in facts_adv_matches:
        poi_id = match.group(1)
        missing_facts.append(poi_id)
            
    return missing_desc, missing_facts

missing_desc, missing_facts = find_missing_de('lib/visualLab/data/finlandPoi.ts')
print(f"Empty descriptionAdvanced.de: {len(missing_desc)}")
for m in missing_desc:
    print(f"  - {m}")
print(f"Empty factsAdvanced.de: {len(missing_facts)}")
for m in missing_facts:
    print(f"  - {m}")

# Also check for POIs missing these fields entirely
with open('lib/visualLab/data/finlandPoi.ts', 'r', encoding='utf-8') as f:
    full_content = f.read()
    all_ids = re.findall(r'id:\s*"([^"]+)"', full_content)
    
    for poi_id in all_ids:
        # Check if this ID's block has descriptionAdvanced
        # Find the block for this ID
        block_match = re.search(r'id:\s*"' + poi_id + r'"(.*?image:)', full_content, re.DOTALL)
        if block_match:
            block = block_match.group(1)
            if 'descriptionAdvanced' not in block:
                print(f"POI {poi_id} is missing descriptionAdvanced field entirely")
            if 'factsAdvanced' not in block:
                print(f"POI {poi_id} is missing factsAdvanced field entirely")
