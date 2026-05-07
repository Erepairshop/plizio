
import re

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Improved regex to find POI objects
pois = re.split(r'\{\s+id:', content)[1:]

for p in pois:
    poi_id_match = re.search(r'^ "([^"]+)"', p)
    if not poi_id_match: continue
    poi_id = poi_id_match.group(1)
    
    facts_adv_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', p, re.DOTALL)
    if facts_adv_match:
        en_match = re.search(r'en:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
        if en_match:
            en_val = en_match.group(1).strip()
            # Check if it's empty array or array with only empty strings
            if not en_val or en_val == '""' or en_val == '""' or en_val == '""' or re.fullmatch(r'(\s*""\s*,?)*', en_val):
                print(f"POI: {poi_id} - Empty factsAdvanced.en: '{en_val}'")
