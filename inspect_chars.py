
import os
import re

file_path = 'lib/visualLab/data/poiExtraHu2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

poi_id = "lake-szelidi-to-extra"
start_idx = content.find(f'id: "{poi_id}"')
desc_start = content.find('descriptionAdvanced: {', start_idx)
block_end = content.find('}', desc_start)
block = content[desc_start:block_end]

for line in block.splitlines():
    if 'hu:' in line:
        print(f"Line: {repr(line)}")
        print(f"Hex: {line.encode('utf-8').hex()}")
