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
TEMPLATE_TEXT = "This location is a key geographic or cultural site in the USA"

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
                
                desc_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', block)
                if not desc_match:
                    missing_ids.append(poi_id)
                else:
                    inner = desc_match.group(1)
                    en_match = re.search(r'en:\s*"([^"\\]*(?:\\.[^"\\]*)*)"', inner)
                    if not en_match:
                        missing_ids.append(poi_id)
                    else:
                        en_text = en_match.group(1)
                        if en_text.strip() == "" or TEMPLATE_TEXT in en_text:
                            missing_ids.append(poi_id)
                            
    except Exception as e:
        pass

print(json.dumps(missing_ids))
