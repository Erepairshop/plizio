import re

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.split(r'\{\s*id:', content)[1:]
    for poi in pois:
        poi_id_match = re.search(r'^ "([^"]+)"', poi)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        facts_adv_match = re.search(r'factsAdvanced:\s*\{[^}]*de:\s*\[(.*?)\]', poi, re.DOTALL)
        if facts_adv_match:
            facts_str = facts_adv_match.group(1)
            num_de_facts = len(re.findall(r'"[^"]+"', facts_str))
            if num_de_facts < 6:
                print(f"{poi_id} | {num_de_facts} facts")

check_file('lib/visualLab/data/poiExtraNigeriaLifeV2.ts')
