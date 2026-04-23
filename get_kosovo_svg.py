import urllib.request
import json
import math

url = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/KOS.geo.json"
req = urllib.request.Request(url)
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())

geometry = data['features'][0]['geometry']
geom_type = geometry['type']
coordinates = geometry['coordinates']

all_points = []
def extract_points(coords, gtype):
    if gtype == 'Polygon':
        for ring in coords:
            for pt in ring:
                all_points.append(pt)
    elif gtype == 'MultiPolygon':
        for poly in coords:
            for ring in poly:
                for pt in ring:
                    all_points.append(pt)

extract_points(coordinates, geom_type)

min_lon = min(pt[0] for pt in all_points)
max_lon = max(pt[0] for pt in all_points)
min_lat = min(pt[1] for pt in all_points)
max_lat = max(pt[1] for pt in all_points)

center_lat = (min_lat + max_lat) / 2
cos_lat = math.cos(math.radians(center_lat))

width_deg = (max_lon - min_lon) * cos_lat
height_deg = max_lat - min_lat

scale = 1000 / max(width_deg, height_deg)

scaled_width = width_deg * scale
scaled_height = height_deg * scale
offset_x = (1000 - scaled_width) / 2
offset_y = (1000 - scaled_height) / 2

def project(lon, lat):
    x = (lon - min_lon) * cos_lat * scale + offset_x
    y = 1000 - ((lat - min_lat) * scale + offset_y)
    return x, y

path_data = []

if geom_type == 'Polygon':
    for ring in coordinates:
        for i, pt in enumerate(ring):
            x, y = project(pt[0], pt[1])
            cmd = "M" if i == 0 else "L"
            path_data.append(f"{cmd} {x:.2f} {y:.2f}")
        path_data.append("Z")
elif geom_type == 'MultiPolygon':
    for poly in coordinates:
        for ring in poly:
            for i, pt in enumerate(ring):
                x, y = project(pt[0], pt[1])
                cmd = "M" if i == 0 else "L"
                path_data.append(f"{cmd} {x:.2f} {y:.2f}")
            path_data.append("Z")

d_string = " ".join(path_data)

result = {
    "viewBox": "0 0 1000 1000",
    "d": d_string
}
print(json.dumps(result))
