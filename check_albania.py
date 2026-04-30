import re

with open('lib/visualLab/data/albaniaPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI objects by looking for id: "..."
pois = re.findall(r'\{[^{}]*?id:\s*"(.*?)"[^{}]*?\}', content, re.DOTALL)
print(f"Found {len(pois)} POIs in IDs")

# Check for descriptionAdvanced and factsAdvanced
for poi_id in pois:
    # Find the block for this ID
    match = re.search(r'id:\s*"' + poi_id + r'".*?\}', content, re.DOTALL)
    if match:
        block = match.group(0)
        has_desc_adv = 'descriptionAdvanced' in block
        has_facts_adv = 'factsAdvanced' in block
        
        # Check if de is empty in descriptionAdvanced
        desc_de_empty = True
        if has_desc_adv:
            desc_match = re.search(r'descriptionAdvanced:\s*\{.*?de:\s*"(.*?)",', block, re.DOTALL)
            if desc_match and desc_match.group(1).strip():
                desc_de_empty = False
        
        # Check if de is empty in factsAdvanced
        facts_de_empty = True
        if has_facts_adv:
            facts_match = re.search(r'factsAdvanced:\s*\{.*?de:\s*\[(.*?)\],', block, re.DOTALL)
            if facts_match and facts_match.group(1).strip():
                facts_de_empty = False
        
        print(f"ID: {poi_id} | DescAdv: {not desc_de_empty} | FactsAdv: {not facts_de_empty}")

