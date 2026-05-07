import re
import json

files = [
    "lib/visualLab/data/poiExtraMadagascarCitiesV2.ts",
    "lib/visualLab/data/poiExtraMadagascarEconomicV2.ts",
    "lib/visualLab/data/poiExtraMadagascarHistoryV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLandmarksV2.ts",
    "lib/visualLab/data/poiExtraMadagascarLifeV2.ts",
    "lib/visualLab/data/poiExtraMadagascarNatureV2.ts",
    "lib/visualLab/data/poiExtraMadagascarReliefV2.ts"
]

pois = []
for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Match each POI object
        # Better approach: split by "{\n    id:" or similar
        blocks = re.split(r'\n\s*{\s*\n\s*id:\s*"', content)
        for i, b in enumerate(blocks):
            if i == 0: continue
            
            # Reconstruct part of the block to extract id
            b_full = 'id: "' + b
            
            poi_id_match = re.search(r'id:\s*"([^"]+)"', b_full)
            if not poi_id_match: continue
            poi_id = poi_id_match.group(1)
            
            name_en = ""
            name_match = re.search(r'name:\s*{[^}]*en:\s*"([^"]+)"', b_full)
            if name_match:
                name_en = name_match.group(1)
                
            has_ro = False
            desc_adv_match = re.search(r'descriptionAdvanced:\s*{([^}]+)}', b_full)
            if desc_adv_match:
                ro_match = re.search(r'ro:\s*"([^"]+)"', desc_adv_match.group(1))
                if ro_match and len(ro_match.group(1).strip()) > 0:
                    has_ro = True
            
            if not has_ro:
                pois.append({"id": poi_id, "name": name_en, "file": f})
    except Exception as e:
        print(f"Error reading {f}: {e}")

print(json.dumps(pois, indent=2))
print(f"Total POIs missing RO: {len(pois)}")
