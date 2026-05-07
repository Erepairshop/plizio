
import re
import os

files = [
    "lib/visualLab/data/poiExtraPanamaCitiesV2.ts",
    "lib/visualLab/data/poiExtraPanamaEconomicV2.ts",
    "lib/visualLab/data/poiExtraPanamaHistoryV2.ts",
    "lib/visualLab/data/poiExtraPanamaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPanamaLifeV2.ts",
    "lib/visualLab/data/poiExtraPanamaNatureV2.ts",
    "lib/visualLab/data/poiExtraPanamaReliefV2.ts"
]

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI objects and their ro content
    # This is a bit tricky due to potential duplicates, so we'll look for blocks
    poi_blocks = re.split(r'\s*{\s*id:\s*', content)[1:]
    missing_ro = []
    
    for block in poi_blocks:
        poi_id_match = re.search(r'^"([^"]+)"', block)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        # Check for descriptionAdvanced with ro
        # Note: if there are multiple descriptionAdvanced, the last one wins in TS, but here we check if ANY has non-empty ro
        # Actually, let's look for the structure of ro: "..." or ro: [...]
        
        has_ro_desc = False
        # Find all descriptionAdvanced blocks
        desc_blocks = re.findall(r'descriptionAdvanced:\s*{([^}]+)}', block, re.DOTALL)
        if desc_blocks:
            # Check the LAST descriptionAdvanced block for ro
            last_desc = desc_blocks[-1]
            ro_match = re.search(r'ro:\s*"([^"]*)"', last_desc)
            if ro_match and ro_match.group(1).strip():
                has_ro_desc = True
        
        has_ro_facts = False
        facts_blocks = re.findall(r'factsAdvanced:\s*{([^}]+)}', block, re.DOTALL)
        if facts_blocks:
            last_facts = facts_blocks[-1]
            # Facts are usually arrays ro: [ "...", "..." ]
            ro_match = re.search(r'ro:\s*\[([^\]]*)\]', last_facts)
            if ro_match and ro_match.group(1).strip() and len(re.findall(r'"[^"]+"', ro_match.group(1))) >= 3:
                has_ro_facts = True

        if not has_ro_desc or not has_ro_facts:
            missing_ro.append(poi_id)
            
    return missing_ro

all_missing = {}
for f in files:
    missing = analyze_file(f)
    if missing:
        all_missing[f] = missing

for f, ids in all_missing.items():
    print(f"{f}: {len(ids)} POIs missing RO")
    for poi_id in ids:
        print(f"  {poi_id}")
