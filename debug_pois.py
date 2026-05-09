import re
import glob
import os

files = glob.glob('lib/visualLab/data/poiExtraMadagascar*V2.ts')
print(f"Checking {len(files)} files.")

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Split content by { to get each object
    # This is a bit rough but might be better
    objects = content.split('{')
    
    print(f"\nFile: {file_path}")
    count = 0
    for obj in objects:
        if 'id:' not in obj:
            continue
        
        count += 1
        # Extract ID
        id_match = re.search(r'id:\s*"([^"]+)"', obj)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        has_desc_adv = 'descriptionAdvanced' in obj
        has_de = False
        if has_desc_adv:
             # Find the content of descriptionAdvanced
             # It might end with , or } or be at the end of the object
             desc_part_match = re.search(r'descriptionAdvanced:\s*({[\s\S]*?}|"[^"]*")', obj)
             if desc_part_match:
                 desc_val = desc_part_match.group(1)
                 if 'de:' in desc_val or '"de":' in desc_val or "'de':" in desc_val:
                     has_de = True
        
        if not has_desc_adv or not has_de:
            print(f"  ID: {poi_id} | descriptionAdvanced: {has_desc_adv} | de key: {has_de}")
    print(f"  Total POIs checked in file: {count}")
