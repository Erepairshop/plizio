import glob
import re

files = glob.glob('lib/visualLab/data/*[uU]ruguay*.ts')
if 'lib/visualLab/data/poiExtraUruguayLandmarksV2.ts' in files:
    print("FILE_EXISTS_ERROR")
    exit(1)

names = set()
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        # Find name: { de: "..." }
        matches = re.findall(r'name\s*:\s*\{[^}]*de\s*:\s*"([^"]+)"', content)
        for m in matches:
            names.add(m.lower())

with open('.tmp_uruguay_names.txt', 'w', encoding='utf-8') as out:
    for n in sorted(list(names)):
        out.write(n + '\n')
print(f"Found {len(names)} names.")
