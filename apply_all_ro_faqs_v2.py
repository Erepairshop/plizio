
import json
import re
import os

id_mapping = {
    "ro-bran": "hist-bran-castle",
    "ro-peles": "hist-peles-castle",
    "ro-corvinilor": "hist-corvin-castle",
    "ro-rasnov": "hist-rasnov-fortress",
    "ro-fagaras": "hist-fagaras-fortress",
    "ro-alba-carolina": "hist-alba-carolina",
    "ro-sarmizegetusa": "hist-sarmizegetusa-regia",
    "ro-poenari": "hist-poenari",
    "ro-voronet": "hist-voronet",
    "ro-sucevita": "hist-sucevita",
    "ro-curtea-de-arges": "hist-curtea-de-arges",
    "ro-salina-turda": "landmark-salina-turda",
    "ro-parlament": "landmark-palace-parliament",
    "ro-ateneu": "landmark-ateneul-roman",
    "ro-transfagarasan": "landmark-transfagarasan",
    "ro-transalpina": "landmark-transalpina",
    "ro-cimitirul-vesel": "landmark-merry-cemetery"
}

def apply_faqs(file_path, faq_files):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    all_faqs = {}
    for faq_file in faq_files:
        if os.path.exists(faq_file):
            with open(faq_file, 'r', encoding='utf-8') as f:
                all_faqs.update(json.load(f))
    
    for gen_id, faq_data in all_faqs.items():
        # Map to real ID if necessary
        poi_id = id_mapping.get(gen_id, gen_id)
        
        # Search for the ID
        id_pattern = rf'id:\s*"{poi_id}"'
        match = re.search(id_pattern, content)
        if not match:
            print(f"POI ID {poi_id} not found in {file_path}")
            continue
        
        id_pos = match.start()
        
        # Find the beginning of this object
        start_pos = content.rfind('{', 0, id_pos)
        
        # Find the end of this object (the next '},' or '}' at indentation 2)
        end_match = re.search(r'\n  },?', content[id_pos:])
        if not end_match:
            print(f"Could not find end of POI block for {poi_id}")
            continue
            
        end_pos = id_pos + end_match.start()
        
        # Check if faq already exists in this block
        block = content[start_pos:end_pos+5]
        if 'faq:' in block:
            print(f"FAQ already exists for {poi_id}, skipping.")
            continue
            
        # Prepare the FAQ string
        faq_json = json.dumps(faq_data, indent=4, ensure_ascii=False)
        indented_faq = faq_json.replace('\n', '\n    ')
        faq_str = f",\n    faq: {indented_faq}"
        
        # Insert before the closing brace
        content = content[:end_pos] + faq_str + content[end_pos:]
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated {file_path}")

faq_files = ['ro_faqs_1.json', 'ro_faqs_2.json', 'ro_faqs_3.json', 'ro_faqs_4.json', 'ro_faqs_5.json']
apply_faqs('lib/visualLab/data/romaniaPoi.ts', faq_files)
