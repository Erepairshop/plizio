import json
import os
import glob
import re

# All Nicaragua POI files
files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

all_poi_ids = []
for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            ids = re.findall(r'id:\s*"(.*?)"', content)
            all_poi_ids.extend(ids)

# POIs already in DE batches
batched_ids = set()
batch_files = glob.glob("/mnt/c/Users/User/plizio_orch/seo_outputs/seo_nicaragua_de_batch*.json")
for bf in batch_files:
    with open(bf, 'r', encoding='utf-8') as f:
        data = json.load(f)
        for item in data.get('items', []):
            batched_ids.add(item['id'])

missing_ids = [pid for pid in all_poi_ids if pid not in batched_ids]

print(f"Total POIs in files: {len(all_poi_ids)}")
print(f"POIs in DE batches: {len(batched_ids)}")
print(f"Missing POIs: {len(missing_ids)}")
for mid in missing_ids:
    print(mid)
