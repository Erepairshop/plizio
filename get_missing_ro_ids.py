
import re

def get_missing_ids(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # This is a bit naive but should work for the current format
    # We look for { id: "..." ... } and check if it contains faq:
    # A better way is to find each object.
    
    # Let's try finding all occurrences of id: "..."
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    missing = []
    
    patterns = ['ro-poi-', 'river-', 'mountain-', 'lake-', 'sea-marea-neagra', 'nature-', 'wild-', 'folk-']
    
    for i in range(len(matches)):
        start = matches[i].start()
        end = matches[i+1].start() if i + 1 < len(matches) else len(content)
        chunk = content[start:end]
        
        id_val = matches[i].group(1)
        
        is_target = any(id_val.startswith(p) for p in patterns) or id_val == 'sea-marea-neagra'
        
        if is_target:
            if 'faq:' not in chunk:
                missing.append(id_val)
                
    return missing

if __name__ == "__main__":
    missing_ids = get_missing_ids('lib/visualLab/data/romaniaPoi.ts')
    for m_id in missing_ids:
        print(m_id)
