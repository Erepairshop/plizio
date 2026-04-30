import json
import re
import sys

def update_ts_file(ts_file, json_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        poi_id = item['id']
        ro_desc = item['descriptionAdvanced'].replace('"', '\\"')
        ro_facts = item['factsAdvanced']
        
        # Find the POI block
        poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*\})'
        match = re.search(poi_pattern, content)
        if not match:
            print(f"POI {poi_id} not found")
            continue
            
        poi_block = match.group(1)
        new_poi_block = poi_block
        
        # Update descriptionAdvanced.ro
        # Look for ro: "" or ro: '' or ro: ``
        desc_pattern = r'(descriptionAdvanced:\s*\{[\s\S]*?ro:\s*)(["\'`][\s\S]*?["\'`])'
        desc_match = re.search(desc_pattern, new_poi_block)
        if desc_match:
            new_poi_block = re.sub(desc_pattern, r'\1"' + ro_desc + r'"', new_poi_block)
        else:
            # If descriptionAdvanced doesn't exist at all (unlikely based on my read), we'd need to add it.
            # But in the history file it seems to exist.
            pass

        # Update factsAdvanced.ro
        facts_pattern = r'(factsAdvanced:\s*\{[\s\S]*?ro:\s*)(\[[\s\S]*?\])'
        facts_match = re.search(facts_pattern, new_poi_block)
        if facts_match:
            facts_json = json.dumps(ro_facts, ensure_ascii=False, indent=8)
            # Adjust indentation for the injected JSON
            facts_json = facts_json.replace('\n', '\n      ')
            new_poi_block = re.sub(facts_pattern, r'\1' + facts_json, new_poi_block)

        content = content.replace(poi_block, new_poi_block)

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {ts_file}")

if __name__ == "__main__":
    update_ts_file(sys.argv[1], sys.argv[2])
