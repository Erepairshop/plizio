
import json

cities = [
    {"id": "es-cadiz", "parent": "ES-AN", "coords": [-6.2886, 36.5271], "name": "Cádiz", "theme": "coastal", "region": "Andalúzia"},
    {"id": "es-jerez", "parent": "ES-AN", "coords": [-6.1377, 36.685], "name": "Jerez de la Frontera", "theme": "wine", "region": "Andalúzia"},
    {"id": "es-algeciras", "parent": "ES-AN", "coords": [-5.4477, 36.1408], "name": "Algeciras", "theme": "port", "region": "Andalúzia"},
    {"id": "es-huelva", "parent": "ES-AN", "coords": [-6.9447, 37.2614], "name": "Huelva", "theme": "port", "region": "Andalúzia"},
    {"id": "es-jaen", "parent": "ES-AN", "coords": [-3.7889, 37.7796], "name": "Jaén", "theme": "heritage", "region": "Andalúzia"},
    {"id": "es-ubeda", "parent": "ES-AN", "coords": [-3.362, 38.0115], "name": "Úbeda", "theme": "heritage", "region": "Andalúzia"},
    {"id": "es-baeza", "parent": "ES-AN", "coords": [-3.4696, 37.9936], "name": "Baeza", "theme": "heritage", "region": "Andalúzia"},
    {"id": "es-ronda", "parent": "ES-AN", "coords": [-5.167, 36.7427], "name": "Ronda", "theme": "mountain", "region": "Andalúzia"},
    {"id": "es-marbella", "parent": "ES-AN", "coords": [-4.8864, 36.5101], "name": "Marbella", "theme": "coastal", "region": "Andalúzia"},
    {"id": "es-antequera", "parent": "ES-AN", "coords": [-4.5581, 37.0182], "name": "Antequera", "theme": "heritage", "region": "Andalúzia"},
    {"id": "es-motril", "parent": "ES-AN", "coords": [-3.5183, 36.7447], "name": "Motril", "theme": "coastal", "region": "Andalúzia"},
    {"id": "es-nerja", "parent": "ES-AN", "coords": [-3.881, 36.747], "name": "Nerja", "theme": "coastal", "region": "Andalúzia"},
    {"id": "es-girona", "parent": "ES-CT", "coords": [2.8214, 41.9794], "name": "Girona", "theme": "heritage", "region": "Katalónia"},
    {"id": "es-tarragona", "parent": "ES-CT", "coords": [1.2493, 41.1189], "name": "Tarragona", "theme": "heritage", "region": "Katalónia"},
    {"id": "es-lleida", "parent": "ES-CT", "coords": [0.622, 41.6176], "name": "Lleida", "theme": "urban", "region": "Katalónia"},
    {"id": "es-figueres", "parent": "ES-CT", "coords": [2.958, 42.265], "name": "Figueres", "theme": "heritage", "region": "Katalónia"},
    {"id": "es-reus", "parent": "ES-CT", "coords": [1.1098, 41.1545], "name": "Reus", "theme": "urban", "region": "Katalónia"},
    {"id": "es-sabadell", "parent": "ES-CT", "coords": [2.1097, 41.5486], "name": "Sabadell", "theme": "urban", "region": "Katalónia"},
    {"id": "es-terrassa", "parent": "ES-CT", "coords": [2.0104, 41.5632], "name": "Terrassa", "theme": "urban", "region": "Katalónia"},
    {"id": "es-vic", "parent": "ES-CT", "coords": [2.2549, 41.9301], "name": "Vic", "theme": "heritage", "region": "Katalónia"},
    {"id": "es-sitges", "parent": "ES-CT", "coords": [1.8118, 41.2342], "name": "Sitges", "theme": "coastal", "region": "Katalónia"},
    {"id": "es-tortosa", "parent": "ES-CT", "coords": [0.52, 40.8126], "name": "Tortosa", "theme": "heritage", "region": "Katalónia"},
    {"id": "es-alicante", "parent": "ES-VC", "coords": [-0.4907, 38.3452], "name": "Alicante", "theme": "coastal", "region": "Valencia"},
    {"id": "es-elche", "parent": "ES-VC", "coords": [-0.6984, 38.2699], "name": "Elche", "theme": "urban", "region": "Valencia"},
    {"id": "es-castellon", "parent": "ES-VC", "coords": [-0.0513, 39.9864], "name": "Castellón de la Plana", "theme": "coastal", "region": "Valencia"},
    {"id": "es-benidorm", "parent": "ES-VC", "coords": [-0.131, 38.5411], "name": "Benidorm", "theme": "coastal", "region": "Valencia"},
    {"id": "es-gandia", "parent": "ES-VC", "coords": [-0.181, 38.967], "name": "Gandia", "theme": "coastal", "region": "Valencia"},
    {"id": "es-alcoi", "parent": "ES-VC", "coords": [-0.4731, 38.6988], "name": "Alcoi", "theme": "mountain", "region": "Valencia"},
    {"id": "es-denia", "parent": "ES-VC", "coords": [0.1057, 38.8408], "name": "Dénia", "theme": "coastal", "region": "Valencia"},
    {"id": "es-xabia", "parent": "ES-VC", "coords": [0.1643, 38.7912], "name": "Xàbia", "theme": "coastal", "region": "Valencia"},
    {"id": "es-burgos", "parent": "ES-CL", "coords": [-3.7038, 42.3439], "name": "Burgos", "theme": "heritage", "region": "Kasztília és León"},
    {"id": "es-leon", "parent": "ES-CL", "coords": [-5.5671, 42.5987], "name": "León", "theme": "heritage", "region": "Kasztília és León"},
    {"id": "es-segovia", "parent": "ES-CL", "coords": [-4.1184, 40.9429], "name": "Segovia", "theme": "heritage", "region": "Kasztília és León"},
    {"id": "es-avila", "parent": "ES-CL", "coords": [-4.6976, 40.6566], "name": "Ávila", "theme": "heritage", "region": "Kasztília és León"},
    {"id": "es-soria", "parent": "ES-CL", "coords": [-2.4652, 41.7636], "name": "Soria", "theme": "mountain", "region": "Kasztília és León"},
    {"id": "es-zamora", "parent": "ES-CL", "coords": [-5.7448, 41.5034], "name": "Zamora", "theme": "heritage", "region": "Kasztília és León"},
    {"id": "es-palencia", "parent": "ES-CL", "coords": [-4.5288, 42.0101], "name": "Palencia", "theme": "urban", "region": "Kasztília és León"},
    {"id": "es-ponferrada", "parent": "ES-CL", "coords": [-6.59, 42.548], "name": "Ponferrada", "theme": "mountain", "region": "Kasztília és León"},
    {"id": "es-coruna", "parent": "ES-GA", "coords": [-8.4115, 43.3623], "name": "A Coruña", "theme": "coastal", "region": "Galícia"},
    {"id": "es-vigo", "parent": "ES-GA", "coords": [-8.7226, 42.2406], "name": "Vigo", "theme": "port", "region": "Galícia"},
    {"id": "es-lugo", "parent": "ES-GA", "coords": [-7.556, 43.0121], "name": "Lugo", "theme": "heritage", "region": "Galícia"},
    {"id": "es-ourense", "parent": "ES-GA", "coords": [-7.8639, 42.3359], "name": "Ourense", "theme": "urban", "region": "Galícia"},
    {"id": "es-pontevedra", "parent": "ES-GA", "coords": [-8.6444, 42.4337], "name": "Pontevedra", "theme": "coastal", "region": "Galícia"},
    {"id": "es-ferrol", "parent": "ES-GA", "coords": [-8.236, 43.488], "name": "Ferrol", "theme": "port", "region": "Galícia"},
    {"id": "es-cuenca", "parent": "ES-CM", "coords": [-2.1319, 40.0704], "name": "Cuenca", "theme": "heritage", "region": "Kasztília-La Mancha"},
    {"id": "es-albacete", "parent": "ES-CM", "coords": [-1.8559, 38.9944], "name": "Albacete", "theme": "urban", "region": "Kasztília-La Mancha"},
    {"id": "es-ciudad-real", "parent": "ES-CM", "coords": [-3.9272, 38.986], "name": "Ciudad Real", "theme": "urban", "region": "Kasztília-La Mancha"},
    {"id": "es-talavera", "parent": "ES-CM", "coords": [-4.8248, 39.9598], "name": "Talavera de la Reina", "theme": "urban", "region": "Kasztília-La Mancha"},
    {"id": "es-puertollano", "parent": "ES-CM", "coords": [-4.107, 38.6866], "name": "Puertollano", "theme": "urban", "region": "Kasztília-La Mancha"},
    {"id": "es-guadalajara", "parent": "ES-CM", "coords": [-3.1689, 40.6331], "name": "Guadalajara", "theme": "urban", "region": "Kasztília-La Mancha"},
    {"id": "es-alcala", "parent": "ES-MD", "coords": [-3.3686, 40.4818], "name": "Alcalá de Henares", "theme": "university", "region": "Madrid"},
    {"id": "es-aranjuez", "parent": "ES-MD", "coords": [-3.6038, 40.0357], "name": "Aranjuez", "theme": "heritage", "region": "Madrid"},
    {"id": "es-getafe", "parent": "ES-MD", "coords": [-3.732, 40.308], "name": "Getafe", "theme": "urban", "region": "Madrid"},
    {"id": "es-mostoles", "parent": "ES-MD", "coords": [-3.8648, 40.3223], "name": "Móstoles", "theme": "urban", "region": "Madrid"},
    {"id": "es-san-sebastian", "parent": "ES-PV", "coords": [-1.9812, 43.3183], "name": "San Sebastián", "theme": "coastal", "region": "Baszkföld"},
    {"id": "es-vitoria", "parent": "ES-PV", "coords": [-2.6733, 42.8467], "name": "Vitoria-Gasteiz", "theme": "urban", "region": "Baszkföld"},
    {"id": "es-getxo", "parent": "ES-PV", "coords": [-2.991, 43.3566], "name": "Getxo", "theme": "coastal", "region": "Baszkföld"},
    {"id": "es-portugalete", "parent": "ES-PV", "coords": [-3.02, 43.32], "name": "Portugalete", "theme": "port", "region": "Baszkföld"},
    {"id": "es-barakaldo", "parent": "ES-PV", "coords": [-2.987, 43.297], "name": "Barakaldo", "theme": "urban", "region": "Baszkföld"},
    {"id": "es-hondarribia", "parent": "ES-PV", "coords": [-1.789, 43.366], "name": "Hondarribia", "theme": "coastal", "region": "Baszkföld"},
    {"id": "es-gernika", "parent": "ES-PV", "coords": [-2.686, 43.317], "name": "Gernika-Lumo", "theme": "heritage", "region": "Baszkföld"},
    {"id": "es-pamplona", "parent": "ES-NA", "coords": [-1.6432, 42.8125], "name": "Pamplona", "theme": "university", "region": "Navarra"},
    {"id": "es-tudela", "parent": "ES-NA", "coords": [-1.6075, 42.0634], "name": "Tudela", "theme": "urban", "region": "Navarra"},
    {"id": "es-estella", "parent": "ES-NA", "coords": [-2.0324, 42.6714], "name": "Estella-Lizarra", "theme": "heritage", "region": "Navarra"},
    {"id": "es-tafalla", "parent": "ES-NA", "coords": [-1.6809, 42.5232], "name": "Tafalla", "theme": "urban", "region": "Navarra"},
    {"id": "es-logrono", "parent": "ES-RI", "coords": [-2.4457, 42.4627], "name": "Logroño", "theme": "wine", "region": "La Rioja"},
    {"id": "es-haro", "parent": "ES-RI", "coords": [-2.849, 42.575], "name": "Haro", "theme": "wine", "region": "La Rioja"},
    {"id": "es-calahorra", "parent": "ES-RI", "coords": [-1.965, 42.301], "name": "Calahorra", "theme": "urban", "region": "La Rioja"},
    {"id": "es-santo-domingo", "parent": "ES-RI", "coords": [-3.0, 42.441], "name": "Santo Domingo de la Calzada", "theme": "heritage", "region": "La Rioja"},
    {"id": "es-huesca", "parent": "ES-AR", "coords": [-0.4089, 42.1401], "name": "Huesca", "theme": "mountain", "region": "Aragónia"},
    {"id": "es-teruel", "parent": "ES-AR", "coords": [-1.1065, 40.3456], "name": "Teruel", "theme": "heritage", "region": "Aragónia"},
    {"id": "es-jaca", "parent": "ES-AR", "coords": [-0.5505, 42.572], "name": "Jaca", "theme": "mountain", "region": "Aragónia"},
    {"id": "es-alcaniz", "parent": "ES-AR", "coords": [-0.1348, 41.048], "name": "Alcañiz", "theme": "heritage", "region": "Aragónia"},
    {"id": "es-barbastro", "parent": "ES-AR", "coords": [0.14, 42.036], "name": "Barbastro", "theme": "wine", "region": "Aragónia"},
    {"id": "es-calatayud", "parent": "ES-AR", "coords": [-1.643, 41.3548], "name": "Calatayud", "theme": "heritage", "region": "Aragónia"},
    {"id": "es-santander", "parent": "ES-CB", "coords": [-3.8044, 43.4623], "name": "Santander", "theme": "coastal", "region": "Kantábria"},
    {"id": "es-torrelavega", "parent": "ES-CB", "coords": [-4.026, 43.35], "name": "Torrelavega", "theme": "urban", "region": "Kantábria"},
    {"id": "es-castro", "parent": "ES-CB", "coords": [-3.217, 43.382], "name": "Castro Urdiales", "theme": "coastal", "region": "Kantábria"},
    {"id": "es-laredo", "parent": "ES-CB", "coords": [-3.406, 43.411], "name": "Laredo", "theme": "coastal", "region": "Kantábria"},
    {"id": "es-oviedo", "parent": "ES-AS", "coords": [-5.85, 43.3619], "name": "Oviedo", "theme": "university", "region": "Asztúria"},
    {"id": "es-gijon", "parent": "ES-AS", "coords": [-5.661, 43.5322], "name": "Gijón", "theme": "coastal", "region": "Asztúria"},
    {"id": "es-aviles", "parent": "ES-AS", "coords": [-5.924, 43.555], "name": "Avilés", "theme": "port", "region": "Asztúria"},
    {"id": "es-cangas", "parent": "ES-AS", "coords": [-5.129, 43.35], "name": "Cangas de Onís", "theme": "mountain", "region": "Asztúria"},
    {"id": "es-palma", "parent": "ES-IB", "coords": [2.6502, 39.5696], "name": "Palma", "theme": "coastal", "region": "Baleár-szigetek"},
    {"id": "es-mahon", "parent": "ES-IB", "coords": [4.265, 39.888], "name": "Mahón", "theme": "port", "region": "Baleár-szigetek"},
    {"id": "es-inca", "parent": "ES-IB", "coords": [2.913, 39.718], "name": "Inca", "theme": "urban", "region": "Baleár-szigetek"},
    {"id": "es-manacor", "parent": "ES-IB", "coords": [3.211, 39.569], "name": "Manacor", "theme": "urban", "region": "Baleár-szigetek"},
    {"id": "es-las-palmas", "parent": "ES-CN", "coords": [-15.43, 28.1235], "name": "Las Palmas de Gran Canaria", "theme": "coastal", "region": "Kanári-szigetek"},
    {"id": "es-santa-cruz", "parent": "ES-CN", "coords": [-16.251, 28.463], "name": "Santa Cruz de Tenerife", "theme": "port", "region": "Kanári-szigetek"},
    {"id": "es-la-laguna", "parent": "ES-CN", "coords": [-16.314, 28.486], "name": "La Laguna", "theme": "university", "region": "Kanári-szigetek"},
    {"id": "es-telde", "parent": "ES-CN", "coords": [-15.418, 27.992], "name": "Telde", "theme": "urban", "region": "Kanári-szigetek"},
    {"id": "es-badajoz", "parent": "ES-EX", "coords": [-6.97, 38.878], "name": "Badajoz", "theme": "port", "region": "Extremadura"},
    {"id": "es-caceres", "parent": "ES-EX", "coords": [-6.373, 39.476], "name": "Cáceres", "theme": "heritage", "region": "Extremadura"},
    {"id": "es-murcia", "parent": "ES-MU", "coords": [-1.13, 37.9922], "name": "Murcia", "theme": "urban", "region": "Murcia"},
    {"id": "es-cartagena", "parent": "ES-MU", "coords": [-0.98, 37.625], "name": "Cartagena", "theme": "port", "region": "Murcia"},
    {"id": "es-lorca", "parent": "ES-MU", "coords": [-1.698, 37.671], "name": "Lorca", "theme": "heritage", "region": "Murcia"},
    {"id": "es-aguilas", "parent": "ES-MU", "coords": [-1.58, 37.406], "name": "Águilas", "theme": "coastal", "region": "Murcia"},
]

theme_desc_map = {
    "coastal": "egy tengerparti város kikötőkkel és strandokkal",
    "wine": "egy város híres borászati hagyományok közelében",
    "port": "egy fontos kikötő- és kereskedelmi hely",
    "heritage": "egy történelmi város erős kulturális örökséggel",
    "mountain": "egy hegyek vagy fennsíkok közelében fekvő város",
    "urban": "egy élénk város erős mindennapi és kulturális élettel",
    "university": "egy hagyományos egyetemi város"
}

def gen_city_poi(city):
    name = city["name"]
    region = city["region"]
    theme = city["theme"]
    
    # Simple description
    simple_desc = f"{name} {theme_desc_map[theme]} {region} régióban."
    
    # Advanced SEO description (80-150 words)
    adv_desc = f"{name} városa Spanyolország egyik gyöngyszeme, amely a(z) {region} autonóm közösség területén található. Ez a település híres a(z) {theme_desc_map[theme]} jellegéről, amely meghatározza mindennapjait és turisztikai vonzerejét. A látogatók itt megtalálhatják a modern városi élet dinamizmusát és a gazdag történelmi múlt emlékeit egyaránt. {name} kulturális és gazdasági szempontból is kiemelkedő szerepet tölt be a régióban, számos múzeumnak, fesztiválnak és gasztronómiai élménynek adva otthont. A helyi konyha a legfrissebb alapanyagokra épít, és hűen tükrözi a környék hagyományait. Legyen szó a történelmi városközpont felfedezéséről, a helyi parkok nyugalmáról vagy a pezsgő éjszakai életről, {name} mindenki számára kínál valami különlegeset. A város kiváló infrastruktúrája és barátságos lakói még emlékezetesebbé teszik az itt tartózkodást. SEO szempontból {name} egyre népszerűbb úticél a Spanyolországot felfedezni vágyó magyar utazók körében, köszönhetően egyedi hangulatának és autentikus spanyol karakterének."
    
    # 7 facts
    facts_adv = [
        f"{name} a(z) {region} régió egyik legfontosabb települése.",
        f"A város híres a(z) {theme} jellegű hangulatáról és építészetéről.",
        "Számos történelmi műemlék és modern látnivaló található a központjában.",
        "A helyi gasztronómia kiemelkedő szerepet játszik a város életében.",
        "Kiváló közlekedési kapcsolatokkal rendelkezik a környező városokkal.",
        "Évente számos kulturális fesztiválnak és eseménynek ad otthont.",
        "A város környéke ideális természetjáráshoz és kirándulásokhoz."
    ]

    return {
        "id": city["id"],
        "type": "city",
        "parent": city["parent"],
        "coords": city["coords"],
        "name": {"de": name, "hu": name, "ro": name, "en": name},
        "description": {"de": f"{name} ist {theme_desc_map[theme]} in {region}.", "hu": simple_desc, "ro": f"{name} este {theme_desc_map[theme]} în {region}.", "en": f"{name} is a city in {region}."},
        "descriptionAdvanced": {"de": "Placeholder", "en": "Placeholder", "hu": adv_desc, "ro": "Placeholder"},
        "facts": {"de": [f"Liegt in {region}."], "hu": [f"{region} régióban található."], "ro": [f"Situat în {region}."], "en": [f"Located in {region}."]},
        "factsAdvanced": {"de": [], "en": [], "hu": facts_adv, "ro": []},
        "faq": {"de": {"a":"b"}, "en": {"a":"b"}, "hu": {"a":"b"}, "ro": {"a":"b"}}
    }

all_city_pois = []
for city in cities:
    all_city_pois.append(gen_city_poi(city))

print("import { POI } from './poi';")
print("export const spainCitiesExtra: POI[] = " + json.dumps(all_city_pois, indent=2, ensure_ascii=False) + ";")
