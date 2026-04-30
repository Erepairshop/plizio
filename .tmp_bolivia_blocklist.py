import glob, re, json

files = glob.glob('lib/visualLab/data/*olivia*.ts')
names = set()

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        # Find all name: { de: "...", ... }
        matches = re.finditer(r'name\s*:\s*\{[^}]*de\s*:\s*"([^"]+)"', content)
        for m in matches:
            names.add(m.group(1).lower())

with open('.tmp_bolivia_names.txt', 'w', encoding='utf-8') as out:
    for n in sorted(names):
        out.write(n + '\n')
