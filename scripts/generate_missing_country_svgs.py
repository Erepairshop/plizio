"""Generate per-country svg.ts for Asia + Oceania from Natural Earth admin-1 GeoJSON.

Continues generate_continent_svg.py (which skipped Asia country files and lacks Oceania).
Source: C:/Users/User/ne_admin1_10m.geojson
"""
import json, math, os

GEOJSON_PATH = "C:/Users/User/ne_admin1_10m.geojson"
MAPS_DIR = "C:/Users/User/plizio-repo/lib/visualLab/maps"

CONTINENTS = {
    "asia": {
        "iso_label": "AS",
        "lon_clip": (25, 180),
        "lat_clip": (-12, 60),
        "countries": {
            "CN": "china", "JP": "japan", "KR": "southkorea", "KP": "northkorea",
            "MN": "mongolia", "VN": "vietnam", "LA": "laos", "KH": "cambodia",
            "TH": "thailand", "MM": "myanmar", "MY": "malaysia", "SG": "singapore",
            "ID": "indonesia", "PH": "philippines", "BN": "brunei", "IN": "india",
            "PK": "pakistan", "BD": "bangladesh", "LK": "srilanka", "NP": "nepal",
            "BT": "bhutan", "MV": "maldives", "AF": "afghanistan", "IR": "iran",
            "IQ": "iraq", "SY": "syria", "LB": "lebanon", "JO": "jordan",
            "IL": "israel", "PS": "palestine", "SA": "saudiarabia", "YE": "yemen",
            "OM": "oman", "AE": "uae", "QA": "qatar", "BH": "bahrain",
            "KW": "kuwait", "TR": "turkey", "GE": "georgia",
            "AM": "armenia", "AZ": "azerbaijan", "KZ": "kazakhstan", "UZ": "uzbekistan",
            "TM": "turkmenistan", "KG": "kyrgyzstan", "TJ": "tajikistan", "TW": "taiwan",
            "TL": "timorleste", "RU": "russia",
        },
    },
    "oceania": {
        "iso_label": "OC",
        "lon_clip": (110, 220),  # Wraps date line — handled separately
        "lat_clip": (-50, 10),
        "countries": {
            "AU": "australia", "NZ": "newzealand", "PG": "papuanewguinea",
            "FJ": "fiji", "SB": "solomonislands", "VU": "vanuatu",
            "NC": "newcaledonia", "PF": "frenchpolynesia", "WS": "samoa",
            "TO": "tonga", "KI": "kiribati", "FM": "micronesia",
            "MH": "marshallislands", "PW": "palau", "NR": "nauru",
            "TV": "tuvalu", "CK": "cookislands",
        },
    },
}


def project_coords(coords, min_lon, max_lon, min_lat, max_lat, width, height):
    out = []
    for lon, lat in coords:
        # Handle date line wrap for Oceania (lon < 0 → +360)
        if max_lon > 180 and lon < 0:
            lon += 360
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


def generate_country_svg(iso, slug, feats, dateline_wrap=False):
    all_lons, all_lats = [], []
    for feat in feats:
        geom = feat.get("geometry") or {}
        polys = geom.get("coordinates", [])
        if geom.get("type") == "Polygon":
            polys = [polys]
        for poly in polys:
            for ring in poly:
                for lon, lat in ring:
                    if dateline_wrap and lon < 0:
                        lon += 360
                    all_lons.append(lon); all_lats.append(lat)
    if not all_lons:
        print(f"  [warn] no coords for {iso} ({slug})")
        return None

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
    )
    if dateline_wrap:
        ts += "  if (lon < 0) lon += 360;\n"
    ts += (
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
    return len(feats)


def generate_oceania_continent(feats_by_iso, countries):
    """Build oceania.svg.ts with all countries as paths."""
    all_lons, all_lats = [], []
    valid_countries = []
    for iso, slug in countries.items():
        feats = feats_by_iso.get(iso, [])
        if not feats: continue
        valid_countries.append((iso, slug, feats))
        for feat in feats:
            geom = feat.get("geometry") or {}
            polys = geom.get("coordinates", [])
            if geom.get("type") == "Polygon":
                polys = [polys]
            for poly in polys:
                for ring in poly:
                    for lon, lat in ring:
                        if lon < 0: lon += 360  # date-line wrap
                        all_lons.append(lon); all_lats.append(lat)
    if not all_lons:
        print("oceania: no data")
        return
    min_lon, max_lon = min(all_lons), max(all_lons)
    min_lat, max_lat = min(all_lats), max(all_lats)
    avg_lat = (min_lat + max_lat) / 2
    cos_lat = max(0.1, math.cos(math.radians(avg_lat)))
    width = 1000.0
    height = width * ((max_lat - min_lat) / max(0.0001, (max_lon - min_lon) * cos_lat))

    ts = (
        "// AUTO-GENERATED — Oceania continent map (with date-line wrap)\n"
        f"export const oceaniaViewBox = \"0 0 {width:.2f} {height:.2f}\";\n\n"
        "export const OC_PROJECTION = {\n"
        f"  minLon: {min_lon}, maxLon: {max_lon},\n"
        f"  minLat: {min_lat}, maxLat: {max_lat},\n"
        f"  width: {width:.2f}, height: {height:.2f},\n"
        "};\n\n"
        "export function projectCoordsOC(lon: number, lat: number): [number, number] {\n"
        "  if (lon < 0) lon += 360;\n"
        "  const p = OC_PROJECTION;\n"
        "  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;\n"
        "  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;\n"
        "  return [x, y];\n"
        "}\n\n"
        "export interface OceaniaRegionPath {\n"
        "  id: string;\n"
        "  name: { de: string; hu: string; ro: string; en: string };\n"
        "  capital: string;\n"
        "  labelX: number;\n"
        "  labelY: number;\n"
        "  path: string;\n"
        "}\n\n"
        "export const oceaniaMap: OceaniaRegionPath[] = [\n"
    )

    for iso, slug, feats in valid_countries:
        # Aggregate all admin-1 paths into one country path
        country_path = ""
        for feat in feats:
            geom = feat.get("geometry") or {}
            polys = geom.get("coordinates", [])
            if geom.get("type") == "Polygon":
                polys = [polys]
            for poly in polys:
                for ring in poly:
                    proj = project_coords(ring, min_lon, max_lon, min_lat, max_lat, width, height)
                    country_path += coords_to_path(proj)
        name = slug.replace("-", " ").capitalize()
        ts += (
            "  {\n"
            f"    id: \"{slug}\",\n"
            f"    name: {{ de: \"{name}\", hu: \"{name}\", ro: \"{name}\", en: \"{name}\" }},\n"
            "    capital: \"\",\n"
            "    labelX: 0, labelY: 0,\n"
            f"    path: \"{country_path}\"\n"
            "  },\n"
        )
    ts += "];\n"

    out_path = os.path.join(MAPS_DIR, "oceania.svg.ts")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(ts)
    print(f"wrote oceania.svg.ts ({len(valid_countries)} countries)")


print("Loading GeoJSON...")
with open(GEOJSON_PATH, "r", encoding="utf-8") as f:
    geojson = json.load(f)
print(f"  loaded {len(geojson['features'])} features")

# Index features by ISO once
all_isos = set()
for cfg in CONTINENTS.values():
    all_isos.update(cfg["countries"].keys())
feats_by_iso = {iso: [] for iso in all_isos}
for feat in geojson["features"]:
    iso = feat.get("properties", {}).get("iso_a2")
    if iso in feats_by_iso:
        feats_by_iso[iso].append(feat)

# Asia country SVGs (skip if already exists)
print("\n=== ASIA countries ===")
asia_cfg = CONTINENTS["asia"]
asia_count = 0
for iso, slug in asia_cfg["countries"].items():
    out = os.path.join(MAPS_DIR, f"{slug}.svg.ts")
    if os.path.exists(out):
        print(f"  skip {slug} (exists)")
        continue
    feats = feats_by_iso.get(iso, [])
    if not feats:
        print(f"  [skip] {iso} {slug} — no feats")
        continue
    n = generate_country_svg(iso, slug, feats, dateline_wrap=False)
    if n: print(f"  wrote {slug}.svg.ts ({n} regions)"); asia_count += 1

# Oceania
print("\n=== OCEANIA countries ===")
oc_cfg = CONTINENTS["oceania"]
oc_count = 0
for iso, slug in oc_cfg["countries"].items():
    feats = feats_by_iso.get(iso, [])
    if not feats:
        print(f"  [skip] {iso} {slug} — no feats")
        continue
    n = generate_country_svg(iso, slug, feats, dateline_wrap=True)
    if n: print(f"  wrote {slug}.svg.ts ({n} regions)"); oc_count += 1

# Oceania continent map
print("\n=== OCEANIA continent map ===")
generate_oceania_continent(feats_by_iso, oc_cfg["countries"])

print(f"\nTotal: Asia={asia_count}, Oceania={oc_count}")
