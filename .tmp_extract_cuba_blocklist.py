import glob
import re

blocklist_de = set()
blocklist_ids = set()

for file in glob.glob('lib/visualLab/data/*Cuba*.ts'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Match name: { de: "..." }
        names = re.findall(r'name:\s*\{\s*de:\s*["\']([^"\']+)["\']', content)
        for name in names:
            blocklist_de.add(name.lower())
            
        # Match id: "..."
        ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        for id_val in ids:
            blocklist_ids.add(id_val.lower())

print("DE_NAMES:", len(blocklist_de))
print(list(blocklist_de)[:10])
print("IDS:", len(blocklist_ids))
