import json
import re

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match each POI object
    # This regex is simplified and assumes standard formatting
    pattern = re.compile(r'\{.*?id: "(.*?)".*?\},', re.DOTALL)
    
    # We will split the array content manually as simple regex might fail
    # A better approach: find the array definition and modify it.
    # Let's try a safer way by reading the file content.
    
    # For now, manually process the content as provided in the files
    # Actually, the files follow a strict structure.
    
    # Since I cannot use a robust parser, I will do line-by-line or 
    # structured replacements if I can identify the objects.
    
    # Let's read the file and split by object start.
    pass

# Due to complexity, I'll use simple string replacement logic on each file, 
# ensuring I don't touch existing 'hu' if it exists and is filled.
