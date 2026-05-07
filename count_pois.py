import re
import sys

def count_missing(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find objects with id: "..."
    pois = re.findall(r'id:\s*"(.*?)"[^}]+?name:\s*\{\s*de:\s*"(.*?)"', content, re.DOTALL)
    
    missing = []
    
    # We can split by 'id: "'
    parts = content.split('id: "')
    for part in parts[1:]:
        poi_id = part.split('"')[0]
        # find name: { de: "..." }
        name_match = re.search(r'name:\s*\{\s*de:\s*"(.*?)"', part)
        if name_match:
            poi_name = name_match.group(1)
        else:
            poi_name = "Unknown"
        
        if 'descriptionAdvanced' not in part or 'factsAdvanced' not in part:
            missing.append((poi_id, poi_name))
        else:
            # Check if it has empty 'de'
            desc_match = re.search(r'descriptionAdvanced:\s*\{\s*de:\s*"(.*?)"', part, re.DOTALL)
            if desc_match and desc_match.group(1) == "":
                missing.append((poi_id, poi_name))

    print(f"{filepath}: {len(missing)} missing out of {len(parts)-1} POIs")
    for m in missing[:5]:
        print(f"  - {m}")
    if len(missing) > 5:
        print(f"  ... and {len(missing)-5} more")

count_missing("lib/visualLab/data/netherlandsPoi.ts")
count_missing("lib/visualLab/data/poiExtraNetherlandsCities.ts")
