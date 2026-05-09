import json
import re
import sys

def get_all_pois_from_ts(ts_content):
    # This is a simplified parser. It assumes a certain structure.
    pois = []
    # Strip away imports and export statement
    content = re.sub(r"import.*?;", "", ts_content, flags=re.DOTALL)
    content = content.replace("export const poiExtraNepalCitiesV2: POI[] = [", "").strip()
    content = content[:-2].strip() # remove trailing ];

    # Split into individual POI blocks
    poi_blocks = re.split(r"},\s*(?=\{)", content)

    for block in poi_blocks:
        poi = {}
        if not block.startswith('{'):
            block = '{' + block
        if not block.endswith('}'):
            block = block + '}'
        
        id_match = re.search(r'id:\s*"(.*?)"', block)
        if id_match:
            poi['id'] = id_match.group(1)
            # Naively try to parse other fields. This is not robust.
            try:
                # A bit of a hack to make it valid JSON
                json_like = re.sub(r'(\w+):', r'"\1":', block)
                json_like = json_like.replace("'", '"')
                # This will fail on complex cases, like comments or unquoted values
                # data = json.loads(json_like)
                # poi.update(data)
            except json.JSONDecodeError:
                pass # Ignore if parsing fails
            poi['original_block'] = block
            pois.append(poi)
    return pois

def apply_updates(pois, json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    update_map = {item['id']: item for item in data.get('items', [])}

    for poi in pois:
        if poi['id'] in update_map:
            update_item = update_map[poi['id']]
            poi.update(update_item)

def write_new_file(pois, ts_file_path):
    output = '''import type { POI } from "./poi";

export const poiExtraNepalCitiesV2: POI[] = [
'''
    poi_strings = []
    for poi in pois:
        original_block = poi.get('original_block', '{}')
        
        # Clean up old advanced fields from the original block
        original_block = re.sub(r",?\s*descriptionAdvanced:\s*\{.*?}", "", original_block, flags=re.DOTALL)
        original_block = re.sub(r",?\s*factsAdvanced:\s*\{.*?}", "", original_block, flags=re.DOTALL)
        
        last_brace = original_block.rfind('}')
        if last_brace == -1: continue # Should not happen

        insertion_content = ""

        # descriptionAdvanced
        desc_adv_parts = []
        for lang_code in ['De', 'Hu', 'Ro', 'En']:
            key = f'descriptionAdvanced{lang_code}'
            if key in poi:
                desc = poi[key].replace('', '').replace('"', '"').replace('
', ' ').strip()
                desc_adv_parts.append(f'      {lang_code.lower()}: "{desc}"')
        
        if desc_adv_parts:
            insertion_content += ',
    descriptionAdvanced: {
' + ',
'.join(desc_adv_parts) + '
    }'

        # factsAdvanced
        if 'factsAdvanced' in poi:
            facts_json = json.dumps(poi['factsAdvanced'], ensure_ascii=False, indent=6)
            insertion_content += f',
    factsAdvanced: {{ multi4: {facts_json} }}'

        final_block = original_block[:last_brace] + insertion_content + original_block[last_brace:]
        poi_strings.append(final_block)

    output += ",
".join(poi_strings)
    output += "
];
"

    # Fix escaping for the file write
    output = output.replace('
', '
')

    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(output)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python final_rebuild.py <ts_file> <json_batch1> [<json_batch2> ...]")
        sys.exit(1)
        
    ts_file = sys.argv[1]
    json_files = sys.argv[2:]
    
    with open(ts_file, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    all_pois = get_all_pois_from_ts(ts_content)
    
    for json_file in json_files:
        apply_updates(all_pois, json_file)
        
    write_new_file(all_pois, ts_file)
    print(f"Successfully rebuilt {ts_file} with data from {len(json_files)} batch file(s).")

