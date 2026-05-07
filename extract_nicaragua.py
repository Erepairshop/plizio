import re
import json

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

missing_pois = []

for filepath in files:
    with open(f"/mnt/c/Users/User/plizio-repo/{filepath}", "r", encoding="utf-8") as f:
        content = f.read()
        
    # Split by "id: " to get POI blocks. Sometimes it's id: "..."
    blocks = re.split(r'id:\s*"', content)
    for block in blocks[1:]:
        poi_id = block.split('"', 1)[0]
        
        # Check if descriptionAdvanced exists and has hu:
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]*)\}', block, re.DOTALL)
        if desc_adv_match:
            hu_match = re.search(r'hu:\s*"([^"]+)"', desc_adv_match.group(1))
            if hu_match and len(hu_match.group(1).strip()) > 10:
                continue # Has hu content
        else:
            # If descriptionAdvanced doesn't exist, we need to generate it.
            pass
            
        # Get name for context
        name_match = re.search(r'name:\s*\{([^\}]*)\}', block, re.DOTALL)
        name_hu = "Unknown"
        if name_match:
            hu_name_match = re.search(r'hu:\s*"([^"]+)"', name_match.group(1))
            if hu_name_match:
                name_hu = hu_name_match.group(1)
        
        missing_pois.append({"id": poi_id, "name": name_hu, "file": filepath})

with open("/mnt/c/Users/User/plizio-repo/nicaragua_missing.json", "w", encoding="utf-8") as f:
    json.dump(missing_pois, f, indent=2, ensure_ascii=False)

print(f"Total missing: {len(missing_pois)}")
