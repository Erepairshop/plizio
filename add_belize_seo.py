
import re
import os

def fix_syntax(content):
    # Fix double commas in POI objects
    content = re.sub(r'\},,', '},', content)
    content = re.sub(r'id:\s*".*",,', lambda m: m.group(0).replace(',,', ','), content)
    # Fix extra closing braces
    content = re.sub(r'\}\s*,\s*\}', '}', content)
    return content

def update_poi_file(file_path, seo_data):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = fix_syntax(content)

    for poi_id, data in seo_data.items():
        # Find the POI block
        pattern = rf'(id:\s*"{re.escape(poi_id)}"[\s\S]*?)(?=\s*id:|\s*\];)'
        match = re.search(pattern, content)
        if not match:
            continue
        
        poi_block = match.group(1)
        new_block = poi_block

        desc_en = data['desc'].replace('"', '\\"')
        facts_en = '", "'.join([f.replace('"', '\\"') for f in data['facts']])

        # Update or add descriptionAdvanced
        if 'descriptionAdvanced:' in new_block:
            # Check if en is empty
            if re.search(r'en:\s*["\']["\']', new_block):
                new_block = re.sub(r'en:\s*["\']["\']', f'en: "{desc_en}"', new_block)
        else:
            # Add descriptionAdvanced before facts:
            desc_adv = f',\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{desc_en}"\n    }}'
            if 'facts:' in new_block:
                new_block = new_block.replace('facts:', f'descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{desc_en}"\n    }},\n    facts:')
            else:
                # Fallback: add before the last comma/brace if possible
                pass

        # Update or add factsAdvanced
        if 'factsAdvanced:' in new_block:
            if 'en: []' in new_block:
                new_block = new_block.replace('en: []', f'en: ["{facts_en}"]')
        else:
            facts_adv = f',\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: ["{facts_en}"]\n    }}'
            # Try to insert after facts: or descriptionAdvanced:
            if 'facts:' in new_block:
                # Find end of facts: { ... }
                f_match = re.search(r'facts:\s*\{[\s\S]*?\}', new_block)
                if f_match:
                    new_block = new_block.replace(f_match.group(0), f_match.group(0) + facts_adv)
            elif 'descriptionAdvanced:' in new_block:
                d_match = re.search(r'descriptionAdvanced:\s*\{[\s\S]*?\}', new_block)
                if d_match:
                    new_block = new_block.replace(d_match.group(0), d_match.group(0) + facts_adv)

        content = content.replace(poi_block, new_block)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated {file_path}")

if __name__ == "__main__":
    import json
    import sys
    
    if len(sys.argv) < 3:
        print("Usage: python add_belize_seo.py <file_path> <json_data_path>")
        sys.exit(1)
        
    target_file = sys.argv[1]
    json_path = sys.argv[2]
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    update_poi_file(target_file, data)
