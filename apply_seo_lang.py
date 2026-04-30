
import json
import re
import sys

def add_seo_content(ts_file_path, json_file_path, lang):
    with open(ts_file_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    with open(json_file_path, 'r', encoding='utf-8') as f:
        seo_data = json.load(f)

    for item in seo_data:
        poi_id = item['id']
        
        poi_regex = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\})'
        match = re.search(poi_regex, ts_content, re.MULTILINE | re.DOTALL)

        if not match:
            print(f"POI with id {poi_id} not found or structure is unexpected.")
            continue
            
        poi_object_str = match.group(0)

        # This logic is to add the fields if they don't exist
        if 'descriptionAdvanced:' not in poi_object_str:
            facts_block_match = re.search(r'(facts:\s*\{[\s\S]*?^\s*\})', poi_object_str, re.MULTILINE | re.DOTALL)
            if not facts_block_match:
                print(f"Could not find facts block in POI {poi_id}. Skipping.")
                continue
            facts_block = facts_block_match.group(1)

            desc_advanced = item['descriptionAdvanced'][lang]
            facts_advanced = item['factsAdvanced'][lang]

            new_fields = f""",
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "",
      en: `{desc_advanced.replace('`', '')}`
    }},
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: [],
      en: {json.dumps(facts_advanced, ensure_ascii=False, indent=8).replace('{', '      {').replace('}', '      }')}
    }}"""
            
            updated_obj_str = poi_object_str.replace(facts_block, facts_block + new_fields)
            ts_content = ts_content.replace(poi_object_str, updated_obj_str)
        
        # This logic is to fill empty fields if they exist
        else:
            if 'descriptionAdvanced' in item and lang in item['descriptionAdvanced']:
                desc_advanced = item['descriptionAdvanced'][lang]
                ts_content = re.sub(r'(id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?descriptionAdvanced:\s*\{[\s\S]*?en:\s*)"\s*"', r'\1' + f'`{desc_advanced.replace("`", "")}`"', ts_content, flags=re.DOTALL)
            if 'factsAdvanced' in item and lang in item['factsAdvanced']:
                facts_advanced = item['factsAdvanced'][lang]
                json_facts = json.dumps(facts_advanced, ensure_ascii=False, indent=8)
                ts_content = re.sub(r'(id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?factsAdvanced:\s*\{[\s\S]*?en:\s*)\[\s*\]', r'\1' + json_facts, ts_content, flags=re.DOTALL)


    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully updated {ts_file_path}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python apply_seo_lang.py <ts_file_path> <json_file_path> <lang>")
        sys.exit(1)
    
    ts_file = sys.argv[1]
    json_file = sys.argv[2]
    language = sys.argv[3]
    add_seo_content(ts_file, json_file, language)
