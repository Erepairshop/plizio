import re
import os

file = "lib/visualLab/data/poiExtraGhanaNatureV2.ts"
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.split(r'id: "', content)[1:]
for poi in pois:
    poi_id = poi.split('"')[0]
    desc_match = re.search(r'description: \{[^\}]*de: "([^"]*)"', poi)
    adv_match = re.search(r'descriptionAdvanced: \{[^\}]*de: "([^"]*)"', poi)
    if desc_match and adv_match:
        desc = desc_match.group(1)
        adv = adv_match.group(1)
        if desc == adv or adv.startswith(desc):
             # check if adv is just desc + curriculum
             stripped_adv = adv.split("Geografie")[0].split("Umwelt")[0].split("Biologie")[0].strip()
             if desc.strip() == stripped_adv:
                 print(f"POI {poi_id} has boilerplate-like advanced description (same as basic).")
