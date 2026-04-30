
import re
import json

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/belgiumPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# I want to find all POI objects. 
# They usually start with { id: "..." and end with },
# but they can be nested.
# Since we know the structure, we can try to find blocks that start with { id: and end with },

def get_poi_blocks(content):
    # This is a very simple parser that looks for { id: "..." and then matches braces
    pois = []
    start_indices = [m.start() for m in re.finditer(r'\{\s*id:\s*"', content)]
    
    for start in start_indices:
        brace_count = 0
        end = -1
        for i in range(start, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = i + 1
                    break
        if end != -1:
            pois.append(content[start:end])
    return pois

poi_blocks = get_poi_blocks(content)

extracted_data = []
for block in poi_blocks:
    poi_id = re.search(r'id:\s*"([^"]+)"', block).group(1)
    name_hu = re.search(r'name:\s*\{[^}]*hu:\s*"([^"]+)"', block)
    name_hu = name_hu.group(1) if name_hu else "Unknown"
    
    desc_hu = re.search(r'description:\s*\{[^}]*hu:\s*"([^"]+)"', block)
    desc_hu = desc_hu.group(1) if desc_hu else ""
    
    desc_adv_hu = re.search(r'descriptionAdvanced:\s*\{[^}]*hu:\s*"([^"]*)"', block)
    desc_adv_hu = desc_adv_hu.group(1) if desc_adv_hu else ""
    
    has_facts_adv = "factsAdvanced:" in block
    facts_adv_hu = []
    if has_facts_adv:
        facts_match = re.search(r'factsAdvanced:\s*\{[^}]*hu:\s*\[(.*?)\]', block, re.DOTALL)
        if facts_match:
            facts_str = facts_match.group(1).strip()
            if facts_str:
                # Poor man's list parser
                facts_adv_hu = [f.strip().strip('"') for f in facts_str.split('",') if f.strip()]

    extracted_data.append({
        "id": poi_id,
        "name_hu": name_hu,
        "desc_hu": desc_hu,
        "desc_adv_hu": desc_adv_hu,
        "has_facts_adv": has_facts_adv,
        "facts_adv_hu": facts_adv_hu
    })

print(json.dumps(extracted_data, indent=2, ensure_ascii=False))
