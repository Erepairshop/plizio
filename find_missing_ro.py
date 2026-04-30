
import os
import re

directory = 'lib/visualLab/data'
files = [f for f in os.listdir(directory) if f.endswith('.ts') and 'austria' in f.lower()]

results = []

for file_name in files:
    file_path = os.path.join(directory, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI id
    pois = re.split(r'id: "', content)[1:]
    for poi in pois:
        poi_id = poi.split('"')[0]
        
        missing_desc = False
        missing_facts = False
        
        if 'descriptionAdvanced' in poi:
            desc_match = re.search(r'descriptionAdvanced:.*?ro:\s*"(.*?)"', poi, re.DOTALL)
            if not desc_match or not desc_match.group(1).strip():
                missing_desc = True
        else:
            missing_desc = True
            
        if 'factsAdvanced' in poi:
            facts_match = re.search(r'factsAdvanced:.*?ro:\s*\[(.*?)\]', poi, re.DOTALL)
            if not facts_match or not facts_match.group(1).strip() or facts_match.group(1).strip() == "":
                missing_facts = True
        else:
            missing_facts = True
            
        if missing_desc or missing_facts:
            results.append({
                'file': file_name,
                'id': poi_id,
                'missing_desc': missing_desc,
                'missing_facts': missing_facts
            })

for res in results:
    print(f"{res['file']} | {res['id']} | Desc Missing: {res['missing_desc']} | Facts Missing: {res['missing_facts']}")
