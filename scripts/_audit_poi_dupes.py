"""Audit duplicate descriptionAdvanced/factsAdvanced blocks in poiExtra*V2.ts files."""
import os, re, glob, sys

DATA_DIR = r'C:/Users/User/plizio-repo/lib/visualLab/data'
files = sorted(glob.glob(os.path.join(DATA_DIR, 'poiExtra*V2.ts')))
print(f"Total files: {len(files)}")

suspect_files = []
for fp in files:
    with open(fp, 'r', encoding='utf-8') as f:
        text = f.read()
    parts = re.split(r'\n  \{\n', text)
    file_dupes = 0
    poi_with_dupes = []
    for i, p in enumerate(parts[1:], start=1):
        end = re.search(r'\n  \},?\n', p)
        block = p[:end.start()] if end else p
        d_count = len(re.findall(r'\bdescriptionAdvanced:\s*\{', block))
        f_count = len(re.findall(r'\bfactsAdvanced:\s*\{', block))
        if d_count > 1 or f_count > 1:
            id_match = re.search(r'id:\s*"([^"]+)"', block)
            poi_with_dupes.append((id_match.group(1) if id_match else f"#{i}", d_count, f_count))
            file_dupes += 1
    if file_dupes:
        suspect_files.append((fp, file_dupes, poi_with_dupes))

print(f"Files with duplicates: {len(suspect_files)}")
for fp, n, pois in suspect_files:
    name = os.path.basename(fp)
    print(f"  {name}: {n} POI(s) with dupes")
    for pid, dc, fc in pois:
        print(f"    - {pid}: descA={dc} factsA={fc}")
