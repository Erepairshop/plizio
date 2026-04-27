import re

def audit_poi_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI block
    pois = re.split(r'}\s*,\s*{', content)
    for poi in pois:
        name_hu_match = re.search(r'name:\s*{[^}]*?hu:\s*"([^"]+)"', poi)
        desc_hu_match = re.search(r'descriptionAdvanced:\s*{[^}]*?hu:\s*"([^"]+)"', poi)
        
        if name_hu_match and desc_hu_match:
            name_hu = name_hu_match.group(1).lower()
            desc_hu = desc_hu_match.group(1).lower()
            
            # Simple check: does the description contain the first word of the name?
            first_word = name_hu.split()[0].replace('-', ' ')
            if first_word not in desc_hu:
                print(f"Mismatch in {file_path}: POI '{name_hu}' has suspicious description starting with '{desc_hu[:50]}...'")

audit_poi_file('lib/visualLab/data/poiExtraHu1.ts')
audit_poi_file('lib/visualLab/data/poiExtraHu2.ts')
audit_poi_file('lib/visualLab/data/poiExtraHu3.ts')
