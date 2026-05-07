import re

def list_pois(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('id: "')
    missing = []
    for part in parts[1:]:
        poi_id = part.split('"')[0]
        name_match = re.search(r'name:\s*\{\s*de:\s*"(.*?)"', part)
        poi_name = name_match.group(1) if name_match else "Unknown"
        
        has_desc = 'descriptionAdvanced' in part
        has_facts = 'factsAdvanced' in part
        desc_de_empty = False
        facts_de_empty = False
        
        if has_desc:
            desc_match = re.search(r'descriptionAdvanced:\s*\{\s*de:\s*"(.*?)"', part, re.DOTALL)
            if desc_match and desc_match.group(1).strip() == "":
                desc_de_empty = True
        
        if has_facts:
            facts_match = re.search(r'factsAdvanced:\s*\{\s*de:\s*\[(.*?)\]', part, re.DOTALL)
            if facts_match and facts_match.group(1).strip() == "":
                facts_de_empty = True
        
        if not has_desc or not has_facts or desc_de_empty or facts_de_empty:
            missing.append((poi_id, poi_name))

    return missing

m1 = list_pois("lib/visualLab/data/netherlandsPoi.ts")
print(f"lib/visualLab/data/netherlandsPoi.ts needs update for {len(m1)} POIs:")
for m in m1:
    print(m)

m2 = list_pois("lib/visualLab/data/poiExtraNetherlandsCities.ts")
print(f"lib/visualLab/data/poiExtraNetherlandsCities.ts needs update for {len(m2)} POIs:")
for m in m2:
    print(m)
