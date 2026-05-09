import re
import os

files = [
    "lib/visualLab/data/poiExtraElsalvadorCitiesV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorEconomicV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorHistoryV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorLandmarksV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorLifeV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorNatureV2.ts",
    "lib/visualLab/data/poiExtraElsalvadorReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and check for de: "" or missing de:
    # This is a bit rough but should help identify empty ones
    pois = re.findall(r'id:\s*"([^"]+)"(.*?)\}', content, re.DOTALL)
    for poi_id, body in pois:
        if "descriptionAdvanced" in body:
            # check for de: inside descriptionAdvanced
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', body, re.DOTALL)
            if desc_adv_match:
                desc_body = desc_adv_match.group(1)
                if 'de:' not in desc_body or 'de: ""' in desc_body or "de: ''" in desc_body:
                    print(f"MISSING/EMPTY de in descriptionAdvanced for {poi_id} in {file_path}")
        else:
             print(f"MISSING descriptionAdvanced for {poi_id} in {file_path}")
