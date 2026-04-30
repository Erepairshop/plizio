
import re

def find_empty_de(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # This regex is a bit simplistic but should work for the current structure
    # It looks for POI objects and checks if descriptionAdvanced.de is empty
    pois = re.findall(r'\{[^{}]*?id:\s*"([^"]+)"[^{}]*?descriptionAdvanced:\s*\{[^{}]*?de:\s*""', content, re.DOTALL)
    
    # Also check if descriptionAdvanced is missing entirely or if it's just empty string
    # Let's try a better approach: find all IDs, then for each ID check its de description
    
    all_pois = re.findall(r'id:\s*"([^"]+)"', content)
    empty_de = []
    
    for poi_id in all_pois:
        # Find the block for this ID
        pattern = r'id:\s*"' + poi_id + r'"(.*?)\}'
        # This won't work well with nested braces. 
        # Let's just grep for "de: \"\"" within descriptionAdvanced
        pass

    # Simplified: just find all IDs where de: "" follows descriptionAdvanced
    matches = re.finditer(r'id:\s*"([^"]+)"', content)
    for match in matches:
        poi_id = match.group(1)
        # Search forward from this ID to find descriptionAdvanced
        sub_content = content[match.end():match.end()+2000] # search next 2000 chars
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^{}]*?de:\s*""', sub_content, re.DOTALL)
        if desc_adv_match:
            # Check if this descriptionAdvanced belongs to THIS POI (not the next one)
            next_id_match = re.search(r'id:\s*"', sub_content)
            if not next_id_match or desc_adv_match.start() < next_id_match.start():
                empty_de.append(poi_id)
                
    return empty_de

print("Nature V2 empty de:", find_empty_de('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeNatureV2.ts'))
print("Economic V2 empty de:", find_empty_de('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts'))
