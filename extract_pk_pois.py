import re
import json
import glob
import sys

files = [
    "lib/visualLab/data/poiExtraPakistanCitiesV2.ts",
    "lib/visualLab/data/poiExtraPakistanEconomicV2.ts",
    "lib/visualLab/data/poiExtraPakistanHistoryV2.ts",
    "lib/visualLab/data/poiExtraPakistanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPakistanLifeV2.ts",
    "lib/visualLab/data/poiExtraPakistanNatureV2.ts",
    "lib/visualLab/data/poiExtraPakistanReliefV2.ts"
]

results = []

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Split by id: to get chunks
        chunks = content.split('id: "')
        for chunk in chunks[1:]: # skip the part before the first id
            # Extract id
            id_match = re.match(r'^([^"]+)"', chunk)
            if not id_match:
                continue
            poi_id = id_match.group(1)
            
            # Extract name hu
            name_hu_match = re.search(r'name:\s*\{[^}]*hu:\s*"([^"]+)"', chunk)
            name_hu = name_hu_match.group(1) if name_hu_match else "Unknown"
            
            # Check for descriptionAdvanced hu
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*hu:\s*"(.*?)"', chunk, re.DOTALL)
            needs_update = True
            if desc_adv_match:
                desc = desc_adv_match.group(1).strip()
                if len(desc) > 20: # Already has a meaningful description
                    needs_update = False
            
            if needs_update:
                results.append({"id": poi_id, "name": name_hu, "file": filepath})
                
    except FileNotFoundError:
        print(f"File not found: {filepath}", file=sys.stderr)

print(json.dumps(results, indent=2))
