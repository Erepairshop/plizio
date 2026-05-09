
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
    
    # Split by POI object start
    # We look for something like { id: "..."
    poi_blocks = re.split(r'\{\s*id:', content)[1:]
    
    print(f"File: {file_path} ({len(poi_blocks)} POIs)")
    for block in poi_blocks:
        poi_id_match = re.search(r'\s*"(.*?)"', block)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        # Count occurrences of descriptionAdvanced
        desc_matches = re.findall(r'descriptionAdvanced\s*:', block)
        desc_count = len(desc_matches)
        
        # Check DE content
        # We want the LAST occurrence of de: "..." within the LAST descriptionAdvanced
        all_desc_blocks = re.findall(r'descriptionAdvanced\s*:\s*\{(.*?)\}', block, re.DOTALL)
        if all_desc_blocks:
            last_desc_block = all_desc_blocks[-1]
            de_match = re.search(r'de:\s*"(.*?)"', last_desc_block)
            de_content = de_match.group(1) if de_match else ""
        else:
            de_content = ""
        
        word_count = len(de_content.split())
        
        if desc_count > 1:
            print(f"  ID: {poi_id} -> DUPLICATE descriptionAdvanced ({desc_count})")
        
        if not de_content or de_content.strip() == "":
            print(f"  ID: {poi_id} -> MISSING DE content")
        elif word_count < 80:
             print(f"  ID: {poi_id} -> SHORT DE content ({word_count} words)")

for f in files:
    analyze_poi_file(f)
