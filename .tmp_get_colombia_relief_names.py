import glob
import re

files = glob.glob('lib/visualLab/data/*olombia*.ts')
names = set()
pattern = re.compile(r'name\s*:\s*\{.*?de\s*:\s*(["\'])(.*?)\1', re.DOTALL)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        for match in pattern.finditer(content):
            names.add(match.group(2).lower())

with open('.tmp_colombia_relief_names.txt', 'w', encoding='utf-8') as out:
    for n in sorted(names):
        out.write(n + '\n')
print(f"Extracted {len(names)} names.")
