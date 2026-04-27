import json
import os
import re

def apply_faqs(file_path, faq_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, faqs in faq_data.items():
        # Find the POI object
        # We look for id: "poi_id"
        pattern = re.compile(r'\{\s*id:\s*"' + re.escape(poi_id) + r'"')
        match = pattern.search(content)
        if not match:
            print(f"POI {poi_id} not found in {file_path}")
            continue
        
        start_pos = match.start()
        
        # Check if faq already exists in this object
        # We find the end of the object first
        brace_count = 0
        end_pos = -1
        for i in range(start_pos, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = i
                    break
        
        if end_pos == -1:
            print(f"Could not find end of POI object {poi_id}")
            continue
            
        poi_content = content[start_pos:end_pos]
        if 'faq:' in poi_content:
            print(f"FAQ already exists for {poi_id}")
            continue
            
        # Format the FAQ string
        faq_json = json.dumps(faqs, ensure_ascii=False, indent=2)
        # Indent the JSON
        indented_faq = faq_json.replace('\n', '\n    ')
        faq_string = f',\n    faq: {indented_faq}'
        
        # Insert before the closing brace
        content = content[:end_pos] + faq_string + '\n  ' + content[end_pos:]
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python apply_faqs.py <file_path> <faq_json_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    faq_json_path = sys.argv[2]
    
    with open(faq_json_path, 'r', encoding='utf-8') as f:
        faq_data = json.load(f)
    
    apply_faqs(file_path, faq_data)
