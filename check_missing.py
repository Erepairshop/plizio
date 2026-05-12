import re

file_path = 'lib/visualLab/data/poiExtraRo2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all blocks of descriptionAdvanced
desc_blocks = re.findall(r'descriptionAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
missing_hu_desc = 0
for block in desc_blocks:
    if 'hu:' not in block:
        missing_hu_desc += 1

# Find all blocks of factsAdvanced
facts_blocks = re.findall(r'factsAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
missing_hu_facts = 0
for block in facts_blocks:
    if 'hu:' not in block:
        missing_hu_facts += 1

print(f"Missing hu in descriptionAdvanced: {missing_hu_desc}")
print(f"Missing hu in factsAdvanced: {missing_hu_facts}")
