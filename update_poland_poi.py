import re
import json
import os

file_path = r'C:\Users\User\plizio-repo\lib\visualLab\data\polandPoi.ts'

def add_faq_to_poi(content, poi_id, faq_data):
    # Find the object with the given id
    # This is a bit tricky with regex in a TS file, so we look for the ID and then the next 'image:' field
    
    # Escape special characters in poi_id
    escaped_id = re.escape(poi_id)
    
    # Pattern to match the POI object and find where to insert the faq
    # We look for id: "poi_id" and then find the closing brace before the next id or end of array
    # A safer way is to find the 'image:' line and insert before it.
    
    faq_str = "  faq: {\n"
    for lang in ["de", "hu", "ro", "en"]:
        faq_str += f"    {lang}: [\n"
        for item in faq_data.get(lang, []):
            q = item['q'].replace('"', '\\"')
            a = item['a'].replace('"', '\\"')
            faq_str += f'      {{ q: "{q}", a: "{a}" }},\n'
        faq_str += "    ],\n"
    faq_str += "  },\n"
    
    # Find the block starting with id: "poi_id"
    # and find the 'image:' field within that block
    pattern = rf'(id:\s*"{escaped_id}".*?)(image:)'
    if re.search(pattern, content, re.DOTALL):
        # Insert before 'image:'
        new_content = re.sub(pattern, rf'\1{faq_str}  \2', content, flags=re.DOTALL)
        return new_content
    else:
        # If no image field, insert before the closing brace of the object
        # This is more complex. Let's assume image exists as it's common in this file.
        return content

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Load all FAQs from a JSON file (we will populate this)
faqs_file = r'C:\Users\User\plizio-repo\all_faqs.json'
if os.path.exists(faqs_file):
    with open(faqs_file, 'r', encoding='utf-8') as f:
        all_faqs = json.load(f)
    
    for poi_id, faq_data in all_faqs.items():
        # Check if faq already exists for this POI
        if rf'id: "{poi_id}"' in content and 'faq:' not in content.split(rf'id: "{poi_id}"')[1].split('}')[0]:
             content = add_faq_to_poi(content, poi_id, faq_data)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated polandPoi.ts with FAQs")
