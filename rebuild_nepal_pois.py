import json
import re
import sys
import os

def get_all_pois(file_content):
    # This is a simplified parser. It assumes a certain structure.
    pois = []
    # Strip away imports and export statement
    content = re.sub(r"import.*?;", "", file_content)
    content = content.replace("export const poiExtraNepalCitiesV2: POI[] = [", "").strip()
    content = content[:-2].strip() # remove trailing ];

    # This regex is a bit fragile, but should work for the current format.
    # It splits based on `},\s*{` which should separate the POI objects.
    poi_blocks = re.split(r"},\s*{", content)

    for block in poi_blocks:
        poi = {}
        #id
        id_match = re.search(r'id:\s*"(.*?)"', block)
        if id_match:
            poi['id'] = id_match.group(1)
            poi['original_block'] = "{" + block.strip() + "}" if not block.startswith('{') else block.strip()
            pois.append(poi)
    return pois

def apply_updates(pois, json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    update_map = {item['id']: item for item in data.get('items', [])}

    for poi in pois:
        if poi['id'] in update_map:
            update_item = update_map[poi['id']]
            if 'descriptionAdvancedDe' in update_item:
                poi['descriptionAdvancedDe'] = update_item['descriptionAdvancedDe']
            if 'descriptionAdvancedHu' in update_item:
                poi['descriptionAdvancedHu'] = update_item['descriptionAdvancedHu']
            if 'descriptionAdvancedRo' in update_item:
                poi['descriptionAdvancedRo'] = update_item['descriptionAdvancedRo']
            if 'descriptionAdvancedEn' in update_item:
                poi['descriptionAdvancedEn'] = update_item['descriptionAdvancedEn']
            if 'factsAdvanced' in update_item:
                poi['factsAdvanced'] = update_item['factsAdvanced']


def write_new_file(pois, ts_file_path):
    
    new_content = """import type { POI } from "./poi";

export const poiExtraNepalCitiesV2: POI[] = [
"""

    for i, poi in enumerate(pois):
        block = poi['original_block']
        
        # Check if we have updates to apply
        has_updates = 'descriptionAdvancedDe' in poi or 'factsAdvanced' in poi

        if has_updates:
            # Remove existing advanced fields if they exist, to avoid duplication
            block = re.sub(r",\s*descriptionAdvanced:\s*\{.*?}", "", block, flags=re.DOTALL)
            block = re.sub(r",\s*factsAdvanced:\s*\{.*?}", "", block, flags=re.DOTALL)

            # Find last brace to insert before it
            last_brace_index = block.rfind('}')
            if last_brace_index != -1:
                insertion_content = ""
                
                # Add descriptionAdvanced
                desc_adv_parts = []
                if 'descriptionAdvancedDe' in poi: desc_adv_parts.append(f'de: "{poi["descriptionAdvancedDe"]}"')
                if 'descriptionAdvancedHu' in poi: desc_adv_parts.append(f'hu: "{poi["descriptionAdvancedHu"]}"')
                if 'descriptionAdvancedRo' in poi: desc_adv_parts.append(f'ro: "{poi["descriptionAdvancedRo"]}"')
                if 'descriptionAdvancedEn' in poi: desc_adv_parts.append(f'en: "{poi["descriptionAdvancedEn"]}"')

                if desc_adv_parts:
                    insertion_content += ',
    descriptionAdvanced: { ' + ', '.join(desc_adv_parts) + ' }'

                # Add factsAdvanced
                if 'factsAdvanced' in poi:
                    facts_json = json.dumps(poi['factsAdvanced'], ensure_ascii=False)
                    insertion_content += f',
    factsAdvanced: {{ multi4: {facts_json} }}'
                
                block = block[:last_brace_index] + insertion_content + block[last_brace_index:]

        new_content += "  " + block
        if i < len(pois) - 1:
            new_content += ",
"

    new_content += "
];
"
    
    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python rebuild_nepal_pois.py <ts_file> <json_batch1> [<json_batch2> ...]")
    else:
        ts_file = sys.argv[1]
        json_files = sys.argv[2:]
        
        with open(ts_file, 'r', encoding='utf-8') as f:
            ts_content = f.read()

        all_pois = get_all_pois(ts_content)
        
        for json_file in json_files:
            apply_updates(all_pois, json_file)
            
        write_new_file(all_pois, ts_file)
        print(f"Successfully rebuilt {ts_file} with data from {len(json_files)} batch file(s).")
