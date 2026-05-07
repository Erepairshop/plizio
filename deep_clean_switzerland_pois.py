import re

file_path = 'lib/visualLab/data/switzerlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def is_english(text):
    if not text: return False
    # Check for common English words
    return bool(re.search(r'\b(the|is|and|of|in|with|to|for|at|on|by)\b', text, re.IGNORECASE))

def is_romanian(text):
    if not text: return False
    # Check for common Romanian words
    return bool(re.search(r'\b(este|și|din|cu|care|sunt|mare|fost)\b', text, re.IGNORECASE))

def clean_array(arr, target_lang):
    ro_items = []
    en_items = []
    for item in arr:
        if is_english(item) and not is_romanian(item):
            en_items.append(item)
        elif is_romanian(item):
            ro_items.append(item)
        else:
            # Fallback
            if target_lang == 'en': en_items.append(item)
            else: ro_items.append(item)
    return en_items if target_lang == 'en' else ro_items

# Split the content into POI blocks
pois = re.split(r'(\s+\{\s+id:\s+"[^"]+",)', content)

new_pois = [pois[0]]
for i in range(1, len(pois), 2):
    header = pois[i]
    body = pois[i+1]
    
    # Process description
    desc_match = re.search(r'description:\s*\{(.*?)\}', body, re.DOTALL)
    if desc_match:
        block = desc_match.group(1)
        ro_m = re.search(r'ro:\s*"([^"]+)"', block)
        en_m = re.search(r'en:\s*"([^"]+)"', block)
        if ro_m and en_m:
            ro_val = ro_m.group(1)
            en_val = en_m.group(1)
            if is_english(ro_val) and not is_romanian(ro_val):
                en_val = ro_val
                ro_val = "" # Should probably try to find RO elsewhere or leave empty
            
            # Since I don't want to lose RO content if it's there, but I don't have a source, 
            # I'll just leave it if it looks like Romanian.
            
    # Process facts
    facts_match = re.search(r'facts:\s*\{(.*?)\}', body, re.DOTALL)
    if facts_match:
        block = facts_match.group(1)
        ro_m = re.search(r'ro:\s*\[(.*?)\]', block, re.DOTALL)
        en_m = re.search(r'en:\s*\[(.*?)\]', block, re.DOTALL)
        if ro_m and en_m:
            ro_facts = re.findall(r'"([^"]+)"', ro_m.group(1))
            en_facts = re.findall(r'"([^"]+)"', en_m.group(1))
            all_facts = ro_facts + en_facts
            clean_ro = clean_array(all_facts, 'ro')
            clean_en = clean_array(all_facts, 'en')
            
            ro_str = '",\n        "'.join(clean_ro)
            en_str = '",\n        "'.join(clean_en)
            
            # Replace the whole facts block with cleaned version
            new_facts_block = re.sub(r'ro:\s*\[.*?\]', f'ro: [\n        "{ro_str}"\n      ]', block, flags=re.DOTALL)
            new_facts_block = re.sub(r'en:\s*\[.*?\]', f'en: [\n        "{en_str}"\n      ]', new_facts_block, flags=re.DOTALL)
            body = body.replace(block, new_facts_block)

    new_pois.append(header)
    new_pois.append(body)

final_content = "".join(new_pois)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)
