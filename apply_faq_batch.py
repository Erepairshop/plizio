import re
import sys

def add_faqs(file_path, pois_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, faq_obj in pois_data.items():
        # Find the POI object by id
        # We look for id: "poi_id" and then find the closing brace of facts or description
        pattern = r'({[\s\n]*id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            poi_block = match.group(1)
            # Check if faq already exists
            if 'faq:' in poi_block:
                continue
            
            # Format the faq object as a string
            faq_str = ",\n    faq: {\n"
            for lang in ['de', 'hu', 'ro', 'en']:
                faq_str += f'      {lang}: [\n'
                for item in faq_obj[lang]:
                    q = item['q'].replace('"', '\\"')
                    a = item['a'].replace('"', '\\"')
                    faq_str += f'        {{ q: "{q}", a: "{a}" }},\n'
                faq_str += '      ],\n'
            faq_str += '    }'
            
            new_poi_block = poi_block + faq_str
            content = content.replace(poi_block, new_poi_block)
        else:
            print(f"Could not find POI block for {poi_id}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# This script will be called with data for specific batches
