import json
import re
import sys
import os

def apply_seo(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    lang = data.get('lang', 'en')
    items = data.get('items', [])
    files = data.get('files', [])

    # Map items by ID for easy access
    item_map = {item['id']: item for item in items}

    for ts_file in files:
        if not os.path.exists(ts_file):
            print(f"File not found: {ts_file}")
            continue

        with open(ts_file, 'r', encoding='utf-8') as f:
            content = f.read()

        updated = False
        # Find all POI IDs in this file
        file_ids = re.findall(r'id:\s*"(.*?)"', content)
        
        for poi_id in file_ids:
            if poi_id not in item_map:
                continue
            
            item = item_map[poi_id]
            new_desc = item['descriptionAdvanced'].replace('"', '\\"').replace('\n', ' ')
            new_facts = item['factsAdvanced']
            facts_json = json.dumps(new_facts, ensure_ascii=False)

            # Find the POI block
            # This regex is a bit more flexible
            poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*\})'
            match = re.search(poi_pattern, content)
            if not match:
                continue
            
            poi_block = match.group(1)
            new_poi_block = poi_block

            # --- Handle descriptionAdvanced ---
            if "descriptionAdvanced" in new_poi_block:
                # Update existing lang entry or add it
                desc_inner_pattern = r'(descriptionAdvanced:\s*\{)([\s\S]*?)(\})'
                desc_match = re.search(desc_inner_pattern, new_poi_block)
                if desc_match:
                    prefix, inner, suffix = desc_match.groups()
                    lang_pattern = r'(' + lang + r':\s*)(["\'`][\s\S]*?["\'`])'
                    if re.search(lang_pattern, inner):
                        new_inner = re.sub(lang_pattern, r'\1"' + new_desc + r'"', inner)
                    else:
                        # Append new lang
                        sep = "," if inner.strip() and not inner.strip().endswith(',') else ""
                        new_inner = inner.rstrip() + f'{sep}\n      {lang}: "{new_desc}"\n    '
                    new_poi_block = new_poi_block.replace(desc_match.group(0), prefix + new_inner + suffix)
            else:
                # Add descriptionAdvanced before factsAdvanced or at the end
                addition = f',\n    descriptionAdvanced: {{\n      {lang}: "{new_desc}"\n    }}'
                if "factsAdvanced" in new_poi_block:
                    new_poi_block = new_poi_block.replace(",\n    factsAdvanced", addition + ",\n    factsAdvanced")
                elif "facts:" in new_poi_block:
                     # Find end of facts: { ... }
                     facts_match = re.search(r'(facts:\s*\{[\s\S]*?\})', new_poi_block)
                     if facts_match:
                         new_poi_block = new_poi_block.replace(facts_match.group(1), facts_match.group(1) + addition)
                else:
                    new_poi_block = new_poi_block.rstrip().rstrip('}') + addition + "\n  }"

            # --- Handle factsAdvanced ---
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
                if "descriptionAdvanced" in new_poi_block:
                    # Append after descriptionAdvanced
                    desc_match = re.search(r'(descriptionAdvanced:\s*\{[\s\S]*?\})', new_poi_block)
                    if desc_match:
                        new_poi_block = new_poi_block.replace(desc_match.group(1), desc_match.group(1) + addition)
                else:
                     # Just append at end
                     new_poi_block = new_poi_block.rstrip().rstrip('}') + addition + "\n  }"

            if new_poi_block != poi_block:
                content = content.replace(poi_block, new_poi_block)
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
