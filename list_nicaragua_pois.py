import re
import glob
import json

files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
]

missing_pois = []

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract POI objects
        # We can split by '{' and count, or just regex.
        # Simple regex for POI blocks
        # findall id: "...", name: { en: "..." }
        pois = re.finditer(r'id:\s*["\']([^"\']+)["\'].*?name:\s*\{[^\}]*?en:\s*["\']([^"\']+)["\']', content, re.DOTALL)
        for m in pois:
            poi_id = m.group(1)
            en_name = m.group(2)
            
            # extract block for this POI to check descriptionAdvanced
            block_start = m.start()
            block_end = content.find('id:', block_start + 10)
            if block_end == -1:
                block_end = len(content)
                
            poi_block = content[block_start:block_end]
            
            has_desc_adv_en = re.search(r'descriptionAdvanced:\s*\{[^\}]*?en:\s*["\']', poi_block, re.DOTALL)
            if not has_desc_adv_en:
                missing_pois.append({"id": poi_id, "name": en_name})
                
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print(f"Total missing: {len(missing_pois)}")
print(json.dumps(missing_pois, indent=2))
