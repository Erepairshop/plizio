"""Generate continent + country SVG path TS files for SA / Africa.

Reuses pattern from generate_na.py but ONLY emits the .svg.ts files (no POI files).
Source: C:/Users/User/ne_admin1_10m.geojson (admin-1 features with iso_a2).
"""
import json
import math
import os
import sys

GEOJSON_PATH = "C:/Users/User/ne_admin1_10m.geojson"
MAPS_DIR = "C:/Users/User/plizio-repo/lib/visualLab/maps"

CONTINENTS = {
    "southamerica": {
        "viewbox_label": "southamerica",
        "iso_label": "SA",
        "lon_clip": (-95, -30),
        "lat_clip": (-60, 15),
        "countries": {
            "AR": "argentina", "BO": "bolivia", "BR": "brazil", "CL": "chile",
            "CO": "colombia", "EC": "ecuador", "GF": "frenchguiana", "GY": "guyana",
            "PY": "paraguay", "PE": "peru", "SR": "suriname", "UY": "uruguay",
            "VE": "venezuela",
        },
    },
    "africa": {
        "viewbox_label": "africa",
        "iso_label": "AF",
        "lon_clip": (-25, 60),
        "lat_clip": (-40, 40),
        "countries": {
            "DZ": "algeria", "AO": "angola", "BJ": "benin", "BW": "botswana",
            "BF": "burkinafaso", "BI": "burundi", "CV": "capeverde", "CM": "cameroon",
            "CF": "centralafricanrepublic", "TD": "chad", "KM": "comoros", "CG": "congo",
            "CD": "drcongo", "DJ": "djibouti", "EG": "egypt", "GQ": "equatorialguinea",
            "ER": "eritrea", "ET": "ethiopia", "GA": "gabon", "GM": "gambia",
            "GH": "ghana", "GN": "guinea", "GW": "guineabissau", "CI": "ivorycoast",
            "KE": "kenya", "LS": "lesotho", "LR": "liberia", "LY": "libya",
            "MG": "madagascar", "MW": "malawi", "ML": "mali", "MR": "mauritania",
            "MU": "mauritius", "MA": "morocco", "MZ": "mozambique", "NA": "namibia",
            "NE": "niger", "NG": "nigeria", "RW": "rwanda", "ST": "saotome",
            "SN": "senegal", "SC": "seychelles", "SL": "sierraleone", "SO": "somalia",
            "ZA": "southafrica", "SS": "southsudan", "SD": "sudan", "SZ": "eswatini",
            "TZ": "tanzania", "TG": "togo", "TN": "tunisia", "UG": "uganda",
            "ZM": "zambia", "ZW": "zimbabwe",
        },
    },
}


def project_coords(coords, min_lon, max_lon, min_lat, max_lat, width, height):
    out = []
    for lon, lat in coords:
        x = (lon - min_lon) * (width / (max_lon - min_lon))
        y = (max_lat - lat) * (height / (max_lat - min_lat))
        out.append((x, y))
    return out


def coords_to_path(coords):
    if not coords: return ""
    p = f"M{coords[0][0]:.2f},{coords[0][1]:.2f}"
    for x, y in coords[1:]:
        p += f"L{x:.2f},{y:.2f}"
    p += "Z"
    return p


def slug_pascal(slug):
    return slug[:1].upper() + slug[1:]


def generate(continent_key, geojson):
    cfg = CONTINENTS[continent_key]
    countries = cfg["countries"]
    lon_min_clip, lon_max_clip = cfg["lon_clip"]
    lat_min_clip, lat_max_clip = cfg["lat_clip"]

    features_by_country = {iso: [] for iso in countries}
    for feat in geojson.get("features", []):
        props = feat.get("properties", {})
        iso = props.get("iso_a2")
        if iso in features_by_country:
            features_by_country[iso].append(feat)

    cont_lons, cont_lats = [], []
    cont_countries = []

    for iso, slug in countries.items():
        feats = features_by_country.get(iso, [])
        if not feats:
            print(f"  [warn] no features for {iso} ({slug})")
            continue

        all_lons, all_lats = [], []
        for feat in feats:
            geom = feat.get("geometry") or {}
            polys = geom.get("coordinates", [])
            if geom.get("type") == "Polygon":
                polys = [polys]
            for poly in polys:
                for ring in poly:
                    for lon, lat in ring:
                        if lon < lon_min_clip or lon > lon_max_clip: continue
                        if lat < lat_min_clip or lat > lat_max_clip: continue
                        all_lons.append(lon); all_lats.append(lat)
                        cont_lons.append(lon); cont_lats.append(lat)
        if not all_lons:
            continue

        min_lon, max_lon = min(all_lons), max(all_lons)
        min_lat, max_lat = min(all_lats), max(all_lats)
        avg_lat = (min_lat + max_lat) / 2
        cos_lat = max(0.1, math.cos(math.radians(avg_lat)))
        width = 1000.0
        height = width * ((max_lat - min_lat) / max(0.0001, (max_lon - min_lon) * cos_lat))

        Pascal = slug_pascal(slug)
        ts = (
            "// AUTO-GENERATED\n"
            f"export const {slug}ViewBox = \"0 0 {width:.2f} {height:.2f}\";\n\n"
            f"export const {iso}_PROJECTION = {{\n"
            f"  minLon: {min_lon}, maxLon: {max_lon},\n"
            f"  minLat: {min_lat}, maxLat: {max_lat},\n"
            f"  width: {width:.2f}, height: {height:.2f},\n"
            "};\n\n"
            f"export function projectCoords{iso}(lon: number, lat: number): [number, number] {{\n"
            f"  const p = {iso}_PROJECTION;\n"
            "  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;\n"
            "  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;\n"
            "  return [x, y];\n"
            "}\n\n"
            f"export interface {Pascal}RegionPath {{\n"
            "  id: string;\n"
            "  name: { de: string; hu: string; ro: string; en: string };\n"
            "  capital: string;\n"
            "  labelX: number;\n"
            "  labelY: number;\n"
            "  path: string;\n"
            "}\n\n"
            f"export const {slug}Map: {Pascal}RegionPath[] = [\n"
        )

        country_combined_path = ""
        for feat in feats:
            props = feat.get("properties", {})
            name = (props.get("name") or props.get("name_en") or "Unknown").replace('"', '\\"')
            adm1 = props.get("adm1_code", "")
            geom = feat.get("geometry") or {}
            polys = geom.get("coordinates", [])
            if geom.get("type") == "Polygon":
                polys = [polys]
            path_str = ""
            for poly in polys:
                for ring in poly:
                    proj = project_coords(ring, min_lon, max_lon, min_lat, max_lat, width, height)
                    path_str += coords_to_path(proj)
            country_combined_path += path_str
            ts += (
                "  {\n"
                f"    id: \"{adm1}\",\n"
                f"    name: {{ de: \"{name}\", hu: \"{name}\", ro: \"{name}\", en: \"{name}\" }},\n"
                "    capital: \"\",\n"
                "    labelX: 0, labelY: 0,\n"
                f"    path: \"{path_str}\"\n"
                "  },\n"
            )
        ts += "];\n"

        out_path = os.path.join(MAPS_DIR, f"{slug}.svg.ts")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(ts)
        print(f"  wrote {slug}.svg.ts ({len(feats)} feats)")
        cont_countries.append((iso, slug, feats))

    if not cont_lons:
        return
    cmin_lon, cmax_lon = min(cont_lons), max(cont_lons)
    cmin_lat, cmax_lat = min(cont_lats), max(cont_lats)
    cavg_lat = (cmin_lat + cmax_lat) / 2
    ccos_lat = max(0.1, math.cos(math.radians(cavg_lat)))
    cwidth = 1000.0
    cheight = cwidth * ((cmax_lat - cmin_lat) / max(0.0001, (cmax_lon - cmin_lon) * ccos_lat))

    iso_label = cfg["iso_label"]
    Pascal = slug_pascal(continent_key)
    cont_ts = (
        "// AUTO-GENERATED\n"
        f"export const {continent_key}ViewBox = \"0 0 {cwidth:.2f} {cheight:.2f}\";\n\n"
        f"export const {iso_label}_PROJECTION = {{\n"
        f"  minLon: {cmin_lon}, maxLon: {cmax_lon},\n"
        f"  minLat: {cmin_lat}, maxLat: {cmax_lat},\n"
        f"  width: {cwidth:.2f}, height: {cheight:.2f},\n"
        "};\n\n"
        f"export function projectCoords{iso_label}(lon: number, lat: number): [number, number] {{\n"
        f"  const p = {iso_label}_PROJECTION;\n"
        "  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;\n"
        "  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;\n"
        "  return [x, y];\n"
        "}\n\n"
        f"export interface {Pascal}RegionPath {{\n"
        "  id: string;\n"
        "  name: { de: string; hu: string; ro: string; en: string };\n"
        "  capital: string;\n"
        "  labelX: number;\n"
        "  labelY: number;\n"
        "  path: string;\n"
        "}\n\n"
        f"export const {continent_key}Map: {Pascal}RegionPath[] = [\n"
    )
    for iso, slug, feats in cont_countries:
        combined = ""
        for feat in feats:
            geom = feat.get("geometry") or {}
            polys = geom.get("coordinates", [])
            if geom.get("type") == "Polygon":
                polys = [polys]
            for poly in polys:
                for ring in poly:
                    proj = project_coords(ring, cmin_lon, cmax_lon, cmin_lat, cmax_lat, cwidth, cheight)
                    combined += coords_to_path(proj)
        Slugp = slug_pascal(slug)
        cont_ts += (
            "  {\n"
            f"    id: \"{slug}\",\n"
            f"    name: {{ de: \"{Slugp}\", hu: \"{Slugp}\", ro: \"{Slugp}\", en: \"{Slugp}\" }},\n"
            "    capital: \"\",\n"
            "    labelX: 0, labelY: 0,\n"
            f"    path: \"{combined}\"\n"
            "  },\n"
        )
    cont_ts += "];\n"
    out_path = os.path.join(MAPS_DIR, f"{continent_key}.svg.ts")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(cont_ts)
    print(f"wrote {continent_key}.svg.ts (cont)")


def main():
    if not os.path.exists(GEOJSON_PATH):
        print(f"ERROR: {GEOJSON_PATH} not found"); sys.exit(1)
    print(f"loading {GEOJSON_PATH} ({os.path.getsize(GEOJSON_PATH)//1024} KB)")
    with open(GEOJSON_PATH, "r", encoding="utf-8") as f:
        geojson = json.load(f)
    print(f"  {len(geojson.get('features', []))} features")

    for cont in ["southamerica", "africa"]:
        print(f"=== {cont} ===")
        generate(cont, geojson)


if __name__ == "__main__":
    main()
