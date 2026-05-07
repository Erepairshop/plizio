import json
import re
import sys
import os

def find_balanced_block(content, start_pos):
    # Find the '{' that starts the block containing start_pos
    # We look backwards from start_pos for the nearest '{' that isn't inside a string
    # Simplified: look for the '{' before 'id:'
    
    # Actually, let's find the 'id: "..."' first
    match = re.search(r'id:\s*".*?"', content[start_pos:])
    if not match:
        return None, None
    
    id_pos = start_pos + match.start()
    
    # Look backwards for the opening '{' of the POI object
    open_brace_pos = content.rfind('{', 0, id_pos)
    if open_brace_pos == -1:
        return None, None
        
    # Now find the matching closing '}'
    stack = 0
    for i in range(open_brace_pos, len(content)):
        if content[i] == '{':
            stack += 1
        elif content[i] == '}':
            stack -= 1
            if stack == 0:
                return open_brace_pos, i + 1
    return None, None

def safe_apply_seo(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    lang = data.get('lang', 'ro')
    items = data.get('items', [])
    files = data.get('files', [])

    item_map = {item['id']: item for item in items}

    for ts_file in files:
        if not os.path.exists(ts_file):
            continue

        with open(ts_file, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        updated = False
        
        # We process items one by one. To avoid index shifts, we'll re-scan after each update
        # or work with a list of replacements. Re-scanning is safer.
        
        for poi_id in item_map:
            # Re-scan content because indices might have changed
            # Find the position of id: "poi_id"
            id_pattern = r'id:\s*"' + re.escape(poi_id) + r'"'
            id_match = re.search(id_pattern, new_content)
            if not id_match:
                continue
                
            start, end = find_balanced_block(new_content, id_match.start())
            if start is None:
                continue
                
            block = new_content[start:end]
            original_block = block
            
            item = item_map[poi_id]
            new_desc = item['descriptionAdvanced'].replace('"', '\\"').replace('\n', ' ')
            new_facts = item['factsAdvanced']
            facts_json = json.dumps(new_facts, ensure_ascii=False)

            # 1. Update descriptionAdvanced
            if "descriptionAdvanced:" in block:
                # Use a more robust way to find/replace inside descriptionAdvanced
                desc_match = re.search(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', block)
                if desc_match:
                    inner = desc_match.group(1)
                    ro_pattern = r'ro:\s*(["\'])(.*?)\1'
                    if re.search(ro_pattern, inner):
                        new_inner = re.sub(ro_pattern, f'ro: "{new_desc}"', inner)
                    else:
                        sep = "," if inner.strip() and not inner.strip().endswith(',') else ""
                        new_inner = inner.rstrip() + f'{sep}\n      {lang}: "{new_desc}"\n    '
                    block = block.replace(inner, new_inner)
            else:
                # Add before factsAdvanced or at the end
                addition = f',\n    descriptionAdvanced: {{\n      {lang}: "{new_desc}"\n    }}'
                if "factsAdvanced:" in block:
                    block = block.replace("factsAdvanced:", addition.lstrip(',') + ",\n    factsAdvanced:")
                else:
                    # Insert before last }
                    block = block[:block.rfind('}')] + addition + "\n  }"

            # 2. Update factsAdvanced
            if "factsAdvanced:" in block:
                facts_match = re.search(r'factsAdvanced:\s*\{([\s\S]*?)\}', block)
                if facts_match:
                    inner = facts_match.group(1)
                    ro_pattern = r'ro:\s*\[[\s\S]*?\]'
                    if re.search(ro_pattern, inner):
                        new_inner = re.sub(ro_pattern, f'ro: {facts_json}', inner)
                    else:
                        sep = "," if inner.strip() and not inner.strip().endswith(',') else ""
                        new_inner = inner.rstrip() + f'{sep}\n      {lang}: {facts_json}\n    '
                    block = block.replace(inner, new_inner)
            else:
                addition = f',\n    factsAdvanced: {{\n      {lang}: {facts_json}\n    }}'
                block = block[:block.rfind('}')] + addition + "\n  }"

            if block != original_block:
                new_content = new_content[:start] + block + new_content[end:]
                updated = True
                print(f"Updated {poi_id}")

        if updated:
            with open(ts_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Saved changes to {ts_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python safe_apply_seo.py <json_file>")
    else:
        safe_apply_seo(sys.argv[1])
