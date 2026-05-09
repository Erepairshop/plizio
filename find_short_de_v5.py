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
    
    # Just find all id: "..."
    ids = re.findall(r'id:\s*"(.*?)"', content)
    print(f"{file_path}: Found {len(ids)} IDs")
    
    # Now check descriptionAdvanced for each
    for poi_id in ids:
        # Find the block for this ID
        # Looking for { ... id: "poi_id" ... }
        # This is tricky with regex, so we'll just search for the ID and then the next descAdv
        poi_pos = content.find(f'id: "{poi_id}"')
        if poi_pos == -1: continue
        
        # Find next descriptionAdvanced after this ID
        # But only before the next id:
        next_id_pos = content.find('id: "', poi_pos + 1)
        if next_id_pos == -1: next_id_pos = len(content)
        
        poi_block = content[poi_pos:next_id_pos]
        
        if 'descriptionAdvanced:' not in poi_block:
            print(f"  {poi_id} - MISSING DESC_ADV")
        else:
            # Find descriptionAdvanced block within poi_block
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi_block, re.DOTALL)
            if desc_adv_match:
                # Check German word count in THIS block
                de_match = re.search(r'de:\s*"(.*?)"', desc_adv_match.group(1), re.DOTALL)
                if de_match:
                    word_count = len(de_match.group(1).split())
                    if poi_id == "ni-plaza-revolucion-landmarks-v2":
                         print(f"DEBUG: ni-plaza-revolucion-landmarks-v2 word count: {word_count}")
                    if word_count < 80:
                        print(f"  {poi_id} - {word_count} words")
                else:
                    print(f"  {poi_id} - MISSING DE")
