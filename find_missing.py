import re

def find_missing(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    missing = []
    for m in re.finditer(r'id:\s*"([^"]+)"', content):
        start = m.start()
        next_m = re.search(r'id:\s*"([^"]+)"', content[start+1:])
        end = next_m.start() + start + 1 if next_m else len(content)
        
        block = content[start:end]
        if 'descriptionAdvanced' not in block:
            missing.append(m.group(1))
            
    if missing:
        print(f"Missing in {file_path}: {missing}")

find_missing('lib/visualLab/data/polandPoi.ts')
find_missing('lib/visualLab/data/poiExtraPolandCities.ts')
