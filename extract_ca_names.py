import glob
import re

files = glob.glob('lib/visualLab/data/canadaPoi.ts') + glob.glob('lib/visualLab/data/poiExtraCanada*.ts')

names = set()
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
        # Match name: { de: "..." } or similar structures
        # Try to find all de: "..." inside name block
        matches = re.finditer(r'name:\s*\{[^}]*de:\s*"([^"]+)"', content)
        for m in matches:
            names.add(m.group(1).lower())
            
print(f"Found {len(names)} German names.")
print(list(names))
