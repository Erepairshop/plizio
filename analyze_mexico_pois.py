import os
import re

files = [
    "lib/visualLab/data/mexicoPoi.ts",
    "lib/visualLab/data/poiExtraMexicoCitiesV2.ts",
    "lib/visualLab/data/poiExtraMexicoEconomicV2.ts",
    "lib/visualLab/data/poiExtraMexicoHistoryV2.ts",
    "lib/visualLab/data/poiExtraMexicoLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMexicoLifeV2.ts",
    "lib/visualLab/data/poiExtraMexicoNatureV2.ts",
    "lib/visualLab/data/poiExtraMexicoRefill.ts",
    "lib/visualLab/data/poiExtraMexicoReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Count POI objects (simple heuristic: look for id: "...")
    poi_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
    
    # Check for Advanced fields
    has_desc_adv = "descriptionAdvanced" in content
    has_facts_adv = "factsAdvanced" in content
    
    print(f"File: {file_path}")
    print(f"  POIs: {len(poi_ids)}")
    print(f"  Has descriptionAdvanced: {has_desc_adv}")
    print(f"  Has factsAdvanced: {has_facts_adv}")
    print("-" * 20)
