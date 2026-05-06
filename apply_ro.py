import json
import re
import os

with open('all_ireland_out.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

files = [
    'lib/visualLab/data/irelandPoi.ts',
    'lib/visualLab/data/poiExtraIrelandAnimal.ts',
    'lib/visualLab/data/poiExtraIrelandCities.ts',
    'lib/visualLab/data/poiExtraIrelandOther.ts'
]

def format_facts(facts):
    lines = []
    for fact in facts:
        lines.append(f'"{fact}"')
    return '[\n      ' + ',\n      '.join(lines) + '\n    ]'

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_count = 0
    
    for poi_id, item_data in data.items():
        desc_ro = item_data.get('descriptionAdvanced_ro')
        facts_ro = item_data.get('factsAdvanced_ro')
        
        if not desc_ro or not facts_ro:
            continue
            
        # Find the POI block by ID
        id_pos = content.find(f'id: "{poi_id}"')
        if id_pos == -1:
            continue
            
        # Find the end of this POI (next "  {", "];" or end of file)
        next_poi_pos = content.find('  {', id_pos)
        if next_poi_pos == -1:
            next_poi_pos = content.find('];', id_pos)
        if next_poi_pos == -1:
            next_poi_pos = len(content)
            
        poi_block = content[id_pos:next_poi_pos]
        new_poi_block = poi_block
        changed = False

        # 1. Update descriptionAdvanced.ro
        # Check if descriptionAdvanced exists
        da_start = new_poi_block.find("descriptionAdvanced:")
        
        # We need to escape desc_ro properly to avoid JS syntax errors
        desc_escaped = json.dumps(desc_ro, ensure_ascii=False)
        
        if da_start != -1:
            da_end = new_poi_block.find("}", da_start) + 1
            # ensure we don't grab too much
            if da_end > da_start:
                da_block = new_poi_block[da_start:da_end]
                # Look for ro: "..." or ro: '...' or "ro": "..."
                ro_pattern = r'ro:\s*(["\'])(?:(?=(\\?))\2[\s\S])*?\1'
                if re.search(ro_pattern, da_block):
                    new_da_block = re.sub(ro_pattern, f'ro: {desc_escaped}', da_block)
                    new_poi_block = new_poi_block.replace(da_block, new_da_block)
                else:
                    # Append ro:
                    # Find where the block closes and insert before it
                    insert_pos = da_block.rfind('}')
                    new_da_block = da_block[:insert_pos] + f',\n      ro: {desc_escaped}\n    ' + da_block[insert_pos:]
                    new_poi_block = new_poi_block.replace(da_block, new_da_block)
                changed = True
        else:
            # Inject descriptionAdvanced block
            insert_str = f'\n  descriptionAdvanced: {{\n    ro: {desc_escaped}\n  }},'
            # Find a good insertion point: after description:
            desc_start = new_poi_block.find("description: {")
            if desc_start != -1:
                desc_end = new_poi_block.find("}", desc_start) + 1
                if desc_end > desc_start and new_poi_block[desc_end] == ',':
                    desc_end += 1
                new_poi_block = new_poi_block[:desc_end] + insert_str + new_poi_block[desc_end:]
                changed = True

        # 2. Update factsAdvanced.ro
        fa_start = new_poi_block.find("factsAdvanced:")
        facts_formatted = format_facts(facts_ro)
        if fa_start != -1:
            # We must correctly identify the end of factsAdvanced: {}
            brace_count = 0
            fa_end = -1
            for i in range(fa_start, len(new_poi_block)):
                if new_poi_block[i] == '{':
                    brace_count += 1
                elif new_poi_block[i] == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        fa_end = i + 1
                        break
            if fa_end != -1:
                fa_block = new_poi_block[fa_start:fa_end]
                # Find ro: [...] block
                # Since arrays can contain strings with commas, brackets, etc.
                ro_array_pattern = r'ro:\s*\[[\s\S]*?\]'
                if re.search(ro_array_pattern, fa_block):
                    new_fa_block = re.sub(ro_array_pattern, f'ro: {facts_formatted}', fa_block)
                    new_poi_block = new_poi_block.replace(fa_block, new_fa_block)
                else:
                    insert_pos = fa_block.rfind('}')
                    new_fa_block = fa_block[:insert_pos] + f',\n      ro: {facts_formatted}\n    ' + fa_block[insert_pos:]
                    new_poi_block = new_poi_block.replace(fa_block, new_fa_block)
                changed = True
        else:
            # Inject factsAdvanced block
            insert_str = f'\n  factsAdvanced: {{\n    ro: {facts_formatted}\n  }},'
            # Insert after descriptionAdvanced
            da_start = new_poi_block.find("descriptionAdvanced:")
            if da_start != -1:
                # Find end of da_block
                brace_count = 0
                da_end = -1
                for i in range(da_start, len(new_poi_block)):
                    if new_poi_block[i] == '{':
                        brace_count += 1
                    elif new_poi_block[i] == '}':
                        brace_count -= 1
                        if brace_count == 0:
                            da_end = i + 1
                            break
                if da_end != -1:
                    if da_end < len(new_poi_block) and new_poi_block[da_end] == ',':
                        da_end += 1
                    new_poi_block = new_poi_block[:da_end] + insert_str + new_poi_block[da_end:]
                    changed = True
            else:
                # fallback
                desc_start = new_poi_block.find("description: {")
                if desc_start != -1:
                    desc_end = new_poi_block.find("}", desc_start) + 1
                    if desc_end < len(new_poi_block) and new_poi_block[desc_end] == ',':
                        desc_end += 1
                    new_poi_block = new_poi_block[:desc_end] + insert_str + new_poi_block[desc_end:]
                    changed = True

        if changed:
            content = content.replace(poi_block, new_poi_block)
            updated_count += 1
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {updated_count} POIs in {file_path}")
