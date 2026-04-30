
import os
import re

files = [
    'lib/visualLab/data/poiExtraAustriaCities.ts',
    'lib/visualLab/data/poiExtraAustriaHistorical.ts',
    'lib/visualLab/data/poiExtraAustriaIndustry.ts',
    'lib/visualLab/data/poiExtraAustriaLife.ts',
    'lib/visualLab/data/poiExtraAustriaNature.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI id
    pois = re.split(r'id: "', content)[1:]
    for poi in pois:
        poi_id = poi.split('"')[0]
        
        # Extract descriptionAdvanced block
        desc_match = re.search(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', poi)
        if desc_match:
            desc_block = desc_match.group(1)
            ro_match = re.search(r'ro:\s*"(.*?)"', desc_block, re.DOTALL)
            if not ro_match or not ro_match.group(1).strip():
                print(f"{file_path} | {poi_id} | descriptionAdvanced.ro MISSING/EMPTY")
        else:
            print(f"{file_path} | {poi_id} | descriptionAdvanced MISSING")

        # Extract factsAdvanced block
        facts_match = re.search(r'factsAdvanced:\s*\{([\s\S]*?)\s*\}\s*\}', poi) # Note: double } might be needed depending on structure
        if not facts_match:
             facts_match = re.search(r'factsAdvanced:\s*\{([\s\S]*?)\s*\}', poi)
             
        if facts_match:
            facts_block = facts_match.group(1)
            ro_match = re.search(r'ro:\s*\[(.*?)\]', facts_block, re.DOTALL)
            if not ro_match or not ro_match.group(1).strip():
                print(f"{file_path} | {poi_id} | factsAdvanced.ro MISSING/EMPTY")
        else:
            print(f"{file_path} | {poi_id} | factsAdvanced MISSING")
