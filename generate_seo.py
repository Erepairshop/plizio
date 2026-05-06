import json

file_path = "lib/visualLab/data/poiExtraAustriaHistorical.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

import re

pois = re.split(r'id:\s*"(.*?)"', content)
results = []

for i in range(1, len(pois), 2):
    poi_id = pois[i]
    poi_data = pois[i+1]
    name_match = re.search(r'name:\s*\{.*?en:\s*"([^"]*)"', poi_data)
    name = name_match.group(1) if name_match else poi_id
    
    desc_match = re.search(r'description:\s*\{.*?en:\s*"([^"]*)"', poi_data, re.DOTALL)
    desc = desc_match.group(1) if desc_match else ""
    
    print(f"POI: {poi_id} ({name}) - {desc}")
