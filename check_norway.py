import re

with open('lib/visualLab/data/norwayPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI objects (roughly)
# We look for id: "..." and then the following fields until the next id: or end of array
poi_blocks = re.split(r'id:\s*"', content)[1:]

missing_en_desc = 0
missing_en_facts = 0
total_pois = len(poi_blocks)

for block in poi_blocks:
    poi_id = block.split('"')[0]
    
    # Check descriptionAdvanced.en
    desc_match = re.search(r'descriptionAdvanced:\s*\{[^}]*en:\s*"([^"]*)"', block, re.DOTALL)
    if not desc_match or not desc_match.group(1).strip():
        missing_en_desc += 1
        print(f"POI {poi_id} missing or empty descriptionAdvanced.en")
        
    # Check factsAdvanced.en
    facts_match = re.search(r'factsAdvanced:\s*\{[^}]*en:\s*\[([^\]]*)\]', block, re.DOTALL)
    if not facts_match or not facts_match.group(1).strip():
        missing_en_facts += 1
        print(f"POI {poi_id} missing or empty factsAdvanced.en")

print(f"Total POIs: {total_pois}")
print(f"Missing EN desc: {missing_en_desc}")
print(f"Missing EN facts: {missing_en_facts}")
