import re
import json

files = [
    "lib/visualLab/data/poiExtraNigerCitiesV2.ts",
    "lib/visualLab/data/poiExtraNigerEconomicV2.ts",
    "lib/visualLab/data/poiExtraNigerHistoryV2.ts",
    "lib/visualLab/data/poiExtraNigerLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNigerLifeV2.ts",
    "lib/visualLab/data/poiExtraNigerNatureV2.ts",
    "lib/visualLab/data/poiExtraNigerReliefV2.ts"
]

pois = []
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find all POI objects (simplistic regex for id and name)
            # This extracts block by block roughly
            blocks = re.split(r'id:\s*["\']', content)[1:]
            for block in blocks:
                id_match = re.match(r'^([^"\']+)', block)
                if id_match:
                    poi_id = id_match.group(1)
                    
                    # check if descriptionAdvanced ro exists
                    ro_adv_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*ro:\s*["\']([^"\']+)["\']', block)
                    if not ro_adv_match:
                        # try to get name
                        name_match = re.search(r'name:\s*\{[^\}]*en:\s*["\']([^"\']+)["\']', block)
                        name = name_match.group(1) if name_match else poi_id
                        
                        pois.append({
                            "id": poi_id,
                            "name": name,
                            "file": file
                        })
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(json.dumps(pois, indent=2))
