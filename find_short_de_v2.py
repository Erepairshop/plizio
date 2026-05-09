import re
import os

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts",
    "lib/visualLab/data/nicaraguaPoi.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by POI blocks
    # Looking for { at the start of a line followed by id:
    pois = re.split(r'\n\s*\{\s*id:', content)
    pois = pois[1:]
    
    for poi_text in pois:
        poi_id_match = re.search(r'^\s*"(.*?)"', poi_text)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi_text, re.DOTALL)
        if desc_match:
            desc_block = desc_match.group(1)
            de_text_match = re.search(r'de:\s*"(.*?)"', desc_block, re.DOTALL)
            if de_text_match:
                de_text = de_text_match.group(1)
                word_count = len(de_text.split())
                print(f"{poi_id}: {word_count} words")
                if word_count < 80:
                    print(f"{poi_id} in {file_path} - {word_count} words")
            else:
                print(f"{poi_id} in {file_path} - MISSING DE")
        else:
            print(f"{poi_id} in {file_path} - MISSING DESC_ADV")
