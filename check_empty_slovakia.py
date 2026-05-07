import re

content = open("lib/visualLab/data/slovakiaPoi.ts", "r", encoding="utf-8").read()

# Find all POIs
pois = re.findall(r'id:\s*"([^"]+)"(.*?)(?=\n  },?\n|\n\];)', content, re.DOTALL)
print(f"Total POIs found: {len(pois)}")

empty_en = []
for id, body in pois:
    if 'descriptionAdvanced' not in body:
        empty_en.append(id)
        continue
    
    # check if en is empty string or array
    # descriptionAdvanced
    desc_adv = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', body, re.DOTALL)
    if desc_adv:
        en_match = re.search(r'en:\s*""', desc_adv.group(1))
        if en_match:
            empty_en.append(id)
            continue
            
    # factsAdvanced
    facts_adv = re.search(r'factsAdvanced:\s*\{(.*?)\}', body, re.DOTALL)
    if facts_adv:
        en_match = re.search(r'en:\s*\[\]', facts_adv.group(1))
        if en_match:
            empty_en.append(id)
            continue

print(f"POIs with empty or missing en: {len(empty_en)}")
print(empty_en)

