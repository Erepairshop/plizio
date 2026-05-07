import re
import json

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

all_missing = []

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # split by "  {" to get objects
    parts = re.split(r'\n\s*\{\n\s*id: ', content)
    for part in parts[1:]:
        part = "id: " + part
        
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', part)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        
        # En name
        en_match = re.search(r'name:\s*\{.*?en:\s*["\']([^"\']+)["\']', part, re.DOTALL)
        en_name = en_match.group(1) if en_match else "Unknown"
        
        # descriptionAdvanced check
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', part, re.DOTALL)
        has_ro_desc = False
        if desc_adv_match:
            # check if ro is non-empty string
            ro_match = re.search(r'ro:\s*["\'](.+?)["\']', desc_adv_match.group(1))
            if ro_match and len(ro_match.group(1).strip()) > 0:
                has_ro_desc = True

        # factsAdvanced check
        facts_adv_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', part, re.DOTALL)
        has_ro_facts = False
        if facts_adv_match:
            # check if ro array has items
            ro_facts_match = re.search(r'ro:\s*\[(.*?)\]', facts_adv_match.group(1), re.DOTALL)
            if ro_facts_match and len(ro_facts_match.group(1).strip()) > 0:
                has_ro_facts = True

        if not has_ro_desc or not has_ro_facts:
            all_missing.append({
                "id": poi_id,
                "file": file_path,
                "name": en_name
            })

print(json.dumps(all_missing, indent=2))
