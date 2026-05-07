import re

files = [
    "lib/visualLab/data/netherlandsPoi.ts",
    "lib/visualLab/data/poiExtraNetherlandsCities.ts"
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple check for empty `hu: "",` and `hu: []`
    empty_desc = len(re.findall(r'hu:\s*""', content))
    empty_facts = len(re.findall(r'hu:\s*\[\s*\]', content))
    print(f"{file}: {empty_desc} empty desc, {empty_facts} empty facts")
