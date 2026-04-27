import re

with open('lib/visualLab/data/faq/roFaq.ts', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.finditer(r'"([^"]+)":\s*\{\s*ro:\s*\[\s*\{\s*q:\s*"([^"]+)"', content)
for i, m in enumerate(matches):
    print(f"{m.group(1)} -> {m.group(2)}")
    if i >= 20: break
