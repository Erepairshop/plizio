import re
files = [
    "lib/visualLab/data/austriaPoi.ts",
    "lib/visualLab/data/poiExtraAustriaCities.ts",
    "lib/visualLab/data/poiExtraAustriaHistorical.ts",
    "lib/visualLab/data/poiExtraAustriaIndustry.ts",
    "lib/visualLab/data/poiExtraAustriaLife.ts",
    "lib/visualLab/data/poiExtraAustriaNature.ts"
]

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    pois = re.split(r'id:\s*"(.*?)"', content)
    for i in range(1, len(pois), 2):
        poi_id = pois[i]
        poi_data = pois[i+1]
        
        desc_match = re.search(r'descriptionAdvanced:\s*\{.*?en:\s*("[^"]*"|\[\]|\[.*?\]|)\s*\}', poi_data, re.DOTALL)
        facts_match = re.search(r'factsAdvanced:\s*\{.*?en:\s*(\[[^\]]*\]|"[^"]*"|)\s*\}', poi_data, re.DOTALL)
        
        desc_en = desc_match.group(1).strip() if desc_match else "MISSING"
        facts_en = facts_match.group(1).strip() if facts_match else "MISSING"
        
        if desc_en == '""' or desc_en == '[]' or desc_en == "MISSING":
            print(f"File {file_path}, POI {poi_id}: descriptionAdvanced.en is {desc_en}")
        if facts_en == '""' or facts_en == '[]' or facts_en == "MISSING":
            print(f"File {file_path}, POI {poi_id}: factsAdvanced.en is {facts_en}")
