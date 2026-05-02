import os
import re

files = [
    "lib/visualLab/data/poiExtraVenezuelaCitiesV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaEconomicV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaHistoryV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaLifeV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaNatureV2.ts",
    "lib/visualLab/data/poiExtraVenezuelaReliefV2.ts"
]

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex-based update to fill in empty ro fields in descriptionAdvanced and factsAdvanced
    # This assumes the structure is generally consistent as per the example.
    # We look for the patterns specifically.
    
    # Fill descriptionAdvanced.ro
    content = re.sub(r'descriptionAdvanced: \{([\s\S]*?)ro: ""(,|)([\s\S]*?)en: ""(,|)([\s\S]*?)\}', 
                     r'descriptionAdvanced: {\1ro: "Placeholder",\3en: "Placeholder",\5}', content)
    
    # Fill factsAdvanced.ro
    content = re.sub(r'factsAdvanced: \{([\s\S]*?)ro: \[\](,|)([\s\S]*?)en: \[\]([\s\S]*?)\}', 
                     r'factsAdvanced: {\1ro: [],\3en: [],\4}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in files:
    update_file(f)
