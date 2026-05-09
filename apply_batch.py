import json
import sys

def apply_update(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for file_path in data['files']:
        # Ensure file exists
        full_path = os.path.join(os.getcwd(), file_path)
        if not os.path.exists(full_path):
            print(f"Creating {full_path}")
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write("export const boliviaEconomicPois = [\n];")
        
        # Now append content from data['items'] if id matches the file
        print(f"Appending data to {full_path}")

if __name__ == "__main__":
    import os
    apply_update(sys.argv[1])
