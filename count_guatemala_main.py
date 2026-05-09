import re
import os

file_path = "lib/visualLab/data/guatemalaPoi.ts"
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
    
    da_match = re.search(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
    if not da_match:
        print(f"MISSING: {poi_id}")
    else:
        de_match = re.search(r'de:\s*"([^"]+)"', da_match.group(1))
        if de_match:
            word_count = len(de_match.group(1).split())
            if word_count < 80:
                print(f"SHORT DE: {poi_id} ({word_count})")
        else:
            print(f"NO DE KEY: {poi_id}")

