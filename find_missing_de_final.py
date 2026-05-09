import re
import os

files = [
    "lib/visualLab/data/poiExtraGuatemalaReliefV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts"
]

def get_da_content(block):
    # Find all descriptionAdvanced blocks in the POI block
    da_matches = re.findall(r'descriptionAdvanced:\s*(\{.*?\})', block, re.DOTALL)
    if not da_matches:
        return None
    return da_matches[-1] # Take the last one

for file_path in files:
    if not os.path.exists(file_path): continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI objects (start with { id: ")
    # This is rough but should work for identifying IDs
    pois = re.split(r'\{\s*id:\s*', content)
    for poi_block in pois[1:]:
        poi_id_match = re.search(r'^"([^"]+)"', poi_block)
        if not poi_id_match: continue
        poi_id = poi_id_match.group(1)
        
        da = get_da_content(poi_block)
        if da is None or 'de:' not in da:
            print(f"{file_path}|{poi_id}|MISSING")
        else:
            # Check if it's a template or very short
            de_match = re.search(r'de:\s*"([^"]+)"', da)
            if de_match:
                de_text = de_match.group(1)
                if len(de_text.split()) < 40 or "bemerkenswerter Ort" in de_text:
                    print(f"{file_path}|{poi_id}|SHORT_OR_TEMPLATE|{len(de_text.split())}")
            else:
                print(f"{file_path}|{poi_id}|DE_KEY_BUT_NO_VAL")

