import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI objects
# A simple way is to split by { at the start of a line or after a comma
pois = re.split(r'}\s*,\s*\n\s*{', content)

empty_pois = []

for poi in pois:
    id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    # Check descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*{', poi)
    needs_desc = False
    if desc_adv_match:
        start = desc_adv_match.end()
        # Find the closing } for descriptionAdvanced
        brace_count = 1
        i = start
        while brace_count > 0 and i < len(poi):
            if poi[i] == '{': brace_count += 1
            elif poi[i] == '}': brace_count -= 1
            i += 1
        inner = poi[start:i-1]
        de_match = re.search(r'de:\s*["\']([^"\']*)["\']', inner)
        if de_match and not de_match.group(1).strip():
            needs_desc = True
    else:
        needs_desc = True # Missing entirely
        
    # Check factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*{', poi)
    needs_facts = False
    if facts_adv_match:
        start = facts_adv_match.end()
        brace_count = 1
        i = start
        while brace_count > 0 and i < len(poi):
            if poi[i] == '{': brace_count += 1
            elif poi[i] == '}': brace_count -= 1
            i += 1
        inner = poi[start:i-1]
        # Check if de is empty array or contains only empty strings
        de_match = re.search(r'de:\s*\[(.*?)\]', inner, re.DOTALL)
        if de_match:
            de_content = de_match.group(1)
            if not re.search(r'["\'][^"\']+["\']', de_content):
                needs_facts = True
        else:
            needs_facts = True
    else:
        needs_facts = True
        
    if needs_desc or needs_facts:
        empty_pois.append((poi_id, needs_desc, needs_facts))

print(f"Empty POIs: {len(empty_pois)}")
for poi_id, n_desc, n_facts in empty_pois:
    print(f"ID: {poi_id}, Needs Desc: {n_desc}, Needs Facts: {n_facts}")
