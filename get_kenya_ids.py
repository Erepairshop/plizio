import re
import json

files = [
    "lib/visualLab/data/poiExtraKenyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraKenyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraKenyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraKenyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraKenyaLifeV2.ts",
    "lib/visualLab/data/poiExtraKenyaNatureV2.ts",
    "lib/visualLab/data/poiExtraKenyaReliefV2.ts"
]

missing_pois = []

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find all POI blocks, assume they start with "{" and contain "id: "
            # A simpler way is to find all id: "..." occurrences.
            matches = re.finditer(r'id:\s*"([^"]+)"', content)
            
            for match in matches:
                poi_id = match.group(1)
                
                # Check the context of this POI. Let's find the start of the next POI.
                start = match.start()
                next_match = re.search(r'id:\s*"([^"]+)"', content[start+10:])
                end = start + 10 + next_match.start() if next_match else len(content)
                
                block = content[start:end]
                
                # check if descriptionAdvanced has de
                has_de = re.search(r'descriptionAdvanced:\s*\{[^}]*de:\s*"([^"]*)"', block)
                if not has_de or len(has_de.group(1).strip()) < 10:
                    missing_pois.append(poi_id)
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print(json.dumps(missing_pois))
