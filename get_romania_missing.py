import re
import json

def get_missing(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = []
    
    # Simple regex to split by id:
    parts = content.split('id: "')
    for part in parts[1:]:
        id_match = re.match(r'^([^"]+)",', part)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Check descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', part)
        needs_desc = True
        if desc_adv_match:
            hu_match = re.search(r'hu:\s*"([^"]+)"', desc_adv_match.group(1))
            if hu_match and len(hu_match.group(1).strip()) > 10:
                needs_desc = False
        
        # Check factsAdvanced
        facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]+)\}', part)
        needs_facts = True
        if facts_adv_match:
            hu_match = re.search(r'hu:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
            if hu_match:
                items = re.findall(r'"([^"]+)"', hu_match.group(1))
                if len(items) >= 2:
                    needs_facts = False
                    
        # Get name for context
        name_match = re.search(r'name:\s*\{([^}]+)\}', part)
        name = poi_id
        if name_match:
            hu_name_match = re.search(r'hu:\s*"([^"]+)"', name_match.group(1))
            if hu_name_match:
                name = hu_name_match.group(1)
                
        if needs_desc or needs_facts:
            pois.append({
                "id": poi_id,
                "name": name,
                "needs_desc": needs_desc,
                "needs_facts": needs_facts
            })

    print(json.dumps(pois, indent=2, ensure_ascii=False))

get_missing('lib/visualLab/data/romaniaPoi.ts')
