import re

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks
    # This is a bit naive but should work for identifying IDs and their Advanced fields
    poi_blocks = re.split(r'}\s*,\s*\n\s*{', content)
    
    missing_desc = []
    missing_facts = []
    
    for block in poi_blocks:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*{([^}]+)}', block, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            de_match = re.search(r'de:\s*"([^"]*)"', desc_adv_content)
            if de_match and de_match.group(1).strip() == "":
                missing_desc.append(poi_id)
        else:
            missing_desc.append(poi_id + " (missing field)")

        # Check factsAdvanced
        facts_adv_match = re.search(r'factsAdvanced:\s*{([^}]+)}', block, re.DOTALL)
        if facts_adv_match:
            facts_adv_content = facts_adv_match.group(1)
            de_match = re.search(r'de:\s*\[([^\]]*)\]', facts_adv_content)
            if de_match and de_match.group(1).strip() == "":
                missing_facts.append(poi_id)
        else:
            missing_facts.append(poi_id + " (missing field)")
            
    return missing_desc, missing_facts

missing_desc, missing_facts = find_missing_de('lib/visualLab/data/finlandPoi.ts')
print(f"Missing descriptionAdvanced.de: {len(missing_desc)}")
for m in missing_desc:
    print(f"  - {m}")
print(f"Missing factsAdvanced.de: {len(missing_facts)}")
for m in missing_facts:
    print(f"  - {m}")
