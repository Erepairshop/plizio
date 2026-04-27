import re

with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'"([^"]+)"\s*:\s*\{([^}]+)\}')
blocks = content.split('  "')

custom_count = 0
for block in blocks[1:]:
    key = block.split('"')[0]
    de_match = re.search(r'de:\s*\[\s*\{\s*q:\s*"([^"]+)"', block)
    if de_match:
        q = de_match.group(1)
        if not q.startswith("Was ist "):
            custom_count += 1
            print(f"Custom: {key} -> {q}")

print(f"Total custom: {custom_count}")
