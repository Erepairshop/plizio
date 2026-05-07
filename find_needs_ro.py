import re
import json

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

needs_update = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.split(r'\{\s*id:\s*"(.*?)"', content)
    
    for i in range(1, len(pois), 2):
        poi_id = pois[i]
        poi_body = pois[i+1]
        
        needs = False
        
        # Extract descriptionAdvanced block
        adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi_body, re.DOTALL)
        if adv_match:
            adv_block = adv_match.group(1)
            # Find ro: content
            ro_match = re.search(r'\bro\s*:\s*(["`\'])(.*?)(?<!\\)\1', adv_block, re.DOTALL)
            if ro_match:
                ro_text = ro_match.group(2)
                # Check for gibberish
                gibberish_phrases = ["așezat pe faimos", "faimos la onoare", "This location is a key geographic", "așezare așezat"]
                # Also check if it's too short or just a template
                if any(phrase in ro_text for phrase in gibberish_phrases):
                    needs = True
                
                # Check if it has more than 3 occurrences of 'așezat' (often a sign of gibberish bot)
                if ro_text.count("așezat") > 3 or ro_text.count("faimos") > 3:
                    needs = True
            else:
                needs = True
        else:
            needs = True
            
        if needs:
            needs_update.append(poi_id)

with open('needs_ro_usa.json', 'w') as f:
    json.dump(needs_update, f, indent=2)

print(f"Total needs update: {len(needs_update)}")
