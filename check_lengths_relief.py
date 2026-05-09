import re
import os

file_path = "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    matches = re.findall(r'descriptionAdvanced:\s*\{\s*de:\s*"([^"]+)"', content)
    for i, m in enumerate(matches):
        words = m.split()
        print(f"POI {i+1}: {len(words)} words")
