
import os
import re

directory = 'lib/visualLab/data'
files = [f for f in os.listdir(directory) if f.endswith('.ts') and 'austria' in f.lower()]

for file_name in files:
    file_path = os.path.join(directory, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"File: {file_path}")
    
    blocks = re.split(r'id:', content)[1:]
    for i, block in enumerate(blocks):
        id_match = re.search(r'"(.*?)"', block)
        poi_id = id_match.group(1) if id_match else "unknown"
        
        if 'descriptionAdvanced' in block:
            ro_match = re.search(r'descriptionAdvanced:.*?ro:\s*"(.*?)"', block, re.DOTALL)
            if not ro_match or not ro_match.group(1).strip():
                print(f"  Entry {poi_id} missing or empty ro descriptionAdvanced")
            
            ro_facts_match = re.search(r'factsAdvanced:.*?ro:\s*\[(.*?)\]', block, re.DOTALL)
            if not ro_facts_match or not ro_facts_match.group(1).strip():
                print(f"  Entry {poi_id} missing or empty ro factsAdvanced")
        else:
            # Only report if it's one of the files mentioned by user
            if 'poiExtraAustria' in file_name:
                print(f"  Entry {poi_id} missing descriptionAdvanced entirely")
