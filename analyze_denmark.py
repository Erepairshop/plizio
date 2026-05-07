import re

def analyze_pois(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI objects
    # We look for id: "..."
    poi_matches = re.finditer(r'\{[^{]*?id:\s*"([^"]+)"', content, re.DOTALL)
    
    missing_desc = []
    missing_facts = []
    
    for match in poi_matches:
        poi_id = match.group(1)
        # Find the end of this object (very crude)
        start = match.start()
        # Find next id: or end of array
        next_match = re.search(r'id:\s*"', content[match.end():])
        if next_match:
            end = match.end() + next_match.start()
        else:
            end = len(content)
        
        poi_block = content[start:end]
        
        if 'descriptionAdvanced' not in poi_block:
            missing_desc.append(poi_id)
        else:
            # Check if en is empty
            en_desc_match = re.search(r'descriptionAdvanced:\s*\{.*?en:\s*""', poi_block, re.DOTALL)
            if en_desc_match:
                missing_desc.append(poi_id)
            en_desc_match_single = re.search(r'descriptionAdvanced:\s*\{.*?en:\s*\'\'', poi_block, re.DOTALL)
            if en_desc_match_single:
                missing_desc.append(poi_id)

        if 'factsAdvanced' not in poi_block:
            missing_facts.append(poi_id)
        else:
            en_facts_match = re.search(r'factsAdvanced:\s*\{.*?en:\s*\[\]', poi_block, re.DOTALL)
            if en_facts_match:
                missing_facts.append(poi_id)

    return missing_desc, missing_facts

missing_desc, missing_facts = analyze_pois('lib/visualLab/data/denmarkPoi.ts')
print(f"Missing descriptionAdvanced.en: {len(missing_desc)}")
for m in missing_desc:
    print(f"  - {m}")
print(f"Missing factsAdvanced.en: {len(missing_facts)}")
for m in missing_facts:
    print(f"  - {m}")
