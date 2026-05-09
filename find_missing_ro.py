import re
import os

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

for f_path in files:
    if not os.path.exists(f_path):
        continue
    with open(f_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple regex to find POI objects and their descriptionAdvanced
    # This is rough but should work for identifying missing 'ro'
    pois = re.split(r'id: "', content)
    for poi in pois[1:]:
        poi_id = poi.split('"')[0]
        if "descriptionAdvanced:" in poi:
            # Extract descriptionAdvanced block
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]*)\}', poi)
            if desc_adv_match:
                desc_adv_content = desc_adv_match.group(1)
                if 'ro:' not in desc_adv_content:
                    print(f"MISSING_RO_DESC: {f_path} -> {poi_id}")
                elif 'ro: ""' in desc_adv_content:
                    print(f"EMPTY_RO_DESC: {f_path} -> {poi_id}")
            else:
                print(f"FAILED_TO_PARSE_DESC: {f_path} -> {poi_id}")
        else:
            print(f"MISSING_DESC_ADV: {f_path} -> {poi_id}")
        
        if "factsAdvanced:" in poi:
            facts_adv_match = re.search(r'factsAdvanced:\s*\{([^\}]*)\}', poi)
            if facts_adv_match:
                facts_adv_content = facts_adv_match.group(1)
                if 'ro:' not in facts_adv_content:
                    print(f"MISSING_RO_FACTS: {f_path} -> {poi_id}")
                elif 'ro: []' in facts_adv_content:
                    print(f"EMPTY_RO_FACTS: {f_path} -> {poi_id}")
            else:
                print(f"FAILED_TO_PARSE_FACTS: {f_path} -> {poi_id}")
        else:
            print(f"MISSING_FACTS_ADV: {f_path} -> {poi_id}")
