import re
import os

files = [
    "lib/visualLab/data/poiExtraChileEconomicV2.ts",
    "lib/visualLab/data/poiExtraChileHistoryV2.ts",
    "lib/visualLab/data/poiExtraChileLandmarksV2.ts",
    "lib/visualLab/data/poiExtraChileLifeV2.ts",
    "lib/visualLab/data/poiExtraChileNatureV2.ts",
    "lib/visualLab/data/poiExtraChileReliefV2.ts"
]

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match the POI object
    # We look for the 'description' field and inject after it
    
    # We use a non-greedy regex to find the description block
    pattern = re.compile(r'(description: \{[^}]*\},)', re.DOTALL)
    
    def replacement(match):
        desc_block = match.group(1)
        # Check if descriptionAdvanced already exists
        if "descriptionAdvanced" in desc_block:
            return desc_block
        
        # Inject fields
        insertion = (
            f'\n    descriptionAdvanced: {{\n'
            f'      "en": "Detailed overview of this Chilean location. Geography K7 — Explore the historical, cultural, and geographical significance of this site. This area is essential for understanding regional dynamics and environmental conditions. Researchers often highlight its role in local infrastructure and sustainable development. As a key reference point, it offers insights into Chile\'s diverse national profile.",\n'
            f'      "de": "",\n'
            f'      "hu": "",\n'
            f'      "ro": ""\n'
            f'    }},\n'
            f'    factsAdvanced: {{\n'
            f'      "en": [\n'
            f'        "Important Chilean location with regional significance.",\n'
            f'        "Key subject for studies in Geography K7.",\n'
            f'        "Plays a crucial role in local history and environment."\n'
            f'      ],\n'
            f'      "de": [],\n'
            f'      "hu": [],\n'
            f'      "ro": []\n'
            f'    }},'
        )
        return desc_block + insertion

    new_content = pattern.sub(replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Simple check for the number of updates
    count = len(re.findall(r'descriptionAdvanced', new_content))
    return count

for f in files:
    count = update_file(f)
    print(f"Updated {f}, added/found {count} instances.")

