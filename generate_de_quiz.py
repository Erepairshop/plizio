import json
import math
import random
import os
import re

with open('de_pois_dump.json', 'r', encoding='utf-8') as f:
    pois = json.load(f)

def haversine(lon1, lat1, lon2, lat2):
    R = 6371
    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(lon2 - lon1)
    a = math.sin(dLat/2) ** 2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dLon/2) ** 2
    c = 2 * math.asin(math.sqrt(a))
    return int(round(R * c))

bundeslaender = {
  "DE-BW": ("Baden-Württemberg", "bw"),
  "DE-BY": ("Bayern", "by"),
  "DE-BE": ("Berlin", "be"),
  "DE-BB": ("Brandenburg", "bb"),
  "DE-HB": ("Bremen", "hb"),
  "DE-HH": ("Hamburg", "hh"),
  "DE-HE": ("Hessen", "he"),
  "DE-MV": ("Mecklenburg-Vorpommern", "mv"),
  "DE-NI": ("Niedersachsen", "ni"),
  "DE-NW": ("Nordrhein-Westfalen", "nw"),
  "DE-RP": ("Rheinland-Pfalz", "rp"),
  "DE-SL": ("Saarland", "sl"),
  "DE-SN": ("Sachsen", "sn"),
  "DE-ST": ("Sachsen-Anhalt", "st"),
  "DE-SH": ("Schleswig-Holstein", "sh"),
  "DE-TH": ("Thüringen", "th")
}

os.makedirs('lib/visualLab/quiz/data/de', exist_ok=True)

index_imports = []
index_exports = []

for parent, (bl_name, prefix) in bundeslaender.items():
    bl_pois = [p for p in pois if p['parent'] == parent]
    random.seed(parent) # deterministic
    
    types_dict = {}
    for p in bl_pois:
        t = p['type']
        if t not in types_dict:
            types_dict[t] = []
        types_dict[t].append(p)
        
    tasks = []
    
    def get_name(p):
        return p['name']['de'] if p['name']['de'] else p['id']

    # EASY 1: click_poi (City/State Capital)
    e1_poi = next((p for p in bl_pois if p['type'] == 'state-capital'), None)
    if not e1_poi:
        cities = types_dict.get('city', [])
        if cities: e1_poi = random.choice(cities)
        else: e1_poi = random.choice(bl_pois)
        
    tasks.append({
        "id": f"{parent.lower()}-easy-1",
        "type": "click_poi",
        "question": {
            "de": f"Klicke auf {get_name(e1_poi)}!",
            "hu": f"Kattints ide: {get_name(e1_poi)}!",
            "ro": f"Apasă pe {get_name(e1_poi)}!",
            "en": f"Click on {get_name(e1_poi)}!"
        },
        "targetPoiId": e1_poi['id']
    })
    
    # EASY 2: click_county
    tasks.append({
        "id": f"{parent.lower()}-easy-2",
        "type": "click_county",
        "question": {
            "de": f"Wo liegt {bl_name} auf der Karte?",
            "hu": f"Hol található {bl_name} a térképen?",
            "ro": f"Unde se află {bl_name} pe hartă?",
            "en": f"Where is {bl_name} on the map?"
        },
        "targetCountyId": parent
    })
    
    # EASY 3: click_poi
    others = [p for p in bl_pois if p['id'] != e1_poi['id']]
    e3_poi = next((p for p in others if p['type'] in ['historical', 'landmark']), None)
    if not e3_poi:
        e3_poi = random.choice(others)
    
    tasks.append({
        "id": f"{parent.lower()}-easy-3",
        "type": "click_poi",
        "question": {
            "de": f"Finde {get_name(e3_poi)}!",
            "hu": f"Keresd meg: {get_name(e3_poi)}!",
            "ro": f"Găsește {get_name(e3_poi)}!",
            "en": f"Find {get_name(e3_poi)}!"
        },
        "targetPoiId": e3_poi['id']
    })
    
    # MEDIUM 1: distance_guess
    p1, p2 = random.sample(bl_pois, 2)
    km = haversine(p1['coords'][0], p1['coords'][1], p2['coords'][0], p2['coords'][1])
    if km < 1: km = 1
    tasks.append({
        "id": f"{parent.lower()}-med-1",
        "type": "distance_guess",
        "question": {
            "de": f"Wie weit ist es von {get_name(p1)} nach {get_name(p2)}?",
            "hu": f"Milyen messze van {get_name(p1)} és {get_name(p2)} egymástól?",
            "ro": f"Cât de departe este {get_name(p1)} de {get_name(p2)}?",
            "en": f"How far is it from {get_name(p1)} to {get_name(p2)}?"
        },
        "targetPoiId": p1['id'],
        "targetPoiId2": p2['id'],
        "expectedKm": km
    })
    
    # MEDIUM 2: click_poi
    m2_poi = next((p for p in others if p['type'] in ['river', 'lake', 'forest', 'mountain', 'animal-habitat', 'industry']), random.choice(others))
    tasks.append({
        "id": f"{parent.lower()}-med-2",
        "type": "click_poi",
        "question": {
            "de": f"Wo befindet sich {get_name(m2_poi)}?",
            "hu": f"Hol található: {get_name(m2_poi)}?",
            "ro": f"Unde se află {get_name(m2_poi)}?",
            "en": f"Where is {get_name(m2_poi)} located?"
        },
        "targetPoiId": m2_poi['id']
    })
    
    # MEDIUM 3: spot_error
    sorted_types = sorted(types_dict.items(), key=lambda x: len(x[1]), reverse=True)
    if len(sorted_types) >= 2 and len(sorted_types[0][1]) >= 4:
        a_pois = random.sample(sorted_types[0][1], 4)
        b_poi = random.choice(sorted_types[1][1])
    elif len(bl_pois) >= 5:
        a_pois = random.sample(bl_pois[:4], 4)
        b_poi = bl_pois[4]
    else:
        a_pois = bl_pois[:4]
        b_poi = bl_pois[-1]
        
    opt_pois = [p['id'] for p in a_pois] + [b_poi['id']]
    random.shuffle(opt_pois)
    
    tasks.append({
        "id": f"{parent.lower()}-med-3",
        "type": "spot_error",
        "question": {
            "de": "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
            "hu": "Keresd a hibát: Melyik hely tartozik más kategóriába?",
            "ro": "Găsește greșeala: Care loc aparține unei alte categorii?",
            "en": "Spot the error: Which place belongs to a different category?"
        },
        "optionPoiIds": opt_pois,
        "wrongPoiId": b_poi['id']
    })
    
    # HARD 1: order_by
    o_pois = random.sample(bl_pois, min(4, len(bl_pois)))
    o_pois_sorted = sorted(o_pois, key=lambda p: p['coords'][0])
    tasks.append({
        "id": f"{parent.lower()}-hard-1",
        "type": "order_by",
        "question": {
            "de": "Ordne diese Orte von Westen nach Osten!",
            "hu": "Rendezd ezeket a helyeket nyugatról keletre!",
            "ro": "Ordonează aceste locuri de la vest la est!",
            "en": "Order these places from west to east!"
        },
        "orderedPoiIds": [p['id'] for p in o_pois_sorted],
        "orderBy": "west_to_east"
    })
    
    # HARD 2: distance_guess
    p3, p4 = random.sample(bl_pois, 2)
    km2 = haversine(p3['coords'][0], p3['coords'][1], p4['coords'][0], p4['coords'][1])
    if km2 < 1: km2 = 1
    tasks.append({
        "id": f"{parent.lower()}-hard-2",
        "type": "distance_guess",
        "question": {
            "de": f"Schätze die Entfernung zwischen {get_name(p3)} und {get_name(p4)}!",
            "hu": f"Tippeld meg a távolságot {get_name(p3)} és {get_name(p4)} között!",
            "ro": f"Estimează distanța dintre {get_name(p3)} și {get_name(p4)}!",
            "en": f"Guess the distance between {get_name(p3)} and {get_name(p4)}!"
        },
        "targetPoiId": p3['id'],
        "targetPoiId2": p4['id'],
        "expectedKm": km2
    })
    
    # HARD 3: spot_error
    if len(sorted_types) >= 3 and len(sorted_types[1][1]) >= 4:
        c_pois = random.sample(sorted_types[1][1], 4)
        d_poi = random.choice(sorted_types[2][1])
    elif len(sorted_types) >= 2 and len(sorted_types[0][1]) >= 4:
        c_pois = random.sample(sorted_types[0][1], 4)
        available_d = [p for p in bl_pois if p['type'] != sorted_types[0][0]]
        d_poi = random.choice(available_d) if available_d else random.choice(bl_pois)
    else:
        c_pois = random.sample(bl_pois[:4], 4)
        d_poi = bl_pois[4]
        
    opt_pois_2 = [p['id'] for p in c_pois] + [d_poi['id']]
    random.shuffle(opt_pois_2)
    
    tasks.append({
        "id": f"{parent.lower()}-hard-3",
        "type": "spot_error",
        "question": {
            "de": "Was passt nicht zu den anderen?",
            "hu": "Mi nem illik a többihez?",
            "ro": "Ce nu se potrivește cu celelalte?",
            "en": "What does not fit with the others?"
        },
        "optionPoiIds": opt_pois_2,
        "wrongPoiId": d_poi['id']
    })
    
    # SPECIAL 1: order_by east_to_west
    o_pois_2 = random.sample(bl_pois, min(4, len(bl_pois)))
    o_pois_sorted_2 = sorted(o_pois_2, key=lambda p: p['coords'][0], reverse=True)
    
    tasks.append({
        "id": f"{parent.lower()}-special",
        "type": "order_by",
        "question": {
            "de": "Ordne diese Orte von Osten nach Westen!",
            "hu": "Rendezd ezeket a helyeket keletről nyugatra!",
            "ro": "Ordonează aceste locuri de la est la vest!",
            "en": "Order these places from east to west!"
        },
        "orderedPoiIds": [p['id'] for p in o_pois_sorted_2],
        "orderBy": "east_to_west"
    })
    
    json_str = json.dumps(tasks, indent=2)
    # Remove quotes from simple keys to look more like TS
    json_str = re.sub(r'"([a-zA-Z0-9_]+)":', r'\1:', json_str)
    
    ts_content = f'''import type {{ QuizTask }} from "../../types";

// {bl_name} ({parent}) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const {prefix}Quiz: QuizTask[] = {json_str};
'''
    
    with open(f'lib/visualLab/quiz/data/de/{prefix}Quiz.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    index_imports.append(f'import {{ {prefix}Quiz }} from "./{prefix}Quiz";')
    index_exports.append(f'  "{parent}": {prefix}Quiz,')

# write index.ts
index_content = f'''import type {{ QuizTask }} from "../../types";
{chr(10).join(index_imports)}

export const deBundeslandQuiz: Record<string, QuizTask[]> = {{
{chr(10).join(index_exports)}
}};
'''

with open('lib/visualLab/quiz/data/de/index.ts', 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Generated 16 Quiz TS files and index.ts")
