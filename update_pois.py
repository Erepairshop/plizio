import re
import os
import json

def process_file(file_path, updates):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, data in updates.items():
        desc_adv = data['descriptionAdvanced'].replace('"', '\\"')
        facts_adv = json.dumps(data['factsAdvanced'], ensure_ascii=False)
        
        # Construct the strings to insert
        desc_str = f'descriptionAdvanced: {{ de: "{desc_adv}", hu: "", ro: "", en: "" }}'
        facts_str = f'factsAdvanced: {{ de: {facts_adv}, hu: [], ro: [], en: [] }}'
        
        # Find the POI block and insert the new fields after the existing 'facts' field
        # We look for the closing brace of the 'facts' object
        pattern = re.compile(r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\})', re.DOTALL)
        
        def replace_func(match):
            return match.group(1) + ',\n    ' + desc_str + ',\n    ' + facts_str
        
        if pattern.search(content):
            content = pattern.sub(replace_func, content)
        else:
            print(f"Warning: Could not find POI with id {poi_id} in {file_path}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    import sys
    file_path = sys.argv[1]
    updates_json = sys.argv[2]
    updates = json.loads(updates_json)
    process_file(file_path, updates)
