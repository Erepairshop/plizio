
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMadagascarCitiesV2.ts'

with open(file_path, 'r') as f:
    content = f.read()

pois = re.split(r'id: "', content)
for poi in pois[1:]: # skip first part
    poi_id = poi.split('"')[0]
    
    for block_name in ['factsAdvanced', 'descriptionAdvanced']:
        # Find the block more reliably
        start_marker = block_name + ': {'
        if start_marker in poi:
            start_idx = poi.find(start_marker) + len(start_marker)
            # Find matching closing brace
            brace_count = 1
            end_idx = start_idx
            while brace_count > 0 and end_idx < len(poi):
                if poi[end_idx] == '{':
                    brace_count += 1
                elif poi[end_idx] == '}':
                    brace_count -= 1
                end_idx += 1
            
            block_content = poi[start_idx:end_idx-1]
            en_matches = re.findall(r'\ben:', block_content)
            if len(en_matches) > 1:
                print(f"Duplicate en: in {poi_id} -> {block_name}")
                # Check for filler content
                if "Located in Madagascar." in block_content:
                    print("  Found filler content!")
