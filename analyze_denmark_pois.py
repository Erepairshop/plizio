
import re

file_path = 'lib/visualLab/data/denmarkPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find POI starts
# They start with { id: "..." or are the denmarkCountry object
poi_starts = list(re.finditer(r'(id:\s*"([^"]+)")', content))

print(f"Found {len(poi_starts)} potential POI starts.")

for match in poi_starts:
    poi_id = match.group(2)
    # Check for descriptionAdvanced.en and factsAdvanced.en
    # This is tricky because of the malformed structure.
    # We'll look ahead from the match position
    start_pos = match.start()
    # Find the next few hundred characters
    lookahead = content[start_pos:start_pos+5000]
    
    # Check if there is an en descriptionAdvanced
    # We need to find the descriptionAdvanced object first
    desc_adv_matches = list(re.finditer(r'descriptionAdvanced:\s*{', lookahead))
    
    en_desc = "MISSING"
    for da_match in desc_adv_matches:
        da_start = da_match.start()
        da_end = lookahead.find('}', da_start)
        da_content = lookahead[da_start:da_end]
        en_match = re.search(r'en:\s*"([^"]*)"', da_content)
        if en_match and en_match.group(1).strip():
            en_desc = "FILLED"
            break
        elif en_match:
            en_desc = "EMPTY"
    
    print(f"POI ID: {poi_id}, descriptionAdvanced.en: {en_desc}")
