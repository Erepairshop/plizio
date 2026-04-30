import re
import os

files = [
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaCities.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaHistory.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaOther.ts'
]

def update_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue is that my previous regex was too simple.
    # I will replace the objects.
    # Looking at the file content, the structures are consistent.
    
    # 1. Fill descriptionAdvanced.en/ro if they are empty
    # Actually, looking at line 20-25 of cities:
    # ro: "Valletta... (Istorie K8...)",
    # en: ""
    # I want to make sure I don't overwrite if it's already there.
    
    # Let's target the whole descriptionAdvanced object and replace it.
    
    # Actually, let's just use python to fix missing fields.
    # The current state has some fields, some missing.
    
    # Let's do a simple fix: replace descriptionAdvanced and factsAdvanced
    # I will use a more robust regex.
    
    # I will not use regex. I will read the file line by line and build the new content.
    new_lines = []
    in_desc = False
    in_facts = False
    
    lines = content.splitlines()
    for line in lines:
        if "descriptionAdvanced: {" in line:
            in_desc = True
            new_lines.append(line)
        elif in_desc and "}" in line:
            in_desc = False
            new_lines.append(line)
        elif in_facts and "}" in line:
            in_facts = False
            new_lines.append(line)
        elif "factsAdvanced: {" in line:
            in_facts = True
            new_lines.append(line)
        else:
            new_lines.append(line)
            
    # This won't help inject. 
    # Let's just fix the missing fields.
    # Since I cannot easily parse with a simple script, I will try to use a regex to ensure consistency.

    # Regex to find descriptionAdvanced and factsAdvanced and ensure fields exist
    # I'll just use the fact that they always have a specific structure.
    
    # Okay, I will just add the fields if missing.
    pass

