import re

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            parts = content.split('id: "')
            for part in parts[1:]:
                # find descriptionAdvanced block
                desc_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', part)
                if desc_match:
                    inner = desc_match.group(1)
                    en_count = inner.count('en:')
                    if en_count > 1:
                        poi_id = part.split('"', 1)[0]
                        print(f"Duplicate en: in descriptionAdvanced for {poi_id} in {file_path}")
                
                # find factsAdvanced block
                facts_match = re.search(r'factsAdvanced:\s*\{([^\}]+)\}', part)
                if facts_match:
                    inner = facts_match.group(1)
                    en_count = inner.count('en:')
                    if en_count > 1:
                        poi_id = part.split('"', 1)[0]
                        print(f"Duplicate en: in factsAdvanced for {poi_id} in {file_path}")
                        
    except Exception as e:
        print("Error", file_path, e)
