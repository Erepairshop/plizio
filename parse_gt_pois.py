import re
import json

files = [
    "lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaReliefV2.ts"
]

pois = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Find POI blocks
        # This is a simple regex that finds id: "..." and the name object to give us context
        matches = re.finditer(r'id:\s*"([^"]+)",\s*(?:type:\s*"[^"]+",\s*)?(?:parent:\s*"[^"]+",\s*)?(?:coords:\s*\[[^\]]+\],\s*)?name:\s*{([^}]+)}', content)
        for m in matches:
            poi_id = m.group(1)
            name_block = m.group(2)
            
            # extract en name for context
            en_name_match = re.search(r'en:\s*"([^"]+)"', name_block)
            en_name = en_name_match.group(1) if en_name_match else poi_id
            
            pois.append({
                "id": poi_id,
                "name": en_name,
                "file": file
            })
    except Exception as e:
        print(f"Error reading {file}: {e}")

with open("gt_pois.json", "w", encoding='utf-8') as f:
    json.dump(pois, f, indent=2, ensure_ascii=False)

print(f"Found {len(pois)} POIs")
