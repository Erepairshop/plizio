import json
import re
import sys

def update_file(filename, data_file):
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, fields in data.items():
        desc_en = fields.get('descriptionAdvanced_en', '')
        facts_en = fields.get('factsAdvanced_en', [])
        
        # Regex to find the block for the specific POI
        # We look for the POI block, then inside it, look for descriptionAdvanced.en and factsAdvanced.en
        # Since we know `poiExtraIcelandCities.ts` has RO populated, we just need to replace the empty en: "" or en: []
        # Wait, if descriptionAdvanced doesn't have `en:` or is missing `en:` we need to be careful.
        # The user's apply_seo_lang.py script handles this robustly! We can just use it!
        # But wait, we can just replace the empty `en:` array. Let's do it simple:
        
        # In poiExtraIcelandCities.ts, all POIs that HAVE descriptionAdvanced ALREADY have `en: "",` and `en: []`
        
        # Replace desc_en
        pattern_desc = r'(id:\s*"' + re.escape(poi_id) + r'".*?descriptionAdvanced:\s*\{[^}]*?en:\s*)"([^"]*)"'
        content = re.sub(pattern_desc, r'\1"' + desc_en + '"', content, flags=re.DOTALL)
        
        # Replace facts_en
        facts_str = ",\n        ".join([f'"{f}"' for f in facts_en])
        if facts_str:
            new_facts = f'[\n        {facts_str}\n      ]'
        else:
            new_facts = '[]'
            
        pattern_facts = r'(id:\s*"' + re.escape(poi_id) + r'".*?factsAdvanced:\s*\{[^}]*?en:\s*)\[\s*\]'
        content = re.sub(pattern_facts, r'\g<1>' + new_facts.replace('\\', '\\\\'), content, flags=re.DOTALL)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename} with {len(data)} entries.")

if __name__ == '__main__':
    update_file('lib/visualLab/data/poiExtraIcelandCities.ts', sys.argv[1])
