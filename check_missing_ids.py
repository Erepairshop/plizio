import json
import re
import os

ts_files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

all_ts_ids = set()
for f in ts_files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            ids = re.findall(r'id:\s*"(.*?)"', content)
            all_ts_ids.update(ids)

batch_files = [f"madagascar_batch_{i}.json" for i in range(1, 11)]
for bf in batch_files:
    if os.path.exists(bf):
        with open(bf, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for item in data:
                poi_id = item['id']
                if poi_id not in all_ts_ids:
                    print(f"ID {poi_id} from {bf} is MISSING from TS files")
