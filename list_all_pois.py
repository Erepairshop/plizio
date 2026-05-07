import re

def list_pois(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('id: "')
    print(f"--- {filepath} ---")
    for part in parts[1:]:
        poi_id = part.split('"')[0]
        name_match = re.search(r'name:\s*\{\s*de:\s*"(.*?)"', part)
        if name_match:
            poi_name = name_match.group(1)
        else:
            poi_name = "Unknown"
        
        has_desc = 'descriptionAdvanced' in part
        has_facts = 'factsAdvanced' in part
        
        print(f"ID: {poi_id} | Name: {poi_name} | descAdv: {has_desc} | factsAdv: {has_facts}")

list_pois("lib/visualLab/data/netherlandsPoi.ts")
list_pois("lib/visualLab/data/poiExtraNetherlandsCities.ts")
