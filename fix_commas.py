import re

def process_file():
    with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find occurrences of `    ]\n    en: [` and replace with `    ],\n    en: [`
    new_content = re.sub(r'(\s+)\](\s+)en: \[', r'\1],\2en: [', content)

    with open('lib/visualLab/data/faq/deFaq.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)

process_file()
print("Fixed missing commas.")
