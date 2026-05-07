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

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find blocks
    blocks = re.findall(r'\{\s*id:\s*"([^"]+)",\s*type:\s*"[^"]+",\s*parent:\s*"[^"]+",\s*coords:\s*\[[^\]]+\],\s*name:\s*\{\s*de:\s*"([^"]+)"', content, re.DOTALL)
    for b in blocks:
        poi_id = b[0]
        name_de = b[1]
        print(f"{poi_id} | {name_de}")

