import re

files = [
    "lib/visualLab/data/poiExtraHondurasCitiesV2.ts",
    "lib/visualLab/data/poiExtraHondurasEconomicV2.ts",
    "lib/visualLab/data/poiExtraHondurasHistoryV2.ts",
    "lib/visualLab/data/poiExtraHondurasLandmarksV2.ts",
    "lib/visualLab/data/poiExtraHondurasLifeV2.ts",
    "lib/visualLab/data/poiExtraHondurasNatureV2.ts",
    "lib/visualLab/data/poiExtraHondurasReliefV2.ts"
]

missing_ids = []

for f_path in files:
    try:
        with open(f_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find all POI blocks
            pois = re.split(r'id:\s*["\']([^"\']+)["\']', content)
            # pois[0] is everything before the first id
            # pois[1] is the first id
            # pois[2] is the content after the first id and before the second
            for i in range(1, len(pois), 2):
                poi_id = pois[i]
                poi_content = pois[i+1]
                # Check if descriptionAdvanced exists and has a 'hu' key that is not empty
                # This regex checks for descriptionAdvanced: { ... hu: "something" ... }
                # but it might be easier to just check if `descriptionAdvanced` exists at all
                # if it does, check if `hu: ` exists in it.
                # Actually, the prompt says "ahol descriptionAdvanced.hu üres vagy hiányzik".
                
                # Let's see if 'descriptionAdvanced' is in the block. We need to be careful not to read the next block.
                # Since we split by 'id: ', the content is up to the next 'id: ' or end of file.
                desc_adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^}]+)\}', poi_content)
                if desc_adv_match:
                    inner_content = desc_adv_match.group(1)
                    # check for hu: "..."
                    hu_match = re.search(r'hu\s*:\s*["\']([^"\']*)["\']', inner_content)
                    if not hu_match or hu_match.group(1).strip() == "":
                        missing_ids.append(poi_id)
                else:
                    missing_ids.append(poi_id)
    except Exception as e:
        print(f"Error in {f_path}: {e}")

print(",".join(missing_ids))
