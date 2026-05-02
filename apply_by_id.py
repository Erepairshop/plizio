import json
import re
import sys
import glob

def escape_ts_string(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def apply_by_id(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Load all TS files
    files = glob.glob('lib/visualLab/data/*[pP]ortugal*.ts')
    file_contents = {}
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            file_contents[file_path] = f.read()

    files_changed = set()

    for item in data:
        poi_id = item['id']
        en_desc = item['en_desc']
        en_facts = item['en_facts']
        
        found = False
        for file_path, content in file_contents.items():
            pattern = re.compile(r'(\{\s*id:\s*["\']' + re.escape(poi_id) + r'["\'][\s\S]*?)(?=(?:\n\s*(?:\{\s*)?id:|\Z|\n\s*\];))')
            match = pattern.search(content)
            if match:
                found = True
                block = match.group(1)
                new_block = block
                
                if 'descriptionAdvanced:' in new_block:
                    desc_adv_pattern = re.compile(r'(descriptionAdvanced:\s*\{[^}]*?en:\s*)["\'].*?["\']')
                    if desc_adv_pattern.search(new_block):
                        new_block = desc_adv_pattern.sub(r'\1"' + escape_ts_string(en_desc) + '"', new_block)
                    else:
                        new_block = re.sub(r'(descriptionAdvanced:\s*\{)', r'\1 en: "' + escape_ts_string(en_desc) + '", ', new_block)
                else:
                    desc_adv_str = f',\n    descriptionAdvanced: {{ de: "", hu: "", ro: "", en: "{escape_ts_string(en_desc)}" }}'
                    new_block = re.sub(r'(description:\s*\{[^}]*\})', r'\1' + desc_adv_str, new_block)
                    
                if 'factsAdvanced:' in new_block:
                    facts_adv_pattern = re.compile(r'(factsAdvanced:\s*\{[^}]*?en:\s*)\[.*?\]')
                    facts_json = json.dumps(en_facts, ensure_ascii=False)
                    if facts_adv_pattern.search(new_block):
                        new_block = facts_adv_pattern.sub(r'\1' + facts_json, new_block)
                    else:
                        new_block = re.sub(r'(factsAdvanced:\s*\{)', r'\1 en: ' + facts_json + ', ', new_block)
                else:
                    facts_json = json.dumps(en_facts, ensure_ascii=False)
                    facts_adv_str = f',\n    factsAdvanced: {{ de: [], hu: [], ro: [], en: {facts_json} }}'
                    new_block = re.sub(r'(facts:\s*\{[^}]*\})', r'\1' + facts_adv_str, new_block)
                    
                if block != new_block:
                    file_contents[file_path] = content.replace(block, new_block)
                    files_changed.add(file_path)
                    print(f"Updated {poi_id} in {file_path}")
                else:
                    print(f"No changes needed for {poi_id}")
                break
                
        if not found:
            print(f"Warning: POI {poi_id} not found in ANY file!")

    for file_path in files_changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(file_contents[file_path])
        print(f"Saved {file_path}")

if __name__ == '__main__':
    apply_by_id(sys.argv[1])
