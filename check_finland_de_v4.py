import re

def find_missing_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    all_ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    missing_desc_field = []
    missing_desc_de_key = []
    empty_desc_de_val = []
    
    missing_facts_field = []
    missing_facts_de_key = []
    empty_facts_de_val = []
    
    for poi_id in all_ids:
        pattern = r'id:\s*"' + poi_id + r'"(.*?)(?=id:\s*"|$)'
        block_match = re.search(pattern, content, re.DOTALL)
        if block_match:
            block = block_match.group(1)
            
            # descriptionAdvanced
            if 'descriptionAdvanced' in block:
                desc_match = re.search(r'descriptionAdvanced:\s*{([^{}]*)}', block, re.DOTALL)
                if desc_match:
                    desc_content = desc_match.group(1)
                    if 'de:' in desc_content:
                        de_val_match = re.search(r'de:\s*"([^"]*)"', desc_content)
                        if de_val_match:
                            if de_val_match.group(1).strip() == "":
                                empty_desc_de_val.append(poi_id)
                        else:
                            # de key exists but value not found by regex
                            pass
                    else:
                        missing_desc_de_key.append(poi_id)
            else:
                missing_desc_field.append(poi_id)

            # factsAdvanced
            if 'factsAdvanced' in block:
                facts_match = re.search(r'factsAdvanced:\s*{([^{}]*)}', block, re.DOTALL)
                if facts_match:
                    facts_content = facts_match.group(1)
                    if 'de:' in facts_content:
                        de_val_match = re.search(r'de:\s*\[\s*\]', facts_content)
                        if de_val_match:
                            empty_facts_de_val.append(poi_id)
                    else:
                        missing_facts_de_key.append(poi_id)
            else:
                missing_facts_field.append(poi_id)
                
    return (missing_desc_field, missing_desc_de_key, empty_desc_de_val, 
            missing_facts_field, missing_facts_de_key, empty_facts_de_val)

(mdf, mdk, edv, mff, mfk, efv) = find_missing_de('lib/visualLab/data/finlandPoi.ts')

print(f"POIs missing descriptionAdvanced field: {len(mdf)}")
print(f"POIs missing 'de' key in descriptionAdvanced: {len(mdk)}")
print(f"POIs with empty 'de' value in descriptionAdvanced: {len(edv)}")
print(f"POIs missing factsAdvanced field: {len(mff)}")
print(f"POIs missing 'de' key in factsAdvanced: {len(mfk)}")
print(f"POIs with empty 'de' value in factsAdvanced: {len(efv)}")
