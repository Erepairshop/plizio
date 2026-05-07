import re

file_path = "lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Match entries that start with `{` and end with `  }`
# Since entries are delimited by `  },` and `  {`, let's split more carefully.
entries = re.split(r'\n  \},\n  \{', content)

for entry in entries:
    id_match = re.search(r'id:\s*"(.*?)"', entry)
    if id_match:
        poi_id = id_match.group(1)
        if "descriptionAdvanced:" in entry and "en:" not in entry:
            print(poi_id)
