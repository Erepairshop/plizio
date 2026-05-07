import json
import re
import sys
import os

def find_object_bounds(content, start_index):
    """
    Finds the closing brace of a JSON-like object in a string,
    handling nested braces and strings correctly.
    """
    brace_count = 0
    in_string = False
    escape = False
    
    for i in range(start_index, len(content)):
        char = content[i]
        
        if in_string:
            if escape:
                escape = False
            elif char == '\\':
                escape = True
            elif char == '"':
                in_string = False
        else:
            if char == '"':
                in_string = True
            elif char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    return i # index of closing brace
                    
    return -1

def apply_seo(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    lang = data.get('lang', 'en')
    items = data.get('items', [])
    files = data.get('files', [])

    item_map = {item['id']: item for item in items}

    for ts_file in files:
        if not os.path.exists(ts_file):
            print(f"File not found: {ts_file}")
            continue

        with open(ts_file, 'r', encoding='utf-8') as f:
            content = f.read()

        updated = False
        
        # Process each POI ID specified in the JSON file
        for poi_id, item in item_map.items():
            # Find the exact start of the POI object
            id_match = re.search(r'\{\s*id:\s*"' + re.escape(poi_id) + r'"', content)
            if not id_match:
                continue
            
            start_index = id_match.start()
            end_index = find_object_bounds(content, start_index)
            
            if end_index == -1:
                print(f"Could not find bounds for {poi_id}")
                continue
                
            poi_block = content[start_index:end_index + 1]
            new_poi_block = poi_block
            
            if 'descriptionAdvanced' in item:
                new_desc = item['descriptionAdvanced'].replace('"', '\\"').replace('\n', ' ')
            else:
                new_desc = None
                
            if 'factsAdvanced' in item:
                new_facts = item['factsAdvanced']
                facts_json = json.dumps(new_facts, ensure_ascii=False)
            else:
                new_facts = None

            # --- Handle descriptionAdvanced ---
            if new_desc is not None:
                if "descriptionAdvanced" in new_poi_block:
                    desc_inner_pattern = r'(descriptionAdvanced:\s*\{)([\s\S]*?)(\})'
                    desc_match = re.search(desc_inner_pattern, new_poi_block)
                    if desc_match:
                        prefix, inner, suffix = desc_match.groups()
                        lang_pattern = r'(' + lang + r':\s*)(["\'`][\s\S]*?["\'`])'
                        if re.search(lang_pattern, inner):
                            new_inner = re.sub(lang_pattern, r'\1"' + new_desc + r'"', inner)
                        else:
                            sep = "," if inner.strip() and not inner.strip().endswith(',') else ""
                            new_inner = inner.rstrip() + f'{sep}\n      {lang}: "{new_desc}"\n    '
                        new_poi_block = new_poi_block.replace(desc_match.group(0), prefix + new_inner + suffix)
                else:
                    addition = f',\n    descriptionAdvanced: {{\n      {lang}: "{new_desc}"\n    }}'
                    # Strip closing brace and trailing comma if present
                    inner_content = new_poi_block[:-1].rstrip()
                    if inner_content.endswith(','):
                        inner_content = inner_content[:-1].rstrip()
                    new_poi_block = inner_content + addition + "\n  }"

            # --- Handle factsAdvanced ---
            if new_facts is not None:
                if "factsAdvanced" in new_poi_block:
                    facts_inner_pattern = r'(factsAdvanced:\s*\{)([\s\S]*?)(\})'
                    facts_match = re.search(facts_inner_pattern, new_poi_block)
                    if facts_match:
                        prefix, inner, suffix = facts_match.groups()
                        lang_pattern = r'(' + lang + r':\s*)(\[[\s\S]*?\])'
                        if re.search(lang_pattern, inner):
                            new_inner = re.sub(lang_pattern, r'\1' + facts_json, inner)
                        else:
                            sep = "," if inner.strip() and not inner.strip().endswith(',') else ""
                            new_inner = inner.rstrip() + f'{sep}\n      {lang}: {facts_json}\n    '
                        new_poi_block = new_poi_block.replace(facts_match.group(0), prefix + new_inner + suffix)
                else:
                    addition = f',\n    factsAdvanced: {{\n      {lang}: {facts_json}\n    }}'
                    # Strip closing brace and trailing comma if present
                    inner_content = new_poi_block[:-1].rstrip()
                    if inner_content.endswith(','):
                        inner_content = inner_content[:-1].rstrip()
                    new_poi_block = inner_content + addition + "\n  }"

            if new_poi_block != poi_block:
                # Replace the exact block in the content, avoiding duplicates or structural breakage
                content = content[:start_index] + new_poi_block + content[end_index + 1:]
                updated = True
                print(f"Updated {poi_id}")

        if updated:
            with open(ts_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved changes to {ts_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python apply_seo_json.py <json_file>")
    else:
        apply_seo(sys.argv[1])
