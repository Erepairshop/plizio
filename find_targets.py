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

template_fragments = [
    "bemerkenswerter Ort",
    "figyelemre méltó pontja",
    "punct remarcabil",
    "notable location"
]

targets = []

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
        # Note: there might be duplicates, we care if any of them is missing 'de' or is template
        da_matches = re.findall(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
        
        needs_update = False
        if not da_matches:
            needs_update = True
        else:
            # Check the LAST descriptionAdvanced (as it usually overwrites)
            last_da = da_matches[-1]
            if 'de:' not in last_da:
                needs_update = True
            else:
                de_text_match = re.search(r'de:\s*"([^"]+)"', last_da)
                if not de_text_match:
                    needs_update = True
                else:
                    de_text = de_text_match.group(1)
                    if len(de_text) < 50 or any(frag in de_text for frag in template_fragments):
                        needs_update = True
        
        if needs_update:
            targets.append((file_path, poi_id))

for f, i in targets:
    print(f"{f}|{i}")

