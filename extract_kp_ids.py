import re
import os

files = [
    "lib/visualLab/data/poiExtraNorthkoreaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaLifeV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaNatureV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaReliefV2.ts"
]

all_ids = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            blocks = content.split('id:')
            for i in range(1, len(blocks)):
                block = blocks[i]
                id_match = re.match(r'\s*[\'"]([a-zA-Z0-9-]+)[\'"]', block)
                if id_match:
                    poi_id = id_match.group(1)
                    if 'descriptionAdvanced' not in block:
                         all_ids.append((poi_id, file))
                    else:
                         desc_adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^\}]+)\}', block)
                         if desc_adv_match:
                             inner = desc_adv_match.group(1)
                             if 'de: ""' in inner or "de: ''" in inner or 'de:' not in inner:
                                 all_ids.append((poi_id, file))
                         else:
                             all_ids.append((poi_id, file))
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(f"Total missing: {len(all_ids)}")
for pid, pfile in all_ids:
    print(pid)
