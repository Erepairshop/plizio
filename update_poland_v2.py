import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPolandCities.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find POI blocks and update empty hu fields
# This regex is tricky due to nested braces, will use simple string replacement strategy
# for empty hu in descriptionAdvanced/factsAdvanced

def update_block(block):
    # Update descriptionAdvanced
    # Match hu: "" inside descriptionAdvanced
    block = re.sub(r'(descriptionAdvanced: \{[^}]*?hu: "")', r'\1', block)
    # Actually, I need to insert text. This is safer if I do it per POI.
    return block

# Let's just use manual replacements for the first 10, as requested.
print("Manual replacement is better for safety.")
