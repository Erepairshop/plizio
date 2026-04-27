import re

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = re.split(r'\{\s*id:', content)[1:]
    missing = []
    for poi in pois:
        # Get ID, handling optional quotes
        id_match = re.match(r'\s*"?([^"]+)"?', poi)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # Target descriptionAdvanced block
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', poi, re.DOTALL)
        if desc_adv_match:
            desc_adv_content = desc_adv_match.group(1)
            # Handle both hu: and "hu":
            hu_match = re.search(r'"?hu"?\s*:\s*"([^"]*)"', desc_adv_content)
            if hu_match:
                text = hu_match.group(1)
                word_count = len(text.split())
                if word_count < 20: 
                    missing.append(poi_id)
            else:
                missing.append(poi_id)
        else:
            missing.append(poi_id)
    return missing

print("Missing in Ro1:")
for pid in check_file('lib/visualLab/data/poiExtraRo1.ts'):
    print(pid)

print("\nMissing in Ro2:")
for pid in check_file('lib/visualLab/data/poiExtraRo2.ts'):
    print(pid)
