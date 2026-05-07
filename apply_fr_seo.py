import json
import re
import sys

def escape_ts_string(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def apply_seo_data(ts_file_path, json_files):
    all_data = []
    for jf in json_files:
        with open(jf, 'r', encoding='utf-8') as f:
            all_data.extend(json.load(f))
            
    with open(ts_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False

    for item in all_data:
        poi_id = item['id']
        de_desc = item.get('de_desc', '')
        de_facts = item.get('de_facts', [])
        
        # Match the block for the specific POI id
        pattern = re.compile(r'(\{\s*id:\s*["\']' + re.escape(poi_id) + r'["\'][\s\S]*?)(?=(?:\n\s*(?:\{\s*)?id:|\Z|\n\s*\];))')
        match = pattern.search(content)
        if not match:
            continue
            
        block = match.group(1)
        new_block = block
        
        # Update or insert descriptionAdvanced
        if 'descriptionAdvanced:' in new_block:
            if de_desc:
                desc_pattern = re.compile(r'(descriptionAdvanced:\s*\{[^}]*?de:\s*)["\'].*?["\']')
                if desc_pattern.search(new_block):
                    new_block = desc_pattern.sub(r'\1"' + escape_ts_string(de_desc) + '"', new_block)
                else:
                    new_block = re.sub(r'(descriptionAdvanced:\s*\{)', r'\1 de: "' + escape_ts_string(de_desc) + '", ', new_block)
        else:
            if de_desc:
                desc_str = f',\n    descriptionAdvanced: {{ de: "{escape_ts_string(de_desc)}", hu: "", ro: "", en: "" }}'
                new_block = re.sub(r'(description:\s*\{[^}]*\})', r'\1' + desc_str, new_block)
                
        # Update or insert factsAdvanced
        if 'factsAdvanced:' in new_block:
            if de_facts:
                facts_json = json.dumps(de_facts, ensure_ascii=False)
                facts_pattern = re.compile(r'(factsAdvanced:\s*\{[^}]*?de:\s*)\[.*?\]')
                if facts_pattern.search(new_block):
                    new_block = facts_pattern.sub(r'\1' + facts_json, new_block)
                else:
                    new_block = re.sub(r'(factsAdvanced:\s*\{)', r'\1 de: ' + facts_json + ', ', new_block)
        else:
            if de_facts:
                facts_json = json.dumps(de_facts, ensure_ascii=False)
                facts_str = f',\n    factsAdvanced: {{ de: {facts_json}, hu: [], ro: [], en: [] }}'
                # Find a good place to insert (after facts or description)
                if 'facts:' in new_block:
                    new_block = re.sub(r'(facts:\s*\{[^}]*\})', r'\1' + facts_str, new_block)
                elif 'descriptionAdvanced:' in new_block:
                    new_block = re.sub(r'(descriptionAdvanced:\s*\{[^}]*\})', r'\1' + facts_str, new_block)
                else:
                    new_block = re.sub(r'(description:\s*\{[^}]*\})', r'\1' + facts_str, new_block)

        if block != new_block:
            content = content.replace(block, new_block)
            changed = True
            print(f"Updated {poi_id} in {ts_file_path}")

    if changed:
        with open(ts_file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Saved changes to {ts_file_path}")

json_files = ['batch_fr_1.json', 'batch_fr_2.json', 'batch_fr_3.json']
apply_seo_data('lib/visualLab/data/francePoi.ts', json_files)
apply_seo_data('lib/visualLab/data/poiExtraFranceCities.ts', json_files)
