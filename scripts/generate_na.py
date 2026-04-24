import json
import math
import os

GEOJSON_PATH = "C:/Users/User/ne_admin1_10m.geojson"
MAPS_DIR = "C:/Users/User/plizio-repo/lib/visualLab/maps"
DATA_DIR = "C:/Users/User/plizio-repo/lib/visualLab/data"

os.makedirs(MAPS_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

COUNTRIES = {
    "US": "usa", "CA": "canada", "MX": "mexico",
    "GT": "guatemala", "HN": "honduras", "NI": "nicaragua",
    "CR": "costarica", "PA": "panama", "CU": "cuba",
    "DO": "dominicanrepublic", "HT": "haiti", "JM": "jamaica",
    "BS": "bahamas", "TT": "trinidad", "BZ": "belize",
    "SV": "elsalvador"
}

try:
    with open(GEOJSON_PATH, "r", encoding="utf-8") as f:
        geojson = json.load(f)
except Exception as e:
    print(f"Error loading {GEOJSON_PATH}: {e}")
    exit(1)

# Filter features
features_by_country = {code: [] for code in COUNTRIES.keys()}
for feat in geojson.get("features", []):
    props = feat.get("properties", {})
    iso_a2 = props.get("iso_a2")
    
    # Handle cases where iso_a2 is not present or '-99'
    if iso_a2 == '-99' or not iso_a2:
        adm0_a3 = props.get("adm0_a3")
        if adm0_a3 == "FRA": iso_a2 = "FR" # Example
        # You can add more mappings if needed
    
    if iso_a2 in COUNTRIES:
        features_by_country[iso_a2].append(feat)

def project_coords(coords, min_lon, max_lon, min_lat, max_lat, width, height):
    proj_coords = []
    for lon, lat in coords:
        x = (lon - min_lon) * (width / (max_lon - min_lon))
        y = (max_lat - lat) * (height / (max_lat - min_lat))
        proj_coords.append((x, y))
    return proj_coords

def coords_to_path(coords):
    if not coords: return ""
    path = f"M{coords[0][0]:.2f},{coords[0][1]:.2f}"
    for x, y in coords[1:]:
        path += f"L{x:.2f},{y:.2f}"
    path += "Z"
    return path

# 1. GENERATE COUNTRY MAPS
north_america_features = []
na_all_lons = []
na_all_lats = []

for iso, slug in COUNTRIES.items():
    feats = features_by_country[iso]
    if not feats:
        print(f"No features found for {iso}")
        continue
    
    all_lons = []
    all_lats = []
    for feat in feats:
        geom = feat.get("geometry")
        if not geom: continue
        polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
        for poly in polys:
            for ring in poly:
                for lon, lat in ring:
                    all_lons.append(lon)
                    all_lats.append(lat)
                    na_all_lons.append(lon)
                    na_all_lats.append(lat)
    
    if not all_lons: continue
    
    min_lon, max_lon = min(all_lons), max(all_lons)
    min_lat, max_lat = min(all_lats), max(all_lats)
    
    avg_lat = (min_lat + max_lat) / 2
    cos_lat = math.cos(math.radians(avg_lat))
    if cos_lat < 0.1: cos_lat = 0.1
    
    width = 1000
    height = width * ((max_lat - min_lat) / ((max_lon - min_lon) * cos_lat))
    
    ts_content = f"""// AUTO-GENERATED
export const {slug}ViewBox = "0 0 {width:.2f} {height:.2f}";

export const {iso}_PROJECTION = {{
  minLon: {min_lon}, maxLon: {max_lon},
  minLat: {min_lat}, maxLat: {max_lat},
  width: {width:.2f}, height: {height:.2f},
}};

export interface {slug.capitalize()}RegionPath {{
  id: string;
  name: {{ de: string; hu: string; ro: string; en: string }};
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}}

export const {slug}Map: {slug.capitalize()}RegionPath[] = [
"""
    
    country_paths = []
    for feat in feats:
        props = feat.get("properties", {})
        name = props.get("name", "") or props.get("name_en", "") or "Unknown"
        name = name.replace('"', '\\"')
        adm1_code = props.get('adm1_code', '')
        geom = feat.get("geometry")
        
        path_str = ""
        if geom:
            polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
            for poly in polys:
                for ring in poly:
                    proj = project_coords(ring, min_lon, max_lon, min_lat, max_lat, width, height)
                    path_str += coords_to_path(proj)
            country_paths.append(path_str)
        
        ts_content += f"""  {{
    id: "{adm1_code}",
    name: {{ de: "{name}", hu: "{name}", ro: "{name}", en: "{name}" }},
    capital: "",
    labelX: 0, labelY: 0,
    path: "{path_str}"
  }},
"""
    
    ts_content += "];\n"
    
    with open(os.path.join(MAPS_DIR, f"{slug}.svg.ts"), "w", encoding="utf-8") as f:
        f.write(ts_content)
        
    north_america_features.append({
        "slug": slug,
        "name": slug.capitalize(),
        "paths": country_paths,
        "feats": feats
    })
    print(f"Generated maps/{slug}.svg.ts")

# 2. GENERATE NORTH AMERICA MAP
if na_all_lons:
    na_min_lon, na_max_lon = min(na_all_lons), max(na_all_lons)
    na_min_lat, na_max_lat = min(na_all_lats), max(na_all_lats)
    na_avg_lat = (na_min_lat + na_max_lat) / 2
    na_cos_lat = math.cos(math.radians(na_avg_lat))
    if na_cos_lat < 0.1: na_cos_lat = 0.1
    
    na_width = 1000
    na_height = na_width * ((na_max_lat - na_min_lat) / ((na_max_lon - na_min_lon) * na_cos_lat))
    
    na_content = f"""// AUTO-GENERATED
export const northamericaViewBox = "0 0 {na_width:.2f} {na_height:.2f}";

export const NA_PROJECTION = {{
  minLon: {na_min_lon}, maxLon: {na_max_lon},
  minLat: {na_min_lat}, maxLat: {na_max_lat},
  width: {na_width:.2f}, height: {na_height:.2f},
}};

export interface NorthamericaRegionPath {{
  id: string;
  name: {{ de: string; hu: string; ro: string; en: string }};
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}}

export const northamericaMap: NorthamericaRegionPath[] = [
"""
    for country in north_america_features:
        combined_path = ""
        for feat in country["feats"]:
            geom = feat.get("geometry")
            if geom:
                polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
                for poly in polys:
                    for ring in poly:
                        proj = project_coords(ring, na_min_lon, na_max_lon, na_min_lat, na_max_lat, na_width, na_height)
                        combined_path += coords_to_path(proj)
        
        na_content += f"""  {{
    id: "{country['slug']}",
    name: {{ de: "{country['name']}", hu: "{country['name']}", ro: "{country['name']}", en: "{country['name']}" }},
    capital: "",
    labelX: 0, labelY: 0,
    path: "{combined_path}"
  }},
"""
    na_content += "];\n"
    with open(os.path.join(MAPS_DIR, "northamerica.svg.ts"), "w", encoding="utf-8") as f:
        f.write(na_content)
    print("Generated maps/northamerica.svg.ts")

# 3. GENERATE POI FILES
poi_data = {
    "usa": [
        {"id": "usa_cap", "type": "capital", "name": "Washington, D.C.", "desc": "Capital of the USA", "coords": [-77.0369, 38.9072]},
        {"id": "usa_nyc", "type": "city", "name": "New York City", "desc": "Largest city in the US", "coords": [-74.0060, 40.7128]},
        {"id": "usa_la", "type": "city", "name": "Los Angeles", "desc": "Major city in California", "coords": [-118.2437, 34.0522]},
        {"id": "usa_chi", "type": "city", "name": "Chicago", "desc": "Major city in Illinois", "coords": [-87.6298, 41.8781]},
        {"id": "usa_hou", "type": "city", "name": "Houston", "desc": "Major city in Texas", "coords": [-95.3698, 29.7604]},
        {"id": "usa_phx", "type": "city", "name": "Phoenix", "desc": "Major city in Arizona", "coords": [-112.0740, 33.4484]},
        {"id": "usa_phi", "type": "city", "name": "Philadelphia", "desc": "Major city in Pennsylvania", "coords": [-75.1652, 39.9526]},
        {"id": "usa_sa", "type": "city", "name": "San Antonio", "desc": "Major city in Texas", "coords": [-98.4936, 29.4241]},
        {"id": "usa_sd", "type": "city", "name": "San Diego", "desc": "Major city in California", "coords": [-117.1611, 32.7157]},
        {"id": "usa_dal", "type": "city", "name": "Dallas", "desc": "Major city in Texas", "coords": [-96.7970, 32.7767]},
        {"id": "usa_sj", "type": "city", "name": "San Jose", "desc": "Major city in California", "coords": [-121.8863, 37.3382]},
        {"id": "usa_aus", "type": "city", "name": "Austin", "desc": "Capital of Texas", "coords": [-97.7431, 30.2672]},
        {"id": "usa_jax", "type": "city", "name": "Jacksonville", "desc": "Major city in Florida", "coords": [-81.6557, 30.3322]},
        {"id": "usa_sf", "type": "city", "name": "San Francisco", "desc": "Major city in California", "coords": [-122.4194, 37.7749]},
        {"id": "usa_col", "type": "city", "name": "Columbus", "desc": "Capital of Ohio", "coords": [-82.9988, 39.9612]},
        {"id": "usa_clt", "type": "city", "name": "Charlotte", "desc": "Major city in North Carolina", "coords": [-80.8431, 35.2271]},
        {"id": "usa_sea", "type": "city", "name": "Seattle", "desc": "Major city in Washington", "coords": [-122.3321, 47.6062]},
        {"id": "usa_den", "type": "city", "name": "Denver", "desc": "Capital of Colorado", "coords": [-104.9903, 39.7392]},
        {"id": "usa_mia", "type": "city", "name": "Miami", "desc": "Major city in Florida", "coords": [-80.1918, 25.7617]},
        {"id": "usa_bos", "type": "city", "name": "Boston", "desc": "Capital of Massachusetts", "coords": [-71.0589, 42.3601]},
        {"id": "usa_grandcanyon", "type": "landmark", "name": "Grand Canyon", "desc": "Iconic canyon in Arizona", "coords": [-112.1129, 36.1069]},
        {"id": "usa_yellowstone", "type": "landmark", "name": "Yellowstone", "desc": "National Park", "coords": [-110.5885, 44.4280]},
        {"id": "usa_yosemite", "type": "landmark", "name": "Yosemite", "desc": "National Park in California", "coords": [-119.5383, 37.8651]},
        {"id": "usa_rushmore", "type": "landmark", "name": "Mount Rushmore", "desc": "Monument in South Dakota", "coords": [-103.4591, 43.8791]},
        {"id": "usa_statueliberty", "type": "landmark", "name": "Statue of Liberty", "desc": "Iconic statue in NY", "coords": [-74.0445, 40.6892]},
        {"id": "usa_goldengate", "type": "landmark", "name": "Golden Gate Bridge", "desc": "Iconic bridge in SF", "coords": [-122.4783, 37.8199]},
        {"id": "usa_mississippi", "type": "landmark", "name": "Mississippi River", "desc": "Major US river", "coords": [-90.1828, 38.6245]},
        {"id": "usa_rockies", "type": "landmark", "name": "Rocky Mountains", "desc": "Major mountain range", "coords": [-105.6836, 40.3428]},
        {"id": "usa_appalachian", "type": "landmark", "name": "Appalachian Mountains", "desc": "Mountain range in the East", "coords": [-83.5021, 35.6131]},
        {"id": "usa_denali", "type": "landmark", "name": "Denali", "desc": "Highest mountain peak in North America", "coords": [-151.0074, 63.0692]},
    ],
    "canada": [
        {"id": "can_cap", "type": "capital", "name": "Ottawa", "desc": "Capital of Canada", "coords": [-75.6972, 45.4215]},
        {"id": "can_tor", "type": "city", "name": "Toronto", "desc": "Largest city in Canada", "coords": [-79.3832, 43.6532]},
        {"id": "can_mon", "type": "city", "name": "Montreal", "desc": "Major city in Quebec", "coords": [-73.5673, 45.5017]},
        {"id": "can_van", "type": "city", "name": "Vancouver", "desc": "Major city in British Columbia", "coords": [-123.1207, 49.2827]},
        {"id": "can_cal", "type": "city", "name": "Calgary", "desc": "Major city in Alberta", "coords": [-114.0719, 51.0447]},
        {"id": "can_edm", "type": "city", "name": "Edmonton", "desc": "Capital of Alberta", "coords": [-113.4909, 53.5444]},
        {"id": "can_que", "type": "city", "name": "Quebec City", "desc": "Capital of Quebec", "coords": [-71.2080, 46.8139]},
        {"id": "can_win", "type": "city", "name": "Winnipeg", "desc": "Capital of Manitoba", "coords": [-97.1384, 49.8951]},
        {"id": "can_hal", "type": "city", "name": "Halifax", "desc": "Capital of Nova Scotia", "coords": [-63.5728, 44.6488]},
        {"id": "can_vic", "type": "city", "name": "Victoria", "desc": "Capital of British Columbia", "coords": [-123.3656, 48.4284]},
        {"id": "can_ss", "type": "city", "name": "Saskatoon", "desc": "Major city in Saskatchewan", "coords": [-106.6700, 52.1332]},
        {"id": "can_reg", "type": "city", "name": "Regina", "desc": "Capital of Saskatchewan", "coords": [-104.6158, 50.4492]},
        {"id": "can_stj", "type": "city", "name": "St. John's", "desc": "Capital of Newfoundland and Labrador", "coords": [-52.7126, 47.5615]},
        {"id": "can_cha", "type": "city", "name": "Charlottetown", "desc": "Capital of PEI", "coords": [-63.1311, 46.2382]},
        {"id": "can_fre", "type": "city", "name": "Fredericton", "desc": "Capital of New Brunswick", "coords": [-66.6431, 45.9636]},
        {"id": "can_whi", "type": "city", "name": "Whitehorse", "desc": "Capital of Yukon", "coords": [-135.0568, 60.7212]},
        {"id": "can_yel", "type": "city", "name": "Yellowknife", "desc": "Capital of NWT", "coords": [-114.3718, 62.4540]},
        {"id": "can_iqa", "type": "city", "name": "Iqaluit", "desc": "Capital of Nunavut", "coords": [-68.5145, 63.7467]},
        {"id": "can_banff", "type": "landmark", "name": "Banff National Park", "desc": "National park in the Rockies", "coords": [-115.5683, 51.1784]},
        {"id": "can_niagara", "type": "landmark", "name": "Niagara Falls", "desc": "Famous waterfalls", "coords": [-79.0849, 43.0896]},
        {"id": "can_cntower", "type": "landmark", "name": "CN Tower", "desc": "Iconic tower in Toronto", "coords": [-79.3871, 43.6426]},
        {"id": "can_jasper", "type": "landmark", "name": "Jasper National Park", "desc": "National park in Alberta", "coords": [-117.7615, 52.8737]},
        {"id": "can_whistler", "type": "landmark", "name": "Whistler", "desc": "Ski resort town", "coords": [-122.9574, 50.1163]},
        {"id": "can_fundy", "type": "landmark", "name": "Bay of Fundy", "desc": "Known for high tides", "coords": [-65.0481, 45.0000]},
        {"id": "can_louise", "type": "landmark", "name": "Lake Louise", "desc": "Glacial lake in Banff", "coords": [-116.1773, 51.4254]},
        {"id": "can_mackenzie", "type": "landmark", "name": "Mackenzie River", "desc": "Longest river system in Canada", "coords": [-134.1953, 69.2683]},
        {"id": "can_stlawrence", "type": "landmark", "name": "St. Lawrence River", "desc": "Major river connecting Great Lakes to Atlantic", "coords": [-69.6455, 48.0652]},
        {"id": "can_rockies", "type": "landmark", "name": "Canadian Rockies", "desc": "Mountain range in western Canada", "coords": [-118.0000, 53.0000]},
        {"id": "can_grosmorne", "type": "landmark", "name": "Gros Morne", "desc": "National park in Newfoundland", "coords": [-57.7550, 49.6105]},
        {"id": "can_logan", "type": "landmark", "name": "Mount Logan", "desc": "Highest peak in Canada", "coords": [-140.4055, 60.5671]},
    ],
    "mexico": [
        {"id": "mex_cap", "type": "capital", "name": "Mexico City", "desc": "Capital of Mexico", "coords": [-99.1332, 19.4326]},
        {"id": "mex_gua", "type": "city", "name": "Guadalajara", "desc": "Major city in Jalisco", "coords": [-103.3496, 20.6597]},
        {"id": "mex_mon", "type": "city", "name": "Monterrey", "desc": "Major city in Nuevo Leon", "coords": [-100.3161, 25.6866]},
        {"id": "mex_pue", "type": "city", "name": "Puebla", "desc": "Major city in Puebla", "coords": [-98.2062, 19.0414]},
        {"id": "mex_tol", "type": "city", "name": "Toluca", "desc": "Major city in State of Mexico", "coords": [-99.6569, 19.2826]},
        {"id": "mex_tij", "type": "city", "name": "Tijuana", "desc": "Major border city in Baja California", "coords": [-117.0037, 32.5149]},
        {"id": "mex_leo", "type": "city", "name": "Leon", "desc": "Major city in Guanajuato", "coords": [-101.6828, 21.1246]},
        {"id": "mex_jua", "type": "city", "name": "Ciudad Juarez", "desc": "Major border city in Chihuahua", "coords": [-106.4850, 31.7352]},
        {"id": "mex_tor", "type": "city", "name": "Torreon", "desc": "Major city in Coahuila", "coords": [-103.4425, 25.5428]},
        {"id": "mex_que", "type": "city", "name": "Queretaro", "desc": "Major city in Queretaro", "coords": [-100.3899, 20.5888]},
        {"id": "mex_mer", "type": "city", "name": "Merida", "desc": "Capital of Yucatan", "coords": [-89.6237, 20.9674]},
        {"id": "mex_slp", "type": "city", "name": "San Luis Potosi", "desc": "Major city in SLP", "coords": [-100.9792, 22.1565]},
        {"id": "mex_agu", "type": "city", "name": "Aguascalientes", "desc": "Major city in Aguascalientes", "coords": [-102.2916, 21.8853]},
        {"id": "mex_her", "type": "city", "name": "Hermosillo", "desc": "Capital of Sonora", "coords": [-110.9613, 29.0730]},
        {"id": "mex_sal", "type": "city", "name": "Saltillo", "desc": "Capital of Coahuila", "coords": [-100.9732, 25.4215]},
        {"id": "mex_chi", "type": "city", "name": "Chihuahua", "desc": "Capital of Chihuahua", "coords": [-106.0775, 28.6320]},
        {"id": "mex_cul", "type": "city", "name": "Culiacan", "desc": "Capital of Sinaloa", "coords": [-107.3940, 24.8091]},
        {"id": "mex_mor", "type": "city", "name": "Morelia", "desc": "Capital of Michoacan", "coords": [-101.1923, 19.7008]},
        {"id": "mex_aca", "type": "city", "name": "Acapulco", "desc": "Major resort city", "coords": [-99.8901, 16.8531]},
        {"id": "mex_can", "type": "city", "name": "Cancun", "desc": "Major resort city in Quintana Roo", "coords": [-86.8515, 21.1619]},
        {"id": "mex_chichen", "type": "landmark", "name": "Chichen Itza", "desc": "Ancient Maya city", "coords": [-88.5678, 20.6843]},
        {"id": "mex_teoti", "type": "landmark", "name": "Teotihuacan", "desc": "Ancient Mesoamerican city", "coords": [-98.8436, 19.6925]},
        {"id": "mex_palenque", "type": "landmark", "name": "Palenque", "desc": "Maya archaeological site", "coords": [-92.0460, 17.4848]},
        {"id": "mex_tulum", "type": "landmark", "name": "Tulum", "desc": "Pre-Columbian Maya walled city", "coords": [-87.4295, 20.2114]},
        {"id": "mex_cobre", "type": "landmark", "name": "Copper Canyon", "desc": "Group of canyons in Chihuahua", "coords": [-107.7471, 27.5218]},
        {"id": "mex_sumidero", "type": "landmark", "name": "Sumidero Canyon", "desc": "Canyon in Chiapas", "coords": [-93.0906, 16.8377]},
        {"id": "mex_cenotes", "type": "landmark", "name": "Cenote Ik Kil", "desc": "Famous cenote in Yucatan", "coords": [-88.5507, 20.6612]},
        {"id": "mex_pico", "type": "landmark", "name": "Pico de Orizaba", "desc": "Highest mountain in Mexico", "coords": [-97.2681, 19.0305]},
        {"id": "mex_popocatepetl", "type": "landmark", "name": "Popocatepetl", "desc": "Active volcano", "coords": [-98.6275, 19.0222]},
        {"id": "mex_uxmal", "type": "landmark", "name": "Uxmal", "desc": "Ancient Maya city", "coords": [-89.7711, 20.3594]},
    ]
}

# Generate generic POI for rest of countries
for iso, slug in COUNTRIES.items():
    if slug not in poi_data:
        poi_data[slug] = []
        for i in range(1, 31):
            poi_data[slug].append({
                "id": f"{slug}_{i}",
                "type": "city" if i <= 20 else "landmark",
                "name": f"{slug.capitalize()} POI {i}",
                "desc": f"Description for {slug.capitalize()} POI {i}",
                "coords": [0, 0] # Placeholder for smaller countries
            })

for slug, pois in poi_data.items():
    ts_content = f"""// AUTO-GENERATED
import type {{ POI }} from "./poi";

export const {slug}Country: POI[] = [];
export const {slug}Regions: POI[] = [];

export const {slug}Cities: POI[] = [
"""
    for poi in pois:
        if poi["type"] in ("city", "capital"):
            ts_content += f"""  {{
    id: "{poi['id']}",
    categoryId: "{poi['type']}",
    name: {{ de: "{poi['name']}", hu: "{poi['name']}", ro: "{poi['name']}", en: "{poi['name']}" }},
    description: {{ de: "{poi['desc']}", hu: "{poi['desc']}", ro: "{poi['desc']}", en: "{poi['desc']}" }},
    position: [{poi['coords'][0]}, {poi['coords'][1]}]
  }},
"""
    ts_content += f"""];

export const {slug}Landmarks: POI[] = [
"""
    for poi in pois:
        if poi["type"] == "landmark":
            ts_content += f"""  {{
    id: "{poi['id']}",
    categoryId: "landmark",
    name: {{ de: "{poi['name']}", hu: "{poi['name']}", ro: "{poi['name']}", en: "{poi['name']}" }},
    description: {{ de: "{poi['desc']}", hu: "{poi['desc']}", ro: "{poi['desc']}", en: "{poi['desc']}" }},
    position: [{poi['coords'][0]}, {poi['coords'][1]}]
  }},
"""
    ts_content += f"""];

export const {slug}AllPoi: POI[] = [...{slug}Country, ...{slug}Regions, ...{slug}Cities, ...{slug}Landmarks];
"""
    with open(os.path.join(DATA_DIR, f"{slug}Poi.ts"), "w", encoding="utf-8") as f:
        f.write(ts_content)
    print(f"Generated data/{slug}Poi.ts")

print("Finished generating all files.")
