import re
import os

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

# Common German words
de_words = ["der", "die", "das", "und", "ist", "in", "den", "von", "zu", "mit"]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(re.finditer(r'descriptionAdvanced:\s*\{\s*de:\s*"([^"]+)"', content))
    
    for m in matches:
        text = m.group(1).lower()
        found = [w for w in de_words if f" {w} " in f" {text} "]
        if len(found) < 2:
            # Maybe it's not German or too short
            print(f"File: {file_path} - text might NOT be German: {text[:50]}...")

