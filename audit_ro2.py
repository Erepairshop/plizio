import re

with open('lib/visualLab/data/poiExtraRo1.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all blocks starting with { and ending with }, handling nested braces roughly
# Actually, since it's a TS array of objects, each POI starts with { and ends with },
# and we can find id: "..." inside.

pois = re.split(r'\{\s*id:', content)[1:]
for poi in pois:
    poi_id = poi.split('"')[1]
    
    desc_adv = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
    facts_adv = re.search(r'factsAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
    
    has_hu_desc = False
    if desc_adv:
        hu_match = re.search(r'hu:\s*"([^"]+)"', desc_adv.group(1))
        if hu_match:
            has_hu_desc = True
            
    has_hu_facts = False
    if facts_adv:
        hu_match = re.search(r'hu:\s*\[([^\]]+)\]', facts_adv.group(1))
        if hu_match:
            has_hu_facts = True
            
    if not has_hu_desc or not has_hu_facts:
        print(f"ID: {poi_id} | hu_desc: {has_hu_desc} | hu_facts: {has_hu_facts}")
