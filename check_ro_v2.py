import re

file_path = 'lib/visualLab/data/poiExtraCzechRepublicCities.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI IDs
all_ids = re.findall(r'id: "(.*?)"', content)

for poi_id in all_ids:
    # Find the block for this ID
    # This is a bit rough but should work for finding the presence of descriptionAdvanced
    block_match = re.search(r'id: "' + poi_id + r'".*?\n\s+\}', content, re.DOTALL)
    if block_match:
        block = block_match.group(0)
        if 'descriptionAdvanced' not in block:
            print(f"MISSING descriptionAdvanced: {poi_id}")
