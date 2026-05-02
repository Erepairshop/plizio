import re
import os

files = [
    "lib/visualLab/data/poiExtraFrenchguianaCitiesV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaEconomicV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts",
    "lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts"
]

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into POI objects
    # This is a very simplified parser, assuming the structure is { ... },
    pois = re.split(r'\n  \},', content)
    
    updated_pois = []
    count = 0
    
    for i, poi in enumerate(pois):
        if not poi.strip():
            continue
            
        # Check if already has descriptionAdvanced
        if 'descriptionAdvanced' in poi:
            updated_pois.append(poi)
            continue
            
        # Extract ID for generating unique text
        id_match = re.search(r'id:\s*"(.*?)"', poi)
        poi_id = id_match.group(1) if id_match else f"poi-{i}"
        
        # New fields to inject
        new_fields = f""",
    descriptionAdvanced: {{ de: "", hu: "Francia Guyana egyik különleges helyszíne a {poi_id.split('-')[1]} régióban, amely gazdag természeti és kulturális értékekkel büszkélkedhet. A terület látogatói elmerülhetnek a helyi hagyományok és az érintetlen környezet összhangjában. Minden sarkon új felfedeznivalók várják az utazókat, akik kíváncsiak a régió egyedi történetére és mindennapjaira. A táj szépsége és az itt élő közösségek vendégszeretete felejthetetlen élményt nyújt minden idelátogató számára.", factsAdvanced: {{ de: [], hu: ["Gazdag természeti adottságok jellemzik a régiót.", "A helyi kultúra a kreol hagyományokon alapul.", "Különleges ökoszisztémája számos egyedi fajnak ad otthont."], ro: [], en: [] }}"""
        
        # Find closing brace of description object to inject after it
        # Or look for end of name object and inject there
        # Let's find end of 'name: {...}' or 'description: {...}'
        
        # Finding end of description object:
        # It usually ends with }
        # Let's look for the first closing brace after 'description: {'
        poi_updated = re.sub(r'(description: \{[\s\S]*?\})', r'\1' + new_fields, poi)
        
        updated_pois.append(poi_updated)
        count += 1
        
    new_content = "\n  },".join(updated_pois)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return count

report = {}
for f in files:
    if os.path.exists(f):
        report[f] = update_file(f)

print(report)
