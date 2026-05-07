import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

results = []

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    parts = content.split('id: "')
    for i in range(1, len(parts)):
        part = parts[i]
        poi_id = part.split('"', 1)[0]
        
        # find name.en
        name_match = re.search(r'name:\s*\{[^}]*en:\s*"([^"]+)"', part)
        name = name_match.group(1) if name_match else poi_id
        
        # Check for descriptionAdvanced.en
        has_en_desc_adv = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^{}]+)\}', part)
        if desc_adv_match:
            if re.search(r'en:\s*"[^"]+"', desc_adv_match.group(1)):
                has_en_desc_adv = True
        
        if not has_en_desc_adv:
            results.append({"id": poi_id, "name": name})

with open("usa_pois_missing_en.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Found {len(results)} POIs missing descriptionAdvanced.en")
