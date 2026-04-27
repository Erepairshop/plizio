
import os
import re
import json

def format_facts(facts):
    if not facts: return "[]"
    items = ',\n        '.join([f'"{f}"' for f in facts])
    return f'[\n        {items}\n      ]'

def process_file(file_path, updates):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = re.split(r'(\n  \{)', content)
    
    new_content = [parts[0]]
    for i in range(1, len(parts), 2):
        separator = parts[i]
        poi_str = parts[i+1]
        
        id_match = re.search(r'id: "(.*?)"', poi_str)
        if id_match:
            poi_id = id_match.group(1)
            if poi_id in updates:
                data = updates[poi_id]
                
                # Cleanup messed up insertion
                # If factsAdvanced exists but is outside or doubled
                # We will just rebuild the whole POI string if it's easier,
                # but let's try to fix the current string.
                
                # factsAdvanced
                if 'factsAdvanced: {' in poi_str:
                    # Remove it and re-insert properly
                    poi_str = re.sub(r',\n\s*factsAdvanced: \{.*?\}\s*\n\s*\}', '}', poi_str, flags=re.DOTALL)
                    poi_str = re.sub(r'\}\s*,\s*factsAdvanced: \{.*?\}\s*\n\s*\}', '}', poi_str, flags=re.DOTALL)
                
                # descriptionAdvanced
                if 'descriptionAdvanced: {' in poi_str:
                    # Replace only if current value is empty or just spaces
                    desc_match = re.search(r'(descriptionAdvanced: \{.*?hu: ")(.*?)(")', poi_str, flags=re.DOTALL)
                    if desc_match and not desc_match.group(2).strip():
                        poi_str = poi_str.replace(desc_match.group(0), desc_match.group(1) + data['desc_hu'] + desc_match.group(3))
                else:
                    # Insert descriptionAdvanced before facts: or at the end
                    insert_pos = poi_str.find('facts: {')
                    if insert_pos == -1: insert_pos = poi_str.rfind('}')
                    new_block = f'\n    descriptionAdvanced: {{\n      de: "",\n      hu: "{data["desc_hu"]}",\n      ro: "",\n      en: ""\n    }},'
                    poi_str = poi_str[:insert_pos] + new_block + poi_str[insert_pos:]

                # Re-insert factsAdvanced properly at the very end of POI object
                # First find the last } of the POI (excluding the very last one if it's the array closer)
                last_brace = poi_str.rfind('}')
                new_facts_block = f',\n    factsAdvanced: {{\n      de: [],\n      hu: {format_facts(data["facts_hu"])},\n      ro: [],\n      en: []\n    }}'
                poi_str = poi_str[:last_brace] + new_facts_block + poi_str[last_brace:]

        new_content.append(separator)
        new_content.append(poi_str)
    
    # Final cleanup of any duplicated or orphaned structures
    result = ''.join(new_content)
    # Fix the specific error: } \n , \n factsAdvanced
    result = re.sub(r'\}\s*,\s*factsAdvanced:', ',\n    factsAdvanced:', result)
    # Fix doubled braces
    result = re.sub(r'\}\s*\}\s*,\n\s*factsAdvanced:', ',\n    factsAdvanced:', result)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(result)

with open('poi_updates.json', 'r', encoding='utf-8') as f:
    all_updates = json.load(f)

for f in ['lib/visualLab/data/poiExtraHu1.ts', 'lib/visualLab/data/poiExtraHu2.ts', 'lib/visualLab/data/poiExtraHu3.ts']:
    process_file(f, all_updates)
