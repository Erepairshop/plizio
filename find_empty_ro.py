import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBelizeLifeV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find POI objects more robustly
        # Look for id and then descriptionAdvanced block
        poi_matches = re.finditer(r'id:\s*"([^"]+)"', content)
        for match in poi_matches:
            poi_id = match.group(1)
            # Find the end of this POI object (approximate)
            start_pos = match.end()
            end_pos = content.find('  }', start_pos)
            if end_pos == -1: end_pos = len(content)
            poi_block = content[start_pos:end_pos]
            
            # Check descriptionAdvanced.ro
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', poi_block, re.DOTALL)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                if 'ro: ""' in desc_adv_content:
                    print(f"{file_path}:{poi_id}")
            else:
                # If descriptionAdvanced is missing entirely (not supposed to happen if we follow rules)
                print(f"{file_path}:{poi_id}:MISSING_DESC_ADV")

