import re

file_path = 'lib/visualLab/data/poiExtraRo1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.findall(r'id:\s*"([^"]+)"', content)
print(f"Total POIs: {len(pois)}")

# Find POIs where descriptionAdvanced.hu is empty or missing
# This is a bit complex with regex, so we'll do it per POI block
poi_blocks = re.split(r'id:\s*', content)[1:] # skip first part

empty_hu_pois = []
for block in poi_blocks:
    id_match = re.search(r'^"([^"]+)"', block)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    # Check for descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block, re.DOTALL)
    if not desc_adv_match:
        empty_hu_pois.append(poi_id)
        continue
    
    desc_adv_content = desc_adv_match.group(1)
    hu_match = re.search(r'hu:\s*"([^"]*)"', desc_adv_content)
    if not hu_match or hu_match.group(1).strip() == "":
        # Also check single quotes
        hu_match_sq = re.search(r"hu:\s*'([^']*)'", desc_adv_content)
        if not hu_match_sq or hu_match_sq.group(1).strip() == "":
             empty_hu_pois.append(poi_id)

print("POIs with empty descriptionAdvanced.hu:")
for poi_id in empty_hu_pois:
    print(poi_id)
