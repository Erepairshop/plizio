
import os
import json

def format_facts(facts):
    if not facts: return "[]"
    items = ',\n        '.join([f'"{f}"' for f in facts])
    return f'[\n        {items}\n      ]'

def process_file(file_path, updates):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    current_poi_id = None
    in_desc_adv = False
    in_facts_adv = False
    skip_until_bracket = False

    for line in lines:
        stripped = line.strip()
        
        if 'id: "' in stripped:
            id_match = stripped.split('"')[1]
            current_poi_id = id_match if id_match in updates else None
            in_desc_adv = False
            in_facts_adv = False
            skip_until_bracket = False
        
        if current_poi_id:
            if 'descriptionAdvanced: {' in stripped:
                in_desc_adv = True
            elif 'factsAdvanced: {' in stripped:
                in_facts_adv = True
            
            if in_desc_adv and 'hu:' in stripped:
                new_val = updates[current_poi_id]['desc_hu']
                line = f'      hu: "{new_val}",\n'
                in_desc_adv = False # Done with desc
            
            if in_facts_adv and 'hu:' in stripped:
                new_facts = format_facts(updates[current_poi_id]['facts_hu'])
                line = f'      hu: {new_facts},\n'
                if '[' in stripped and not ']' in stripped:
                    skip_until_bracket = True
                in_facts_adv = False # Done with facts
            
            if skip_until_bracket:
                if ']' in stripped:
                    skip_until_bracket = False
                continue

            if in_desc_adv and '}' in stripped: in_desc_adv = False
            if in_facts_adv and '}' in stripped: in_facts_adv = False

        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

with open('poi_updates.json', 'r', encoding='utf-8') as f:
    all_updates = json.load(f)

for f in ['lib/visualLab/data/poiExtraHu1.ts', 'lib/visualLab/data/poiExtraHu2.ts', 'lib/visualLab/data/poiExtraHu3.ts']:
    process_file(f, all_updates)
