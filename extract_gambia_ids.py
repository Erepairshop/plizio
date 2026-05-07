import re
import json

files = [
    "lib/visualLab/data/poiExtraGambiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGambiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGambiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGambiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGambiaLifeV2.ts",
    "lib/visualLab/data/poiExtraGambiaNatureV2.ts",
    "lib/visualLab/data/poiExtraGambiaReliefV2.ts"
]

results = []

for file_path in files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
            # Find all POIs using a regex that captures the id and name
            # A POI block looks like: id: "something", ... name: { ..., en: "Name" ... }
            poi_blocks = re.finditer(r'{\s*id:\s*"([^"]+)"(.*?)(?:},|}$)', content, re.DOTALL)
            for match in poi_blocks:
                poi_id = match.group(1)
                block_content = match.group(2)
                
                # Extract English name
                name_match = re.search(r'name:\s*{[^}]*en:\s*"([^"]+)"', block_content, re.DOTALL)
                name = name_match.group(1) if name_match else poi_id
                
                # Check if descriptionAdvanced.en is missing or empty
                has_en_desc = re.search(r'descriptionAdvanced:\s*{[^}]*en:\s*"([^"]+)"', block_content, re.DOTALL)
                has_en_facts = re.search(r'factsAdvanced:\s*{[^}]*en:\s*\[', block_content, re.DOTALL)
                
                if not has_en_desc or not has_en_desc.group(1).strip() or not has_en_facts:
                    results.append({"id": poi_id, "name": name})
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

print(json.dumps(results, indent=2))
