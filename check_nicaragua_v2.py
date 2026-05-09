import re
import os

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POIs (blocks starting with { and having id: "...")
    # This regex looks for the start of a POI object
    poi_matches = re.finditer(r'\{\s*id:\s*"(.*?)"', content)
    
    count_all = 0
    for match in poi_matches:
        count_all += 1
        poi_id = match.group(1)
        # Find the end of this POI object (roughly)
        start_pos = match.start()
        # Find next id: or ];
        next_match = re.search(r'id:\s*"|\];', content[match.end():])
        end_pos = match.end() + next_match.start() if next_match else len(content)
        
        poi_content = content[start_pos:end_pos]
        
        if 'descriptionAdvanced' not in poi_content:
            print(f"MISSING_BLOCK: {poi_id} in {file_path}")
        elif 'de:' not in poi_content or 'de: ""' in poi_content:
             print(f"MISSING_DE: {poi_id} in {file_path}")

    print(f"File: {file_path} - Processed {count_all} POIs")
