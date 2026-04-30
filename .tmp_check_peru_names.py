import glob
import re
import json

files = glob.glob('lib/visualLab/data/peruPoi.ts') + glob.glob('lib/visualLab/data/poiExtraPeru*.ts')
names = set()

name_regex = re.compile(r'de:\s*(["\'])(.*?)\1', re.IGNORECASE)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        for match in name_regex.finditer(content):
            names.add(match.group(2).lower().strip())

print(json.dumps(list(names)))
