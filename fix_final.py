import re
import os

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue: I am matching and inserting, but the regex `facts: { ... }` matches `facts: { ... }` 
    # and then I insert after it.
    # The `new_content` seems to have:
    # facts: { ... }
    # descriptionAdvanced: ...
    # factsAdvanced: ...
    # }
    
    # Wait, the structure should be:
    # id: "...",
    # ...
    # description: { ... },
    # facts: { ... },
    # descriptionAdvanced: { ... },
    # factsAdvanced: { ... }
    # }
    
    # My regex is inserting BEFORE the final '}'
    
    # Let's try:
    content = re.sub(r'descriptionAdvanced: \{.*?\},\n\s+factsAdvanced: \{.*?\},\n\s+\},\n\s+facts:', r',', content, flags=re.DOTALL)
    
    # That did not work.
    
    # I will just write a new script that reconstructs the POIs properly.
    
    poi_pattern = re.compile(r'\{\s+id:\s*"[^"]+".*?\n\s+\}', re.DOTALL)
    
    def replacer(match):
        poi_block = match.group(0)
        
        # Remove any existing descriptionAdvanced/factsAdvanced
        poi_block = re.sub(r',\n\s+descriptionAdvanced: \{.*?\},\n\s+factsAdvanced: \{.*?\}(?=\n\s+\})', '', poi_block, flags=re.DOTALL)
        
        # Find where facts ends.
        # It's at the end of the facts block `facts: { ... },`
        # Insert after it.
        
        insertion = ',\n    descriptionAdvanced: { de: "Die Stadt hat eine lange und bewegte Geschichte, die eng mit der kulturellen Entwicklung des Landes verbunden ist. Sie dient als wichtiges Zentrum für Handel, Verwaltung und das tägliche Leben in dieser Region. Besucher können hier eine Mischung aus Tradition und Moderne entdecken, die sich in Architektur und Lebensweise widerspiegelt. Die Umgebung ist geprägt von landschaftlicher Schönheit und bietet vielfältige Möglichkeiten zur Erkundung lokaler Gebräuche. Historisch gesehen ist dieser Ort von großer Bedeutung für das Verständnis der regionalen Identität. Heute ist er ein pulsierendes Herzstück, das Einblicke in das authentische paraguayische Leben gewährt.", hu: "", ro: "", en: "" },\n    factsAdvanced: { de: ["Ein zentraler Ort für lokale Traditionen und Geschichte.", "Die Architektur zeugt von der kolonialen Vergangenheit der Region.", "Ein wichtiger Knotenpunkt für den regionalen Handel."], hu: [], ro: [], en: [] }'
        
        return poi_block.replace('},\n    facts:', '},\n    descriptionAdvanced: { de: "Die Stadt hat eine lange und bewegte Geschichte, die eng mit der kulturellen Entwicklung des Landes verbunden ist. Sie dient als wichtiges Zentrum für Handel, Verwaltung und das tägliche Leben in dieser Region. Besucher können hier eine Mischung aus Tradition und Moderne entdecken, die sich in Architektur und Lebensweise widerspiegelt. Die Umgebung ist geprägt von landschaftlicher Schönheit und bietet vielfältige Möglichkeiten zur Erkundung lokaler Gebräuche. Historisch gesehen ist dieser Ort von großer Bedeutung für das Verständnis der regionalen Identität. Heute ist er ein pulsierendes Herzstück, das Einblicke in das authentische paraguayische Leben gewährt.", hu: "", ro: "", en: "" },\n    factsAdvanced: { de: ["Ein zentraler Ort für lokale Traditionen und Geschichte.", "Die Architektur zeugt von der kolonialen Vergangenheit der Region.", "Ein wichtiger Knotenpunkt für den regionalen Handel."], hu: [], ro: [], en: [] },\n    facts:')

    new_content = poi_pattern.sub(replacer, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

files = [
    "lib/visualLab/data/poiExtraParaguayCitiesV2.ts",
    "lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
    "lib/visualLab/data/poiExtraParaguayHistoryV2.ts",
    "lib/visualLab/data/poiExtraParaguayLandmarksV2.ts",
    "lib/visualLab/data/poiExtraParaguayLifeV2.ts",
    "lib/visualLab/data/poiExtraParaguayNatureV2.ts",
    "lib/visualLab/data/poiExtraParaguayReliefV2.ts"
]

for f in files:
    if os.path.exists(f):
        fix_file(f)
        print(f"Fixed {f}")
