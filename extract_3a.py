import re
import json

with open("lib/visualLab/data/poiExtraDe3a.ts", "r", encoding="utf-8") as f:
    content = f.read()

pois = []
for match in re.finditer(r'id:\s*"([^"]+)".*?name:\s*\{\s*de:\s*"([^"]+)".*?description:\s*\{\s*de:\s*"([^"]+)"', content, re.DOTALL):
    pois.append({"id": match.group(1), "name_de": match.group(2), "desc_de": match.group(3)})

with open("pois_3a.json", "w", encoding="utf-8") as f:
    json.dump(pois, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(pois)} POIs")
