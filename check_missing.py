import re
with open("lib/visualLab/data/poiExtraEcuadorCitiesV2.ts", "r", encoding="utf-8") as f:
    content = f.read()

# This is a very basic check. The file is large, so we split by POI object.
pois = re.split(r'  \{', content)
for poi in pois:
    if 'id:' in poi and 'descriptionAdvanced:' not in poi:
        poi_id = re.search(r'id: "([^"]+)"', poi)
        if poi_id:
            print(poi_id.group(1))
