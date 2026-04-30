import glob, re
existing_files = glob.glob('lib/visualLab/data/chilePoi.ts') + glob.glob('lib/visualLab/data/poiExtraChile*.ts')
names = set()
for f in existing_files:
    try:
        content = open(f, 'r', encoding='utf-8').read()
        # Find all blocks of name: { de: "...", hu: "..." }
        matches = re.findall(r'de:\s*["\'](.*?)["\']', content)
        for m in matches:
            names.add(m.lower())
    except Exception as e:
        print(e)
print(f'Found {len(names)} existing DE names.')
print(sorted(list(names)))
