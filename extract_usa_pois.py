import re
import json
import os

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

missing_pois = []

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # regex to find POI blocks
    # A POI block usually starts with { and has an id: "..."
    # We will split by "id:" and look around.
    # Alternatively, a more robust way:
    pois = re.finditer(r'id:\s*["\']([^"\']+)["\'](.*?)(?=id:\s*["\']|$)', content, re.DOTALL)
    for match in pois:
        poi_id = match.group(1)
        block = match.group(2)
        
        # Check if descriptionAdvanced exists and has hu
        # Usually: descriptionAdvanced: { ..., hu: "...", ... }
        # Or no descriptionAdvanced at all.
        
        has_desc_adv = re.search(r'descriptionAdvanced\s*:\s*\{', block)
        has_hu = False
        if has_desc_adv:
            desc_block = block[has_desc_adv.end():]
            # find closing brace of descriptionAdvanced
            brace_count = 1
            desc_inner = ""
            for char in desc_block:
                if char == '{': brace_count += 1
                elif char == '}': brace_count -= 1
                desc_inner += char
                if brace_count == 0:
                    break
            if re.search(r'hu\s*:\s*["\']', desc_inner):
                has_hu = True
                
        if not has_desc_adv or not has_hu:
            # extract name.en or name.hu for context
            name_en = ""
            name_hu = ""
            name_match = re.search(r'name\s*:\s*\{[^\}]*en\s*:\s*["\']([^"\']+)["\']', block)
            if name_match: name_en = name_match.group(1)
            name_hu_match = re.search(r'name\s*:\s*\{[^\}]*hu\s*:\s*["\']([^"\']+)["\']', block)
            if name_hu_match: name_hu = name_hu_match.group(1)
            
            missing_pois.append({"id": poi_id, "name_en": name_en, "name_hu": name_hu})

with open("usa_missing_pois.json", "w", encoding="utf-8") as f:
    json.dump(missing_pois, f, indent=2, ensure_ascii=False)

print(f"Found {len(missing_pois)} POIs missing descriptionAdvanced.hu")
