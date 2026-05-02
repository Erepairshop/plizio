import json
import re
import sys

def process_file(ts_file, json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        updates = json.load(f)

    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Helper function to process a single POI block
    def process_poi(poi_block, poi_id):
        if poi_id not in updates:
            return poi_block
            
        ro_desc = updates[poi_id]['description'].replace('"', '\\"')
        ro_facts = updates[poi_id]['facts']
        facts_str = '[\n        ' + ',\n        '.join([f'"{f.replace(chr(34), chr(92)+chr(34))}"' for f in ro_facts]) + '\n      ]'

        # Remove the duplicate placeholder blocks from the end of the POI if they exist
        placeholder_desc_pattern = r',\s*descriptionAdvanced:\s*\{\s*hu:\s*["\']Lengyelország ezen lenyűgöző pontja.*?["\']\s*\}'
        poi_block = re.sub(placeholder_desc_pattern, '', poi_block, flags=re.DOTALL)
        
        placeholder_facts_pattern = r',\s*factsAdvanced:\s*\{\s*hu:\s*\[\s*["\']Jelentős szerepet játszott.*?\]\s*\}'
        poi_block = re.sub(placeholder_facts_pattern, '', poi_block, flags=re.DOTALL)

        # Now inject ro into descriptionAdvanced
        # Find descriptionAdvanced block
        desc_match = re.search(r'descriptionAdvanced:\s*\{', poi_block)
        if desc_match:
            # Find the closing brace of descriptionAdvanced
            start_idx = desc_match.end()
            braces = 1
            for i in range(start_idx, len(poi_block)):
                if poi_block[i] == '{': braces += 1
                elif poi_block[i] == '}': braces -= 1
                if braces == 0:
                    end_idx = i
                    break
            desc_content = poi_block[start_idx:end_idx]
            # Check if ro already exists
            if not re.search(r'\bro\s*:', desc_content):
                # insert ro at the end of the block
                if desc_content.strip() == '':
                    new_desc_content = f'\n        ro: "{ro_desc}"\n      '
                else:
                    new_desc_content = desc_content.rstrip() + f',\n        ro: "{ro_desc}"\n      '
                poi_block = poi_block[:start_idx] + new_desc_content + poi_block[end_idx:]
        else:
            # Add descriptionAdvanced if missing entirely (should be before factsAdvanced or end)
            insert_pos = poi_block.rfind('}')
            poi_block = poi_block[:insert_pos].rstrip() + f',\n    descriptionAdvanced: {{\n      ro: "{ro_desc}"\n    }}\n  ' + poi_block[insert_pos:]

        # Now inject ro into factsAdvanced
        facts_match = re.search(r'factsAdvanced:\s*\{', poi_block)
        if facts_match:
            start_idx = facts_match.end()
            braces = 1
            for i in range(start_idx, len(poi_block)):
                if poi_block[i] == '{': braces += 1
                elif poi_block[i] == '}': braces -= 1
                if braces == 0:
                    end_idx = i
                    break
            facts_content = poi_block[start_idx:end_idx]
            if not re.search(r'\bro\s*:', facts_content):
                if facts_content.strip() == '':
                    new_facts_content = f'\n        ro: {facts_str}\n      '
                else:
                    new_facts_content = facts_content.rstrip() + f',\n        ro: {facts_str}\n      '
                poi_block = poi_block[:start_idx] + new_facts_content + poi_block[end_idx:]
        else:
            insert_pos = poi_block.rfind('}')
            poi_block = poi_block[:insert_pos].rstrip() + f',\n    factsAdvanced: {{\n      ro: {facts_str}\n    }}\n  ' + poi_block[insert_pos:]

        return poi_block

    # Split by POI boundaries. A POI usually starts with `{` and ends with `}`.
    # To be safe, we use the `id: "..."` to locate them.
    out_content = ""
    last_idx = 0
    pois_found = 0
    
    for match in re.finditer(r'\{\s*id:\s*["\']([^"\']+)["\']', content):
        poi_id = match.group(1)
        start_idx = match.start()
        
        # Add everything before this POI to out_content
        out_content += content[last_idx:start_idx]
        
        # Find end of POI object
        braces = 0
        for i in range(start_idx, len(content)):
            if content[i] == '{': braces += 1
            elif content[i] == '}':
                braces -= 1
                if braces == 0:
                    end_idx = i + 1
                    break
        
        poi_block = content[start_idx:end_idx]
        new_poi_block = process_poi(poi_block, poi_id)
        out_content += new_poi_block
        last_idx = end_idx
        pois_found += 1

    out_content += content[last_idx:]
    
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(out_content)
        
    print(f"Updated {ts_file}. Processed {pois_found} total POIs.")

if __name__ == "__main__":
    process_file(sys.argv[1], sys.argv[2])
