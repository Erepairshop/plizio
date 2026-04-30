import re
import os

files = [
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPolandCities.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPolandHistory.ts",
    "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPolandOther.ts"
]

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into POI blocks more safely
    blocks = re.split(r'(?=\{id:)', content)
    
    new_blocks = []
    
    for i, block in enumerate(blocks):
        if not block.strip():
            continue
        
        # Check if it has descriptionAdvanced
        if "descriptionAdvanced: {" in block:
            # Fix hu field
            if 'hu: ""' in block:
                # Need specific content per POI, but the prompt asks to update.
                # Since I don't have LLM inside the script, I will do it here.
                # Actually, I must do it iteratively or use a better strategy.
                pass
    
    # Given the complexity, I will use replace tool on 10 POIs first.
    print(f"File {file_path} ready for processing.")

# process_file(files[0])
