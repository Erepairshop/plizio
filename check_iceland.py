import re
import os

files = [
    "lib/visualLab/data/icelandPoi.ts",
    "lib/visualLab/data/poiExtraIcelandCities.ts",
    "lib/visualLab/data/poiExtraIcelandHistory.ts",
    "lib/visualLab/data/poiExtraIcelandOther.ts"
]

for f in files:
    if not os.path.exists(f):
        print(f"Missing {f}")
        continue
    content = open(f, 'r', encoding='utf-8').read()
    
    # find all POIs
    # this is a simple check
    pois = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"--- {f} ---")
    print(f"Total POIs: {len(pois)}")
    
    # check how many have descriptionAdvanced.en
    # we can do this by splitting the file by id:
    parts = re.split(r'id:\s*"', content)
    for part in parts[1:]:
        id_match = part.split('"', 1)[0]
        
        # extract the object block
        # we'll just check if 'en: ""' or missing
        desc_adv = re.search(r'descriptionAdvanced:\s*{([^}]+)}', part)
        facts_adv = re.search(r'factsAdvanced:\s*{([^}]+)}', part)
        
        en_desc = ""
        en_facts = ""
        
        if desc_adv:
            en_m = re.search(r'en:\s*"([^"]*)"', desc_adv.group(1))
            if en_m:
                en_desc = en_m.group(1)
        
        if facts_adv:
            en_m = re.search(r'en:\s*\[(.*?)\]', facts_adv.group(1), re.DOTALL)
            if en_m:
                en_facts = en_m.group(1).strip()
                
        if not en_desc or not en_facts:
            print(f"Missing/empty EN in {id_match}: desc_len={len(en_desc)}, facts_len={len(en_facts)}")
            
