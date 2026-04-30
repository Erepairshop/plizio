import re

def update_poi_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to find POI objects
    # This is a bit fragile but based on the provided structure.
    # We look for objects with 'id' and 'factsAdvanced'
    pattern = re.compile(r'\{[^{]*?id:\s*"([^"]+)".*?factsAdvanced:\s*\{[^}]*?en:\s*\[(.*?)\]\s*\}\s*\}', re.DOTALL)
    
    # Actually, the file is a big list of objects.
    # It's safer to split by objects.
    
    # Let's target the en facts list directly and replace it if empty.
    # For now, let's just find and list all IDs to verify we have them all.
    matches = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"Found {len(matches)} POIs in {file_path}")
    return matches

# Just printing to verify, then I will build the actual update script.
update_poi_file('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraCities.ts')
