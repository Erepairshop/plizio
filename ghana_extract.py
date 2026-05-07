import re
import json

files = [
    "lib/visualLab/data/poiExtraGhanaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGhanaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGhanaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGhanaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGhanaLifeV2.ts",
    "lib/visualLab/data/poiExtraGhanaNatureV2.ts",
    "lib/visualLab/data/poiExtraGhanaReliefV2.ts"
]

pois = []
for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
        
        # Split by id:
        parts = content.split('id: "')
        for part in parts[1:]:
            id_val = part.split('"', 1)[0]
            
            # Find name
            name_en = ""
            name_match = re.search(r'name:\s*\{[^\}]*en:\s*"([^"]+)"', part)
            if name_match:
                name_en = name_match.group(1)
            else:
                name_match = re.search(r'name:\s*\{[^\}]*hu:\s*"([^"]+)"', part)
                if name_match:
                    name_en = name_match.group(1)
            
            pois.append({
                "id": id_val,
                "name": name_en
            })

with open("ghana_pois_extract.json", "w", encoding="utf-8") as out:
    json.dump(pois, out, indent=2)
