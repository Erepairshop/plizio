import re

file_path = "lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    # Use a non-greedy regex to find each POI block
    content = f.read()
    
# Split by closing brace of POI entries
pois = re.split(r'\n  \},\n  \{', content)

batch = []
for block in pois:
    # Match ID
    id_match = re.search(r'id:\s*"(.*?)"', block)
    if id_match:
        poi_id = id_match.group(1)
        if "descriptionAdvanced:" in block and "en:" not in block:
            batch.append(poi_id)
            if len(batch) >= 20:
                break
print(batch)
