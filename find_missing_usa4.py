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
            lines = f.readlines()
            current_id = None
            for line in lines:
                id_match = re.search(r'id:\s*"([^"]+)"', line)
                if id_match:
                    current_id = id_match.group(1)
                
                if current_id and "en:" in line:
                    if "This location is a key geographic" in line or 'en: ""' in line or 'en: ""' in line.strip():
                        if current_id not in missing_ids:
                            missing_ids.append(current_id)
    except Exception as e:
        pass

print(json.dumps(missing_ids))
