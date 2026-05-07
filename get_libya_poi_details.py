import re
import json
import os

files = [
  "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
  "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
  "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
  "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
  "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
  "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
  "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
]

with open('libya_pois_to_process.json', 'r') as f:
    target_ids = json.load(f)

poi_details = []

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for poi_id in target_ids:
            block_match = re.search(rf'id:\s*["\']{re.escape(poi_id)}["\'].*?(?=(?:id:\s*["\'])|$)', content, re.DOTALL)
            if block_match:
                block = block_match.group(0)
                # extract name.en or name.hu
                name_match = re.search(r'name:\s*{[^}]*en:\s*["\']([^"\']+)["\']', block)
                name = name_match.group(1) if name_match else "Unknown"
                # extract basic description to give context
                desc_match = re.search(r'description:\s*{[^}]*en:\s*["\']([^"\']+)["\']', block)
                desc = desc_match.group(1) if desc_match else ""
                
                # prevent duplicates if a poi is matched multiple times across files (shouldn't happen)
                if not any(p['id'] == poi_id for p in poi_details):
                    poi_details.append({"id": poi_id, "name": name, "desc": desc})

print(f"Extracted details for {len(poi_details)} POIs.")
with open('libya_poi_details.json', 'w', encoding='utf-8') as f:
    json.dump(poi_details, f, indent=2)
