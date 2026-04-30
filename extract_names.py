import os
import re
import glob

files = glob.glob('lib/visualLab/data/*rgentina*.ts')
names = set()
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        matches = re.findall(r'name:\s*\{[^}]*de:\s*"([^"]+)"', content)
        for m in matches:
            names.add(m.lower())

print("\n".join(names))
