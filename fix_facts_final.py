import re

file_path = 'lib/visualLab/data/switzerlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def is_english(text):
    return bool(re.search(r'\b(the|is|and|of|in|with|to|for|at|on|by)\b', text, re.IGNORECASE))

def is_romanian(text):
    return bool(re.search(r'\b(este|și|din|cu|care|sunt|mare|fost)\b', text, re.IGNORECASE))

new_lines = []
in_ro_array = False
in_en_array = False
current_ro_items = []
current_en_items = []

for line in lines:
    if 'ro: [' in line:
        in_ro_array = True
        current_ro_items = []
        continue
    if 'en: [' in line and (in_ro_array or not in_en_array):
        in_en_array = True
        in_ro_array = False
        current_en_items = []
        continue
    
    if in_ro_array:
        if ']' in line:
            in_ro_array = False
            # We don't write it out yet, wait for en array to merge
            continue
        m = re.search(r'"([^"]+)"', line)
        if m: current_ro_items.append(m.group(1))
        continue

    if in_en_array:
        if ']' in line:
            in_en_array = False
            # Now we have both! Merge and separate.
            all_items = current_ro_items + current_en_items
            clean_ro = [item for item in all_items if is_romanian(item) or (not is_english(item) and item)]
            clean_en = [item for item in all_items if is_english(item) and not is_romanian(item)]
            
            # If clean_en is empty, maybe they were all Romanian or something.
            # But usually we want some English.
            
            ro_str = '",\n        "'.join(clean_ro)
            en_str = '",\n        "'.join(clean_en)
            
            new_lines.append('      ro: [\n        "' + ro_str + '"\n      ],\n')
            new_lines.append('      en: [\n        "' + en_str + '"\n      ]\n')
            continue
        m = re.search(r'"([^"]+)"', line)
        if m: current_en_items.append(m.group(1))
        continue
    
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
