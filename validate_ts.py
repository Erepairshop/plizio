import json
import re
import sys

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for duplicate descriptionAdvanced
    for m in re.finditer(r'id:\s*"([^"]+)"', content):
        start = m.start()
        # Find next id:
        next_m = re.search(r'id:\s*"([^"]+)"', content[start+1:])
        end = next_m.start() + start + 1 if next_m else len(content)
        
        block = content[start:end]
        if block.count('descriptionAdvanced') > 1:
            print(f"ERROR: Duplicate descriptionAdvanced in {m.group(1)}")
        if block.count('factsAdvanced') > 1:
            print(f"ERROR: Duplicate factsAdvanced in {m.group(1)}")

check_file('lib/visualLab/data/polandPoi.ts')
check_file('lib/visualLab/data/poiExtraPolandCities.ts')
print("Validation complete.")
