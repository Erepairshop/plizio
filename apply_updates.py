import json
import re
import sys

def update_file(ts_file, json_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    with open(json_file, 'r', encoding='utf-8') as f:
        updates = json.load(f)
    
    for update in updates:
        poi_id = update['id']
        desc_en = update['desc_en'].replace('"', '\\"')
        facts_en = json.dumps(update['facts_en'], ensure_ascii=False)
        
        # Find the POI block by ID
        # Look for the block starting with id: "poi_id" and containing descriptionAdvanced and factsAdvanced
        # We need to be careful with regex to match only the 'en' fields within the correct blocks
        
        # Regex to find the POI block for this ID
        # Match from id: "poi_id" until the end of that POI object
        pattern = rf'id:\s*"{poi_id}".*?descriptionAdvanced:\s*{{.*?en:\s*""(.*?)\}}.*?factsAdvanced:\s*{{.*?en:\s*\[\](.*?)\}}'
        
        # This is hard with regex because of nested structures.
        # Let's try a simpler approach: find the id, then find descriptionAdvanced, then find the empty en: ""
        
        id_pos = content.find(f'id: "{poi_id}"')
        if id_pos == -1:
            print(f"ID {poi_id} not found")
            continue
            
        # Find descriptionAdvanced after id
        desc_adv_pos = content.find('descriptionAdvanced:', id_pos)
        if desc_adv_pos != -1:
            en_desc_pos = content.find('en: ""', desc_adv_pos)
            # Check if this en: "" is before the next id or end of array
            next_id_pos = content.find('id: "', id_pos + 10)
            if en_desc_pos != -1 and (next_id_pos == -1 or en_desc_pos < next_id_pos):
                content = content[:en_desc_pos] + f'en: "{desc_en}"' + content[en_desc_pos + 6:]
        
        # Re-find id_pos as content changed
        id_pos = content.find(f'id: "{poi_id}"')
        facts_adv_pos = content.find('factsAdvanced:', id_pos)
        if facts_adv_pos != -1:
            en_facts_pos = content.find('en: []', facts_adv_pos)
            next_id_pos = content.find('id: "', id_pos + 10)
            if en_facts_pos != -1 and (next_id_pos == -1 or en_facts_pos < next_id_pos):
                content = content[:en_facts_pos] + f'en: {facts_en}' + content[en_facts_pos + 6:]

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_file(sys.argv[1], sys.argv[2])
