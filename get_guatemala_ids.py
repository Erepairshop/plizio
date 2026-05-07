import re
import glob
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

missing_ids = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Find all POI objects. This is a bit tricky with regex, 
            # so we'll just look for id: "...", and check if the block has descriptionAdvanced: { hu:
            pois = re.split(r'id:\s*"', content)[1:]
            for poi_part in pois:
                poi_id = poi_part.split('"', 1)[0]
                
                # We can do a simpler check. Let's just assume we want to process all IDs, 
                # but maybe check if 'descriptionAdvanced:' is nearby, or we just extract all IDs.
                # Let's extract all IDs and we'll just generate for them.
                missing_ids.append(poi_id)
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(json.dumps(missing_ids))
