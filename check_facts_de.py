import json
import os
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

missing_facts_de = []
for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            poi_blocks = re.split(r'id:\s*"', content)
            for block in poi_blocks[1:]:
                poi_id = block.split('"')[0]
                has_facts_de = False
                facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
                if facts_match:
                    facts_content = facts_match.group(1)
                    if 'de:' in facts_content and 'de: []' not in facts_content and 'de: [""]' not in facts_content:
                        has_facts_de = True
                
                if not has_facts_de:
                    missing_facts_de.append(poi_id)

print(f"Total POIs missing DE Facts: {len(missing_facts_de)}")
for mid in missing_facts_de:
    print(mid)
