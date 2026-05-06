import json

def process_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple strategy: find the POI objects
    # This is a brute-force approach. For complex files, use a proper parser
    # But since I can't easily parse TS, I'll use regex/string manipulation
    # and rely on the user hint to be careful.
    
    # Actually, the user wants me to do this "one by one" and "batch the work".
    # I should read the file, identify the POIs, and update them.
    pass

# For now, just list the POIs in greecePoi.ts
# I'll use grep to find the IDs
import subprocess
result = subprocess.run(['grep', '-n', 'id: "', '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/greecePoi.ts'], capture_output=True, text=True)
print(result.stdout)
