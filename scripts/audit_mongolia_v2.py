import re, json

path = r'C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraMongoliaCitiesV2.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI blocks: id then descriptionAdvanced
poi_pattern = re.compile(r'id:\s*"([^"]+)"[\s\S]*?descriptionAdvanced:\s*\{([\s\S]*?)\n    \}', re.MULTILINE)
results = []
for m in poi_pattern.finditer(content):
    pid = m.group(1)
    block = m.group(2)
    langs = {}
    for lang in ['de','hu','ro','en']:
        lm = re.search(r'%s:\s*"((?:[^"\\]|\\.)*)"' % lang, block)
        langs[lang] = len(lm.group(1)) if lm else 0
    results.append((pid, langs))

# Also find name blocks for each id to map name
name_pattern = re.compile(r'id:\s*"([^"]+)"[\s\S]*?name:\s*\{([\s\S]*?)\n    \}', re.MULTILINE)
names = {}
for m in name_pattern.finditer(content):
    pid = m.group(1)
    block = m.group(2)
    nm = re.search(r'en:\s*"([^"]+)"', block)
    names[pid] = nm.group(1) if nm else pid

for pid, langs in results:
    missing = [l for l,v in langs.items() if v < 50]
    print(f'{pid} [{names.get(pid,"?")}]: de={langs["de"]} hu={langs["hu"]} ro={langs["ro"]} en={langs["en"]}  missing={missing}')
print(f'TOTAL POIs: {len(results)}')
