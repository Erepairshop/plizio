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
    
    # Simple split by POI blocks
    pois = content.split('  {')
    for poi in pois:
        id_match = re.search(r'id:\s*"(.*?)"', poi)
        if not id_match:
            continue
        poi_id = id_match.group(1)
        print(f"Found {poi_id}")
        
        # Check descriptionAdvanced.de
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi, re.DOTALL)
        if desc_match:
            desc_block = desc_match.group(1)
            # Find the German text. It's between de: " and the closing " (handling escaped quotes)
            # We use a more careful regex for the German text
            de_text_match = re.search(r'de:\s*"(.*?)"', desc_block, re.DOTALL)
            if de_text_match:
                de_text = de_text_match.group(1)
                word_count = len(de_text.split())
                if word_count < 80:
                    print(f"{poi_id} in {file_path} - {word_count} words")
            else:
                # Try single quotes if double quotes fail
                de_text_match = re.search(r"de:\s*'(.*?)'", desc_block, re.DOTALL)
                if de_text_match:
                    de_text = de_text_match.group(1)
                    word_count = len(de_text.split())
                    if word_count < 80:
                        print(f"{poi_id} in {file_path} - {word_count} words")
                else:
                    print(f"{poi_id} in {file_path} - MISSING DE")
        else:
            print(f"{poi_id} in {file_path} - MISSING DESC_ADV")
