import re

with open("lib/visualLab/data/romaniaPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

import ast
# We can't parse TS as JSON, so we use regex
pois = re.split(r'\n\s*{\n\s*id: ', content)
missing = []
for poi in pois[1:]:
    id_match = re.match(r'"([^"]+)"', poi) or re.match(r"'([^']+)'", poi)
    if not id_match: continue
    poi_id = id_match.group(1)
    
    desc_adv_match = re.search(r'descriptionAdvanced:\s*{([^}]+)}', poi)
    if not desc_adv_match:
        missing.append(poi_id)
        continue
    
    de_desc_match = re.search(r'de:\s*"([^"]*)"', desc_adv_match.group(1))
    if not de_desc_match or not de_desc_match.group(1).strip():
        missing.append(poi_id)
        continue
        
    facts_adv_match = re.search(r'factsAdvanced:\s*{([^}]+)}', poi)
    if not facts_adv_match:
        missing.append(poi_id)
        continue
        
    de_facts_match = re.search(r'de:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
    if not de_facts_match or not de_facts_match.group(1).strip():
        missing.append(poi_id)
        continue

ids = sorted(list(set(missing)))
print("Missing for:", ids)
print("Count:", len(ids))
