import re

files = [
    'lib/visualLab/data/poiExtraHu1.ts',
    'lib/visualLab/data/poiExtraHu2.ts',
    'lib/visualLab/data/poiExtraHu3.ts'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find POI blocks where ro is exactly ""
    # We look for descriptionAdvanced: { ... ro: "",
    matches = re.finditer(r'\{\s+id: "([^"]+)",.*?descriptionAdvanced: \{[^\}]*?ro: "",', content, re.DOTALL)
    
    found = False
    for match in matches:
        if not found:
            print(f"File: {file_path}")
            found = True
        print(f"  {match.group(1)}")
