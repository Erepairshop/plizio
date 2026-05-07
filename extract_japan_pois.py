import re
import json

files = [
    "lib/visualLab/data/poiExtraJapanCitiesV2.ts",
    "lib/visualLab/data/poiExtraJapanEconomicV2.ts",
    "lib/visualLab/data/poiExtraJapanHistoryV2.ts",
    "lib/visualLab/data/poiExtraJapanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraJapanLifeV2.ts",
    "lib/visualLab/data/poiExtraJapanNatureV2.ts",
    "lib/visualLab/data/poiExtraJapanReliefV2.ts"
]

pois = []

for filepath in files:
    try:
        with open(f"/mnt/c/Users/User/plizio-repo/{filepath}", "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        continue
        
    # extract POI blocks
    blocks = re.finditer(r'\{\s*id:\s*"([^"]+)",(.*?)\n\s*\}', content, re.DOTALL)
    for match in blocks:
        poi_id = match.group(1)
        block = match.group(2)
        
        # Check if descriptionAdvanced ro exists and is not empty
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', block)
        has_ro_desc = False
        if desc_adv_match:
            ro_match = re.search(r'ro:\s*"([^"]+)"', desc_adv_match.group(1))
            if ro_match and ro_match.group(1).strip() != "":
                has_ro_desc = True
                
        if not has_ro_desc:
            name_en = ""
            name_match = re.search(r'name:\s*\{([^\}]+)\}', block)
            if name_match:
                en_m = re.search(r'en:\s*"([^"]+)"', name_match.group(1))
                if en_m:
                    name_en = en_m.group(1)
            pois.append({
                "id": poi_id,
                "file": filepath,
                "name": name_en
            })

with open("japan_missing_ro.json", "w", encoding="utf-8") as f:
    json.dump(pois, f, indent=2)

print(f"Found {len(pois)} POIs missing Romanian descriptionAdvanced.")
