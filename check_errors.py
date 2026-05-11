
import re
import os

files = [
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaEconomicV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaHistoryV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaLandmarksV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaLifeV2.ts"
]

for file_path in files:
    print(f"Checking {file_path}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to find the broken structure:
    # factsAdvanced: { ... }
    # },
    # description: { ... }
    
    # We look for '  },' followed by '    description: {'
    matches = re.findall(r'  \},\s+description: \{', content)
    if matches:
        print(f"Found {len(matches)} broken POIs in {os.path.basename(file_path)}")
    else:
        print(f"No broken POIs found in {os.path.basename(file_path)} with primary pattern.")
        
    # Check for another pattern: missing closing brace in name
    matches_name = re.findall(r'en: "[^"]+"\s+,', content)
    if matches_name:
        print(f"Found {len(matches_name)} potentially broken names in {os.path.basename(file_path)}")
