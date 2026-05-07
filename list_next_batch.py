import re

file_path = "lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

pois = re.findall(r'(\{\s*id:\s*"(.*?)"[\s\S]*?\n\s*\})', content)
count = 0
batch = []
for block, poi_id in pois:
    if "descriptionAdvanced:" in block and "en:" not in block:
        batch.append(poi_id)
        count += 1
        if count >= 20:
            break
print(batch)
