
import re
import os

def clean_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove the double commas and orphaned keys
    # Pattern: },, \s+ descriptionAdvanced: { ... }, \s+ factsAdvanced: { ... },
    # This is tricky because of the nesting.
    
    # Let's try to extract POIs one by one.
    # Each POI starts with { id: "..."
    
    pois = []
    # Find all POI-like structures
    # We look for { id: "..." and everything until the next { id: "..." or the end of the array
    
    # First, let's just fix the "},," and stray keys
    # by merging them into the previous object.
    
    # Replace },, with nothing and hope it merges? No.
    
    # Better: use regex to find the blocks and merge them.
    
    # Let's try to find blocks that start with { id: and end before the next { id:
    matches = list(re.finditer(r'\{[^{]*?id:\s*"(bz-[^"]+)"', content))
    
    new_pois = []
    for i in range(len(matches)):
        start = matches[i].start()
        end = matches[i+1].start() if i + 1 < len(matches) else content.rfind(']')
        
        block = content[start:end].strip()
        # Clean up the block
        # Remove trailing commas
        if block.endswith(','):
            block = block[:-1].strip()
        if block.endswith(','):
            block = block[:-1].strip()
            
        # If the block contains },, it's broken
        if '},,' in block:
            # Split by },,
            parts = block.split('},,')
            base_obj = parts[0] + '}'
            stray_data = '},,'.join(parts[1:])
            # Extract descriptionAdvanced and factsAdvanced from stray_data
            # and merge into base_obj
            
            # This is getting complicated. 
            # Let's try a simpler approach: 
            # 1. Remove all },,
            # 2. Fix the brackets.
            pass

    # Actually, I'll just rewrite the files properly by extracting the data I need.
    return content

# I'll use a more robust approach:
# Parse the file into a list of dicts using regex to extract id, name, description, facts, etc.

def parse_pois(content):
    # Regex to find all POIs
    # This is a bit loose but should work for this format
    poi_blocks = re.findall(r'\{[^{]*?id:\s*"([^"]+)"[^}]*?\}', content, re.DOTALL)
    
    # Wait, the problem is descriptionAdvanced is often OUTSIDE the main object.
    # Let's find all id assignments.
    ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    pois_data = {}
    for pid in ids:
        # Find the block for this ID
        # We look for the ID and then everything until the next ID or end of array
        pattern = rf'id:\s*"{pid}"(.*?)(?=id:\s*"|$)'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            block = match.group(1)
            # Now we have the block for this POI. 
            # It might contain multiple descriptionAdvanced etc.
            
            # Extract names
            name_de = re.search(r'name:\s*\{[^}]*?de:\s*"([^"]*)"', block, re.DOTALL)
            # ... and so on
            
    return ids

# Let's try a different strategy. I will read the file and fix it line by line.
