import re
import os

file_path = 'lib/visualLab/data/poiExtraRo2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match POI blocks
poi_matches = re.finditer(r'\{[^{]*id:\s*"(.*?)".*?descriptionAdvanced:\s*\{(.*?)\}', content, re.DOTALL)

missing_hu = []
for match in poi_matches:
    poi_id = match.group(1)
    desc_block = match.group(2)
    
    # Check if hu is empty or missing
    hu_match = re.search(r'hu:\s*["\'](.*?)["\']', desc_block)
    if not hu_match or hu_match.group(1).strip() == '' or hu_match.group(1).strip() == '...':
        missing_hu.append(poi_id)

print(f"Found {len(missing_hu)} POIs with missing/empty hu description:")
for mid in missing_hu:
    print(mid)
