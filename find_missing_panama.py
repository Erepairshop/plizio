import re
import os

files = [
    "lib/visualLab/data/poiExtraPanamaCitiesV2.ts",
    "lib/visualLab/data/poiExtraPanamaEconomicV2.ts",
    "lib/visualLab/data/poiExtraPanamaHistoryV2.ts",
    "lib/visualLab/data/poiExtraPanamaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPanamaLifeV2.ts",
    "lib/visualLab/data/poiExtraPanamaNatureV2.ts",
    "lib/visualLab/data/poiExtraPanamaReliefV2.ts"
]

missing_ids = []

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find all POI objects. This is a bit naive but should work for identifying missing en descriptions.
        # We look for the pattern: id: "...", ... descriptionAdvanced: { ... en: "" ... } or missing en.
        
        # Split by POI objects
        pois = re.split(r'\}\s*,\s*\{', content)
        for poi in pois:
            id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi)
            if id_match:
                poi_id = id_match.group(1)
                # Check if descriptionAdvanced has English content
                # This regex looks for descriptionAdvanced then the en property
                desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^\}]+)\}', poi, re.DOTALL)
                if desc_adv_match:
                    desc_content = desc_adv_match.group(1)
                    en_match = re.search(r'en:\s*["\']([^"\']*)["\']', desc_content)
                    if not en_match or not en_match.group(1).strip():
                        missing_ids.append(poi_id)
                else:
                    missing_ids.append(poi_id)

for mid in missing_ids:
    print(mid)
