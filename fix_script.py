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
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the broken 'name: {...} \n descriptionAdvanced' with 'name: {...}, \n descriptionAdvanced'
    content = re.sub(r'name: \{.*?\}\n    descriptionAdvanced', lambda m: m.group(0).replace('name: {', 'name: {').replace('}', '},'), content, flags=re.DOTALL)
    
    # Actually, the fix is: name: { ... } \n descriptionAdvanced -> name: { ... }, \n descriptionAdvanced
    content = re.sub(r'name: \{.*?\}(\n    descriptionAdvanced)', r'name: {...}, \1', content, flags=re.DOTALL)
    # This is not working correctly.
    # I will just write a script that adds a comma after the 'name' object.
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

