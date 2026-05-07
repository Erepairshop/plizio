import re
import os

files = [
    "lib/visualLab/data/poiExtraSouthsudanCitiesV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanEconomicV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanHistoryV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanLifeV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanNatureV2.ts",
    "lib/visualLab/data/poiExtraSouthsudanReliefV2.ts"
]

missing_en = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple split by POI object start
    pois = content.split('{')
    current_id = None
    for p in pois:
        id_match = re.search(r'id:\s*"(.*?)"', p)
        if id_match:
            current_id = id_match.group(1)
            # Check if descriptionAdvanced exists and has en
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{', p)
            if desc_adv_match:
                # Find the closing } of descriptionAdvanced
                # This is tricky with regex, but let's look for en: "..." inside
                en_match = re.search(r'en:\s*"[^"]+"', p) # Simplified
                if not en_match or 'en: ""' in p or 'en: ""' in p:
                     missing_en.append(current_id)
            else:
                missing_en.append(current_id)

for mid in missing_en:
    print(mid)
