import re
import json
import os

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

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # find all poi objects
        # We look for id: "..."
        ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        for poi_id in ids:
            # find the block for this id
            # match from id: "poi_id" to either next id: or end of file
            block_match = re.search(rf'id:\s*["\']{re.escape(poi_id)}["\'].*?(?=(?:id:\s*["\'])|$)', content, re.DOTALL)
            if block_match:
                block = block_match.group(0)
                if 'descriptionAdvanced:' not in block or 'factsAdvanced:' not in block:
                    if poi_id not in pois:
                        pois.append(poi_id)
                else:
                    # extract the descriptionAdvanced block
                    da_match = re.search(r'descriptionAdvanced:\s*{([^}]*)}', block, re.DOTALL)
                    if da_match:
                        da_block = da_match.group(1)
                        hu_match = re.search(r'hu:\s*["\']([^"\']*)["\']', da_block)
                        if not hu_match or hu_match.group(1).strip() == "":
                            if poi_id not in pois:
                                pois.append(poi_id)
                    else:
                        if poi_id not in pois:
                            pois.append(poi_id)

print(f"Total POIs missing hu SEO: {len(pois)}")
# Save all to JSON
with open('libya_pois_to_process.json', 'w') as f:
    json.dump(pois, f, indent=2)
