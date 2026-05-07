import re
import json

files = [
    "lib/visualLab/data/poiExtraNigerCitiesV2.ts",
    "lib/visualLab/data/poiExtraNigerEconomicV2.ts",
    "lib/visualLab/data/poiExtraNigerHistoryV2.ts",
    "lib/visualLab/data/poiExtraNigerLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNigerLifeV2.ts",
    "lib/visualLab/data/poiExtraNigerNatureV2.ts",
    "lib/visualLab/data/poiExtraNigerReliefV2.ts"
]

missing_pois = []
all_pois = []

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find all POI objects: from { id: "..." to next { id: "..." or ];
    poi_blocks = re.finditer(r'\{\s*id\s*:\s*"([^"]+)"(.*?)(?=\s*\{\s*id\s*:|\s*\];)', content, re.DOTALL)
    for match in poi_blocks:
        poi_id = match.group(1)
        block_content = match.group(2)
        all_pois.append(poi_id)
        
        # Check if descriptionAdvanced exists and has a non-empty 'hu' field.
        # Actually, let's just check if "hu:" or "hu :" is inside descriptionAdvanced
        adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^\}]+)\}', block_content)
        has_hu_adv = False
        if adv_match:
            adv_block = adv_match.group(1)
            hu_match = re.search(r'hu\s*:\s*"([^"]+)"', adv_block)
            if hu_match and len(hu_match.group(1).strip()) > 5:
                has_hu_adv = True
        
        if not has_hu_adv:
            missing_pois.append(poi_id)

print(f"Total POIs: {len(all_pois)}")
print(f"Missing descriptionAdvanced.hu: {len(missing_pois)}")

with open('missing_niger_hu.json', 'w', encoding='utf-8') as f:
    json.dump(missing_pois, f)
