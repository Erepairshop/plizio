
import os
import re
import json

file_path = 'lib/visualLab/data/poiExtraHu2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

poi_id = "lake-szelidi-to-extra"
parts = re.split(r'\n  \{', content)
for i, part in enumerate(parts):
    if poi_id in part:
        print(f"Found {poi_id} in part {i}")
        desc_adv_match = re.search(r'descriptionAdvanced: \{.*?\}', part, flags=re.DOTALL)
        if desc_adv_match:
            print(f"Found descriptionAdvanced block: {desc_adv_match.group(0)}")
        else:
            print("NOT FOUND descriptionAdvanced block")
