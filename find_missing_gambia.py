import os
import re

files = [
    "lib/visualLab/data/poiExtraGambiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGambiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGambiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGambiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGambiaLifeV2.ts",
    "lib/visualLab/data/poiExtraGambiaNatureV2.ts",
    "lib/visualLab/data/poiExtraGambiaReliefV2.ts"
]

missing = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find all POI objects (roughly)
        pois = re.findall(r'id:\s*"([^"]+)"(.*?)\},', content, re.DOTALL)
        for poi_id, body in pois:
            # Check if descriptionAdvanced: { de: "..." } exists and is not empty
            has_de = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*"([^"]+)"', body)
            if not has_de:
                missing.append((file_path, poi_id))
            elif has_de.group(1).startswith("Ez egy leírás"): # Common placeholder
                missing.append((file_path, poi_id))

for f, i in missing:
    print(f"{f}: {i}")
