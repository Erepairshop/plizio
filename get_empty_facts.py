import re
def check_facts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    pois = content.split('id: "')
    for poi in pois[1:]:
        poi_id = poi.split('"')[0]
        if 'factsAdvanced: {\n      de: []' in poi or 'factsAdvanced: {\n        de: []' in poi or 'factsAdvanced: {\n      de: [],' in poi:
            print(f"{filepath} empty facts de: {poi_id}")
check_facts('lib/visualLab/data/icelandPoi.ts')
