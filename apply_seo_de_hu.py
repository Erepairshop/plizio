import json
import re
import sys
import os

def update_file(file_path, seo_data):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # We will use regex to find each POI object and inject/replace the de and hu fields for descriptionAdvanced and factsAdvanced
    # Since the structure is quite complex, it's safer to find the block for each id, then replace inside it.
    
    for poi_id, data in seo_data.items():
        if poi_id not in content:
            continue
        
        desc_de = data.get("desc_de", "")
        desc_hu = data.get("desc_hu", "")
        facts_de = data.get("facts_de", [])
        facts_hu = data.get("facts_hu", [])
        
        # Format the values
        # Escape quotes
        desc_de = desc_de.replace('"', '\\"')
        desc_hu = desc_hu.replace('"', '\\"')
        
        facts_de_str = ",\n      ".join([f'"{f.replace("'", "\\'")}"' for f in facts_de])
        facts_hu_str = ",\n      ".join([f'"{f.replace("'", "\\'")}"' for f in facts_hu])

        # Regex to locate the descriptionAdvanced block for this specific id
        # We need a robust parser. Instead of full regex, we can find the id, then the nearest descriptionAdvanced.
        
        pattern_id = rf'(id:\s*"{poi_id}".*?descriptionAdvanced:\s*\{{)(.*?)(\}})'
        
        def repl_desc(match):
            inner = match.group(2)
            # Replace de
            if 'de:' in inner:
                inner = re.sub(r'de:\s*"[^"]*"', f'de: "{desc_de}"', inner)
            else:
                inner = f'\n      de: "{desc_de}",' + inner
            # Replace hu
            if 'hu:' in inner:
                inner = re.sub(r'hu:\s*"[^"]*"', f'hu: "{desc_hu}"', inner)
            else:
                inner = f'\n      hu: "{desc_hu}",' + inner
            return match.group(1) + inner + match.group(3)
        
        content = re.sub(pattern_id, repl_desc, content, flags=re.DOTALL)
        
        # Now for factsAdvanced
        pattern_facts = rf'(id:\s*"{poi_id}".*?factsAdvanced:\s*\{{)(.*?)(\}}\s*\n?\s*\}}?)'
        
        def repl_facts(match):
            inner = match.group(2)
            if 'de:' in inner:
                # Replace the de array
                inner = re.sub(r'de:\s*\[.*?\]', f'de: [\n      {facts_de_str}\n    ]', inner, flags=re.DOTALL)
            else:
                inner = f'\n      de: [\n      {facts_de_str}\n    ],' + inner
                
            if 'hu:' in inner:
                inner = re.sub(r'hu:\s*\[.*?\]', f'hu: [\n      {facts_hu_str}\n    ]', inner, flags=re.DOTALL)
            else:
                inner = f'\n      hu: [\n      {facts_hu_str}\n    ],' + inner
            return match.group(1) + inner + match.group(3)
            
        content = re.sub(pattern_facts, repl_facts, content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Updated {file_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python apply_seo_de_hu.py <file.ts> <data.json>")
        sys.exit(1)
        
    ts_file = sys.argv[1]
    json_file = sys.argv[2]
    
    with open(json_file, "r", encoding="utf-8") as f:
        seo_data = json.load(f)
        
    update_file(ts_file, seo_data)
