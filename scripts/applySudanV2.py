# -*- coding: utf-8 -*-
"""Apply 4-language descriptionAdvanced replacements into poiExtraSudanCitiesV2.ts."""
import re, sys, os
sys.path.insert(0, os.path.dirname(__file__))

from fillSudanV2_data import POI_DATA
from fillSudanV2_data2 import POI_DATA_2
from fillSudanV2_data3 import POI_DATA_3
from fillSudanV2_data4 import POI_DATA_4
from fillSudanV2_data5 import POI_DATA_5
from fillSudanV2_data6 import POI_DATA_6

ALL = {}
for d in (POI_DATA, POI_DATA_2, POI_DATA_3, POI_DATA_4, POI_DATA_5, POI_DATA_6):
    ALL.update(d)

PATH = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraSudanCitiesV2.ts"
with open(PATH, "r", encoding="utf-8") as f:
    src = f.read()

def js_escape(s: str) -> str:
    """Escape for double-quoted JS string. Source strings have no quotes/backslashes."""
    return s.replace("\\", "\\\\").replace('"', '\\"')

def build_da_block(langs: dict) -> str:
    return (
        "descriptionAdvanced: {\n"
        f'      de: "{js_escape(langs["de"])}",\n'
        f'      hu: "{js_escape(langs["hu"])}",\n'
        f'      ro: "{js_escape(langs["ro"])}",\n'
        f'      en: "{js_escape(langs["en"])}"\n'
        "    }"
    )

# Match each POI block by id, then find its descriptionAdvanced object up to the next ',\n    factsAdvanced' or '\n    },\n  {' boundary.
# Simpler: replace the existing descriptionAdvanced: { ... } block. Use non-greedy multiline matching.

count = 0
not_found = []
for poi_id, langs in ALL.items():
    # Find the POI block start
    id_pat = re.compile(r'(id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)descriptionAdvanced:\s*\{[\s\S]*?\n    \}')
    m = id_pat.search(src)
    if not m:
        not_found.append(poi_id)
        continue
    # Replacement: keep the prefix (up to descriptionAdvanced:) and substitute the new block
    prefix = m.group(1)
    new_block = build_da_block(langs)
    full_old = m.group(0)
    full_new = prefix + new_block
    src = src[:m.start()] + full_new + src[m.end():]
    count += 1

with open(PATH, "w", encoding="utf-8") as f:
    f.write(src)

print(f"Replaced descriptionAdvanced for {count} POIs.")
print(f"POIs in data dict: {len(ALL)}")
if not_found:
    print(f"NOT FOUND: {not_found}")
