import glob
import re

files = glob.glob('lib/visualLab/data/*[vV]enezuela*.ts')
names = set()
ids = set()

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Extract ids
        found_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        ids.update(found_ids)
        
        # Extract German names
        found_names = re.findall(r'de:\s*["\']([^"\']+)["\']', content)
        for n in found_names:
            names.add(n.lower().strip())
            
print(f"Names: {len(names)}")
print(f"IDs: {len(ids)}")
with open('.tmp_ve_names.txt', 'w', encoding='utf-8') as f:
    for n in sorted(names):
        f.write(n + '\n')
