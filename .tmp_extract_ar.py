import os
import glob
import re

files = glob.glob('lib/visualLab/data/*Argentina*.ts') + glob.glob('lib/visualLab/data/argentinaPoi.ts')
names = set()

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # Match de: "Name" or de: 'Name'
            matches = re.findall(r'de\s*:\s*(["\'])(.*?)\1', content)
            for m in matches:
                names.add(m[1].lower().strip())
    except Exception as e:
        pass

with open('.tmp_ar_names.txt', 'w', encoding='utf-8') as f:
    for n in sorted(list(names)):
        f.write(n + '\n')
print(f"Extracted {len(names)} names.")
