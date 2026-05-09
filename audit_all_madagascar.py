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
        print(f"NOT_FOUND: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    print(f"--- {file_path} ({len(matches)} POIs) ---")
    for i in range(len(matches)):
        poi_id = matches[i].group(1)
        start_pos = matches[i].start()
        end_pos = matches[i+1].start() if i + 1 < len(matches) else content.find('];', start_pos)
        block = content[start_pos:end_pos]
        
        has_de = False
        if "descriptionAdvanced" in block:
             if "de:" in block[block.find("descriptionAdvanced"):]:
                  de_match = re.search(r'de:\s*"([^"]*)"', block[block.find("descriptionAdvanced"):])
                  if de_match and de_match.group(1).strip() != "":
                       has_de = True
        
        if not has_de:
             print(f"MISSING_DE: {poi_id}")

