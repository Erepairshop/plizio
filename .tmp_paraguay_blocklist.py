import os
import glob
import re
import json

files = glob.glob('lib/visualLab/data/paraguayPoi.ts') + glob.glob('lib/visualLab/data/poiExtraParaguay*.ts')
names = []

name_pattern = re.compile(r'de:\s*["\']([^"\']+)["\']')

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            matches = name_pattern.findall(content)
            names.extend(matches)

with open('.tmp_paraguay_names.txt', 'w', encoding='utf-8') as out:
    for n in sorted(list(set(names))):
        out.write(n + '\n')
print(f"Found {len(set(names))} names")
