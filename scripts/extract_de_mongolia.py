import re
path = r'C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraMongoliaCitiesV2.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

poi_pattern = re.compile(r'id:\s*"([^"]+)"[\s\S]*?descriptionAdvanced:\s*\{([\s\S]*?)\n    \}', re.MULTILINE)
for m in poi_pattern.finditer(content):
    pid = m.group(1)
    block = m.group(2)
    de = re.search(r'de:\s*"((?:[^"\\]|\\.)*)"', block)
    if de:
        print(f'=== {pid} ===')
        print(de.group(1))
        print()
