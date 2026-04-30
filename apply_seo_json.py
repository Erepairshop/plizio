
import json
import re
import sys
import os

def add_seo_content(ts_file_path, json_file_path, lang):
    if not os.path.exists(ts_file_path):
        print(f"TS file not found: {ts_file_path}")
        return
    if not os.path.exists(json_file_path):
        print(f"JSON file not found: {json_file_path}")
        return

    with open(ts_file_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    with open(json_file_path, 'r', encoding='utf-8') as f:
        seo_data = json.load(f)

    for item in seo_data:
        poi_id = item['id']
        
        # Regex to find the POI object. It looks for id: "poi_id" and then the content until the next POI or end of array
        poi_regex = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\},?\s*(?:\n\s*\{|\n\s*\]))'
        match = re.search(poi_regex, ts_content, re.MULTILINE | re.DOTALL)

        if not match:
            # Try another pattern if the first one fails (e.g. last item in array)
            poi_regex = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\})'
            match = re.search(poi_regex, ts_content, re.MULTILINE | re.DOTALL)
            
        if not match:
            print(f"POI with id {poi_id} not found or structure is unexpected.")
            continue
            
        poi_object_str = match.group(1) + match.group(2)

        desc_advanced_en = item['descriptionAdvanced']['en']
        facts_advanced_en = item['factsAdvanced']['en']

        # Escape backticks and dollar signs for template literals if needed, but here we use normal strings mostly
        # Actually, the TS files use double quotes for simple strings.
        
        new_obj_str = poi_object_str
        
        # 1. Update or Add descriptionAdvanced
        if 'descriptionAdvanced:' in poi_object_str:
            # Match the descriptionAdvanced block
            desc_adv_regex = r'descriptionAdvanced:\s*\{([\s\S]*?)\}'
            desc_adv_match = re.search(desc_adv_regex, poi_object_str)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                if 'en:' in desc_adv_content:
                    # Update existing en
                    new_desc_adv_content = re.sub(r'en:\s*"[^"]*"', f'en: "{desc_advanced_en.replace("\"", "\\\"")}"', desc_adv_content)
                    new_obj_str = new_obj_str.replace(desc_adv_content, new_desc_adv_content)
                else:
                    # Add en if it doesn't exist (though usually it should be there)
                    new_desc_adv_content = desc_adv_content.rstrip()
                    if not new_desc_adv_content.endswith(','):
                        new_desc_adv_content += ','
                    new_desc_adv_content += f'\n      en: "{desc_advanced_en.replace("\"", "\\\"")}"'
                    new_obj_str = new_obj_str.replace(desc_adv_content, new_desc_adv_content)
        else:
            # Add the whole block after facts
            facts_regex = r'(facts:\s*\{[\s\S]*?\},)'
            facts_match = re.search(facts_regex, poi_object_str)
            if facts_match:
                insertion = f"""
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "",
      en: "{desc_advanced_en.replace("\"", "\\\"")}"
    }},"""
                new_obj_str = new_obj_str.replace(facts_match.group(1), facts_match.group(1) + insertion)

        # 2. Update or Add factsAdvanced
        if 'factsAdvanced:' in new_obj_str:
            facts_adv_regex = r'factsAdvanced:\s*\{([\s\S]*?)\}'
            facts_adv_match = re.search(facts_adv_regex, new_obj_str)
            if facts_adv_match:
                facts_adv_content = facts_adv_match.group(1)
                facts_en_str = json.dumps(facts_advanced_en, ensure_ascii=False)
                if 'en:' in facts_adv_content:
                    new_facts_adv_content = re.sub(r'en:\s*\[[\s\S]*?\]', f'en: {facts_en_str}', facts_adv_content)
                    new_obj_str = new_obj_str.replace(facts_adv_content, new_facts_adv_content)
                else:
                    new_facts_adv_content = facts_adv_content.rstrip()
                    if not new_facts_adv_content.endswith(','):
                        new_facts_adv_content += ','
                    new_facts_adv_content += f'\n      en: {facts_en_str}'
                    new_obj_str = new_obj_str.replace(facts_adv_content, new_facts_adv_content)
        else:
            # Add after descriptionAdvanced
            desc_adv_regex = r'(descriptionAdvanced:\s*\{[\s\S]*?\},)'
            desc_adv_match = re.search(desc_adv_regex, new_obj_str)
            if desc_adv_match:
                facts_en_str = json.dumps(facts_advanced_en, ensure_ascii=False)
                insertion = f"""
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: [],
      en: {facts_en_str}
    }},"""
                new_obj_str = new_obj_str.replace(desc_adv_match.group(1), desc_adv_match.group(1) + insertion)

        ts_content = ts_content.replace(poi_object_str, new_obj_str)

    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully updated {ts_file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python apply_seo_json.py <ts_file_path> <json_file_path> <lang>")
        sys.exit(1)
    
    ts_file = sys.argv[1]
    json_file = sys.argv[2]
    language = sys.argv[3]
    add_seo_content(ts_file, json_file, language)
