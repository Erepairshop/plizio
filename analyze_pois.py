
import re

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all POI objects
    # We'll just look for IDs and then the following content until the next ID or end of file
    poi_matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    results = []
    for i in range(len(poi_matches)):
        start = poi_matches[i].start()
        end = poi_matches[i+1].start() if i+1 < len(poi_matches) else len(content)
        poi_id = poi_matches[i].group(1)
        poi_content = content[start:end]
        
        # Check for empty de in descriptionAdvanced
        # Note: there might be multiple descriptionAdvanced blocks if the file is broken
        desc_matches = re.findall(r'descriptionAdvanced:\s*\{[^{}]*?de:\s*""', poi_content, re.DOTALL)
        if desc_matches:
            results.append((poi_id, len(desc_matches)))
            
    return results

print("Nature Analysis:", analyze_file('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeNatureV2.ts'))
print("Economic Analysis:", analyze_file('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts'))
