
import json
import re
import os

def fix_bahrain_pois():
    ts_file = 'lib/visualLab/data/poiExtraBahrainCitiesV2.ts'
    
    with open(ts_file, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    # Find the start of the POI array
    array_start_match = re.search(r'export const poiExtraBahrainCitiesV2: POI\[] = \[', ts_content)
    if not array_start_match:
        print("Could not find the start of the POI array.")
        return

    array_start_index = array_start_match.end()
    
    # Extract the array content
    brace_count = 1
    array_end_index = -1
    for i in range(array_start_index, len(ts_content)):
        if ts_content[i] == '[':
            brace_count += 1
        elif ts_content[i] == ']':
            brace_count -= 1
            if brace_count == 0:
                array_end_index = i
                break
    
    if array_end_index == -1:
        print("Could not find the end of the POI array.")
        return

    array_content = ts_content[array_start_index:array_end_index]
    
    # Find all POI objects in the array
    poi_objects_str = re.findall(r'\{[^}]*\}', array_content)
    
    # Load all the SEO data from the JSON files
    seo_data = {}
    for i in range(1, 7):
        json_file = f'_seo_bahrain_cities_multi4_batch{i}.json'
        if os.path.exists(json_file):
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                for item in data['items']:
                    seo_data[item['id']] = item

    new_poi_objects = []
    for poi_str in poi_objects_str:
        # Extract the id from the POI object string
        id_match = re.search(r'id:\s*"(.*?)"', poi_str)
        if not id_match:
            continue
            
        poi_id = id_match.group(1)
        
        if poi_id in seo_data:
            seo_item = seo_data[poi_id]
            
            # Add descriptionAdvanced
            if any(f'descriptionAdvanced{lang.capitalize()}' in seo_item for lang in ['de', 'hu', 'ro', 'en']):
                desc_adv_items = {}
                for lang_code in ['de', 'hu', 'ro', 'en']:
                    key = f'descriptionAdvanced{lang_code.capitalize()}'
                    if key in seo_item:
                        desc_adv_items[lang_code] = seo_item[key]
                
                if desc_adv_items:
                    json_str = json.dumps(desc_adv_items, ensure_ascii=False, indent=4)
                    json_str = json_str.replace('}', '    }')
                    
                    if not 'descriptionAdvanced:' in poi_str:
                        poi_str = poi_str.rstrip().rstrip('}').rstrip(',') + f',\\n    descriptionAdvanced: {json_str}\\n' + '}'
                    if 'factsAdvanced' in seo_item:
                        new_facts = seo_item['factsAdvanced']
                        facts_json = json.dumps(new_facts, ensure_ascii=False)
                
                        if not 'factsAdvanced:' in poi_str:
                            poi_str = poi_str.rstrip().rstrip('}').rstrip(',') + f',\\n    factsAdvanced: {{ "multi4": {facts_json} }}\\n' + '}'
        
        new_poi_objects.append(poi_str)

    # Reconstruct the TS file content
    new_array_content = ',
'.join(new_poi_objects)
    new_ts_content = ts_content[:array_start_index] + new_array_content + ts_content[array_end_index:]
    
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(new_ts_content)

    print(f"Successfully fixed and updated {ts_file}")

if __name__ == "__main__":
    fix_bahrain_pois()
