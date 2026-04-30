
import re
import os
import json

files = [
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts"
]

def fix_apostrophes(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix the factsAdvanced.en strings where "s was wrongly inserted instead of 's
    # Example: George"s -> George's
    # We look for a pattern within the factsAdvanced block
    
    # Actually, a better way is to fix the common cases or use a regex to find double quotes between letters
    new_content = re.sub(r'([a-zA-Z])"([a-zA-Z])', r"\1'\2", content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

for f in files:
    fix_apostrophes(f)
