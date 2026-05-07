import re
import json

pois = []
with open('ly_pois.json', 'r') as f:
    all_pois = json.load(f)

for poi in all_pois:
    file = poi["file"]
    id_val = poi["id"]
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find the block for this POI
            # We look for id: "ID", and then extract the object up to the next id: or the end of the array.
            match = re.search(r'id:\s*"' + re.escape(id_val) + r'".*?(?=id:\s*"|\];)', content, re.DOTALL)
            if match:
                block = match.group(0)
                # Check if descriptionAdvanced has ro
                da_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*ro:\s*"([^"]+)"', block)
                fa_match = re.search(r'factsAdvanced:\s*\{[^\}]*ro:\s*\[([^\]]+)\]', block)
                
                # We consider it missing if ro is not there or is empty
                da_missing = not da_match or len(da_match.group(1).strip()) == 0
                fa_missing = not fa_match or len(fa_match.group(1).strip()) == 0
                
                if da_missing or fa_missing:
                    pois.append(poi)
    except Exception as e:
        print(f"Error {e}")

print(json.dumps(pois, indent=2))
