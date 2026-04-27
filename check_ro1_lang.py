import json

with open('ro1_pois.json', 'r', encoding='utf-8') as f:
    pois = json.load(f)

count_de_done = 0
count_hu_done = 0
missing_de = []
missing_hu = []

for p in pois:
    adv = p.get('descriptionAdvanced', {})
    if adv.get('de'):
        count_de_done += 1
    else:
        missing_de.append(p['id'])
        
    if adv.get('hu'):
        count_hu_done += 1
    else:
        missing_hu.append(p['id'])

print(f"DE done: {count_de_done}/{len(pois)}")
print(f"HU done: {count_hu_done}/{len(pois)}")
