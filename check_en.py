import re

with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('  "')
has_en = 0
for b in blocks[1:]:
    if 'hu:' not in b and 'en:' in b:
        has_en += 1

print(f"Blocks missing hu but having en: {has_en}")
