import re
import glob

files = [
    "lib/visualLab/data/poiExtraHaitiCitiesV2.ts",
    "lib/visualLab/data/poiExtraHaitiEconomicV2.ts",
    "lib/visualLab/data/poiExtraHaitiHistoryV2.ts",
    "lib/visualLab/data/poiExtraHaitiLandmarksV2.ts",
    "lib/visualLab/data/poiExtraHaitiLifeV2.ts",
    "lib/visualLab/data/poiExtraHaitiNatureV2.ts",
    "lib/visualLab/data/poiExtraHaitiReliefV2.ts"
]

pois = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"File not found: {file}")
        continue
    
    # Split by id: to get each POI block
    parts = content.split('id:')
    for part in parts[1:]:
        # Extract ID
        id_match = re.search(r'^\s*["\']([^"\']+)["\']', part)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Extract name.en or name.ro for context
        name_en = "Unknown"
        name_match = re.search(r'name:\s*{[^{}]*en:\s*["\']([^"\']+)["\']', part)
        if name_match:
            name_en = name_match.group(1)
            
        # Check if descriptionAdvanced.ro exists
        has_ro_advanced = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*{([^{}]*)}', part)
        if desc_adv_match:
            if re.search(r'ro:\s*["\']', desc_adv_match.group(1)):
                has_ro_advanced = True
                
        if not has_ro_advanced:
            pois.append((poi_id, name_en, file))

print(f"Found {len(pois)} POIs missing descriptionAdvanced.ro")
for i, (poi_id, name, file) in enumerate(pois):
    print(f"{i+1}. {poi_id} ({name}) - {file.split('/')[-1]}")
