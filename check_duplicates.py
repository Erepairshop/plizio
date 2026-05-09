import re
import os

file_path = "lib/visualLab/data/poiExtraMadagascarNatureV2.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'descriptionAdvanced:\s*\{\s*de:\s*"([^"]+)"', content)
seen = {}
for m in matches:
    if m in seen:
        seen[m] += 1
    else:
        seen[m] = 1

for text, count in seen.items():
    if count > 1:
        print(f"Duplicate found ({count} times): {text[:50]}...")

if not any(count > 1 for count in seen.values()):
    print("No duplicates found in descriptionAdvanced.de")
