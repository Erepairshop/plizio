
import re

def find_pois_to_update(content):
    pois_to_update = []
    
    # A more robust way to find POI-like objects without complex regex
    # This looks for objects inside arrays assigned to variables ending in 'Cities', 'Regions', 'Country', etc.
    # It's still a heuristic but better than a single large regex.
    
    # Split the file into what looks like assignments to POI arrays
    array_sections = re.split(r'export const \w+:\s*POI\[\]\s*=\s*\[', content)
    
    # The first split part is the import statement, ignore it.
    for section in array_sections[1:]:
        # Find all object-like structures {...}
        # This is not a perfect parser but should work for this file's structure.
        # It handles nested braces by counting them.
        
        open_braces = 0
        obj_start_index = -1
        
        for i, char in enumerate(section):
            if char == '{':
                if open_braces == 0:
                    obj_start_index = i
                open_braces += 1
            elif char == '}':
                open_braces -= 1
                if open_braces == 0 and obj_start_index != -1:
                    obj_str = section[obj_start_index : i+1]
                    
                    # Now process the found object string
                    poi_id_match = re.search(r'id:\s*"([^"]+)"', obj_str)
                    if not poi_id_match:
                        continue
                    
                    poi_id = poi_id_match.group(1)
                    
                    desc_adv_en_empty = '"en": ""' in obj_str or "'en': ''" in obj_str
                    facts_adv_en_empty = 'en: []' in obj_str

                    # Check for descriptionAdvanced existence before checking "en"
                    has_desc_adv = 'descriptionAdvanced:' in obj_str
                    has_facts_adv = 'factsAdvanced:' in obj_str

                    # A POI needs update if the advanced field exists but the english part is empty
                    needs_update = (has_desc_adv and desc_adv_en_empty) or (has_facts_adv and facts_adv_en_empty)

                    if needs_update:
                        de_desc_match = re.search(r'descriptionAdvanced:\s*{[^}]*?"de":\s*"([^"]*)"', obj_str, re.DOTALL)
                        hu_desc_match = re.search(r'descriptionAdvanced:\s*{[^}]*?"hu":\s*"([^"]*)"', obj_str, re.DOTALL)
                        de_facts_match = re.search(r'factsAdvanced:\s*{[^}]*?de:\s*\[([^\]]*)\]', obj_str, re.DOTALL)
                        hu_facts_match = re.search(r'factsAdvanced:\s*{[^}]*?hu:\s*\[([^\]]*)\]', obj_str, re.DOTALL)
                        
                        pois_to_update.append({
                            "id": poi_id,
                            "de_desc": de_desc_match.group(1) if de_desc_match else "",
                            "hu_desc": hu_desc_match.group(1) if hu_desc_match else "",
                            "de_facts": de_facts_match.group(1).strip() if de_facts_match else "",
                            "hu_facts": hu_facts_match.group(1).strip() if hu_facts_match else "",
                        })
                    
                    obj_start_index = -1

    return pois_to_update

if __name__ == "__main__":
    file_path = "lib/visualLab/data/hungaryPoi.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    pois = find_pois_to_update(content)
    for poi in pois:
        print(f"ID: {poi['id']}")
        print(f"  DE_DESC: {poi['de_desc']}")
        print(f"  HU_DESC: {poi['hu_desc']}")
        print(f"  DE_FACTS: {poi['de_facts']}")
        print(f"  HU_FACTS: {poi['hu_facts']}")
        print("-" * 20)

    print(f"Found {len(pois)} POIs to update.")
