import json
import re

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo1.ts') as f:
    text = f.read()

pois = []
matches = re.finditer(r'\{[^\}]*?\"id\":\s*\"([^\"]+)\".*?\"name\":\s*\{[^\}]*?\"ro\":\s*\"([^\"]*)\"[^\}]*?\}.*?\"description\":\s*\{[^\}]*?\"ro\":\s*\"([^\"]*)\"', text, re.DOTALL)
for m in matches:
    pois.append({
        "id": m.group(1),
        "name_ro": m.group(2),
        "desc_ro": m.group(3)
    })

with open('/mnt/c/Users/User/plizio-repo/ro1_pois.json', 'w') as f:
    json.dump(pois, f, indent=2)

print(f"Extracted {len(pois)} POIs")
