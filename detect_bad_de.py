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

# Simple check for Romanian-specific words or "word salad" markers like "faimos", "auriu", "magic"
bad_words = ["faimos", "auriu", "magic", "uluitor", "colosal", "mistic", "africane", "vizual"]

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
        
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^de:]*de:\s*"([^"]*)"', block, re.DOTALL)
        if desc_adv_match:
            text = desc_adv_match.group(1).lower()
            found = [w for w in bad_words if w in text]
            if len(found) > 2: # If more than 2 Romanian filler words are found in the DE text
                print(f"ID: {poi_id} - POSSIBLY WRONG LANG in de field ({', '.join(found)})")

