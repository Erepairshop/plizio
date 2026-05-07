import re
import os

files = [
    "lib/visualLab/data/poiExtraSenegalCitiesV2.ts",
    "lib/visualLab/data/poiExtraSenegalEconomicV2.ts",
    "lib/visualLab/data/poiExtraSenegalHistoryV2.ts",
    "lib/visualLab/data/poiExtraSenegalLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSenegalLifeV2.ts",
    "lib/visualLab/data/poiExtraSenegalNatureV2.ts",
    "lib/visualLab/data/poiExtraSenegalReliefV2.ts"
]

def fix_syntax(file_path):
    print(f"Fixing syntax in {file_path}...")
    with open(file_path, "r") as f:
        content = f.read()
    
    # 1. Fix missing comma after description or other blocks
    # Pattern: } facts: { -> }, facts: {
    # Pattern: } descriptionAdvanced: { -> }, descriptionAdvanced: {
    content = re.sub(r"\}\s*(\w+: \{)", r"},\n    \1", content)
    
    # 2. Fix duplicated commas
    content = re.sub(r",\s*,", ",", content)
    
    # 3. Ensure the array closing is correct
    # Sometimes we have multiple closing braces or missing ones
    # This is tricky.
    
    with open(file_path, "w") as f:
        f.write(content)

for f in files:
    if os.path.exists(f):
        fix_syntax(f)
