
import json
import re
import os

def apply_faqs(file_path, faq_files):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    all_faqs = {}
    for faq_file in faq_files:
        if os.path.exists(faq_file):
            with open(faq_file, 'r', encoding='utf-8') as f:
                all_faqs.update(json.load(f))
    
    for poi_id, faq_data in all_faqs.items():
        # Find the POI block. 
        # A POI block starts with { and contains id: "poi_id"
        # and ends with   }, at the same indentation level.
        
        # Search for the ID
        id_pattern = rf'id:\s*"{poi_id}"'
        match = re.search(id_pattern, content)
        if not match:
            print(f"POI ID {poi_id} not found in {file_path}")
            continue
        
        id_pos = match.start()
        
        # Find the beginning of this object (the previous '{' at indentation 2)
        start_pos = content.rfind('{', 0, id_pos)
        
        # Find the end of this object (the next '},' or '}' at indentation 2)
        # We look for \n  }, or \n  }
        end_match = re.search(r'\n  },?', content[id_pos:])
        if not end_match:
            print(f"Could not find end of POI block for {poi_id}")
            continue
            
        end_pos = id_pos + end_match.start()
        
        # Check if faq already exists in this block
        block = content[start_pos:end_pos+5] # a bit extra
        if 'faq:' in block:
            print(f"FAQ already exists for {poi_id}, skipping.")
            continue
            
        # Prepare the FAQ string
        faq_json = json.dumps(faq_data, indent=4, ensure_ascii=False)
        # Indent the JSON
        indented_faq = faq_json.replace('\n', '\n    ')
        faq_str = f",\n    faq: {indented_faq}"
        
        # Insert before the closing brace
        content = content[:end_pos] + faq_str + content[end_pos:]
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated {file_path}")

faq_files = ['hu_faqs_1.json', 'hu_faqs_2.json', 'hu_faqs_3.json', 'hu_faqs_4.json', 'hu_faqs_5.json']
apply_faqs('lib/visualLab/data/hungaryPoi.ts', faq_files)
