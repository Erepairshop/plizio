import re
import os

files = [
    "poiExtraBelizeCitiesV2.ts",
    "poiExtraBelizeHistoryV2.ts",
    "poiExtraBelizeNatureV2.ts",
    "poiExtraBelizeLandmarksV2.ts",
    "poiExtraBelizeEconomicV2.ts",
    "poiExtraBelizeReliefV2.ts"
]

base_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/"

results = []

for file_name in files:
    file_path = os.path.join(base_path, file_name)
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.split(r'  \{', content)
    for poi in pois:
        id_match = re.search(r'id:\s*"(.*?)"', poi)
        if id_match:
            poi_id = id_match.group(1)
            
            # Check for descriptionAdvanced.de
            needs_update = False
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{', poi)
            if desc_adv_match:
                start_index = desc_adv_match.end()
                de_match = re.search(r'de:\s*"(.*?)"', poi[start_index:])
                if de_match:
                    de_content = de_match.group(1)
                    if not de_content:
                        needs_update = True
                else:
                    needs_update = True
            else:
                needs_update = True
            
            if needs_update:
                name_match = re.search(r'name:\s*\{[^}]*?de:\s*"(.*?)"', poi, re.DOTALL)
                desc_match = re.search(r'description:\s*\{[^}]*?de:\s*"(.*?)"', poi, re.DOTALL)
                
                name_de = name_match.group(1) if name_match else ""
                desc_de = desc_match.group(1) if desc_match else ""
                
                results.append({
                    "file": file_name,
                    "id": poi_id,
                    "name": name_de,
                    "description": desc_de
                })

for res in results:
    print(f"{res['file']}|{res['id']}|{res['name']}|{res['description']}")
