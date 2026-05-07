import json
import codecs

def update_poi(content, poi_id, desc, facts):
    idx = content.find(f'id: "{poi_id}"')
    if idx == -1:
        print(f"POI {poi_id} not found!")
        return content
    
    desc_block_idx = content.find('descriptionAdvanced:', idx)
    en_desc_idx = content.find('en: ""', desc_block_idx)
    
    next_poi_idx = content.find('id: "', idx + 10)
    if next_poi_idx != -1 and en_desc_idx > next_poi_idx:
        print(f"Error: en: '' for {poi_id} description not found correctly.")
    else:
        content = content[:en_desc_idx] + 'en: ' + json.dumps(desc, ensure_ascii=False) + content[en_desc_idx+6:]
    
    idx = content.find(f'id: "{poi_id}"')
    facts_block_idx = content.find('factsAdvanced:', idx)
    en_facts_idx = content.find('en: []', facts_block_idx)
    if next_poi_idx != -1 and en_facts_idx > content.find('id: "', idx + 10):
        print(f"Error: en: [] for {poi_id} facts not found correctly.")
    else:
        facts_str = "[\n        " + ",\n        ".join(json.dumps(f, ensure_ascii=False) for f in facts) + "\n      ]"
        content = content[:en_facts_idx] + 'en: ' + facts_str + content[en_facts_idx+6:]
        
    return content

with codecs.open("batch.json", "r", encoding="utf-8") as f:
    updates = json.load(f)

with codecs.open("lib/visualLab/data/moldovaPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

for poi_id, data in updates.items():
    content = update_poi(content, poi_id, data["desc"], data["facts"])

with codecs.open("lib/visualLab/data/moldovaPoi.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully")