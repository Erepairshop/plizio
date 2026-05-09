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
    pattern = r'id:\s*"' + re.escape(poi_id) + r'".*?(?=id:\s*"|\];)'
    match = re.search(pattern, all_content, re.DOTALL)
    if match:
        block = match.group(0)
        # Check factsAdvanced
        if "factsAdvanced" not in block:
             print(f"ID {poi_id} MISSING factsAdvanced")
        else:
             facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
             if facts_match:
                 facts_body = facts_match.group(1)
                 if 'de:' not in facts_body:
                     print(f"ID {poi_id} MISSING de in factsAdvanced")
                 else:
                     de_facts_match = re.search(r'de:\s*\[(.*?)\]', facts_body, re.DOTALL)
                     if de_facts_match:
                         facts_list = re.findall(r'".*?"', de_facts_match.group(1))
                         if len(facts_list) == 0:
                             print(f"ID {poi_id} EMPTY de in factsAdvanced")
                     else:
                         print(f"ID {poi_id} COULD NOT PARSE de in factsAdvanced")
    else:
        # print(f"ID {poi_id} NOT FOUND in TS files")
        pass
