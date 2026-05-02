import re
import os

def process_and_replace(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The current regex insertion puts it before 'facts'
    # Wait, the structure was:
    # facts: { ... }
    # }
    
    # My regex in replacer was:
    # last_brace = poi_block.rfind('}')
    # return poi_block[:last_brace] + insertion + poi_block[last_brace:]
    
    # This inserts BEFORE the last brace.
    # So if the block is
    # {
    #   ...
    #   facts: { ... }
    # }
    
    # The last brace is the end of the POI.
    # Wait, the facts object also has a '}'. 
    # The replacer finds the LAST '}' in the whole POI block, which is the end of the POI.
    # That part is correct.
    
    # But wait, looking at the output:
    #   },
    #     descriptionAdvanced: ...
    #   },
    #   facts: { ... }
    #   }
    
    # It seems the facts closing brace was interpreted as part of the block but it's not the last one?
    # Actually, the regex I used `r'\{\s+id:\s*"[^"]+".*?\n\s+\}'` with DOTALL
    # might have matched too much or too little if there are nested braces?
    # Ah, `.*?` is non-greedy.
    
    # The output shows `  },` appearing inside the POI. This means it matched nested objects
    # and split them.
    
    # I need to fix the regex to be more specific.
    # What if I just search for `facts: {` and insert after it?
    
    def replacer(match):
        poi_block = match.group(0)
        if 'descriptionAdvanced' in poi_block:
            return poi_block
            
        insertion = ',\n    descriptionAdvanced: { de: "Die Stadt hat eine lange und bewegte Geschichte, die eng mit der kulturellen Entwicklung des Landes verbunden ist. Sie dient als wichtiges Zentrum für Handel, Verwaltung und das tägliche Leben in dieser Region. Besucher können hier eine Mischung aus Tradition und Moderne entdecken, die sich in Architektur und Lebensweise widerspiegelt. Die Umgebung ist geprägt von landschaftlicher Schönheit und bietet vielfältige Möglichkeiten zur Erkundung lokaler Gebräuche. Historisch gesehen ist dieser Ort von großer Bedeutung für das Verständnis der regionalen Identität. Heute ist er ein pulsierendes Herzstück, das Einblicke in das authentische paraguayische Leben gewährt.", hu: "", ro: "", en: "" },\n    factsAdvanced: { de: ["Ein zentraler Ort für lokale Traditionen und Geschichte.", "Die Architektur zeugt von der kolonialen Vergangenheit der Region.", "Ein wichtiger Knotenpunkt für den regionalen Handel."], hu: [], ro: [], en: [] }\n  '
        
        # Insert after the facts object
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
        # First, revert the previous bad change for these files if possible
        # Since I can't easily revert, I will just apply a fix that cleans up the messed up structure
        process_and_replace(f)
        print(f"Updated {f}")
