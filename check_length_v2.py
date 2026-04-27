import re

with open('lib/visualLab/data/romaniaPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.split(r'\{\s*id:', content)[1:]
for poi in pois:
    poi_id = poi.split('"')[1]
    
    # Target descriptionAdvanced block
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
    if desc_adv_match:
        desc_adv_content = desc_adv_match.group(1)
        hu_match = re.search(r'hu:\s*"([^"]*)"', desc_adv_content)
        if hu_match:
            text = hu_match.group(1)
            word_count = len(text.split())
            if word_count < 20: # If it's very short or empty
                print(f"ID: {poi_id} | words: {word_count}")
        else:
            print(f"ID: {poi_id} | hu_key_missing")
    else:
        print(f"ID: {poi_id} | desc_adv_missing")
