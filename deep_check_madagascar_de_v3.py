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

all_content = ""
for f in ts_files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            all_content += file.read() + "\n"

with open('madagascar_missing_ro.json', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    if "Total POIs missing" in lines[-1]:
        lines = lines[:-1]
    json_str = "".join(lines)
    missing_ro = json.loads(json_str)

for item in missing_ro:
    poi_id = item['id']
    # Look for the block starting with id: "poi_id" and ending with the start of the next id: or the end of the array
    pattern = r'id:\s*"' + re.escape(poi_id) + r'".*?(?=id:\s*"|\];)'
    match = re.search(pattern, all_content, re.DOTALL)
    if match:
        block = match.group(0)
        if "descriptionAdvanced" not in block:
             print(f"ID {poi_id} MISSING descriptionAdvanced")
        else:
             desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
             if desc_match:
                 desc_body = desc_match.group(1)
                 if 'de:' not in desc_body:
                     print(f"ID {poi_id} MISSING de in descriptionAdvanced")
                 else:
                     de_text_match = re.search(r'de:\s*"(.*?)"', desc_body, re.DOTALL)
                     if de_text_match:
                         if not de_text_match.group(1).strip():
                             print(f"ID {poi_id} EMPTY de in descriptionAdvanced")
                     else:
                         # Try single quotes
                         de_text_match = re.search(r"de:\s*'(.*?)'", desc_body, re.DOTALL)
                         if de_text_match:
                             if not de_text_match.group(1).strip():
                                 print(f"ID {poi_id} EMPTY de in descriptionAdvanced")
                         else:
                             print(f"ID {poi_id} COULD NOT PARSE de in descriptionAdvanced")
             else:
                 print(f"ID {poi_id} COULD NOT PARSE descriptionAdvanced block")
    else:
        # print(f"ID {poi_id} NOT FOUND in TS files")
        pass
