
import re
import os

files = [
    "lib/visualLab/data/poiExtraBelizeCitiesV2.ts",
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts",
    "lib/visualLab/data/poiExtraBelizeHistoryV2.ts",
    "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts",
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts",
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts"
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
    de_desc = re.findall(r'descriptionAdvanced:\s*\{\s*(?:en|de|hu|ro):\s*"[^"]*",\s*de:\s*"([^"]+)"', content)
    # The above regex might be too specific. Let's just search for de: "..." inside descriptionAdvanced block
    
    # Simpler check: how many times does 'de: "' appear followed by non-empty string?
    # But only inside descriptionAdvanced
    
    count_filled_de = 0
    # Find all descriptionAdvanced blocks
    blocks = re.findall(r'descriptionAdvanced:\s*\{([^\}]+)\}', content)
    for block in blocks:
        de_match = re.search(r'de:\s*"([^"]+)"', block)
        if de_match and de_match.group(1).strip():
            count_filled_de += 1
            
    print(f"  POIs with filled de descriptionAdvanced: {count_filled_de}")
