import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraNamibiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNamibiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNamibiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLifeV2.ts",
    "lib/visualLab/data/poiExtraNamibiaNatureV2.ts",
    "lib/visualLab/data/poiExtraNamibiaReliefV2.ts"
]

all_pois = []
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            # simple regex to find POIs: id: "something", ... name: { en: "something" }
            # Let's split by id: "
            parts = content.split('id: "')
            for part in parts[1:]:
                id_val = part.split('"', 1)[0]
                # Try to extract the EN name to help with content generation
                name_en = ""
                name_match = re.search(r'name:\s*\{[^\}]*en:\s*"([^"]+)"', part)
                if name_match:
                    name_en = name_match.group(1)
                
                # Check if descriptionAdvanced exists and has ro
                # or just generate for all if it's not present
                desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*ro:\s*"([^"]+)"', part)
                if desc_adv_match:
                    continue # Skip if already has ro description
                    
                all_pois.append({"id": id_val, "name": name_en, "file": file})
    except Exception as e:
        print(f"Error reading {file}: {e}")

print(f"Total POIs missing RO description: {len(all_pois)}")
with open('namibia_pois_to_do.json', 'w', encoding='utf-8') as f:
    json.dump(all_pois, f, indent=2)
