import re
import json

files = [
    "lib/visualLab/data/poiExtraNigeriaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNigeriaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNigeriaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNigeriaLifeV2.ts",
    "lib/visualLab/data/poiExtraNigeriaNatureV2.ts",
    "lib/visualLab/data/poiExtraNigeriaReliefV2.ts"
]

missing_pois = []

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.split(r'\n\s*id:\s*"([^"]+)",', content)
    
    for i in range(1, len(blocks), 2):
        poi_id = blocks[i]
        poi_content = blocks[i+1]
        
        has_ro_content = False
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', poi_content)
        if desc_adv_match:
            inner_text = desc_adv_match.group(1)
            ro_match = re.search(r'ro\s*:\s*(["\'])(.*?)\1', inner_text, re.DOTALL)
            if ro_match and ro_match.group(2).strip() != "":
                has_ro_content = True
                
        if not has_ro_content:
            # Extract name.en or name.de
            name_match = re.search(r'name:\s*\{[^\}]*en:\s*(["\'])(.*?)\1', poi_content)
            name = name_match.group(2) if name_match else poi_id
            
            # Extract type
            type_match = re.search(r'type:\s*(["\'])(.*?)\1', poi_content)
            poi_type = type_match.group(2) if type_match else "unknown"
            
            # Extract description.en
            desc_match = re.search(r'description:\s*\{[^\}]*en:\s*(["\'])(.*?)\1', poi_content)
            desc = desc_match.group(2) if desc_match else ""
            
            # Extract facts.en
            facts_match = re.search(r'facts:\s*\{[^\}]*en:\s*\[(.*?)\]', poi_content, re.DOTALL)
            facts = facts_match.group(1).strip() if facts_match else ""
            
            missing_pois.append({
                "id": poi_id,
                "name": name,
                "type": poi_type,
                "description": desc,
                "facts": facts
            })

with open('missing_ng_pois.json', 'w', encoding='utf-8') as f:
    json.dump(missing_pois, f, indent=2)

print(f"Total missing: {len(missing_pois)}")
