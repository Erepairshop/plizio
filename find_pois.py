import re
import json
import sys

# Set encoding for stdout to utf-8
if sys.platform == "win32":
    import codecs
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

def extract_pois_without_faq(file_path, limit=80):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pois_found = []
    
    # Find all 'id: "' occurrences
    id_pattern = re.compile(r'id:\s*"([^"]+)"')
    
    for match in id_pattern.finditer(content):
        start_index = match.start()
        obj_start = content.rfind('{', 0, start_index)
        if obj_start == -1:
            continue
            
        brace_count = 0
        obj_end = -1
        for i in range(obj_start, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    obj_end = i + 1
                    break
        
        if obj_end == -1:
            continue
            
        obj_text = content[obj_start:obj_end]
        
        if not re.search(r'\bfaq\s*:', obj_text):
            poi_id = match.group(1)
            name_match = re.search(r'name:\s*({[^}]+})', obj_text)
            if name_match:
                try:
                    name_text = name_match.group(1)
                    names = {}
                    for lang in ['de', 'hu', 'ro', 'en']:
                        lang_match = re.search(f'{lang}:\s*"([^"]+)"', name_text)
                        if lang_match:
                            names[lang] = lang_match.group(1)
                    
                    # Also try to get description for better FAQ generation
                    desc_match = re.search(r'description:\s*({[^}]+})', obj_text)
                    descs = {}
                    if desc_match:
                        desc_text = desc_match.group(1)
                        for lang in ['de', 'hu', 'ro', 'en']:
                            l_match = re.search(f'{lang}:\s*"([^"]+)"', desc_text)
                            if l_match:
                                descs[lang] = l_match.group(1)

                    pois_found.append({
                        'id': poi_id,
                        'name': names,
                        'description': descs
                    })
                except:
                    continue
        
        if len(pois_found) >= limit:
            break
            
    return pois_found

if __name__ == "__main__":
    pois = extract_pois_without_faq('lib/visualLab/data/romaniaPoi.ts')
    with open('pois_to_fix.json', 'w', encoding='utf-8') as f:
        json.dump(pois, f, indent=2, ensure_ascii=False)
    print(f"Found {len(pois)} POIs")
