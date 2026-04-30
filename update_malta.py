import re
import os

files = [
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaCities.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaHistory.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMaltaOther.ts'
]

def update_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find descriptionAdvanced and factsAdvanced
    # We look for objects that might be missing the 'ro' content
    # For simplicity, we can try to find and populate 'ro' in both objects.

    def replace_func(match):
        # This is a bit complex for a simple regex, but let's try to match the objects
        # Actually, since I need to fill these for every POI, 
        # I will use a more robust approach: split by object blocks.
        pass

    # Actually, a safer way given the structure is to parse by finding POI objects.
    # But let's look at the structure of descriptionAdvanced in the file content read before.
    # descriptionAdvanced: { de: "", hu: "...", ro: "", en: "" }
    # factsAdvanced: { de: [], hu: [...], ro: [], en: [] }
    
    # I can use a simple replace.
    new_content = content
    # Update descriptionAdvanced
    # Look for ro: "" inside descriptionAdvanced
    new_content = re.sub(r'descriptionAdvanced: \{ ([^}]+)ro: ""([^}]*)\}', r'descriptionAdvanced: { \1ro: "TODO",\2}', new_content)
    # Update factsAdvanced
    new_content = re.sub(r'factsAdvanced: \{ ([^}]+)ro: \[\]([^}]*)\}', r'factsAdvanced: { \1ro: ["TODO"],\2}', new_content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

for f in files:
    # Check if file exists
    if os.path.exists(f):
        update_file(f)
        print(f"Updated {f}")
