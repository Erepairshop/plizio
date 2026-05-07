import re
import json

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

missing_ids = []

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.finditer(r'id:\s*"([^"]+)"', content)
            for match in matches:
                poi_id = match.group(1)
                if not poi_id.startswith('us-'):
                    continue
                
                start_idx = match.start()
                next_match = re.search(r'id:\s*"', content[start_idx+10:])
                end_idx = start_idx + 10 + next_match.start() if next_match else len(content)
                block = content[start_idx:end_idx]
                
                # Conditions for needing an update
                needs_update = False
                
                if 'descriptionAdvanced:' not in block:
                    needs_update = True
                elif 'en:' not in block:
                    needs_update = True
                elif "This location is a key geographic" in block:
                    needs_update = True
                elif 'en: ""' in block or 'en: ""' in block.replace(" ", ""):
                    needs_update = True
                elif '."s ' in block: # syntax error
                    needs_update = True
                    
                if needs_update:
                    missing_ids.append(poi_id)
                    
    except Exception as e:
        pass

# Ensure uniqueness
missing_ids = list(set(missing_ids))
print(json.dumps(missing_ids))
print(f"\nTotal: {len(missing_ids)}")
