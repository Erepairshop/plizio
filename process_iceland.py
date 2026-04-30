import re
import os

def process_file(file_path):
    print(f"Processing {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    def replace_func(match):
        obj_content = match.group(1)
        
        # Check if descriptionAdvanced exists
        if 'descriptionAdvanced' not in obj_content:
            # Need to insert it
            new_fields = """descriptionAdvanced: {
  de: "",
  hu: "",
  ro: "A adăuga descrierea SEO pentru {name}.",
  en: ""
},
factsAdvanced: {
  de: [],
  hu: [],
  ro: ["Fact 1", "Fact 2"],
  en: []
},"""
            # Insert after coords or type
            obj_content = re.sub(r'(coords: \[.*?\],)', r'\1\n' + new_fields, obj_content)
        elif 'ro: ""' in obj_content or 'ro: ""' in obj_content:
            # Update only empty ro
            pass
            
        return "{" + obj_content + "}"

    # This is still dangerous. I will use a simpler approach:
    # Read the file, and for each POI object, insert the fields if missing.
    return content

# I will use a manual replace for the most important POIs or small files first.
