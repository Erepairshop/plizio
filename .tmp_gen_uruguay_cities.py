import json

cities = [
    # Montevideo
    {"name": "Montevideo", "reg": "UY-MO", "lat": -34.9011, "lon": -56.1645, "pop": 1319108, "cap": True},
    # Canelones
    {"name": "Ciudad de la Costa", "reg": "UY-CA", "lat": -34.8167, "lon": -55.9500, "pop": 112449},
    {"name": "Las Piedras", "reg": "UY-CA", "lat": -34.7167, "lon": -56.2167, "pop": 71268},
    {"name": "Pando", "reg": "UY-CA", "lat": -34.7167, "lon": -55.9500, "pop": 25949},
    {"name": "La Paz", "reg": "UY-CA", "lat": -34.7617, "lon": -56.2236, "pop": 20526},
    {"name": "Canelones", "reg": "UY-CA", "lat": -34.5333, "lon": -56.2833, "pop": 19865, "cap": True},
    {"name": "Santa Lucía", "reg": "UY-CA", "lat": -34.4500, "lon": -56.3833, "pop": 16742},
    {"name": "Progreso", "reg": "UY-CA", "lat": -34.6667, "lon": -56.2167, "pop": 16244},
    {"name": "Paso Carrasco", "reg": "UY-CA", "lat": -34.8500, "lon": -56.0333, "pop": 15908},
    {"name": "Barros Blancos", "reg": "UY-CA", "lat": -34.7667, "lon": -55.9833, "pop": 31650},
    {"name": "Colonia Nicolich", "reg": "UY-CA", "lat": -34.8167, "lon": -56.0167, "pop": 9624},
    {"name": "Sauce", "reg": "UY-CA", "lat": -34.6500, "lon": -56.0667, "pop": 6132},
    {"name": "San Ramón", "reg": "UY-CA", "lat": -34.3000, "lon": -55.9667, "pop": 7133},
    {"name": "San Jacinto", "reg": "UY-CA", "lat": -34.5500, "lon": -55.8833, "pop": 4510},
    {"name": "Toledo", "reg": "UY-CA", "lat": -34.7333, "lon": -56.1000, "pop": 4397},
    {"name": "Atlantida", "reg": "UY-CA", "lat": -34.7667, "lon": -55.7667, "pop": 5562},
    # Maldonado
    {"name": "Maldonado", "reg": "UY-MA", "lat": -34.9000, "lon": -54.9500, "pop": 62592, "cap": True},
    {"name": "Punta del Este", "reg": "UY-MA", "lat": -34.9667, "lon": -54.9500, "pop": 9277},
    {"name": "San Carlos", "reg": "UY-MA", "lat": -34.8000, "lon": -54.9167, "pop": 27471},
    {"name": "Piriápolis", "reg": "UY-MA", "lat": -34.8667, "lon": -55.2833, "pop": 8830},
    {"name": "Pan de Azúcar", "reg": "UY-MA", "lat": -34.8000, "lon": -55.2333, "pop": 7098},
    {"name": "Aiguá", "reg": "UY-MA", "lat": -34.2000, "lon": -54.7500, "pop": 2465},
    # Salto
    {"name": "Salto", "reg": "UY-SA", "lat": -31.3833, "lon": -57.9667, "pop": 104028, "cap": True},
    # Paysandú
    {"name": "Paysandú", "reg": "UY-PA", "lat": -32.3167, "lon": -58.0833, "pop": 76429, "cap": True},
    {"name": "Guichón", "reg": "UY-PA", "lat": -32.3500, "lon": -57.2000, "pop": 5039},
    # Rivera
    {"name": "Rivera", "reg": "UY-RV", "lat": -30.9000, "lon": -55.5500, "pop": 64465, "cap": True},
    {"name": "Tranqueras", "reg": "UY-RV", "lat": -31.4000, "lon": -55.7500, "pop": 7235},
    {"name": "Minas de Corrales", "reg": "UY-RV", "lat": -31.4667, "lon": -55.4667, "pop": 3444},
    # Tacuarembó
    {"name": "Tacuarembó", "reg": "UY-TA", "lat": -31.7333, "lon": -55.9833, "pop": 54757, "cap": True},
    {"name": "Paso de los Toros", "reg": "UY-TA", "lat": -32.8167, "lon": -56.5167, "pop": 12985},
    {"name": "San Gregorio de Polanco", "reg": "UY-TA", "lat": -32.6167, "lon": -55.3333, "pop": 3415},
    # Cerro Largo
    {"name": "Melo", "reg": "UY-CL", "lat": -32.3667, "lon": -54.1833, "pop": 51830, "cap": True},
    {"name": "Río Branco", "reg": "UY-CL", "lat": -32.6000, "lon": -53.3833, "pop": 14604},
    {"name": "Fraile Muerto", "reg": "UY-CL", "lat": -32.5167, "lon": -54.5333, "pop": 3168},
    # Artigas
    {"name": "Artigas", "reg": "UY-AR", "lat": -30.4000, "lon": -56.4667, "pop": 40658, "cap": True},
    {"name": "Bella Unión", "reg": "UY-AR", "lat": -30.2500, "lon": -57.6000, "pop": 12200},
    {"name": "Tomás Gomensoro", "reg": "UY-AR", "lat": -30.4167, "lon": -57.4333, "pop": 2659},
    # Soriano
    {"name": "Mercedes", "reg": "UY-SO", "lat": -33.2500, "lon": -58.0333, "pop": 41975, "cap": True},
    {"name": "Dolores", "reg": "UY-SO", "lat": -33.5333, "lon": -58.2167, "pop": 17174},
    {"name": "Cardona", "reg": "UY-SO", "lat": -33.8667, "lon": -57.3833, "pop": 4600},
    # Lavalleja
    {"name": "Minas", "reg": "UY-LA", "lat": -34.3667, "lon": -55.2333, "pop": 38446, "cap": True},
    {"name": "José Pedro Varela", "reg": "UY-LA", "lat": -33.4500, "lon": -54.5333, "pop": 5118},
    # San José
    {"name": "San José de Mayo", "reg": "UY-SJ", "lat": -34.3333, "lon": -56.7167, "pop": 36747, "cap": True},
    {"name": "Ciudad del Plata", "reg": "UY-SJ", "lat": -34.7667, "lon": -56.3833, "pop": 31146},
    {"name": "Libertad", "reg": "UY-SJ", "lat": -34.6333, "lon": -56.6167, "pop": 10166},
    {"name": "Rodríguez", "reg": "UY-SJ", "lat": -34.3833, "lon": -56.5500, "pop": 2604},
    # Durazno
    {"name": "Durazno", "reg": "UY-DU", "lat": -33.3833, "lon": -56.5167, "pop": 34368, "cap": True},
    {"name": "Sarandí del Yí", "reg": "UY-DU", "lat": -33.3500, "lon": -55.5667, "pop": 7176},
    {"name": "Villa del Carmen", "reg": "UY-DU", "lat": -33.2500, "lon": -56.0333, "pop": 2692},
    # Florida
    {"name": "Florida", "reg": "UY-FD", "lat": -34.1000, "lon": -56.2167, "pop": 33640, "cap": True},
    {"name": "Sarandí Grande", "reg": "UY-FD", "lat": -33.7333, "lon": -56.3333, "pop": 6130},
    {"name": "Casupá", "reg": "UY-FD", "lat": -34.1167, "lon": -55.6500, "pop": 2402},
    # Treinta y Tres
    {"name": "Treinta y Tres", "reg": "UY-TT", "lat": -33.2333, "lon": -54.3833, "pop": 25477, "cap": True},
    {"name": "Ejido de Treinta y Tres", "reg": "UY-TT", "lat": -33.2333, "lon": -54.3667, "pop": 6115},
    {"name": "Vergara", "reg": "UY-TT", "lat": -32.9333, "lon": -53.9000, "pop": 3810},
    # Rocha
    {"name": "Rocha", "reg": "UY-RO", "lat": -34.4833, "lon": -54.3333, "pop": 25422, "cap": True},
    {"name": "Chuy", "reg": "UY-RO", "lat": -33.6833, "lon": -53.4500, "pop": 9675},
    {"name": "Castillos", "reg": "UY-RO", "lat": -34.1667, "lon": -53.8333, "pop": 7541},
    {"name": "Lascano", "reg": "UY-RO", "lat": -33.6667, "lon": -54.2000, "pop": 7645},
    {"name": "La Paloma", "reg": "UY-RO", "lat": -34.6667, "lon": -54.1667, "pop": 3495},
    # Colonia
    {"name": "Colonia del Sacramento", "reg": "UY-CO", "lat": -34.4667, "lon": -57.8333, "pop": 26231, "cap": True},
    {"name": "Carmelo", "reg": "UY-CO", "lat": -34.0000, "lon": -58.2833, "pop": 18041},
    {"name": "Juan Lacaze", "reg": "UY-CO", "lat": -34.4333, "lon": -57.4333, "pop": 12816},
    {"name": "Nueva Helvecia", "reg": "UY-CO", "lat": -34.3000, "lon": -57.2333, "pop": 10630},
    {"name": "Rosario", "reg": "UY-CO", "lat": -34.3167, "lon": -57.3500, "pop": 10085},
    {"name": "Nueva Palmira", "reg": "UY-CO", "lat": -33.8833, "lon": -58.4167, "pop": 9857},
    {"name": "Tarariras", "reg": "UY-CO", "lat": -34.2833, "lon": -57.6167, "pop": 6632},
    # Río Negro
    {"name": "Fray Bentos", "reg": "UY-RN", "lat": -33.1333, "lon": -58.3000, "pop": 24406, "cap": True},
    {"name": "Young", "reg": "UY-RN", "lat": -32.7167, "lon": -57.6333, "pop": 16756},
    # Flores
    {"name": "Trinidad", "reg": "UY-FS", "lat": -33.5167, "lon": -56.9000, "pop": 21429, "cap": True},
]

# Keep only exactly 70 cities. We have currently 70 cities!
cities = cities[:70]

import re
def slugify(text):
    text = text.lower()
    text = re.sub(r'[áä]', 'a', text)
    text = re.sub(r'[éë]', 'e', text)
    text = re.sub(r'[íï]', 'i', text)
    text = re.sub(r'[óö]', 'o', text)
    text = re.sub(r'[úü]', 'u', text)
    text = re.sub(r'ñ', 'n', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

translations = {
    "Montevideo": {"hu": "Montevideo", "de": "Montevideo", "ro": "Montevideo"},
    "Colonia del Sacramento": {"hu": "Colonia del Sacramento", "de": "Colonia del Sacramento", "ro": "Colonia del Sacramento"},
    "Punta del Este": {"hu": "Punta del Este", "de": "Punta del Este", "ro": "Punta del Este"},
    # We will use python's string formatting to generate default texts in the target languages
}

import urllib.request
import time

def gen_content(cities):
    out = []
    out.append('import type { POI } from "./poi";\n')
    out.append('export const poiExtraUruguayCitiesV2: POI[] = [')
    
    for c in cities:
        name = c["name"]
        slug = slugify(name)
        poi_id = f"{slug}-cities-v2"
        typ = "state-capital" if c.get("cap") else "city"
        parent = c["reg"]
        lat = c["lat"]
        lon = c["lon"]
        pop = c.get("pop", 10000)
        
        # basic descriptions
        de_desc = f"{name} ist eine wichtige Stadt im Departement {parent.replace('UY-', '')} in Uruguay, bekannt für ihre Rolle in der regionalen Wirtschaft."
        hu_desc = f"{name} egy jelentős város Uruguay {parent.replace('UY-', '')} megyéjében, amely fontos szerepet játszik a régió gazdaságában."
        ro_desc = f"{name} este un oraș important în departamentul {parent.replace('UY-', '')} din Uruguay, cunoscut pentru rolul său în economia regională."
        en_desc = f"{name} is an important city in the {parent.replace('UY-', '')} department of Uruguay, known for its role in the regional economy."
        
        if typ == "state-capital":
            de_desc = f"{name} ist die Hauptstadt des Departements {parent.replace('UY-', '')} in Uruguay und das administrative Zentrum der Region."
            hu_desc = f"{name} Uruguay {parent.replace('UY-', '')} megyéjének fővárosa és a régió adminisztratív központja."
            ro_desc = f"{name} este capitala departamentului {parent.replace('UY-', '')} din Uruguay și centrul administrativ al regiunii."
            en_desc = f"{name} is the capital city of the {parent.replace('UY-', '')} department in Uruguay and the administrative center of the region."
            
        de_facts = [f"Die Stadt hat etwa {pop} Einwohner.", "Sie ist ein wichtiges Zentrum für die lokale Landwirtschaft und den Handel.", "Die Architektur der Stadt spiegelt die Geschichte der Region wider."]
        hu_facts = [f"A városnak körülbelül {pop} lakosa van.", "Fontos központja a helyi mezőgazdaságnak és kereskedelemnek.", "A város építészete tükrözi a régió történelmét."]
        ro_facts = [f"Orașul are aproximativ {pop} locuitori.", "Este un centru important pentru agricultura și comerțul local.", "Arhitectura orașului reflectă istoria regiunii."]
        en_facts = [f"The city has around {pop} inhabitants.", "It is an important center for local agriculture and trade.", "The city's architecture reflects the history of the region."]
        
        if name == "Montevideo":
            de_desc = "Montevideo ist die Hauptstadt und größte Stadt Uruguays. Die Hafenstadt am Río de la Plata ist das politische, wirtschaftliche und kulturelle Zentrum des Landes."
            hu_desc = "Montevideo Uruguay fővárosa és legnagyobb városa. A Río de la Plata partján fekvő kikötőváros az ország politikai, gazdasági és kulturális központja."
            ro_desc = "Montevideo este capitala și cel mai mare oraș din Uruguay. Orașul-port pe Río de la Plata este centrul politic, economic și cultural al țării."
            en_desc = "Montevideo is the capital and largest city of Uruguay. The port city on the Río de la Plata is the political, economic, and cultural center of the country."
            de_facts = ["Montevideo beheimatet über ein Drittel der Bevölkerung Uruguays.", "Der Hafen von Montevideo ist einer der wichtigsten Häfen in Südamerika.", "Die Stadt ist bekannt für ihre historische Altstadt Ciudad Vieja."]
            hu_facts = ["Montevideóban él Uruguay lakosságának több mint egyharmada.", "A montevideói kikötő Dél-Amerika egyik legfontosabb kikötője.", "A város híres történelmi óvárosáról, a Ciudad Viejáról."]
            ro_facts = ["Montevideo găzduiește peste o treime din populația Uruguayului.", "Portul Montevideo este unul dintre cele mai importante porturi din America de Sud.", "Orașul este cunoscut pentru orașul său vechi istoric Ciudad Vieja."]
            en_facts = ["Montevideo is home to over a third of Uruguay's population.", "The Port of Montevideo is one of the most important ports in South America.", "The city is known for its historic old town Ciudad Vieja."]

        out.append("  {")
        out.append(f'    id: "{poi_id}",')
        out.append(f'    type: "{typ}",')
        out.append(f'    parent: "{parent}",')
        out.append(f'    coords: [{lon}, {lat}],')
        out.append(f'    name: {{ de: "{name}", hu: "{name}", ro: "{name}", en: "{name}" }},')
        out.append(f'    description: {{')
        out.append(f'      de: "{de_desc}",')
        out.append(f'      hu: "{hu_desc}",')
        out.append(f'      ro: "{ro_desc}",')
        out.append(f'      en: "{en_desc}"')
        out.append(f'    }},')
        out.append(f'    facts: {{')
        out.append(f'      de: {json.dumps(de_facts)},')
        out.append(f'      hu: {json.dumps(hu_facts)},')
        out.append(f'      ro: {json.dumps(ro_facts)},')
        out.append(f'      en: {json.dumps(en_facts)}')
        out.append(f'    }}')
        out.append("  },")

    # remove last comma
    if out[-1] == "  },":
        out[-1] = "  }"

    out.append("];\n")
    return "\n".join(out)

content = gen_content(cities)
with open("lib/visualLab/data/poiExtraUruguayCitiesV2.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated {len(cities)} POIs.")
