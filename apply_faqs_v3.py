
import json
import os

def apply_faqs_to_file(file_path, faq_data_dict):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Sort POIs by their occurrence in the file in REVERSE order
    # to avoid line number shifting issues.
    # But wait, I can just find the ID, then the closing brace.
    
    updated_indices = []
    
    # We'll process from bottom to top to keep indices stable
    # Actually, a better way is to identify all insertion points first.
    
    # Find all POIs and their closing brace line index
    poi_insertions = []
    for poi_id, faq_data in faq_data_dict.items():
        found_id = False
        for i, line in enumerate(lines):
            if f'id: "{poi_id}"' in line:
                # Found the POI ID. Now find the closing brace
                for j in range(i, len(lines)):
                    if lines[j].strip() in ['},', '}'] and lines[j].startswith('  }'):
                        # Check if faq already exists in this block
                        # Simple check: search between i and j
                        already_has_faq = False
                        for k in range(i, j):
                            if 'faq:' in lines[k]:
                                already_has_faq = True
                                break
                        
                        if not already_has_faq:
                            poi_insertions.append((j, faq_data))
                        found_id = True
                        break
                if found_id:
                    break
                    
    # Sort insertions by line index descending
    poi_insertions.sort(key=lambda x: x[0], reverse=True)
    
    for line_idx, faq_data in poi_insertions:
        faq_json = json.dumps(faq_data, indent=4, ensure_ascii=False)
        indented_faq = faq_json.replace('\n', '\n    ')
        faq_str = f"    faq: {indented_faq},\n"
        lines.insert(line_idx, faq_str)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Applied {len(poi_insertions)} FAQs to {file_path}")

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

# Apply
apply_faqs_to_file('lib/visualLab/data/hungaryPoi.ts', hu_faqs)
apply_faqs_to_file('lib/visualLab/data/romaniaPoi.ts', mapped_ro_faqs)
