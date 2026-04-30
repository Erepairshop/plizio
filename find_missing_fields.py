import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBelizeLifeV2.ts"
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count POI objects (starting with {)
    # This is rough because of nested objects, but usually POIs are the top level { inside the array
    # Let's count 'id:' occurences
    poi_count = len(re.findall(r'id:\s*["\']', content))
    desc_adv_count = len(re.findall(r'descriptionAdvanced:\s*{', content))
    facts_adv_count = len(re.findall(r'factsAdvanced:\s*{', content))
    
    print(f"{file_path}: {poi_count} POIs, {desc_adv_count} descAdv, {facts_adv_count} factsAdv")

