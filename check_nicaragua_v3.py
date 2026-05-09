import re
import os

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects
    # Assumes POI objects start with { and are followed by id:
    pois = re.split(r'\n\s*\{\s*\n\s*id:', content)
    # The first element is before the first POI
    pois = pois[1:]
    
    print(f"File: {file_path} - Found {len(pois)} POIs")
    
    for poi_text in pois:
        poi_id_match = re.search(r'^\s*"(.*?)"', poi_text)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        print(f"Checking {poi_id}")
        
        # Check descriptionAdvanced.de
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi_text, re.DOTALL)
        missing_desc_de = False
        if not desc_match:
            print(f"MISSING_DESC_BLOCK: {poi_id} in {file_path}")
            missing_desc_de = True
        else:
            if 'de:' not in desc_match.group(1) or 'de: ""' in desc_match.group(1):
                print(f"MISSING_DESC_DE: {poi_id} in {file_path}")
                missing_desc_de = True
        
        # Check factsAdvanced.de
        facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', poi_text, re.DOTALL)
        missing_facts_de = False
        if not facts_match:
            print(f"MISSING_FACTS_BLOCK: {poi_id} in {file_path}")
            missing_facts_de = True
        else:
            if 'de:' not in facts_match.group(1) or 'de: []' in facts_match.group(1):
                print(f"MISSING_FACTS_DE: {poi_id} in {file_path}")
                missing_facts_de = True
            else:
                # Count facts
                de_facts_match = re.search(r'de:\s*\[(.*?)\]', facts_match.group(1), re.DOTALL)
                if de_facts_match:
                    facts = re.findall(r'"(.*?)"', de_facts_match.group(1))
                    if len(facts) < 6:
                        print(f"FEW_FACTS ({len(facts)}): {poi_id} in {file_path}")
