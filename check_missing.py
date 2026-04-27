import re

with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# find all blocks of top level keys
pattern = re.compile(r'"([^"]+)"\s*:\s*\{([^}]+)\}')
matches = pattern.findall(content)

missing = []
for name, block in matches:
    if 'hu:' not in block or 'ro:' not in block:
        missing.append(name)
        
print(f"Total entries: {len(matches)}")
print(f"Missing hu or ro: {len(missing)}")
print(f"First 10 missing: {missing[:10]}")
