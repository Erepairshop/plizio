import re

with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'"([^"]+)"\s*:\s*\{([^}]+)\}')
blocks = content.split('  "')

weird_count = 0
for block in blocks[1:]:
    key = block.split('"')[0]
    
    # Check if 'hu:' or 'ro:' already exists in this block
    if 'hu:' in block and 'ro:' in block:
        continue
        
    de_match = re.search(r'de:\s*\[\s*\{\s*q:\s*"([^"]+)"', block)
    if de_match:
        q = de_match.group(1)
        if not q.startswith("Was ist "):
            weird_count += 1
            print(f"Weird (missing hu/ro but custom de): {key} -> {q}")

print(f"Total weird: {weird_count}")
