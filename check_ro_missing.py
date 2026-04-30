
import os
import re

files = [
    'lib/visualLab/data/poiExtraAustriaCities.ts',
    'lib/visualLab/data/poiExtraAustriaHistorical.ts',
    'lib/visualLab/data/poiExtraAustriaIndustry.ts',
    'lib/visualLab/data/poiExtraAustriaLife.ts',
    'lib/visualLab/data/poiExtraAustriaNature.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist.")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple check for ro: "" or ro: []
    empty_ro_desc = re.findall(r'ro:\s*""', content)
    empty_ro_facts = re.findall(r'ro:\s*\[\]', content)
    
    print(f"File: {file_path}")
    print(f"  Empty ro desc: {len(empty_ro_desc)}")
    print(f"  Empty ro facts: {len(empty_ro_facts)}")
    
    # Also check if ro is missing in descriptionAdvanced or factsAdvanced
    blocks = re.split(r'id:', content)[1:]
    for i, block in enumerate(blocks):
        if 'descriptionAdvanced' in block:
            ro_match = re.search(r'descriptionAdvanced:.*?ro:\s*"(.*?)"', block, re.DOTALL)
            if not ro_match or not ro_match.group(1).strip():
                print(f"  Entry {i+1} missing or empty ro descriptionAdvanced")
        else:
            print(f"  Entry {i+1} missing descriptionAdvanced entirely")
            
        if 'factsAdvanced' in block:
            ro_match = re.search(r'factsAdvanced:.*?ro:\s*\[(.*?)\]', block, re.DOTALL)
            if not ro_match or not ro_match.group(1).strip():
                print(f"  Entry {i+1} missing or empty ro factsAdvanced")
        else:
            print(f"  Entry {i+1} missing factsAdvanced entirely")
