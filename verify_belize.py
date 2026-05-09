import sys
import json
import os

def patch_file(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for item in data['items']:
        found = False
        for file_path in data['files']:
            full_path = os.path.join(os.getcwd(), file_path)
            if not os.path.exists(full_path):
                print(f"MISS file: {full_path}")
                continue
            
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple search for the id
            if f'id: "{item["id"]}"' in content:
                print(f"Found {item['id']} in {file_path}")
                # This is just for verification
                found = True
        if not found:
            print(f"Could not find {item['id']}")

patch_file(sys.argv[1])
