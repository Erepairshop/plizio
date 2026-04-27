import re

with open("lib/visualLab/data/poiExtraDe4a.ts", "r", encoding="utf-8") as f:
    content = f.read()

# get first id
match = re.search(r'id:\s*"([^"]+)"', content)
poi_id = match.group(1)

print(f"Testing on {poi_id}")

pattern_id = rf'(id:\s*"{poi_id}".*?descriptionAdvanced:\s*\{{)(.*?)(\}})'
match_desc = re.search(pattern_id, content, flags=re.DOTALL)
if match_desc:
    print("Found descriptionAdvanced block.")
else:
    print("NOT FOUND descriptionAdvanced block!")

