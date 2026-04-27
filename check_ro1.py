import json

with open('ro1_pois.json', 'r') as f:
    pois = json.load(f)

to_process = []
for p in pois:
    adv_de = p.get('descriptionAdvanced', {}).get('de', '')
    adv_hu = p.get('descriptionAdvanced', {}).get('hu', '')
    if not adv_de or not adv_hu:
        to_process.append(p['id'])

print(f"Total POIs: {len(pois)}")
print(f"Need processing: {len(to_process)}")
