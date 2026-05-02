import re

def count_missing(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = []
    # match each POI object
    for match in re.finditer(r'id:\s*["\']([^"\']+)["\']', content):
        poi_id = match.group(1)
        start_idx = match.start()
        # Find next POI or end
        next_match = re.search(r'\n\s*id:\s*["\']', content[start_idx+1:])
        end_idx = start_idx + 1 + next_match.start() if next_match else len(content)
        
        poi_block = content[start_idx:end_idx]
        
        # Check if descriptionAdvanced has ro: "..." with content
        # Note: ro: "" is missing. ro: "some text" is present.
        has_ro_desc = bool(re.search(r'descriptionAdvanced:\s*\{[^\}]*ro:\s*["\'](.+?)["\']', poi_block, re.DOTALL))
        has_ro_facts = bool(re.search(r'factsAdvanced:\s*\{[^\}]*ro:\s*\[(.+?)\]', poi_block, re.DOTALL))
        
        if not has_ro_desc or not has_ro_facts:
            pois.append(poi_id)
            
    return pois

p1 = count_missing('lib/visualLab/data/polandPoi.ts')
p2 = count_missing('lib/visualLab/data/poiExtraPolandCities.ts')

print(f"Missing in polandPoi.ts: {len(p1)}")
print(f"Missing in poiExtraPolandCities.ts: {len(p2)}")
