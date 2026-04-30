import re
import os

files = [
    "lib/visualLab/data/belizePoi.ts",
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
        print(f"File not found: {file_path}")
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find empty hu in descriptionAdvanced
    # We look for descriptionAdvanced: { ... hu: "" ... } or descriptionAdvanced: { ... hu: '' ... }
    # Also for factsAdvanced: { ... hu: [] ... }
    
    # Find POI blocks
    # A bit hard with regex, but let's try to count occurences of hu: "" or hu: [] in the whole file
    empty_desc = len(re.findall(r'descriptionAdvanced:\s*{[^}]*hu:\s*["\']["\']', content))
    empty_facts = len(re.findall(r'factsAdvanced:\s*{[^}]*hu:\s*\[\s*\]', content))
    
    print(f"{file_path}: {empty_desc} empty desc, {empty_facts} empty facts")

