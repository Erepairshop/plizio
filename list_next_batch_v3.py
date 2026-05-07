import re

file_path = "lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Just find every ID and see if the corresponding block has descriptionAdvanced: and no en:
# Manually reading the file is better than complex regexes.
lines = content.splitlines()
in_poi = False
current_poi_id = None
current_block = []

for line in lines:
    if 'id: "' in line:
        current_poi_id = re.search(r'id:\s*"(.*?)"', line).group(1)
        current_block = [line]
    elif current_poi_id:
        current_block.append(line)
        if line.strip() == "},":
            block_str = "\n".join(current_block)
            if "descriptionAdvanced:" in block_str and "en:" not in block_str:
                print(current_poi_id)
            current_poi_id = None
