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
        
        # Look for descriptionAdvanced
        da_matches = re.findall(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
        
        if not da_matches:
            print(f"MISSING: {file_path}|{poi_id}|None")
            continue
            
        last_da = da_matches[-1]
        de_text_match = re.search(r'de:\s*"([^"]+)"', last_da)
        if not de_text_match:
            print(f"MISSING DE: {file_path}|{poi_id}|None")
        else:
            de_text = de_text_match.group(1)
            word_count = len(de_text.split())
            if word_count < 70:
                print(f"SHORT DE: {file_path}|{poi_id}|{word_count}")

