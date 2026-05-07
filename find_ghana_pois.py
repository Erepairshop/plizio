import re
import sys
import json
import os

target_files = [
    "lib/visualLab/data/poiExtraGhanaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGhanaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGhanaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGhanaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGhanaLifeV2.ts",
    "lib/visualLab/data/poiExtraGhanaNatureV2.ts",
    "lib/visualLab/data/poiExtraGhanaReliefV2.ts"
]

results = []

for file_path in target_files:
    full_path = file_path
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}", file=sys.stderr)
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Simple object splitting by "id:"
    parts = content.split("id: ")
    for part in parts[1:]:
        # extract id
        id_match = re.match(r'["\']([^"\']+)["\']', part)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Check if descriptionAdvanced exists and has "de:"
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', part)
        has_de_desc = False
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            if re.search(r'\bde:\s*["\']', desc_adv_content):
                has_de_desc = True
                
        if not has_de_desc:
            # try to extract english name for context
            name_en = ""
            name_match = re.search(r'name:\s*\{[^\}]*en:\s*["\']([^"\']+)["\']', part)
            if name_match:
                name_en = name_match.group(1)
            
            results.append({"id": poi_id, "name": name_en, "file": file_path})

print(json.dumps(results, indent=2))
