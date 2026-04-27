import re
import os

files = [f for f in os.listdir("lib/visualLab/data") if f.startswith("poiExtra") and f.endswith(".ts")]
for file in files:
    path = os.path.join("lib/visualLab/data", file)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Match POI blocks
    # A bit more robust regex to handle various spacings
    poi_matches = re.finditer(r'\{[^{]*?id:\s*"(.*?)".*?descriptionAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
    
    missing_hu = []
    for match in poi_matches:
        poi_id = match.group(1)
        desc_block = match.group(2)
        
        # Look for hu field in the descriptionAdvanced block
        hu_match = re.search(r'hu:\s*["\'](.*?)["\']', desc_block)
        if not hu_match or hu_match.group(1).strip() == "" or hu_match.group(1).strip() == "...":
            missing_hu.append(poi_id)
    
    if missing_hu:
        print(f"File: {file} - Found {len(missing_hu)} missing hu")
        for mid in missing_hu[:5]:
            print(f"  {mid}")
