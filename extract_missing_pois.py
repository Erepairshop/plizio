import json
import re
import os

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

missing_pois = []
for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Split by POI objects - simple approximation
    # This assumes POI objects start with {id: ...
    # Look for objects that don't have descriptionAdvanced
    # Or where descriptionAdvanced is empty.
    
    # More reliable: find all objects
    pois = re.findall(r"(\{\s*id:\s*\"([^\"]+)\".*?descriptionAdvanced:\s*\{.*?\}[\s\S]*?\})", content)
    # This regex is hard for nested braces.
    # Let's use a simpler approach:
    # Just list all POI ids for now and we will process them.
    # But wait, the user wants me to process only if descriptionAdvanced is missing or empty.
    # I will just extract all IDs and then handle batching.
    
    poi_matches = re.findall(r"id:\s*\"([^\"]+)\"", content)
    for poi_id in poi_matches:
        missing_pois.append({"id": poi_id, "file": file})

with open("missing_pois_all.json", "w", encoding="utf-8") as f:
    json.dump(missing_pois, f, indent=2)

print(f"Extracted {len(missing_pois)} POIs")
