import os
import glob
import re

target_file = 'lib/visualLab/data/poiExtraEcuadorEconomicV2.ts'
if os.path.exists(target_file):
    print(f"FAILED: {target_file} already exists.")
    exit(1)

files = glob.glob('lib/visualLab/data/ecuadorPoi.ts') + glob.glob('lib/visualLab/data/poiExtraEcuador*.ts')
names = set()

name_pattern = re.compile(r'name:\s*\{[^\}]*de:\s*"([^"]+)"')
for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            matches = name_pattern.findall(content)
            for m in matches:
                names.add(m.lower())
    except Exception as e:
        print(f"Error reading {f}: {e}")

with open('.tmp_ecuador_blocklist_econ.txt', 'w', encoding='utf-8') as f:
    for name in sorted(names):
        f.write(f"{name}\n")

print(f"Found {len(names)} existing names in {len(files)} files.")
