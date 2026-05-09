
import os
import re

files = [
    "lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaReliefV2.ts"
]

def analyze_poi_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    poi_blocks = re.split(r'\{\s*id:', content)[1:]
    
    print(f"File: {file_path}")
    for block in poi_blocks:
        poi_id_match = re.search(r'\s*"(.*?)"', block)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        all_desc_blocks = re.findall(r'descriptionAdvanced\s*:\s*\{(.*?)\}', block, re.DOTALL)
        if all_desc_blocks:
            last_desc_block = all_desc_blocks[-1]
            de_match = re.search(r'de:\s*"(.*?)"', last_desc_block)
            de_content = de_match.group(1) if de_match else ""
            
            # Check for mojibake or template
            is_template = "Guatemala egyik figyelemre méltó pontja" in last_desc_block
            
            word_count = len(de_content.split())
            print(f"  {poi_id}: {word_count} words (DE). Template: {is_template}")
        else:
            print(f"  {poi_id}: MISSING descriptionAdvanced")

for f in files:
    analyze_poi_file(f)
