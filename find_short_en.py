
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
    
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', p, re.DOTALL)
    if desc_adv_match:
        en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_match.group(1))
        if en_match:
            en_val = en_match.group(1).strip()
            if len(en_val) < 150: # Increased threshold
                print(f"POI: {poi_id} - Short descriptionAdvanced.en ({len(en_val)} chars): '{en_val}'")
