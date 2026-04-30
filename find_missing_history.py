
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find all POIs
poi_blocks = re.findall(r'\{([^{}]+(?:\{[^{}]+\}[^{}]+)*)\}', content)

missing_ids = []

for block in poi_blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match:
        poi_id = id_match.group(1)
        # Check if descriptionAdvanced de is empty
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{\s*de:\s*""', block)
        if desc_adv_match:
            missing_ids.append(poi_id)

print("\n".join(missing_ids))
