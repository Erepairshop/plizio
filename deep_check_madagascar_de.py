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
    missing_ro = json.load(f)

for item in missing_ro:
    poi_id = item['id']
    # Find the POI block in all_content
    # id: "poi_id" ... }
    pattern = r'id:\s*"' + re.escape(poi_id) + r'".*?\}'
    match = re.search(pattern, all_content, re.DOTALL)
    if match:
        block = match.group(0)
        if "descriptionAdvanced" not in block:
            print(f"ID {poi_id} MISSING descriptionAdvanced")
        elif 'de:' not in re.search(r'descriptionAdvanced:\s*\{(.*?)\}', block, re.DOTALL).group(1):
            print(f"ID {poi_id} MISSING de in descriptionAdvanced")
        elif re.search(r'de:\s*""', block) or re.search(r'de:\s*\'\'', block):
            print(f"ID {poi_id} EMPTY de in descriptionAdvanced")
    else:
        print(f"ID {poi_id} NOT FOUND in TS files")
