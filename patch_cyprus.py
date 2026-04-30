
import json
import re

files = [
    'lib/visualLab/data/poiExtraCyprusCities.ts',
    'lib/visualLab/data/poiExtraCyprusHistory.ts',
    'lib/visualLab/data/poiExtraCyprusOther.ts'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple regex-based replacement
    # This is a bit fragile but okay for the structure
    pattern = re.compile(r'descriptionAdvanced: \{\s*de:.*?\},\s*factsAdvanced: \{\s*de: \[.*?\],')
    
    # We'll just define the replacement structure
    new_content = content
    # ... logic here ...
    
    # This is still too hard without proper AST parsing.
    # I'll just use the `replace` tool for the first few critical ones to establish the pattern.
    print(f"Skipping programmatic batch for safety. Manually patching.")
