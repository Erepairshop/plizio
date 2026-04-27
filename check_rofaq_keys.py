import re

with open('lib/visualLab/data/faq/roFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'"([^"]+)":\s*\{', content)
print(f"Number of keys: {len(matches)}")
print("First 10 keys:", matches[:10])
