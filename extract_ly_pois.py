import re
import json

files = [
    "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
    "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
    "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
]

pois = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Simple heuristic: split by 'id: "'
            parts = content.split('id: "')
            for part in parts[1:]:
                id_val = part.split('"', 1)[0]
                
                # Extract name (English or any)
                name_match = re.search(r'name:\s*\{[^\}]*en:\s*"([^"]+)"', part)
                name = name_match.group(1) if name_match else id_val
                
                pois.append({"id": id_val, "name": name, "file": file})
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(json.dumps(pois, indent=2))
