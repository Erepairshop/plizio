import re
import os

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    for i in range(len(matches)):
        poi_id = matches[i].group(1)
        start_pos = matches[i].start()
        end_pos = matches[i+1].start() if i + 1 < len(matches) else content.find('];', start_pos)
        block = content[start_pos:end_pos]
        
        for lang in ['de', 'hu', 'ro', 'en']:
            # Check name
            name_match = re.search(r'name:\s*\{([^\}]+)\}', block, re.DOTALL)
            if name_match:
                if f'{lang}:' not in name_match.group(1):
                     print(f"MISSING_NAME_{lang.upper()}: {poi_id} in {file_path}")
            
            # Check description
            desc_match = re.search(r'description:\s*\{([^\}]+)\}', block, re.DOTALL)
            if desc_match:
                if f'{lang}:' not in desc_match.group(1):
                     print(f"MISSING_DESC_{lang.upper()}: {poi_id} in {file_path}")

