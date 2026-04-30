import re

with open('.tmp_ecuador_blocklist.txt', 'r', encoding='utf-8') as f:
    blocked = set(line.strip().lower() for line in f if line.strip())

with open('lib/visualLab/data/poiExtraEcuadorLandmarksV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    
matches = re.findall(r'name:\s*\{\s*de:\s*"([^"]+)"', content)
dupes = []
for m in matches:
    name = m.strip().lower()
    if name in blocked:
        dupes.append(name)

print("Duplicates found:", len(dupes))
if dupes:
    print(dupes)

