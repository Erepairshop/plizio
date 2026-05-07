
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
        body = desc_adv_match.group(1)
        en = re.search(r'en:\s*"([^"]*)"', body)
        de = re.search(r'de:\s*"([^"]*)"', body)
        hu = re.search(r'hu:\s*"([^"]*)"', body)
        ro = re.search(r'ro:\s*"([^"]*)"', body)
        
        if en:
            en_val = en.group(1).strip()
            if de and en_val == de.group(1).strip() and en_val:
                print(f"POI: {poi_id} - en == de")
            if hu and en_val == hu.group(1).strip() and en_val:
                print(f"POI: {poi_id} - en == hu")
            if ro and en_val == ro.group(1).strip() and en_val:
                print(f"POI: {poi_id} - en == ro")
