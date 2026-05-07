
import re

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Improved regex to find POI objects
# It looks for { id: "...", then anything until the next POI or end of array
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
            if len(en_val) < 50:
                print(f"POI: {poi_id} - Short descriptionAdvanced.en: '{en_val}'")
        else:
            print(f"POI: {poi_id} - Missing en in descriptionAdvanced")
    else:
        print(f"POI: {poi_id} - Missing descriptionAdvanced")

    facts_adv_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', p, re.DOTALL)
    if facts_adv_match:
        en_match = re.search(r'en:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
        if en_match:
            en_val = en_match.group(1).strip()
            if len(en_val) < 10:
                print(f"POI: {poi_id} - Short factsAdvanced.en: '{en_val}'")
        else:
            print(f"POI: {poi_id} - Missing en in factsAdvanced")
    else:
        print(f"POI: {poi_id} - Missing factsAdvanced")
