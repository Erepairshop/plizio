import re
import json
import glob
import os

files = [
    'lib/visualLab/data/poi.ts',
    'lib/visualLab/data/poiExtraDe1.ts',
    'lib/visualLab/data/poiExtraDe2.ts',
    'lib/visualLab/data/poiExtraDe3a',
    'lib/visualLab/data/poiExtraDe3b',
    'lib/visualLab/data/poiExtraDe4a',
    'lib/visualLab/data/poiExtraDe4b',
    'lib/visualLab/data/poiExtraDeCities.ts'
]

# some files are missing extension in list above
files = [f if f.endswith('.ts') else f + '.ts' for f in files]

pois = []

for f_path in files:
    try:
        with open(f_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Failed to read {f_path}: {e}")
        continue
    
    # We find blocks starting with { and ending with } containing id:
    # A bit hard with regex, let's look for "id: "..." and extract nearby fields.
    
    # Let's split by id:
    parts = content.split('id: "')
    for i in range(1, len(parts)):
        part = parts[i]
        try:
            poi_id = part.split('"')[0]
            
            # find parent
            parent_match = re.search(r'parent:\s*"([^"]+)"', part)
            if not parent_match:
                continue
            parent = parent_match.group(1)
            
            if not parent.startswith("DE-"):
                continue
                
            # find coords
            coords_match = re.search(r'coords:\s*\[\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*\]', part)
            if not coords_match:
                continue
            lon, lat = float(coords_match.group(1)), float(coords_match.group(2))
            
            # find type
            type_match = re.search(r'type:\s*"([^"]+)"', part)
            poi_type = type_match.group(1) if type_match else "unknown"
            
            # find names
            name_de_match = re.search(r'de:\s*"([^"]+)"', part)
            name_en_match = re.search(r'en:\s*"([^"]+)"', part)
            
            pois.append({
                'id': poi_id,
                'parent': parent,
                'coords': [lon, lat],
                'type': poi_type,
                'name': {
                    'de': name_de_match.group(1) if name_de_match else "",
                    'en': name_en_match.group(1) if name_en_match else ""
                }
            })
        except Exception as e:
            pass

with open('de_pois_dump.json', 'w', encoding='utf-8') as f:
    json.dump(pois, f, indent=2)
print(f"Extracted {len(pois)} POIs")
