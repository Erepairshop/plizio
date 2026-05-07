import re
import os

files = [
    "lib/visualLab/data/poiExtraGuineabissauCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauLifeV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauNatureV2.ts",
    "lib/visualLab/data/poiExtraGuineabissauReliefV2.ts"
]

missing_ids = []
for f in files:
    try:
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            # This regex looks for POI objects in the array. Since the files are large, we can just split by 'id: "'
            # then parse
            parts = content.split('id: "')
            for part in parts[1:]:
                poi_id = part.split('"', 1)[0]
                # look at the text until the next POI or end
                block = part[:2000] # just checking nearby
                if 'descriptionAdvanced' not in block:
                    missing_ids.append(poi_id)
                elif re.search(r'descriptionAdvanced\s*:\s*\{[^}]*de\s*:\s*["\']\s*["\']', block):
                    missing_ids.append(poi_id)
                elif not re.search(r'descriptionAdvanced\s*:\s*\{[^}]*de\s*:', block):
                    missing_ids.append(poi_id)
    except Exception as e:
        print(f"Error reading {f}: {e}")

print("Total missing:", len(missing_ids))
print(missing_ids)
