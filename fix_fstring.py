import re
import os

workspace_root = os.getcwd()
files_to_check = [
    os.path.join(workspace_root, "lib/visualLab/data/poiExtraRo1.ts"),
    os.path.join(workspace_root, "lib/visualLab/data/poiExtraRo2.ts")
]
output_file = os.path.join(workspace_root, ".tmp_missing_hu_ids.txt")

all_missing_hu = []
files_with_missing_map = {}

for file_path in files_to_check:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        continue

    poi_objects = []
    bracket_level = 0
    start_index = -1
    in_string = False
    string_char = ''

    for i, char in enumerate(content):
        if not in_string and char in ('"', "'", "`"):
            in_string = True
            string_char = char
        elif in_string and char == string_char:
            if i > 0 and content[i-1] != '\\':
                in_string = False
        
        if not in_string:
            if char == '{':
                if bracket_level == 0:
                    start_index = i
                bracket_level += 1
            elif char == '}':
                bracket_level -= 1
                if bracket_level == 0 and start_index != -1:
                    poi_objects.append(content[start_index:i+1])
                    start_index = -1

    found_in_file = []
    for block in poi_objects:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)

        desc_adv_block_match = re.search(r"descriptionAdvanced:\s*\{", block)
        if not desc_adv_block_match:
            found_in_file.append(poi_id)
        else:
            hu_empty_match = re.search(r'hu:\s*""', block)
            if hu_empty_match:
                found_in_file.append(poi_id)

    if found_in_file:
        unique_ids = sorted(list(set(found_in_file)))
        files_with_missing_map[file_path] = unique_ids
        all_missing_hu.extend(unique_ids)

all_missing_hu = sorted(list(set(all_missing_hu)))

if not all_missing_hu:
    print("No POIs with empty or missing 'descriptionAdvanced.hu' found.")
else:
    print(f"Found {len(all_missing_hu)} total unique POIs to update.")
    print("Breakdown by file:")
    for file, ids in files_with_missing_map.items():
        relative_path = os.path.relpath(file, workspace_root)
        print(f"  - {relative_path}: {len(ids)} POIs")

    print(f"\nFirst 30 of {len(all_missing_hu)} POI IDs to process:")
    for poi_id in all_missing_hu[:30]:
        print(f"- {poi_id}")
    
    with open(output_file, "w") as f:
        for poi_id in all_missing_hu:
            f.write(f"{poi_id}\n")
    print(f"\nFull list of IDs saved to {output_file}")
