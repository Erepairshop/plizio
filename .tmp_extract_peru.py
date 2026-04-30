import glob, re

names = set()
for file in glob.glob("lib/visualLab/data/*Peru*.ts"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        for match in re.finditer(r"name\s*:\s*\{[^}]*de\s*:\s*[\"']([^\"']+)[\"']", content):
            names.add(match.group(1).lower().strip())

with open(".tmp_peru_names.txt", "w", encoding="utf-8") as f:
    for n in sorted(names):
        f.write(n + "\n")
print(f"Extracted {len(names)} names.")