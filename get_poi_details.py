
import re
import json

def get_poi_details(file_path, missing_ids):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    details = {}
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    for i in range(len(matches)):
        id_val = matches[i].group(1)
        if id_val in missing_ids:
            start = matches[i].start()
            end = matches[i+1].start() if i + 1 < len(matches) else len(content)
            chunk = content[start:end]
            
            # Extract name and description
            name_match = re.search(r'name:\s*({[^}]+})', chunk, re.DOTALL)
            desc_match = re.search(r'description:\s*({[^}]+})', chunk, re.DOTALL)
            
            if name_match:
                try:
                    # Clean up the string to make it valid JSON if possible, or just evaluate
                    name_str = name_match.group(1).replace("'", "\"").replace("\n", "").replace("  ", " ")
                    # This is risky, let's just use regex for langs
                    names = {}
                    for lang in ['de', 'hu', 'ro', 'en']:
                        l_match = re.search(fr'{lang}:\s*"([^"]+)"', name_match.group(1))
                        if l_match:
                            names[lang] = l_match.group(1)
                    details[id_val] = {'name': names}
                except:
                    pass
            
            if desc_match and id_val in details:
                descs = {}
                for lang in ['de', 'hu', 'ro', 'en']:
                    l_match = re.search(fr'{lang}:\s*"([^"]+)"', desc_match.group(1))
                    if l_match:
                        descs[lang] = l_match.group(1)
                details[id_val]['description'] = descs
                
    return details

if __name__ == "__main__":
    missing_ids = []
    with open('get_missing_ro_ids.py', 'r', encoding='utf-8') as f:
        # Re-run logic to get IDs
        import re
        content = open('lib/visualLab/data/romaniaPoi.ts', encoding='utf-8').read()
        matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
        patterns = ['ro-poi-', 'river-', 'mountain-', 'lake-', 'sea-marea-neagra', 'nature-', 'wild-', 'folk-']
        for i in range(len(matches)):
            start = matches[i].start()
            end = matches[i+1].start() if i + 1 < len(matches) else len(content)
            chunk = content[start:end]
            id_val = matches[i].group(1)
            is_target = any(id_val.startswith(p) for p in patterns) or id_val == 'sea-marea-neagra'
            if is_target and 'faq:' not in chunk:
                missing_ids.append(id_val)
                
    details = get_poi_details('lib/visualLab/data/romaniaPoi.ts', missing_ids)
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    print(json.dumps(details, ensure_ascii=False, indent=2))
