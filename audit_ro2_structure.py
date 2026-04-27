import re

with open('lib/visualLab/data/poiExtraRo2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.split(r'\{\s*id:', content)[1:]
for poi in pois:
    poi_id = poi.split('"')[1]
    
    has_desc_adv = 'descriptionAdvanced:' in poi
    has_facts_adv = 'factsAdvanced:' in poi
    
    if not has_desc_adv or not has_facts_adv:
        print(f"ID: {poi_id} | has_desc: {has_desc_adv} | has_facts: {has_facts_adv}")
