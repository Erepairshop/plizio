import re
import json

files = [
    "lib/visualLab/data/poiExtraNigeriaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNigeriaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNigeriaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLifeV2.ts",
    "lib/visualLab/data/poiExtraNigeriaNatureV2.ts",
    "lib/visualLab/data/poiExtraNigeriaReliefV2.ts"
]

missing_ids = []

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.split(r'\n\s*id:\s*"([^"]+)",', content)
    
    for i in range(1, len(blocks), 2):
        poi_id = blocks[i]
        poi_content = blocks[i+1]
        
        has_ro_content = False
        
        # Look for descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', poi_content)
        if desc_adv_match:
            inner_text = desc_adv_match.group(1)
            # check if ro: "something" where something is not just whitespace or empty
            # handle single or double quotes
            ro_match = re.search(r'ro\s*:\s*(["\'])(.*?)\1', inner_text, re.DOTALL)
            if ro_match and ro_match.group(2).strip() != "":
                has_ro_content = True
                
        if not has_ro_content:
            missing_ids.append(poi_id)

with open('missing_ng_ids.json', 'w', encoding='utf-8') as f:
    json.dump(missing_ids, f, indent=2)

print(f"Total missing: {len(missing_ids)}")
