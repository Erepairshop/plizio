
import re
import os

files = [
    'lib/visualLab/data/poiExtraCanadaCities.ts',
    'lib/visualLab/data/poiExtraCanadaHistory.ts',
    'lib/visualLab/data/poiExtraCanadaOther.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find IDs
    ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    # Split by POI objects
    # This is a bit rough but should work for identifying missing fields
    pois = content.split('  {')
    if len(pois) <= 1:
        pois = content.split('\n{')
        
    print(f"\nChecking {file_path} ({len(ids)} POIs found)")
    
    missing_advanced = []
    for poi in pois:
        id_match = re.search(r'id:\s*"([^"]+)"', poi)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)
        if 'descriptionAdvanced' not in poi:
            missing_advanced.append(poi_id)
        else:
            # Check if hu is empty
            hu_desc = re.search(r'hu:\s*"([^"]*)"', poi.split('descriptionAdvanced')[1].split('}')[0])
            if hu_desc and hu_desc.group(1) == "":
                 missing_advanced.append(poi_id + " (empty hu)")

    print(f"Missing descriptionAdvanced/factsAdvanced: {len(missing_advanced)}")
    for m in missing_advanced[:5]:
        print(f" - {m}")
    if len(missing_advanced) > 5:
        print(f" ... and {len(missing_advanced) - 5} more")
