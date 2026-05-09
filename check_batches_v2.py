import json
import os
import glob
import re

# All Nicaragua POI files
files = [
    "lib/visualLab/data/nicaraguaPoi.ts",
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
            # Find IDs that are NOT the main country/region if possible, 
            # or just all IDs and we'll filter them.
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

# Filter out IDs that already have DE descriptionAdvanced in the files
missing_ids = []
for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find each POI block
            poi_blocks = re.split(r'id:\s*"', content)
            for block in poi_blocks[1:]:
                poi_id = block.split('"')[0]
                # Check if descriptionAdvanced.de is missing or empty
                # We look for descriptionAdvanced: { ... de: "..." ... }
                has_de = False
                desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
                if desc_match:
                    desc_content = desc_match.group(1)
                    if 'de:' in desc_content and 'de: ""' not in desc_content:
                        has_de = True
                
                if not has_de:
                    missing_ids.append(poi_id)

print(f"Total POIs missing DE SEO: {len(missing_ids)}")
for mid in missing_ids:
    print(mid)
