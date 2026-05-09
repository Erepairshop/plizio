import re
import os

files = [
    "lib/visualLab/data/poiExtraGuatemalaReliefV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts"
]

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

for file_path in files:
    if not os.path.exists(file_path): continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = get_blocks(content)
    for block in blocks:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        da_matches = re.findall(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
        if not da_matches:
            print(f"MISSING: {poi_id}")
            continue
            
        last_da = da_matches[-1]
        de_match = re.search(r'de:\s*"([^"]+)"', last_da)
        if de_match:
            word_count = len(de_match.group(1).split())
            if word_count < 80:
                print(f"LOW_COUNT: {poi_id} ({word_count}) in {file_path}")
        else:
            print(f"NO_DE_KEY: {poi_id} in {file_path}")

