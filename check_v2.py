
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMadagascarCitiesV2.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Find all blocks of factsAdvanced and descriptionAdvanced
blocks = re.findall(r'(factsAdvanced|descriptionAdvanced): \{([^\}]*)\}', content, re.DOTALL)

for block_type, block_content in blocks:
    en_matches = re.findall(r'\ben:', block_content)
    if len(en_matches) > 1:
        # Find which POI this belongs to
        # This is a bit tricky with re.findall, let's try another way
        pass

# Let's iterate through POIs
pois = re.split(r'\{\s+id:', content)
for poi in pois:
    poi_id_match = re.search(r'^\s+"([^"]+)"', poi)
    if not poi_id_match:
        continue
    poi_id = poi_id_match.group(1)
    
    for block_name in ['factsAdvanced', 'descriptionAdvanced']:
        block_match = re.search(r'' + block_name + r': \{([^\}]*)\}', poi, re.DOTALL)
        if block_match:
            block_content = block_match.group(1)
            en_matches = re.findall(r'\ben:', block_content)
            if len(en_matches) > 1:
                print(f"Duplicate en: in {poi_id} -> {block_name}")
                # Print the content to see which one is longer
                # Actually I'll just print it for now
