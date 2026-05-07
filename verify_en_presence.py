
import re

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by descriptionAdvanced: {
desc_splits = re.split(r'descriptionAdvanced:\s*\{', content)[1:]
for i, s in enumerate(desc_splits):
    # Find the end of this block
    block = s.split('}')[0]
    if 'en:' not in block:
        print(f"Block {i} is missing 'en:'")

# Split by factsAdvanced: {
facts_splits = re.split(r'factsAdvanced:\s*\{', content)[1:]
for i, s in enumerate(facts_splits):
    # Find the end of this block
    block = s.split('}')[0]
    if 'en:' not in block:
        print(f"Facts Block {i} is missing 'en:'")
