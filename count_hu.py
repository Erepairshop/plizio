import re

with open("lib/visualLab/data/hungaryPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

# count total POIs by "id: "
total_pois = len(re.findall(r'id:\s*["\']hu-', content))
print(f"Total Hungary POIs: {total_pois}")

# This might be tricky to parse via regex. Let's write a node script using ts-morph or just basic string parsing to extract POI ids and names.
