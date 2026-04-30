import glob
import re

files = glob.glob('lib/visualLab/data/cubaPoi.ts') + glob.glob('lib/visualLab/data/poiExtraCuba*.ts')
names = set()

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # find name: { de: "...", ... } or similar
            # Use regex to find name blocks
            blocks = re.findall(r'name\s*:\s*\{[^\}]+\}', content, re.IGNORECASE)
            for block in blocks:
                de_match = re.search(r'de\s*:\s*["\']([^"\']+)["\']', block)
                if de_match:
                    names.add(de_match.group(1).lower().strip())
    except Exception as e:
        print(f"Error reading {f}: {e}")

print("BLOCKLIST:")
for name in sorted(names):
    print(name)
print(f"TOTAL: {len(names)}")
