import re
import os

files = [
    "lib/visualLab/data/poiExtraParaguayCitiesV2.ts",
    "lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
    "lib/visualLab/data/poiExtraParaguayHistoryV2.ts",
    "lib/visualLab/data/poiExtraParaguayLandmarksV2.ts",
    "lib/visualLab/data/poiExtraParaguayLifeV2.ts",
    "lib/visualLab/data/poiExtraParaguayNatureV2.ts",
    "lib/visualLab/data/poiExtraParaguayReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We split by '},' or '}' at the end of the array to isolate objects
    # This is a bit risky but given the structure it should work
    
    # For this task, since the files are relatively small and structured,
    # I will inject the fields before the closing brace of each POI.
    
    # Simple regex to find objects
    # This is still tricky. Let's use a simpler approach:
    # Read the whole content, find objects.
    
    # Actually, I'll use the tool 'replace' for each file once I've generated the content.
    # Wait, the user wants me to do this for 7 files. 
    # I will just read all of them and process them.
    pass
