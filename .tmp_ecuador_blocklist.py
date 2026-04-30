import glob, re, json
files = glob.glob('lib/visualLab/data/*Ecuador*.ts') + glob.glob('lib/visualLab/data/ecuadorPoi.ts') + glob.glob('lib/visualLab/data/poiExtraEcuador*.ts')
files = list(set(files))

names = []
for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # Simple regex to find de: "Name"
            matches = re.findall(r'de:\s*"([^"]+)"', content)
            names.extend(matches)
    except Exception as e:
        pass

# lower case for case-insensitive comparison
unique_names = list(set([n.lower() for n in names]))
with open('.tmp_ecuador_blocklist.txt', 'w', encoding='utf-8') as out:
    for n in unique_names:
        out.write(n + '\n')
print(f"Found {len(unique_names)} names in blocklist")
