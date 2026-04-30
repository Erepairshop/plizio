import os
import re
import json

blocklist = set()
for f in os.listdir('lib/visualLab/data'):
    if f.lower().startswith('poi') and 'paraguay' in f.lower() and f.endswith('.ts'):
        path = os.path.join('lib/visualLab/data', f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            # Match de: "Name"
            matches = re.findall(r'de\s*:\s*"([^"]+)"', content)
            for m in matches:
                blocklist.add(m.strip().lower())

print("BLOCKLIST:", list(blocklist))
