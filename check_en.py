import os
import re

files = [
    "lib/visualLab/data/austriaPoi.ts",
    "lib/visualLab/data/poiExtraAustriaCities.ts",
    "lib/visualLab/data/poiExtraAustriaHistorical.ts",
    "lib/visualLab/data/poiExtraAustriaIndustry.ts",
    "lib/visualLab/data/poiExtraAustriaLife.ts",
    "lib/visualLab/data/poiExtraAustriaNature.ts"
]

for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"\nFile: {file}")
    # Split by POI objects
    pois = re.split(r'id:\s*"(.*?)"', content)
    for i in range(1, len(pois), 2):
        poi_id = pois[i]
        poi_data = pois[i+1]
        
        has_desc = "en:" in poi_data.split("descriptionAdvanced:")[1].split("factsAdvanced:")[0] if "descriptionAdvanced:" in poi_data else False
        has_facts = "en:" in poi_data.split("factsAdvanced:")[1].split("}")[0] if "factsAdvanced:" in poi_data else False
        
        # Check if they are empty
        desc_empty = False
        if has_desc:
            desc_match = re.search(r'en:\s*""', poi_data.split("descriptionAdvanced:")[1].split("factsAdvanced:")[0])
            if desc_match: desc_empty = True
            
        print(f"  {poi_id}: desc_en={'Yes' if has_desc and not desc_empty else 'No/Empty'}, facts_en={'Yes' if has_facts else 'No'}")
