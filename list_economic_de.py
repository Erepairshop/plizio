import re
import os

file_path = "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_blocks(content):
    blocks = []
    stack = 0
    start = -1
    for i, char in enumerate(content):
        if char == '{':
            if stack == 0:
                start = i
            stack += 1
        elif char == '}':
            stack -= 1
            if stack == 0 and start != -1:
                blocks.append(content[start:i+1])
                start = -1
    return blocks

blocks = get_blocks(content)
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if not id_match: continue
    poi_id = id_match.group(1)
    
    da_matches = re.findall(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
    for i, da in enumerate(da_matches):
        de_match = re.search(r'de:\s*"([^"]+)"', da)
        if de_match:
            print(f"{poi_id} [Block {i+1}]: {de_match.group(1)[:100]}...")
        else:
            print(f"{poi_id} [Block {i+1}]: MISSING DE")

