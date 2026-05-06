
import re
import os

file_paths = [
    "lib/visualLab/data/poiExtraJamaicaCitiesV2.ts",
    "lib/visualLab/data/poiExtraJamaicaEconomicV2.ts",
    "lib/visualLab/data/poiExtraJamaicaHistoryV2.ts",
    "lib/visualLab/data/poiExtraJamaicaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraJamaicaLifeV2.ts",
    "lib/visualLab/data/poiExtraJamaicaNatureV2.ts",
    "lib/visualLab/data/poiExtraJamaicaReliefV2.ts"
]

poi_id_pattern = re.compile(r'id:\s*"(.*?)"')

def find_pois_to_process(file_path):
    ids_to_process = []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    poi_blocks = content.split('id: ')
    
    for i, block in enumerate(poi_blocks):
        if i == 0:
            continue

        id_match = re.search(r'"(.*?)"', block)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)

        if 'descriptionAdvanced' in block:
            desc_adv_start = block.find('descriptionAdvanced')
            
            brace_start = block.find('{', desc_adv_start)
            if brace_start == -1:
                continue

            brace_count = 1
            brace_end = -1
            for j in range(brace_start + 1, len(block)):
                if block[j] == '{':
                    brace_count += 1
                elif block[j] == '}':
                    brace_count -= 1
                
                if brace_count == 0:
                    brace_end = j
                    break
            
            if brace_end != -1:
                desc_adv_content = block[brace_start:brace_end]
                if 'ro:' not in desc_adv_content:
                    ids_to_process.append(poi_id)
            else:
                 ids_to_process.append(poi_id)

        else:
            ids_to_process.append(poi_id)
            
    return ids_to_process

all_ids = []
for file in file_paths:
    if os.path.exists(file):
        all_ids.extend(find_pois_to_process(file))

completed_pois = ["jm-spanish-town-cities-v2", "jm-portmore-cities-v2"]
all_ids_to_process = [poi_id for poi_id in all_ids if poi_id not in completed_pois]


for poi_id in all_ids_to_process:
    print(poi_id)

print(f"Total POIs to process: {len(all_ids_to_process)}")
