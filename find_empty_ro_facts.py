import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBelizeLifeV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        pois = re.split(r'id:\s*', content)[1:]
        for poi_part in pois:
            poi_id_match = re.match(r'"([^"]+)"', poi_part)
            if not poi_id_match: continue
            poi_id = poi_id_match.group(1)
            
            # Find factsAdvanced block
            facts_adv_match = re.search(r'factsAdvanced:\s*\{', poi_part)
            if facts_adv_match:
                start = facts_adv_match.end()
                bracket_count = 1
                end = start
                while bracket_count > 0 and end < len(poi_part):
                    if poi_part[end] == '{': bracket_count += 1
                    elif poi_part[end] == '}': bracket_count -= 1
                    end += 1
                
                facts_adv_content = poi_part[start:end-1]
                # Check for ro: [] or missing ro
                if 'ro: []' in facts_adv_content or 'ro:' not in facts_adv_content:
                     print(f"{file_path}:{poi_id}")
            else:
                print(f"{file_path}:{poi_id}:NO_FACTS_ADV")

