import os
import re

files = [
    "lib/visualLab/data/poiExtraDrcongoCitiesV2.ts",
    "lib/visualLab/data/poiExtraDrcongoEconomicV2.ts",
    "lib/visualLab/data/poiExtraDrcongoHistoryV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLandmarksV2.ts",
    "lib/visualLab/data/poiExtraDrcongoLifeV2.ts",
    "lib/visualLab/data/poiExtraDrcongoNatureV2.ts",
    "lib/visualLab/data/poiExtraDrcongoReliefV2.ts"
]

placeholder = "is a remarkable feature of the geography and culture of the Democratic Republic of the Congo"

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    for i in range(len(matches)):
        poi_id = matches[i].group(1)
        start_pos = matches[i].start()
        end_pos = matches[i+1].start() if i+1 < len(matches) else len(content)
        poi_block = content[start_pos:end_pos]
        
        needs_update = False
        reason = ""
        
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{', poi_block)
        if not desc_adv_match:
            needs_update = True
            reason = "MISSING_DESC_ADV"
        else:
            desc_adv_content_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', poi_block, re.DOTALL)
            if desc_adv_content_match:
                desc_adv_inner = desc_adv_content_match.group(1)
                en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_inner)
                if not en_match:
                    en_match = re.search(r"en:\s*'([^']*)'", desc_adv_inner)
                
                if not en_match:
                    needs_update = True
                    reason = "MISSING_EN"
                else:
                    en_text = en_match.group(1)
                    if len(en_text) < 150: # Arbitrary threshold for "too short"
                        needs_update = True
                        reason = "TOO_SHORT"
                    elif placeholder in en_text:
                        needs_update = True
                        reason = "PLACEHOLDER"
            else:
                needs_update = True
                reason = "PARSE_ERROR"
        
        if needs_update:
            print(f"{file_path}|{poi_id}|{reason}")
