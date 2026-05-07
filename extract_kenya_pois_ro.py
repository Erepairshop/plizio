import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraKenyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraKenyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraKenyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraKenyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraKenyaLifeV2.ts",
    "lib/visualLab/data/poiExtraKenyaNatureV2.ts",
    "lib/visualLab/data/poiExtraKenyaReliefV2.ts"
]

pois = []

for file_path in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", file_path)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        continue
    
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple extraction of blocks. This might be brittle but let's try.
    # We look for blocks starting with id: "..."
    # A better approach: Find all 'id: "something"' and 'name: { en: "something", ... }'
    
    # Regex to find id and name.en
    # Let's try splitting by 'id:'
    blocks = content.split('id:')[1:]
    for block in blocks:
        id_match = re.search(r'^\s*"([^"]+)"', block)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        name_match = re.search(r'name:\s*\{[^\}]*en:\s*"([^"]+)"', block)
        name_en = name_match.group(1) if name_match else "Unknown"
        
        # Check if descriptionAdvanced exists and has ro
        has_desc_adv_ro = bool(re.search(r'descriptionAdvanced:\s*\{[^\}]*ro:\s*"(?:[^"\\]|\\.)+"', block))
        
        if not has_desc_adv_ro:
            pois.append({
                "id": poi_id,
                "name": name_en,
                "file": file_path
            })

print(f"Found {len(pois)} POIs needing 'ro' SEO update.")
with open("kenya_pois_ro.json", "w", encoding="utf-8") as f:
    json.dump(pois, f, indent=2)
