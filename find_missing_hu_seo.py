import re
import os

def find_pois_to_update(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
        return

    poi_blocks = content.split('},')
    
    pois_to_update = set()

    for block in poi_blocks:
        if 'id:' not in block:
            continue

        # Simple string checks instead of complex regex
        has_desc_adv = 'descriptionAdvanced' in block
        has_facts_adv = 'factsAdvanced' in block
        hu_desc_empty = 'hu: ""' in block
        hu_facts_empty = 'hu: []' in block
        
        id_match = re.search(r'id:\s*["'](.*?)["']', block)
        if not id_match:
            continue
        poi_id = id_match.group(1)

        needs_update = False
        if not has_desc_adv or (has_desc_adv and hu_desc_empty):
             # A bit broad, but will catch the ones we need
            if 'descriptionAdvanced' in block:
                needs_update = True
        
        if not has_facts_adv or (has_facts_adv and hu_facts_empty):
            if 'factsAdvanced' in block:
                needs_update = True

        if not has_desc_adv and not has_facts_adv:
            needs_update = True

        if needs_update:
            pois_to_update.add(poi_id)

    for poi_id in sorted(list(pois_to_update)):
        print(poi_id)

if __name__ == "__main__":
    file_to_check = os.path.join("lib", "visualLab", "data", "hungaryPoi.ts")
    find_pois_to_update(file_to_check)
