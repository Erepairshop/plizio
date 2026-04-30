
import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File {file_path} not found")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    pois = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"File: {file_path}, POIs: {len(pois)}")
    
    # Check for de descriptionAdvanced
    # This is a bit tricky with regex due to potential nested objects
    # but let's try to find how many have descriptionAdvanced: { de: "..." } where de is not empty
    de_desc = re.findall(r'descriptionAdvanced:\s*\{\s*de:\s*"([^"]+)"', content)
    print(f"  POIs with de descriptionAdvanced: {len(de_desc)}")
