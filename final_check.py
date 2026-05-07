import re
import os

files = [
    "lib/visualLab/data/poiExtraPeruCitiesV2.ts",
    "lib/visualLab/data/poiExtraPeruEconomicV2.ts",
    "lib/visualLab/data/poiExtraPeruLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPeruLifeV2.ts",
    "lib/visualLab/data/poiExtraPeruNatureV2.ts",
    "lib/visualLab/data/poiExtraPeruReliefV2.ts"
]

base_path = "/mnt/c/Users/User/plizio-repo/"

for file_path in files:
    full_path = os.path.join(base_path, file_path)
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for empty descriptionAdvanced.en
    da_matches = re.findall(r'descriptionAdvanced: \{([^{}]*)\}', content, re.DOTALL)
    for match in da_matches:
        if 'en: ""' in match:
            print(f"Empty descriptionAdvanced.en in {file_path}")
            
    # Check for empty factsAdvanced.en
    fa_matches = re.findall(r'factsAdvanced: \{([^{}]*)\}', content, re.DOTALL)
    for match in fa_matches:
        if 'en: []' in match:
            print(f"Empty factsAdvanced.en in {file_path}")
