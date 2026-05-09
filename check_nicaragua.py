import re
import os

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts",
    "lib/visualLab/data/nicaraguaPoi.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and their IDs
    # This is a bit naive but should work for identifying missing de: in descriptionAdvanced
    poi_blocks = re.findall(r'id:\s*"(.*?)",.*?descriptionAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
    print(f"File: {file_path} - Found {len(poi_blocks)} POIs")
    
    for poi_id, desc_block in poi_blocks:
        if 'de:' not in desc_block or 'de: ""' in desc_block:
            print(f"MISSING_DE: {poi_id} in {file_path}")
        # Check number of facts in factsAdvanced.de
        facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', poi_content, re.DOTALL)
        if facts_match:
            de_facts_match = re.search(r'de:\s*\[(.*?)\]', facts_match.group(1), re.DOTALL)
            if de_facts_match:
                facts = re.findall(r'"(.*?)"', de_facts_match.group(1))
                if len(facts) < 6:
                    print(f"FEW_FACTS ({len(facts)}): {poi_id} in {file_path}")
            else:
                print(f"MISSING_FACTS_DE: {poi_id} in {file_path}")
        else:
            print(f"MISSING_FACTS_BLOCK: {poi_id} in {file_path}")

