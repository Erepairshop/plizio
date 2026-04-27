
import re
import json

def extract_full_pois(file_path, limit=297):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find regions
    regions_match = re.search(r'export const regions: POI\[\] = \[(.*?)\];', content, re.DOTALL)
    # Find pois
    pois_match = re.search(r'export const pois: POI\[\] = \[(.*?)\];', content, re.DOTALL)
    
    all_poi_text = ""
    if regions_match:
        all_poi_text += regions_match.group(1)
    if pois_match:
        all_poi_text += pois_match.group(1)
        
    # Split by { and } carefully or use a simpler regex for the blocks
    # Since they are reasonably formatted, we can look for { id: ... } until the closing }
    
    poi_blocks = []
    # This regex tries to find objects. It might be imperfect if there are nested objects
    # but based on the file content, it seems mostly flat except for name, description, facts
    matches = re.finditer(r'\{\s+id:\s*"([^"]+)",(.*?)\n\s+\},', content, re.DOTALL)
    
    results = []
    for match in matches:
        poi_id = match.group(1)
        body = match.group(2)
        full_match = match.group(0)
        
        # Extract name
        name_match = re.search(r'name:\s*({[^}]+})', body, re.DOTALL)
        name = name_match.group(1) if name_match else None
        
        # Extract type
        type_match = re.search(r'type:\s*"([^"]+)"', body)
        poi_type = type_match.group(1) if type_match else None
        
        # Extract description
        desc_match = re.search(r'description:\s*({.*?})', body, re.DOTALL)
        desc = desc_match.group(1) if desc_match else None
        
        # Extract facts
        facts_match = re.search(r'facts:\s*({.*?})', body, re.DOTALL)
        facts = facts_match.group(1) if facts_match else None
        
        results.append({
            "id": poi_id,
            "type": poi_type,
            "name": name,
            "description": desc,
            "facts": facts,
            "full_match": full_match
        })
        
    return results

pois = extract_full_pois('lib/visualLab/data/poi.ts')
print(json.dumps(pois, indent=2))
