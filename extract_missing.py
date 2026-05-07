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
            
        # We need to parse each POI block
        # A POI block starts with { and id: "..."
        poi_blocks = re.finditer(r'\{\s*id:\s*["\']([^"\']+)["\'].*?name:\s*\{([^}]+)\}', content, re.DOTALL)
        
        for match in poi_blocks:
            poi_id = match.group(1)
            name_block = match.group(2)
            
            en_name_match = re.search(r'en:\s*["\']([^"\']+)["\']', name_block)
            en_name = en_name_match.group(1) if en_name_match else poi_id
            
            # Find the end of this POI object (rough approximation)
            block_start = match.start()
            next_poi = content.find('id: "', block_start + 10)
            if next_poi == -1:
                block_end = len(content)
            else:
                block_end = next_poi
                
            poi_content = content[block_start:block_end]
            
            # Check descriptionAdvanced.en
            desc_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', poi_content, re.DOTALL)
            needs_update = False
            
            if desc_match:
                en_desc = re.search(r'en:\s*["\'](.*?)["\']', desc_match.group(1), re.DOTALL)
                if not en_desc or len(en_desc.group(1).strip()) < 10:
                    needs_update = True
            else:
                needs_update = True
                
            if needs_update:
                missing_pois.append({"id": poi_id, "name": en_name})
                
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print(f"Total missing: {len(missing_pois)}")
with open('nicaragua_missing.json', 'w', encoding='utf-8') as f:
    json.dump(missing_pois, f, indent=2)
