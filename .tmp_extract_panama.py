import re
import glob

blocklist = set()
files = glob.glob('lib/visualLab/data/*Panama*.ts')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        # Find all name blocks, then extract de
        name_blocks = re.findall(r'name:\s*\{([^}]*)\}', content)
        for block in name_blocks:
            de_match = re.search(r'de:\s*"([^"]+)"', block)
            if de_match:
                blocklist.add(de_match.group(1).lower())

print("BLOCKLIST_COUNT:", len(blocklist))
print(sorted(list(blocklist)))
