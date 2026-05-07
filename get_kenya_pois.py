import re
import json

files = [
    "lib/visualLab/data/poiExtraKenyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraKenyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraKenyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraKenyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraKenyaLifeV2.ts",
    "lib/visualLab/data/poiExtraKenyaNatureV2.ts",
    "lib/visualLab/data/poiExtraKenyaReliefV2.ts"
]

results = []

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        continue
        
    # extract pois
    # a POI typically starts with { and has an id
    poi_blocks = re.findall(r'(\{\s*id:\s*"([^"]+)"(.*?)\n\s*\})', content, re.DOTALL)
    
    for block, poi_id, inner in poi_blocks:
        if 'descriptionAdvanced' not in block or 'en:' not in block.split('descriptionAdvanced')[1].split('}')[0]:
            # Try to get English name
            name_match = re.search(r'name:\s*\{[^}]*en:\s*"([^"]+)"', block)
            name = name_match.group(1) if name_match else poi_id
            results.append({"id": poi_id, "name": name, "file": filepath})

print(json.dumps(results, indent=2))
