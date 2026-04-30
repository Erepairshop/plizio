import re
import os

def clean_poi_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the array start
    array_match = re.search(r'export const \w+: POI\[\] = \[', content)
    if not array_match:
        return
    
    header = content[:array_match.end()]
    footer = "];"
    
    # Extract everything between [ and ];
    body = content[array_match.end():content.rfind('];')]
    
    # Split by POI objects. This is tricky because of nested braces.
    # We'll use the 'id:' field as a marker for a new POI.
    poi_chunks = re.split(r'(?=\{\s*\n?\s*id:)', body)
    
    pois = {}
    for chunk in poi_chunks:
        chunk = chunk.strip()
        if not chunk: continue
        
        # Extract ID
        id_match = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', chunk)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        if poi_id not in pois:
            pois[poi_id] = {
                'id': poi_id,
                'type': '',
                'parent': '',
                'coords': '',
                'name': '',
                'description': '',
                'facts': '',
                'descriptionAdvanced': '',
                'factsAdvanced': '',
                'plizioChallenge': ''
            }
        
        # Extract fields from this chunk
        # Note: This is a bit brute force but should work given the structure
        for field in ['type', 'parent', 'coords', 'name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced', 'plizioChallenge']:
            # Find the field and its content (handling nested braces)
            pattern = re.compile(field + r':\s*(.*?),?\s*(?=\n\s*\w+:|\n\s*\}|\Z)', re.DOTALL)
            # For objects like name, description, etc.
            if field in ['name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced', 'plizioChallenge']:
                # Find content between { and } or [ and ]
                if field == 'facts': # can be object or array in some files, but usually object { de: [] }
                    pattern = re.compile(field + r':\s*(\{.*?\})', re.DOTALL)
                elif field == 'factsAdvanced':
                    pattern = re.compile(field + r':\s*(\{.*?\})', re.DOTALL)
                else:
                    pattern = re.compile(field + r':\s*(\{.*?\})', re.DOTALL)
            else:
                # Simple fields
                pattern = re.compile(field + r':\s*([\'"].*?[\'"]|\[.*?\]|\w+)', re.DOTALL)
            
            match = pattern.search(chunk)
            if match:
                val = match.group(1).strip()
                # If we already have a non-empty value for an advanced field, only overwrite if current is longer
                if field in ['descriptionAdvanced', 'factsAdvanced']:
                    if len(val) > len(pois[poi_id][field]):
                        pois[poi_id][field] = val
                else:
                    if not pois[poi_id][field]:
                        pois[poi_id][field] = val

    # Now reconstruct the body
    new_body = "\n"
    for poi_id in pois:
        p = pois[poi_id]
        # Basic fields
        poi_str = "  {\n"
        poi_str += f"    id: '{p['id']}',\n"
        if p['type']: poi_str += f"    type: {p['type']},\n"
        if p['parent']: poi_str += f"    parent: {p['parent']},\n"
        if p['coords']: poi_str += f"    coords: {p['coords']},\n"
        if p['name']: poi_str += f"    name: {p['name']},\n"
        if p['description']: poi_str += f"    description: {p['description']},\n"
        if p['facts']: poi_str += f"    facts: {p['facts']},\n"
        if p['descriptionAdvanced']: poi_str += f"    descriptionAdvanced: {p['descriptionAdvanced']},\n"
        if p['factsAdvanced']: poi_str += f"    factsAdvanced: {p['factsAdvanced']},\n"
        if p['plizioChallenge'] and p['plizioChallenge'] != '{}':
            poi_str += f"    plizioChallenge: {p['plizioChallenge']}\n"
        else:
            poi_str = poi_str.rstrip(',\n') + "\n"
        
        poi_str += "  },\n"
        new_body += poi_str

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(header + new_body.rstrip(',\n') + "\n" + footer + "\n")

if __name__ == "__main__":
    ts_files = [
        'lib/visualLab/data/poiExtraVaticanCities.ts',
        'lib/visualLab/data/poiExtraVaticanHistory.ts',
        'lib/visualLab/data/poiExtraVaticanOther.ts'
    ]
    for ts_file in ts_files:
        if os.path.exists(ts_file):
            print(f"Cleaning {ts_file}...")
            clean_poi_file(ts_file)
