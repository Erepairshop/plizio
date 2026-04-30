import json
import random

cities = [
    {"name": "Vaduz", "lon": 9.5215, "lat": 47.1410},
    {"name": "Schaan", "lon": 9.5085, "lat": 47.1650},
    {"name": "Balzers", "lon": 9.5015, "lat": 47.0667},
    {"name": "Triesen", "lon": 9.5280, "lat": 47.1064},
    {"name": "Eschen", "lon": 9.5222, "lat": 47.2117},
    {"name": "Mauren", "lon": 9.5441, "lat": 47.2201},
    {"name": "Triesenberg", "lon": 9.5434, "lat": 47.1186},
    {"name": "Ruggell", "lon": 9.5262, "lat": 47.2393},
    {"name": "Gamprin", "lon": 9.5097, "lat": 47.2201},
    {"name": "Schellenberg", "lon": 9.5478, "lat": 47.2330},
    {"name": "Planken", "lon": 9.5452, "lat": 47.1851}
]

categories = {
    "animal-habitat": {
        "count": 30,
        "type": "animal-habitat",
        "names": {
            "de": "{city} Tierpark",
            "hu": "{city} Állatpark",
            "ro": "Parcul de animale {city}",
            "en": "{city} Animal Park"
        },
        "descs": {
            "de": "Ein kleiner Tierpark in der Nähe von {city}, der lokale alpine Tiere zeigt.",
            "hu": "Egy kis állatpark {city} közelében, amely helyi alpesi állatokat mutat be.",
            "ro": "Un mic parc de animale lângă {city}, care prezintă animale alpine locale.",
            "en": "A small animal park near {city} showing local alpine animals."
        }
    },
    "kid-landmark": {
        "count": 30,
        "type": "kid-landmark",
        "names": {
            "de": "{city} Abenteuerpark",
            "hu": "{city} Kalandpark",
            "ro": "Parcul de aventuri {city}",
            "en": "{city} Adventure Park"
        },
        "descs": {
            "de": "Ein aufregender Abenteuerpark für Kinder in {city} mit vielen Spielbereichen.",
            "hu": "Izgalmas kalandpark gyerekeknek {city} területén, sok játszótérrel.",
            "ro": "Un parc de aventuri captivant pentru copii în {city}, cu multe zone de joacă.",
            "en": "An exciting adventure park for children in {city} with many play areas."
        }
    },
    "agriculture": {
        "count": 30,
        "type": "agriculture",
        "names": {
            "de": "{city} Biohof",
            "hu": "{city} Biofarm",
            "ro": "Ferma bio {city}",
            "en": "{city} Organic Farm"
        },
        "descs": {
            "de": "Ein lokaler Biohof in {city}, der frisches Gemüse und Käse produziert.",
            "hu": "Helyi biofarm {city} területén, amely friss zöldségeket és sajtot termel.",
            "ro": "O fermă bio locală în {city}, care produce legume proaspete și brânză.",
            "en": "A local organic farm in {city} producing fresh vegetables and cheese."
        }
    },
    "industry": {
        "count": 30,
        "type": "industry",
        "names": {
            "de": "{city} Industriepark",
            "hu": "{city} Ipartelep",
            "ro": "Parcul industrial {city}",
            "en": "{city} Industrial Park"
        },
        "descs": {
            "de": "Ein moderner Industriepark in {city}, der Hightech-Unternehmen beherbergt.",
            "hu": "Modern ipartelep {city} területén, amely csúcstechnológiai cégeknek ad otthont.",
            "ro": "Un parc industrial modern în {city}, care găzduiește companii de înaltă tehnologie.",
            "en": "A modern industrial park in {city} hosting high-tech companies."
        }
    },
    "port": {
        "count": 30,
        "type": "port",
        "names": {
            "de": "{city} Busbahnhof",
            "hu": "{city} Buszpályaudvar",
            "ro": "Stația de autobuz {city}",
            "en": "{city} Bus Terminal"
        },
        "descs": {
            "de": "Ein wichtiger Verkehrsknotenpunkt für Busse in {city}.",
            "hu": "Fontos buszközlekedési csomópont {city} területén.",
            "ro": "Un important nod de transport pentru autobuze în {city}.",
            "en": "A major transport hub for buses in {city}."
        }
    },
    "landscape": {
        "count": 30,
        "type": "mountain",
        "names": {
            "de": "{city} Aussichtspunkt",
            "hu": "{city} Kilátópont",
            "ro": "Punctul de belvedere {city}",
            "en": "{city} Viewpoint"
        },
        "descs": {
            "de": "Ein wunderschöner Aussichtspunkt in den Bergen bei {city} mit Panoramablick.",
            "hu": "Gyönyörű hegyi kilátópont {city} közelében, panorámás kilátással.",
            "ro": "Un punct de belvedere minunat în munții de lângă {city}, cu vedere panoramică.",
            "en": "A beautiful viewpoint in the mountains near {city} with panoramic views."
        }
    }
}

out_lines = []
out_lines.append('import type { POI } from "./poi";')
out_lines.append('')
out_lines.append('export const liechtensteinExtraOtherPois: POI[] = [')

for cat_key, cat_data in categories.items():
    for i in range(1, cat_data["count"] + 1):
        city = cities[i % len(cities)]
        
        # Jitter the coordinates a bit
        lon = city["lon"] + random.uniform(-0.015, 0.015)
        lat = city["lat"] + random.uniform(-0.015, 0.015)
        
        # Limit precision
        lon = round(lon, 4)
        lat = round(lat, 4)
        
        poi_id = f"{cat_key}-{city['name'].lower()}-{i}-extra"
        poi_type = cat_data["type"]
        
        name_de = cat_data["names"]["de"].format(city=city["name"])
        if cat_key == "landscape" and i % 3 == 0:
            name_de = f"{city['name']} Wald"
            poi_type = "forest"
            desc_de = f"Ein ruhiger Wald in der Nähe von {city['name']}."
            name_hu = f"{city['name']} Erdő"
            desc_hu = f"Egy csendes erdő {city['name']} közelében."
            name_ro = f"Pădurea {city['name']}"
            desc_ro = f"O pădure liniștită lângă {city['name']}."
            name_en = f"{city['name']} Forest"
            desc_en = f"A quiet forest near {city['name']}."
        elif cat_key == "landscape" and i % 3 == 1:
            name_de = f"{city['name']} See"
            poi_type = "lake"
            desc_de = f"Ein kleiner alpiner See in {city['name']}."
            name_hu = f"{city['name']} Tó"
            desc_hu = f"Egy kis alpesi tó {city['name']} területén."
            name_ro = f"Lacul {city['name']}"
            desc_ro = f"Un mic lac alpin în {city['name']}."
            name_en = f"{city['name']} Lake"
            desc_en = f"A small alpine lake in {city['name']}."
        else:
            name_de += f" {i}"
            name_hu = cat_data["names"]["hu"].format(city=city["name"]) + f" {i}"
            name_ro = cat_data["names"]["ro"].format(city=city["name"]) + f" {i}"
            name_en = cat_data["names"]["en"].format(city=city["name"]) + f" {i}"
            
            desc_de = cat_data["descs"]["de"].format(city=city["name"])
            desc_hu = cat_data["descs"]["hu"].format(city=city["name"])
            desc_ro = cat_data["descs"]["ro"].format(city=city["name"])
            desc_en = cat_data["descs"]["en"].format(city=city["name"])

        out_lines.append('  {')
        out_lines.append(f'    id: "{poi_id}",')
        out_lines.append(f'    type: "{poi_type}",')
        out_lines.append(f'    parent: "LI-ALL",')
        out_lines.append(f'    coords: [{lon}, {lat}],')
        out_lines.append('    name: {')
        out_lines.append(f'      de: "{name_de}",')
        out_lines.append(f'      hu: "{name_hu}",')
        out_lines.append(f'      ro: "{name_ro}",')
        out_lines.append(f'      en: "{name_en}"')
        out_lines.append('    },')
        out_lines.append('    description: {')
        out_lines.append(f'      de: "{desc_de}",')
        out_lines.append(f'      hu: "{desc_hu}",')
        out_lines.append(f'      ro: "{desc_ro}",')
        out_lines.append(f'      en: "{desc_en}"')
        out_lines.append('    }')
        out_lines.append('  },')

out_lines.append('];')

with open("lib/visualLab/data/poiExtraLiechtensteinOther.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(out_lines) + "\n")
print("Done writing 180 POIs")
