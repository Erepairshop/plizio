
import re

script = '''
import re

files_to_check = ["lib/visualLab/data/poiExtraRo1.ts", "lib/visualLab/data/poiExtraRo2.ts"]
all_missing_hu = []
files_with_missing_map = {}

for file_path in files_to_check:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all POI objects
    poi_objects = re.findall(r'(\{\s*id: "([^"]+)"[\s\S]*?\s*\})', content)

    found_in_file = []
    for full_match, poi_id in poi_objects:
        # Check for empty hu field in descriptionAdvanced
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[\s\S]*?hu:\s*""', full_match)
        if desc_adv_match:
            found_in_file.append(poi_id)

    if found_in_file:
        files_with_missing_map[file_path] = found_in_file
        all_missing_hu.extend(found_in_file)


if not all_missing_hu:
    print("No POIs with empty 'descriptionAdvanced.hu' found in the files.")
else:
    print(f"Found {len(all_missing_hu)} POIs with empty 'descriptionAdvanced.hu'.")
    print("Target files for patching and the IDs they contain:")
    for file, ids in files_with_missing_map.items():
        print(f"
File: {file} ({len(ids)} IDs)")
        # Print first 5 IDs for brevity
        for poi_id in ids[:5]:
            print(f"- {poi_id}")
        if len(ids) > 5:
            print(f"... and {len(ids) - 5} more.")

    # Save the full list for later use
    with open("missing_hu_ids.txt", "w") as f:
        for poi_id in all_missing_hu:
            f.write(f"{poi_id}
")
    print("
Full list of IDs saved to missing_hu_ids.txt")
'''

with open("check_missing_hu_ro.py", "w") as f:
    f.write(script)
