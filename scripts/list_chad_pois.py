import os
import json

def process_chad_pois():
    files = [
        "lib/visualLab/data/poiExtraChadCitiesV2.ts",
        "lib/visualLab/data/poiExtraChadEconomicV2.ts",
        "lib/visualLab/data/poiExtraChadHistoryV2.ts",
        "lib/visualLab/data/poiExtraChadLandmarksV2.ts",
        "lib/visualLab/data/poiExtraChadLifeV2.ts",
        "lib/visualLab/data/poiExtraChadNatureV2.ts",
        "lib/visualLab/data/poiExtraChadReliefV2.ts"
    ]
    
    all_items = []
    
    for file_path in files:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Extremely simplified parser logic for this repo structure
                # We need ids of POIs that don't have "hu:" in descriptionAdvanced
                # Since manual checking is tedious, I'll extract IDs first
                import re
                pois = re.findall(r'id: "(.*?)",', content)
                for poi_id in pois:
                    all_items.append({"id": poi_id, "file": file_path})
    
    return all_items

items = process_chad_pois()
print(json.dumps(items[:5], indent=2))
print(len(items))
