import os
import re
import json

files = [
    "lib/visualLab/data/poiExtraMalaysiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaLifeV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaNatureV2.ts",
    "lib/visualLab/data/poiExtraMalaysiaReliefV2.ts"
]

all_pois = []

for filepath in files:
    full_path = os.path.join("/mnt/c/Users/User/plizio-repo", filepath)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    blocks = content.split('id: "')
    for block in blocks[1:]:
        poi_id = block.split('"', 1)[0]
        
        ro_name = poi_id
        name_match = re.search(r'name:\s*\{([^}]+)\}', block)
        if name_match:
            ro_name_match = re.search(r'ro:\s*["\']([^"\']+)["\']', name_match.group(1))
            if ro_name_match:
                ro_name = ro_name_match.group(1)
            else:
                en_name_match = re.search(r'en:\s*["\']([^"\']+)["\']', name_match.group(1))
                if en_name_match:
                    ro_name = en_name_match.group(1)

        needs_ro = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            # check if ro is missing or empty string
            ro_content_match = re.search(r'ro:\s*(["\'])(.*?)\1', desc_adv_content, re.DOTALL)
            if not ro_content_match or not ro_content_match.group(2).strip():
                needs_ro = True
        else:
            needs_ro = True
            
        if needs_ro:
            all_pois.append({"id": poi_id, "name": ro_name, "file": filepath})

with open("/mnt/c/Users/User/plizio-repo/malaysia_missing_ro.json", "w", encoding="utf-8") as f:
    json.dump(all_pois, f, indent=2, ensure_ascii=False)
print(f"Found {len(all_pois)} POIs")
