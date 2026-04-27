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

    for item in seo_data["items"]:
        poi_id = item["id"]
        if poi_id not in content:
            print(f"ID not found: {poi_id}")
            continue
        
        # Using a safer way to match the POI object
        pattern = re.compile(r'id:\s*"' + re.escape(poi_id) + r'".*?},', re.DOTALL)
        match = pattern.search(content)
        if not match:
            continue
        
        block = match.group(0)
        
        # Inject descriptionAdvanced and factsAdvanced for Hungarian
        desc_hu = item.get("descriptionAdvanced", "").replace('"', '\\"')
        facts_hu = [f.replace('"', '\\"') for f in item.get("factsAdvanced", [])]
        
        # Simple injection if not present, replacement if present
        new_block = block
        
        # Add descriptionAdvanced.hu
        if "descriptionAdvanced: {" in block:
            new_block = re.sub(r'descriptionAdvanced: \{.*?\},', f'descriptionAdvanced: {{ hu: "{desc_hu}" }},', new_block, flags=re.DOTALL)
        else:
            new_block = new_block.replace(f'id: "{poi_id}",', f'id: "{poi_id}",\n    descriptionAdvanced: {{ hu: "{desc_hu}" }},')
            
        # Add factsAdvanced.hu
        facts_str = ", ".join([f'"{f}"' for f in facts_hu])
        if "factsAdvanced: {" in block:
            new_block = re.sub(r'factsAdvanced: \{.*?\},', f'factsAdvanced: {{ hu: [{facts_str}] }},', new_block, flags=re.DOTALL)
        else:
            new_block = new_block.replace(f'id: "{poi_id}",', f'id: "{poi_id}",\n    factsAdvanced: {{ hu: [{facts_str}] }},')
            
        content = content.replace(block, new_block)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Update successful")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python apply_seo_de_hu.py <file.ts> <data.json>")
        sys.exit(1)
        
    ts_file = sys.argv[1]
    json_file = sys.argv[2]
    
    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    update_file(ts_file, data)
