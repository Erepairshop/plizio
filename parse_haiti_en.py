import re
import json

files = [
    "lib/visualLab/data/poiExtraHaitiCitiesV2.ts",
    "lib/visualLab/data/poiExtraHaitiEconomicV2.ts",
    "lib/visualLab/data/poiExtraHaitiHistoryV2.ts",
    "lib/visualLab/data/poiExtraHaitiLandmarksV2.ts",
    "lib/visualLab/data/poiExtraHaitiLifeV2.ts",
    "lib/visualLab/data/poiExtraHaitiNatureV2.ts",
    "lib/visualLab/data/poiExtraHaitiReliefV2.ts"
]

missing_pois = []

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # extract objects based on id:
        pois = re.finditer(r'\{\s*id:\s*"([^"]+)",(.*?)(?=\n\s*\{\s*id:|\n\];)', content, re.DOTALL)
        for match in pois:
            poi_id = match.group(1)
            block = match.group(2)
            name_match = re.search(r'name:\s*\{[^}]*en:\s*"([^"]+)"', block)
            name = name_match.group(1) if name_match else poi_id
            
            # check if descriptionAdvanced exists and has en:
            da_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', block)
            if da_match:
                if not re.search(r'en:\s*"', da_match.group(1)):
                    missing_pois.append({"id": poi_id, "name": name, "file": filepath})
            else:
                missing_pois.append({"id": poi_id, "name": name, "file": filepath})
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

with open('missing_haiti.json', 'w', encoding='utf-8') as f:
    json.dump(missing_pois, f, indent=2, ensure_ascii=False)

print(f"Found {len(missing_pois)} POIs missing descriptionAdvanced.en")
