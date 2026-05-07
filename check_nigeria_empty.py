import re
import glob
import os

files = [
    "lib/visualLab/data/poiExtraNigeriaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNigeriaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNigeriaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLifeV2.ts",
    "lib/visualLab/data/poiExtraNigeriaNatureV2.ts",
    "lib/visualLab/data/poiExtraNigeriaReliefV2.ts"
]

missing_count = 0
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.findall(r'\{\s*id:\s*"([^"]+)",(.*?)(?=\}\s*,\s*\{\s*id|\}\s*\])', content, re.DOTALL)
    for b in blocks:
        poi_id = b[0]
        poi_body = b[1]
        
        # Check if descriptionAdvanced has de:
        if 'descriptionAdvanced: {' not in poi_body or 'de: "' not in poi_body.split('descriptionAdvanced: {')[1].split('}')[0]:
            missing_count += 1
            print(f"Missing de in: {poi_id}")

print(f"Total missing: {missing_count}")
