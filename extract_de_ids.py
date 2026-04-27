import re
import json

with open('lib/visualLab/data/poi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all IDs
ids = re.findall(r'id:\s*"([^"]+)"', content)

print(f"Total IDs: {len(ids)}")
with open('de_ids.json', 'w', encoding='utf-8') as f:
    json.dump(ids, f)
