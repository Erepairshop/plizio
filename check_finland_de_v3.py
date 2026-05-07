import re

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POI IDs
    all_ids = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"Total POIs found by ID: {len(all_ids)}")
    
    missing_desc = []
    missing_facts = []
    
    for poi_id in all_ids:
        # Find the block for this ID. We look from the ID until the next ID or end of file
        # This is a bit safer
        pattern = r'id:\s*"' + poi_id + r'"(.*?)(?=id:\s*"|$)'
        block_match = re.search(pattern, content, re.DOTALL)
        if block_match:
            block = block_match.group(1)
            
            # Check descriptionAdvanced
            desc_adv_match = re.search(r'descriptionAdvanced:\s*{[^{}]*de:\s*"([^"]*)"[^{}]*}', block, re.DOTALL)
            if desc_adv_match:
                if desc_adv_match.group(1).strip() == "":
                    missing_desc.append(poi_id)
            else:
                missing_desc.append(poi_id + " (missing field)")
                
            # Check factsAdvanced
            facts_adv_match = re.search(r'factsAdvanced:\s*{[^{}]*de:\s*\[\s*\][^{}]*}', block, re.DOTALL)
            if facts_adv_match:
                missing_facts.append(poi_id)
            else:
                # Check if field exists at all
                if 'factsAdvanced' not in block:
                    missing_facts.append(poi_id + " (missing field)")
        else:
            print(f"Could not find block for {poi_id}")
            
    return missing_desc, missing_facts

missing_desc, missing_facts = find_missing_de('lib/visualLab/data/finlandPoi.ts')
print(f"Missing/Empty descriptionAdvanced.de: {len(missing_desc)}")
for m in missing_desc:
    print(f"  - {m}")
print(f"Missing/Empty factsAdvanced.de: {len(missing_facts)}")
for m in missing_facts:
    print(f"  - {m}")
