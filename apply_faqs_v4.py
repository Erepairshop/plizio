
import json
import os

def apply_faqs_to_file(file_path, faq_data_dict):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for poi_id, faq_data in faq_data_dict.items():
        # Find the POI ID
        id_pattern = rf'id:\s*"{poi_id}"'
        match = re.search(id_pattern, content)
        if not match:
            continue
            
        id_pos = match.start()
        
        # Find the end of this object (next   }, or   })
        # We search from id_pos onwards.
        end_match = re.search(r'\n  },?', content[id_pos:])
        if not end_match:
            continue
            
        end_pos = id_pos + end_match.start()
        
        # Check if already has faq
        # Find start of block to be sure
        start_pos = content.rfind('{', 0, id_pos)
        if 'faq:' in content[start_pos:end_pos+10]:
            continue
            
        faq_json = json.dumps(faq_data, indent=4, ensure_ascii=False)
        indented_faq = faq_json.replace('\n', '\n    ')
        faq_str = f",\n    faq: {indented_faq}"
        
        # Insert!
        content = content[:end_pos] + faq_str + content[end_pos:]
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

import re

# Load all FAQs
hu_faqs = {}
for i in range(1, 6):
    f = f'hu_faqs_{i}.json'
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as jf:
            hu_faqs.update(json.load(jf))

ro_faqs = {}
for i in range(1, 6):
    f = f'ro_faqs_{i}.json'
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as jf:
            ro_faqs.update(json.load(jf))

# ID mapping for Romania
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

mapped_ro_faqs = {}
for k, v in ro_faqs.items():
    mapped_ro_faqs[id_mapping.get(k, k)] = v

apply_faqs_to_file('lib/visualLab/data/hungaryPoi.ts', hu_faqs)
apply_faqs_to_file('lib/visualLab/data/romaniaPoi.ts', mapped_ro_faqs)
print("Updated files.")
