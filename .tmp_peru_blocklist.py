import glob
import re
import os

# Include peruPoi.ts if it exists
files = glob.glob("lib/visualLab/data/*peru*.ts", recursive=False) + glob.glob("lib/visualLab/data/*Peru*.ts", recursive=False)
files = list(set(files))

names = set()
for f in files:
    try:
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            matches = re.findall(r'name\s*:\s*\{[^}]*de\s*:\s*(?:"([^"]+)"|\'([^\']+)\')', content, re.IGNORECASE)
            for m in matches:
                name = m[0] if m[0] else m[1]
                names.add(name.strip().lower())
    except Exception as e:
        print(f"Error reading {f}: {e}")

print("BLOCKLIST:")
for n in sorted(names):
    print(n)
print(f"COUNT: {len(names)}")
