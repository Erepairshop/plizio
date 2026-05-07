import json
import os
import re

files = [
    "lib/visualLab/data/poiExtraTunisiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraTunisiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraTunisiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraTunisiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraTunisiaLifeV2.ts",
    "lib/visualLab/data/poiExtraTunisiaNatureV2.ts",
    "lib/visualLab/data/poiExtraTunisiaReliefV2.ts"
]

for f_path in files:
    if not os.path.exists(f_path):
        print(f"File not found: {f_path}")
        continue
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Look for POI objects
        # Simplified parser to find IDs and check for descriptionAdvanced
        pois = re.findall(r'\{.*?id: "(.*?)".*?\}', content, re.DOTALL)
        for poi in pois:
            if 'descriptionAdvanced' not in poi:
                print(f"{f_path}: POI {poi} missing descriptionAdvanced")
