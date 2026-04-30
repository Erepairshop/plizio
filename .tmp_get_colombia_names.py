import glob
import re

files = glob.glob('lib/visualLab/data/*olombia*.ts')
names = set()

name_block_re = re.compile(r'name:\s*\{([^\}]+)\}')
de_re = re.compile(r'de:\s*"([^"]+)"')

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        for block in name_block_re.findall(content):
            match = de_re.search(block)
            if match:
                names.add(match.group(1).lower().strip())

for name in sorted(names):
    print(name)
