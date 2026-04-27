import re
import json

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraHu2.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI entry starting with { id: "
entries = content.split('  {')
data_to_update = []

for entry in entries:
    if 'id:' not in entry:
        continue
        
    id_match = re.search(r'id:\s*"([^"]+)"', entry)
    if not id_match:
        continue
    poi_id = id_match.group(1)
    
    # Check if RO content is missing
    desc_ro_empty = 'ro: ""' in entry and 'descriptionAdvanced' in entry
    facts_ro_empty = 'ro: []' in entry and 'factsAdvanced' in entry
    
    if desc_ro_empty or facts_ro_empty:
        hu_desc_match = re.search(r'hu:\s*"([^"]+)"', entry.split('descriptionAdvanced')[1] if 'descriptionAdvanced' in entry else "")
        de_desc_match = re.search(r'de:\s*"([^"]+)"', entry.split('descriptionAdvanced')[1] if 'descriptionAdvanced' in entry else "")
        
        hu_facts_part = entry.split('factsAdvanced')[1].split('hu: [')[1].split(']')[0] if 'factsAdvanced' in entry and 'hu: [' in entry.split('factsAdvanced')[1] else ""
        de_facts_part = entry.split('factsAdvanced')[1].split('de: [')[1].split(']')[0] if 'factsAdvanced' in entry and 'de: [' in entry.split('factsAdvanced')[1] else ""
        
        hu_facts = re.findall(r'"([^"]+)"', hu_facts_part)
        de_facts = re.findall(r'"([^"]+)"', de_facts_part)
        
        data_to_update.append({
            "id": poi_id,
            "hu_desc": hu_desc_match.group(1) if hu_desc_match else "",
            "de_desc": de_desc_match.group(1) if de_desc_match else "",
            "hu_facts": hu_facts,
            "de_facts": de_facts
        })

with open('pois_to_update.json', 'w', encoding='utf-8') as f:
    json.dump(data_to_update, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(data_to_update)} POIs.")
