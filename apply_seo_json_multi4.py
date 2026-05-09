
import json
import re
import sys
import os

def find_object_bounds(content, start_index):
    brace_count = 0
    in_string = False
    escape = False
    
    real_start = content.find('{', start_index)
    if real_start == -1:
        return -1
    brace_count = 1
    
    for i in range(real_start + 1, len(content)):
        char = content[i]
        
        if in_string:
            if escape:
                escape = False
            elif char == chr(92): # backslash
                escape = True
            elif char == in_string:
                in_string = False
        else:
            if char in ('"', "'", "`"):
                in_string = char
            elif char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    return i
                    
    return -1

def find_string_bounds(content, start_index):
    quote_char = content[start_index]
    escape = False
    for i in range(start_index + 1, len(content)):
        char = content[i]
        if escape:
            escape = False
        elif char == chr(92):
            escape = True
        elif char == quote_char:
            return i
    return -1

def get_field_inner_bounds(block, field_name, lang):
    field_pattern = re.search(r'\b' + re.escape(field_name) + r'\b\s*:\s*\{', block)
    if not field_pattern:
        return None
    
    obj_start = field_pattern.end()
    obj_end = find_object_bounds(block, field_pattern.start())
    if obj_end == -1:
        return None
        
    inner_content = block[obj_start:obj_end]
    
    lang_pattern = re.search(r'\b' + lang + r'\b\s*:\s*(["'`]|\[)', inner_content)

    if not lang_pattern:
        return None
        
    val_start_char = lang_pattern.group(1)
    val_start_in_inner = lang_pattern.start(1)

    if val_start_char == '[':
        brace_depth = 1
        i = val_start_in_inner + 1
        while i < len(inner_content) and brace_depth > 0:
            if inner_content[i] == '[': brace_depth += 1
            elif inner_content[i] == ']': brace_depth -= 1
            i += 1
        val_end_in_inner = i
    else:
        val_end_in_inner = find_string_bounds(inner_content, val_start_in_inner) + 1

    return (obj_start + val_start_in_inner, obj_start + val_end_in_inner)

def apply_seo(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    lang_setting = data.get('lang', 'en')
    items = data.get('items', [])
    files = data.get('files', [])
    item_map = {item['id']: item for item in items}

    for ts_file in files:
        if not os.path.exists(ts_file):
            print(f"File not found: {ts_file}")
            continue

        with open(ts_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content

        for poi_id, item in item_map.items():
            id_match = re.search(r'id:\s*"' + re.escape(poi_id) + r'"', content)
            if not id_match:
                continue

            obj_start = content.rfind('{', 0, id_match.start())
            if obj_start == -1: continue
            
            end_index = find_object_bounds(content, obj_start)
            if end_index == -1: continue
                
            poi_block = content[obj_start:end_index + 1]
            original_poi_block = poi_block

            # Handle multi4 descriptions
            if lang_setting == 'multi4':
                desc_additions = {}
                for lang_code in ['de', 'hu', 'ro', 'en']:
                    key = f'descriptionAdvanced{lang_code[0].upper()}{lang_code[1:]}'
                    if key in item:
                        desc_additions[lang_code] = item[key]
                
                if desc_additions:
                    if 'descriptionAdvanced:' not in poi_block:
                        # Add the whole block
                        addition_str = ',
    descriptionAdvanced: {
'
                        for lang_code, desc_text in desc_additions.items():
                            escaped_text = json.dumps(desc_text, ensure_ascii=False)
                            addition_str += f'        {lang_code}: {escaped_text},
'
                        addition_str = addition_str.rstrip(',
') + '
    }'
                        last_brace_pos = poi_block.rfind('}')
                        poi_block = poi_block[:last_brace_pos] + addition_str + poi_block[last_brace_pos:]
                    else:
                        # Add to existing block
                        for lang_code, desc_text in desc_additions.items():
                            bounds = get_field_inner_bounds(poi_block, "descriptionAdvanced", lang_code)
                            if bounds:
                                escaped_text = json.dumps(desc_text, ensure_ascii=False)
                                poi_block = poi_block[:bounds[0]] + escaped_text + poi_block[bounds[1]:]
                            else:
                                match = re.search(r'descriptionAdvanced:\s*\{', poi_block)
                                if match:
                                    insert_pos = match.end()
                                    escaped_text = json.dumps(desc_text, ensure_ascii=False)
                                    poi_block = poi_block[:insert_pos] + f'
        {lang_code}: {escaped_text},' + poi_block[insert_pos:]

            # Handle factsAdvanced
            if 'factsAdvanced' in item:
                new_facts = item['factsAdvanced']
                facts_json = json.dumps(new_facts, ensure_ascii=False)
                
                if 'factsAdvanced:' not in poi_block:
                    addition = f',
    factsAdvanced: {{ multi4: {facts_json} }}'
                    last_brace = poi_block.rfind('}')
                    poi_block = poi_block[:last_brace] + addition + poi_block[last_brace:]
                else:
                    bounds = get_field_inner_bounds(poi_block, "factsAdvanced", 'multi4')
                    if bounds:
                        poi_block = poi_block[:bounds[0]] + facts_json + poi_block[bounds[1]:]
                    else:
                        match = re.search(r'factsAdvanced:\s*\{', poi_block)
                        if match:
                            insert_pos = match.end()
                            poi_block = poi_block[:insert_pos] + f' multi4: {facts_json},' + poi_block[insert_pos:]

            if poi_block != original_poi_block:
                content = content.replace(original_poi_block, poi_block)
                print(f"Updated {poi_id}")

        if content != original_content:
            with open(ts_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved changes to {ts_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python apply_seo_json_multi4.py <json_file>")
    else:
        apply_seo(sys.argv[1])
