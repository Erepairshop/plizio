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
            
        # extract objects
        # this is a basic regex to find id and name
        pois = re.finditer(r'\{\s*id:\s*"([^"]+)",[\s\S]*?name:\s*\{[^}]*en:\s*"([^"]+)"', content)
        for match in pois:
            poi_id = match.group(1)
            name = match.group(2)
            # check if it lacks descriptionAdvanced.en
            poi_block_match = re.search(r'id:\s*"' + re.escape(poi_id) + r'".*?(?:(?=\n\s*\{)|\];)', content, re.DOTALL)
            if poi_block_match:
                block = poi_block_match.group(0)
                if not re.search(r'descriptionAdvanced:\s*\{[^}]*en:', block):
                    missing_pois.append({"id": poi_id, "name": name, "file": filepath})
            else:
                missing_pois.append({"id": poi_id, "name": name, "file": filepath})
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

with open('missing_haiti.json', 'w', encoding='utf-8') as f:
    json.dump(missing_pois, f, indent=2, ensure_ascii=False)

print(f"Found {len(missing_pois)} POIs missing descriptionAdvanced.en")
