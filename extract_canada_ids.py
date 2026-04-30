import re
import os
import json

files = [
    "lib/visualLab/data/poiExtraCanadaCitiesV2.ts",
    "lib/visualLab/data/poiExtraCanadaHistoryV2.ts",
    "lib/visualLab/data/poiExtraCanadaEconomicV2.ts",
    "lib/visualLab/data/poiExtraCanadaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraCanadaLifeV2.ts",
    "lib/visualLab/data/poiExtraCanadaNatureV2.ts",
    "lib/visualLab/data/poiExtraCanadaRefill.ts"
]

data = []

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple regex to find blocks
    # This is not perfect but should work for this structure
    pois = re.findall(r'id:\s*"(.*?)".*?hu:\s*"(.*?)"', content, re.DOTALL)
    for poi_id, hu_name in pois:
        data.append({"id": poi_id, "name_hu": hu_name})

with open("canada_pois_to_process.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(data)} POIs")
