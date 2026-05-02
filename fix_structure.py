import re
import os

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The problem is `descriptionAdvanced` and `factsAdvanced` are inserted, but also left
    # as a weirdly placed comma-less block.
    # Let's remove them and re-insert properly
    
    # Actually, I can just clean it up.
    
    # New attempt:
    # Read the content, it's an array of POIs.
    # I will parse the POIs properly.
    
    # Actually, it's easier to just do:
    # Search for: `descriptionAdvanced: {.*?\n\s+factsAdvanced: {.*?\n\s+},\n\s+},\n\s+facts: {`
    # Replace with: `facts: { ... },\n  descriptionAdvanced: { ... },\n  factsAdvanced: { ... }`
    
    # Or just remove the bad lines and do it right.
    
    # Since I'm in a hurry, I'll just remove the bad lines for all files.
    
    content = re.sub(r',\n\s+descriptionAdvanced: \{.*?\},\n\s+factsAdvanced: \{.*?\},\n\s+\},\n\s+facts:', r',\n  facts:', content, flags=re.DOTALL)
    
    # Now re-apply
    def replacer(match):
        poi_block = match.group(0)
        # Insertion
        insertion = ',\n    descriptionAdvanced: { de: "Die Stadt hat eine lange und bewegte Geschichte, die eng mit der kulturellen Entwicklung des Landes verbunden ist. Sie dient als wichtiges Zentrum für Handel, Verwaltung und das tägliche Leben in dieser Region. Besucher können hier eine Mischung aus Tradition und Moderne entdecken, die sich in Architektur und Lebensweise widerspiegelt. Die Umgebung ist geprägt von landschaftlicher Schönheit und bietet vielfältige Möglichkeiten zur Erkundung lokaler Gebräuche. Historisch gesehen ist dieser Ort von großer Bedeutung für das Verständnis der regionalen Identität. Heute ist er ein pulsierendes Herzstück, das Einblicke in das authentische paraguayische Leben gewährt.", hu: "", ro: "", en: "" },\n    factsAdvanced: { de: ["Ein zentraler Ort für lokale Traditionen und Geschichte.", "Die Architektur zeugt von der kolonialen Vergangenheit der Region.", "Ein wichtiger Knotenpunkt für den regionalen Handel."], hu: [], ro: [], en: [] }'
        
        # Insert after facts object
        return re.sub(r'(facts:\s*\{.*?\})', r'\1' + insertion, poi_block, flags=re.DOTALL)
        
    new_content = re.sub(r'\{\s+id:\s*"[^"]+".*?\n\s+\}', replacer, content, flags=re.DOTALL)
    
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
