import re
import os

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.split(r'\{\s*id:', content)[1:]
    for poi in pois:
        poi_id_match = re.search(r'^ "([^"]+)"', poi)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*"([^"]*)"', poi, re.DOTALL)
        has_de_desc = desc_adv_match and len(desc_adv_match.group(1).strip()) > 50
        
        facts_adv_match = re.search(r'factsAdvanced:\s*\{[^}]*de:\s*\[(.*?)\]', poi, re.DOTALL)
        num_de_facts = 0
        if facts_adv_match:
            facts_str = facts_adv_match.group(1)
            num_de_facts = len(re.findall(r'"[^"]+"', facts_str))
        
        if not has_de_desc or num_de_facts < 6:
            print(f"File: {filepath} | ID: {poi_id} | de_desc: {has_de_desc} | de_facts: {num_de_facts}")

for f in os.listdir('lib/visualLab/data/'):
    if f.startswith('poiExtraNigeria') and f.endswith('V2.ts'):
        check_file(os.path.join('lib/visualLab/data/', f))
