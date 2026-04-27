import re

file_path = 'lib/visualLab/data/poiExtraRo2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by the start of each POI object
# Each POI starts like: { id: "..."
poi_blocks = re.split(r'\{\s*id:', content)[1:]

print(f"Total POIs found: {len(poi_blocks)}")

missing_desc_adv = []
missing_hu_desc_adv = []

for i, block in enumerate(poi_blocks):
    # Extract ID
    id_match = re.search(r'^\s*"([^"]+)"', block)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    if 'descriptionAdvanced' not in block:
        missing_desc_adv.append(poi_id)
    else:
        # Check if hu is empty in descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            # Find hu: inside it
            hu_match = re.search(r'hu:\s*""', desc_adv_content)
            if hu_match:
                missing_hu_desc_adv.append(poi_id)

print(f"POIs missing descriptionAdvanced entirely: {len(missing_desc_adv)}")
for pid in missing_desc_adv:
    print(pid)

print(f"POIs with empty descriptionAdvanced.hu: {len(missing_hu_desc_adv)}")
for pid in missing_hu_desc_adv:
    print(pid)
