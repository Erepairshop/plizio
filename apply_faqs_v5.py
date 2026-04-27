
import json
import os
import re

def process_file(file_path, faq_dict):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('\n  {')
    new_parts = [parts[0]] # The header
    
    for part in parts[1:]:
        match = re.search(r'id:\s*"([^"]+)"', part)
        if match:
            poi_id = match.group(1)
            if poi_id in faq_dict and 'faq:' not in part:
                faq_data = faq_dict[poi_id]
                faq_json = json.dumps(faq_data, indent=4, ensure_ascii=False)
                indented_faq = faq_json.replace('\n', '\n    ')
                
                last_brace_match = list(re.finditer(r'\s*}\s*,?\s*$', part))
                if last_brace_match:
                    last_brace = last_brace_match[-1]
                    insert_pos = last_brace.start()
                    before_insert = part[:insert_pos].rstrip()
                    prefix = ""
                    if not before_insert.endswith(','):
                        prefix = ","
                    
                    faq_str = f"{prefix}\n    faq: {indented_faq}"
                    new_part = part[:insert_pos] + faq_str + part[insert_pos:]
                    new_parts.append(new_part)
                else:
                    new_parts.append(part)
            else:
                new_parts.append(part)
        else:
            new_parts.append(part)
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n  {'.join(new_parts))

# Load all FAQs
hu_faqs = {}
for i in range(1, 7):
    f = f'hu_faqs_{i}.json'
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as jf:
            hu_faqs.update(json.load(jf))

ro_faqs = {}
for i in range(1, 8):
    f = f'ro_faqs_{i}.json'
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as jf:
            ro_faqs.update(json.load(jf))
# Add generalist batches
for i in range(1, 4):
    f = f'ro_faqs_batch{i}.json'
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

process_file('lib/visualLab/data/hungaryPoi.ts', hu_faqs)
process_file('lib/visualLab/data/romaniaPoi.ts', mapped_ro_faqs)
print("Updated files.")
