import re

with open('lib/visualLab/data/poiExtraRo2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.split(r'id:\s*"', content)[1:]
missing_hu = []

for poi in pois:
    poi_id = poi.split('"')[0]
    
    # Find descriptionAdvanced block
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
    if desc_adv_match:
        desc_adv_content = desc_adv_match.group(1)
        if 'hu:' not in desc_adv_content or re.search(r'hu:\s*""', desc_adv_content):
            missing_hu.append(poi_id)
            continue
    else:
        # If descriptionAdvanced is missing entirely, it's also a candidate (though usually it's there)
        missing_hu.append(poi_id)
        continue

    # Also check factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
    if facts_adv_match:
        facts_adv_content = facts_adv_match.group(1)
        if 'hu:' not in facts_adv_content or re.search(r'hu:\s*\[\s*\]', facts_adv_content):
            if poi_id not in missing_hu:
                missing_hu.append(poi_id)

print("\n".join(missing_hu))
