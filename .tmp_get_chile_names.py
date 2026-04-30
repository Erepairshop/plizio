import glob
import re

files = glob.glob('lib/visualLab/data/*[cC]hile*.ts')
names = set()
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        matches = re.findall(r'name:\s*\{.*?de:\s*"([^"]+)"', content)
        for m in matches:
            names.add(m.lower())

print("BLOCKLIST:", list(names))
