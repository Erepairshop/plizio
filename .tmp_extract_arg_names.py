import re, glob, json

names = []
for f in glob.glob('lib/visualLab/data/*rgentina*.ts'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        matches = re.findall(r'name:\s*\{[^}]*de:\s*["\']([^"\']+)["\']', content)
        names.extend(matches)

print(json.dumps(list(set(names))))
