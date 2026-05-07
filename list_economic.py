import re

file_path = "lib/visualLab/data/poiExtraBurkinafasoEconomicV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

entries = re.split(r'\n  \},\n  \{', content)

batch = []
for entry in entries:
    id_match = re.search(r'id:\s*"(.*?)"', entry)
    if id_match:
        poi_id = id_match.group(1)
        if "descriptionAdvanced:" not in entry:
            batch.append(poi_id)
print(batch)
