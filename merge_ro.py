import json
import sys

def merge_batch(batch_file, ts_file):
    with open(batch_file, 'r', encoding='utf-8') as f:
        batch_data = json.load(f)
    
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for poi in batch_data:
        poi_id = poi['id']
        desc_ro = poi['description_ro'].replace('"', '\\"')
        facts_ro = '", "'.join([f.replace('"', '\\"') for f in poi['facts_ro']])
        facts_ro = f'"{facts_ro}"' if facts_ro else ""

        # Find the start of the POI block
        search_id = f'id: "{poi_id}"'
        start_idx = content.find(search_id)
        if start_idx == -1:
            continue
            
        # Find next POI or end of array to limit search
        next_poi_idx = content.find('id: "', start_idx + len(search_id))
        if next_poi_idx == -1:
            next_poi_idx = len(content)
            
        poi_block = content[start_idx:next_poi_idx]
        
        # Replace empty RO description
        if 'descriptionAdvanced' in poi_block:
            old_desc_ro = 'ro: ""'
            new_desc_ro = f'ro: "{desc_ro}"'
            if old_desc_ro in poi_block:
                poi_block = poi_block.replace(old_desc_ro, new_desc_ro, 1)
        
        # Replace empty RO facts
        if 'factsAdvanced' in poi_block:
            old_facts_ro = 'ro: []'
            new_facts_ro = f'ro: [{facts_ro}]'
            if old_facts_ro in poi_block:
                poi_block = poi_block.replace(old_facts_ro, new_facts_ro, 1)
                
        content = content[:start_idx] + poi_block + content[next_poi_idx:]

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    merge_batch(sys.argv[1], sys.argv[2])
