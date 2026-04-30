import glob
import re

blocklist_de = set()

for file in glob.glob('lib/visualLab/data/*Cuba*.ts'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        names = re.findall(r'name:\s*\{\s*de:\s*"([^"]+)"', content)
        for name in names:
            blocklist_de.add(name.lower())

for name in sorted(blocklist_de):
    print(name)
