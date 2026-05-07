
import json
import re
import sys

def apply_seo_update(ts_file_path, json_file_path):
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: JSON file not found at {json_file_path}")
        return
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {json_file_path}")
        return

    try:
        with open(ts_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: TypeScript file not found at {ts_file_path}")
        return

    items = data.get('items', [])
    original_content = content
    was_modified = False

    for item in items:
        poi_id = item['id']
        
        poi_pattern = re.compile(
            r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?})',
            re.DOTALL
        )
        
        match = poi_pattern.search(content)
        
        if not match:
            print(f"Warning: POI with id '{poi_id}' not found in {ts_file_path}")
            continue

        poi_object_str = match.group(1)
        new_poi_object_str = poi_object_str

        def esc(s):
            return json.dumps(s)[1:-1]

        desc_en_data = item.get('descriptionAdvanced', {}).get('en')
        facts_en_data = item.get('factsAdvanced', {}).get('en')

        if desc_en_data:
            desc_en = esc(desc_en_data)
            desc_pattern = re.compile(r'(descriptionAdvanced:\s*{[\s\S]*?en:\s*)"[^"]*"')
            new_poi_object_str = desc_pattern.sub(lambda m: f'{m.group(1)}"{desc_en}"', new_poi_object_str)

        if facts_en_data:
            facts_en = [f'"{esc(fact)}"' for fact in facts_en_data]
            facts_en_str = ", ".join(facts_en)
            facts_pattern = re.compile(r'(factsAdvanced:\s*{[\s\S]*?en:\s*)\[[^\]]*\]')
            new_poi_object_str = facts_pattern.sub(lambda m: f'{m.group(1)}[{facts_en_str}]', new_poi_object_str)
        
        if poi_object_str != new_poi_object_str:
            content = content.replace(poi_object_str, new_poi_object_str)
            print(f"Updated English content for {poi_id}")
            was_modified = True
        else:
            print(f"No changes for {poi_id}")


    if was_modified:
        with open(ts_file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("File update process completed.")
    else:
        print("No changes were made to the file.")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python update_seo_json_final.py <path_to_ts_file> <path_to_json_file>")
    else:
        ts_file = sys.argv[1]
        json_file = sys.argv[2]
        apply_seo_update(ts_file, json_file)
