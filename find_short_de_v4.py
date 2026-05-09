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
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POIs
    # A POI starts with { followed by id: "..."
    # We look for this pattern
    matches = re.finditer(r'\{\s*id:\s*"(.*?)"', content, re.DOTALL)
    
    count = 0
    for match in matches:
        count += 1
        poi_id = match.group(1)
        start_pos = match.start()
        # Find the next id: or the end of the array ];
        next_poi = re.search(r'id:\s*"|\];', content[match.end():])
        end_pos = match.end() + next_poi.start() if next_poi else len(content)
        poi_text = content[start_pos:end_pos]
        
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi_text, re.DOTALL)
        if desc_match:
            desc_block = desc_match.group(1)
            de_text_match = re.search(r'de:\s*"(.*?)"', desc_block, re.DOTALL)
            if de_text_match:
                de_text = de_text_match.group(1)
                word_count = len(de_text.split())
                if word_count < 80:
                    print(f"{poi_id} in {file_path} - {word_count} words")
            else:
                 print(f"{poi_id} in {file_path} - MISSING DE")
        else:
            print(f"{poi_id} in {file_path} - MISSING DESC_ADV")
    
    # print(f"File: {file_path} - Found {count} POIs")
