import json
import re
import sys

def main(json_path):
    target_file = "lib/visualLab/data/switzerlandPoi.ts"

    with open(json_path, 'r', encoding='utf-8') as f:
        seo_data = json.load(f)

    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for item in seo_data:
        poi_id = item['id']
        
        # Find the whole POI object string
        # This regex is a bit simplistic and might fail on complex nested objects, but should work for this structure.
        poi_regex = r'({\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(?=\n\s*},\s*|\n\s*\];)'
        poi_match = re.search(poi_regex, content, re.MULTILINE)
        
        if not poi_match:
            print(f"Warning: POI with id '{poi_id}' not found in {target_file}")
            continue

        poi_obj_str = poi_match.group(0)
        updated_poi_obj_str = poi_obj_str

        # Handle descriptionAdvanced
        if 'descriptionAdvanced' in item and 'ro' in item['descriptionAdvanced']:
            desc_ro = item['descriptionAdvanced']['ro']
            # Escape backticks and format for template literal
            escaped_desc_ro = desc_ro.replace('`', '\\`').replace('\\', '\\\\')
            
            # Regex to find and replace empty ro: ""
            desc_regex = re.compile(r'(ro:\s*)"\s*"')
            if desc_regex.search(updated_poi_obj_str):
                 updated_poi_obj_str = desc_regex.sub(r'\1`' + escaped_desc_ro + '`', updated_poi_obj_str, 1)

        # Handle factsAdvanced
        if 'factsAdvanced' in item and 'ro' in item['factsAdvanced']:
            facts_ro = item['factsAdvanced']['ro']
            # Format list of strings into a JS array string
            # Manual formatting for better alignment
            facts_ro_str = "[\n" + ",\n".join([f'        "{fact}"' for fact in facts_ro]) + "\n      ]"
            
            # Regex to find and replace empty ro: []
            facts_regex = re.compile(r'(ro:\s*)\[\s*\]')
            if facts_regex.search(updated_poi_obj_str):
                updated_poi_obj_str = facts_regex.sub(r'\1' + facts_ro_str, updated_poi_obj_str, 1)

        if poi_obj_str != updated_poi_obj_str:
            content = content.replace(poi_obj_str, updated_poi_obj_str)

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully applied SEO content to switzerlandPoi.ts")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        main(sys.argv[1])
    else:
        print(f"Usage: python {sys.argv[0]} <json_file>")
