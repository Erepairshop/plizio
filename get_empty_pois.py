import re

def get_empty(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = content.split('id: "')
    empty_ids = []
    for poi in pois[1:]:
        poi_id = poi.split('"')[0]
        if 'descriptionAdvanced: {\n      de: ""' in poi or 'descriptionAdvanced: {\n        de: ""' in poi or 'descriptionAdvanced: {\n      de: "",' in poi:
            empty_ids.append(poi_id)
        # Check if factsAdvanced is also empty
    print(f"{filepath}: {empty_ids}")

get_empty('lib/visualLab/data/icelandPoi.ts')
get_empty('lib/visualLab/data/poiExtraIcelandCities.ts')
