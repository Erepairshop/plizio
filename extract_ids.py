import re

file_path = 'lib/visualLab/data/poiExtraPolandCities.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r'id: "([^"]+)"', content)
for poi_id in ids:
    print(poi_id)
