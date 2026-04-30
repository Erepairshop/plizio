import re
import sys

def process_poi_content(poi_content, poi_id):
    # Check if descriptionAdvanced exists
    has_desc_adv = 'descriptionAdvanced:' in poi_content
    has_facts_adv = 'factsAdvanced:' in poi_content
    
    # Check if en is empty if it exists
    en_desc_empty = True
    if has_desc_adv:
        match = re.search(r'descriptionAdvanced: \{.*?en: [\'"]([^\'"]*)[\'"]', poi_content, re.DOTALL)
        if match and match.group(1).strip():
            en_desc_empty = False
            
    en_facts_empty = True
    if has_facts_adv:
        match = re.search(r'factsAdvanced: \{.*?en: \[(.*?)\]', poi_content, re.DOTALL)
        if match and match.group(1).strip():
            en_facts_empty = False

    return en_desc_empty, en_facts_empty

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    i = 0
    updated_count = 0
    
    while i < len(lines):
        line = lines[i]
        if 'id:' in line and '{' in lines[max(0, i-1)]:
            # Start of a POI
            poi_start = i - 1
            # Find end of POI
            poi_end = i
            brace_count = 1
            while poi_end < len(lines) and brace_count > 0:
                poi_end += 1
                if poi_end < len(lines):
                    brace_count += lines[poi_end].count('{')
                    brace_count -= lines[poi_end].count('}')
            
            poi_block = "".join(lines[poi_start:poi_end+1])
            poi_id_match = re.search(r'id: [\'"](.+?)[\'"]', poi_block)
            if poi_id_match:
                poi_id = poi_id_match.group(1)
                en_desc_empty, en_facts_empty = process_poi_content(poi_block, poi_id)
                
                if en_desc_empty or en_facts_empty:
                    # We need to update this POI
                    # This script will just mark them for me to fill in later or I can try to generate them here
                    # But I'm an AI, I should generate them.
                    pass
            
            i = poi_end + 1
        else:
            i += 1
    
    return updated_count

# Since I need to generate UNIQUE content, I will do it file by file manually or with a very smart script.
# Actually, I'll use the Gemini CLI's ability to process files.
