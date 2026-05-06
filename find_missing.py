import re

with open('lib/visualLab/data/norwayPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of id: "..."
pois = re.findall(r'id:\s*"([^"]*)"', content)

for poi_id in pois:
    # Find the block for this POI
    # We look for the block starting with this id and ending before the next { id: or the end of the array
    pattern = r'id:\s*"' + poi_id + r'".*?(?=id:\s*"|$)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        block = match.group(0)
        if 'descriptionAdvanced' not in block:
            print(f"POI {poi_id} is missing descriptionAdvanced")
        if 'factsAdvanced' not in block:
            print(f"POI {poi_id} is missing factsAdvanced")

print(f"Checked {len(pois)} POIs")
