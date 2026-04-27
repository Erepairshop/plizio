import re

with open('lib/visualLab/data/poiExtraRo2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.split(r'\{\s*id:', content)[1:]
for poi in pois:
    poi_id = poi.split('"')[1]
    
    desc_adv = re.search(r'hu:\s*"([^"]+)"', poi)
    if desc_adv:
        text = desc_adv.group(1)
        word_count = len(text.split())
        if word_count < 60:
            print(f"ID: {poi_id} | words: {word_count}")
