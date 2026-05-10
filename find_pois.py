#!/usr/bin/env python
import re
import sys

def find_pois_to_update(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}", file=sys.stderr)
        return []

    # Regex to find the array content. This is the most critical part.
    # It assumes the array is assigned to a const.
    poi_array_match = re.search(r'=\s*(\[[\s\S]*\]);', content)
    if not poi_array_match:
        print("Could not find POI array.", file=sys.stderr)
        return []
    
    # This is a dangerous way to parse JS/TS. It assumes objects are separated by '},'
    # and that this sequence doesn't appear inside strings.
    # For this specific file structure, it might be good enough.
    poi_array_str = poi_array_match.group(1).strip()[1:-1] # Remove outer brackets
    
    # Let's try a slightly safer split. Split on the comma that is followed by an object start.
    # This is still not foolproof.
    poi_blocks = re.split(r',\s*(?=\{)', poi_array_str)

    pois_to_update = []
    for block in poi_blocks:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)

        if 'descriptionAdvanced' not in block:
            if poi_id not in pois_to_update: pois_to_update.append(poi_id)
            continue
            
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', block)
        if not desc_adv_match:
            if poi_id not in pois_to_update: pois_to_update.append(poi_id)
            continue
        
        desc_adv_content = desc_adv_match.group(1)
        
        # Check all languages
        is_missing = False
        for lang in ['de', 'hu', 'ro', 'en']:
            # Regex to find content for a specific language
            # It matches lang:, optional whitespace, a quote (`"'), content, and a closing quote
            pattern = re.compile(lang + r':\s*[`"']([\s\S]*?)[`"']')
            match = pattern.search(desc_adv_content)
            
            if not match or len(match.group(1).strip()) < 50:
                is_missing = True
                break
        
        if is_missing:
            if poi_id not in pois_to_update:
                pois_to_update.append(poi_id)
                
    return pois_to_update

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python find_pois.py <path_to_ts_file>", file=sys.stderr)
        sys.exit(1)
        
    file_path = sys.argv[1]
    pois_to_update = find_pois_to_update(file_path)
    for poi_id in pois_to_update:
        print(poi_id)
