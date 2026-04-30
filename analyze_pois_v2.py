
import re

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    poi_matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    results = []
    for i in range(len(poi_matches)):
        start = poi_matches[i].start()
        end = poi_matches[i+1].start() if i+1 < len(poi_matches) else len(content)
        poi_id = poi_matches[i].group(1)
        poi_content = content[start:end]
        
        # Check for descriptionAdvanced
        desc_adv_matches = list(re.finditer(r'descriptionAdvanced:\s*\{', poi_content))
        
        for m in desc_adv_matches:
            # Find the de: field within this block
            # search next 500 chars
            sub = poi_content[m.start():m.start()+500]
            de_match = re.search(r'de:\s*"(.*?)"', sub)
            if de_match:
                de_val = de_match.group(1)
                results.append((poi_id, de_val == ""))
            else:
                # might be [] or missing
                results.append((poi_id, "missing_de"))
                
    return results

print("Nature Analysis:")
for pid, is_empty in analyze_file('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeNatureV2.ts'):
    if is_empty is True:
        print(f"  {pid}: EMPTY")
    elif is_empty == "missing_de":
        print(f"  {pid}: MISSING DE")
    # else: filled, ignore

print("\nEconomic Analysis:")
for pid, is_empty in analyze_file('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts'):
    if is_empty is True:
        print(f"  {pid}: EMPTY")
    elif is_empty == "missing_de":
        print(f"  {pid}: MISSING DE")
