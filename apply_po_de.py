import json
import re
import sys
import os

def apply_updates(ts_file, json_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    with open(json_file, 'r', encoding='utf-8') as f:
        updates = json.load(f)

    for item in updates:
        poi_id = item['id']
        de_desc = item['desc_de']
        de_facts = item['facts_de']

        # Find the POI object using regex
        poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\},?\s*(?:\n\s*\{|\n\s*\]))'
        match = re.search(poi_pattern, content, re.MULTILINE | re.DOTALL)
        
        if not match:
            # Fallback for last item
            poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\})'
            match = re.search(poi_pattern, content, re.MULTILINE | re.DOTALL)

        if not match:
            print(f"Could not find POI: {poi_id} in {ts_file}")
            continue
            
        poi_block = match.group(1) + match.group(2)
        new_block = poi_block

        # Inject descriptionAdvanced if missing
        if 'descriptionAdvanced:' not in new_block:
            desc_adv_snippet = f"""
    descriptionAdvanced: {{
      de: "{de_desc.replace('"', '\\"')}",
      hu: "",
      ro: "",
      en: ""
    }},"""
            # Insert after description or facts
            insert_after = re.search(r'(description:\s*\{[\s\S]*?\},)', new_block)
            if insert_after:
                new_block = new_block.replace(insert_after.group(1), insert_after.group(1) + desc_adv_snippet)
        else:
            # Update existing descriptionAdvanced.de
            pass

        # Inject factsAdvanced if missing
        if 'factsAdvanced:' not in new_block:
            facts_str = json.dumps(de_facts, ensure_ascii=False)
            facts_adv_snippet = f"""
    factsAdvanced: {{
      de: {facts_str},
      hu: [],
      ro: [],
      en: []
    }},"""
            insert_after_desc_adv = re.search(r'(descriptionAdvanced:\s*\{[\s\S]*?\},)', new_block)
            if insert_after_desc_adv:
                new_block = new_block.replace(insert_after_desc_adv.group(1), insert_after_desc_adv.group(1) + facts_adv_snippet)

        content = content.replace(poi_block, new_block)

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {ts_file} using {json_file}")

if __name__ == "__main__":
    apply_updates(sys.argv[1], sys.argv[2])
