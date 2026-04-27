import re

with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('\n  "')
missing = 0
missing_en = 0
for b in blocks[1:]:
    if 'hu:' not in b:
        missing += 1
        if 'en:' not in b:
            missing_en += 1
            print(f"Missing en and hu: {b.split('\"')[0]}")

print(f"Total missing hu: {missing}")
print(f"Total missing en (among those missing hu): {missing_en}")
