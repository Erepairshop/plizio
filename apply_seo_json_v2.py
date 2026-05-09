
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
        return -1, -1
    brace_count = 1
    
    for i in range(real_start + 1, len(content)):
        char = content[i]
        
        if in_string:
            if escape:
                escape = False
            elif char == '':
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
                    return real_start, i
                    
    return -1, -1

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
            # Find the POI object by its ID
            id_pattern = r'id:\s*(?:"|'|`)' + re.escape(poi_id) + r'(?:"|'|`)'
            id_match = re.search(id_pattern, content)
            if not id_match:
                print(f"POI with id '{poi_id}' not found in {ts_file}")
                continue

            # Find the start and end of the POI object
            obj_start, obj_end = find_object_bounds(content, id_match.start())
            if obj_start == -1:
                print(f"Could not find object boundaries for POI with id '{poi_id}'")
                continue

            poi_block = content[obj_start:obj_end + 1]
            
            # Add descriptionAdvanced
            if any(f'descriptionAdvanced{lang.capitalize()}' in item for lang in ['de', 'hu', 'ro', 'en']):
                desc_adv_items = {}
                for lang_code in ['de', 'hu', 'ro', 'en']:
                    key = f'descriptionAdvanced{lang_code.capitalize()}'
                    if key in item:
                        desc_adv_items[lang_code] = item[key]
                
                if desc_adv_items:
                    json_str = json.dumps(desc_adv_items, ensure_ascii=False, indent=4)
                    
                    # Add a comma if the object is not empty
                    if poi_block.strip().endswith('}'):
                        last_brace_index = poi_block.rfind('}')
                        if last_brace_index != -1:
                            poi_block = poi_block[:last_brace_index].rstrip()
                            if not poi_block.endswith(','):
                                poi_block += ','
                            poi_block += f'
    descriptionAdvanced: {json_str}
' + '}'

            # Add factsAdvanced
            if 'factsAdvanced' in item:
                new_facts = item['factsAdvanced']
                facts_json = json.dumps(new_facts, ensure_ascii=False)
                
                if poi_block.strip().endswith('}'):
                    last_brace_index = poi_block.rfind('}')
                    if last_brace_index != -1:
                        poi_block = poi_block[:last_brace_index].rstrip()
                        if not poi_block.endswith(','):
                            poi_block += ','
                        poi_block += f'
    factsAdvanced: {{ "multi4": {facts_json} }}
' + '}'


            # Replace the old POI block with the new one
            content = content[:obj_start] + poi_block + content[obj_end + 1:]

        if content != original_content:
            with open(ts_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved changes to {ts_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python apply_seo_json_v2.py <json_file>")
    else:
        apply_seo(sys.argv[1])
