import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POIs and their Hungarian names
# We look for id and then the name.hu
poi_data = []
# Split by objects approximately
objects = re.split(r'id:\s*', content)[1:]
for obj in objects:
    poi_id_match = re.search(r'^"([^"]+)"', obj)
    if poi_id_match:
        poi_id = poi_id_match.group(1)
        name_hu_match = re.search(r'hu:\s*"([^"]+)"', obj)
        name_hu = name_hu_match.group(1) if name_hu_match else "Unknown"
        poi_data.append({"id": poi_id, "name": name_hu})

import json
print(json.dumps(poi_data, ensure_ascii=False, indent=2))
