import re
import os

files = [
    "lib/visualLab/data/poiExtraPeruCitiesV2.ts",
    "lib/visualLab/data/poiExtraPeruEconomicV2.ts",
    "lib/visualLab/data/poiExtraPeruHistoryV2.ts",
    "lib/visualLab/data/poiExtraPeruLandmarksV2.ts",
    "lib/visualLab/data/poiExtraPeruLifeV2.ts",
    "lib/visualLab/data/poiExtraPeruNatureV2.ts",
    "lib/visualLab/data/poiExtraPeruReliefV2.ts"
]

def get_ro_desc(name):
    return f"{name} este un punct de interes remarcabil în Peru, oferind perspective unice asupra culturii și istoriei locale. Această locație atrage vizitatori dornici să exploreze patrimoniul bogat și peisajele spectaculoase ale regiunii. Importanța sa culturală și istorică este esențială pentru înțelegerea identității peruane moderne. Vizitatorii pot descoperi aici elemente unice care definesc caracterul specific al acestei zone. Este un loc care combină armonios tradiția cu elementele naturale remarcabile ale țării."

def get_ro_facts():
    return [
        "Peru este o țară situată în vestul Americii de Sud, cu o geografie diversă.",
        "Țara găzduiește situri arheologice celebre precum Machu Picchu.",
        "Cultura peruană este o fuziune fascinantă de tradiții indigene și influențe spaniole."
    ]

def update_content(content):
    # Regex to match descriptionAdvanced/factsAdvanced objects.
    # This is still dangerous. Let's process object by object.
    
    # Actually, a better approach:
    # 1. Split content by the closing brace of a POI object `  },`
    # 2. Process each block.
    
    # Looking at the file, the objects seem to be in the array:
    # export const poiExtraPeruCitiesV2: POI[] = [
    #   { ... },
    #   { ... }
    # ];
    
    # Split by the object closure '  },'
    # This might split inside nested structures, but let's see.
    # Actually, the file is TS.
    
    # I'll just use simple regex substitution for the empty ones.
    
    new_content = content
    
    # Find all POI objects and check for empty fields
    # This is too hard to parse robustly without a parser.
    # Let's try to just do simple regex replacements for the specific fields.
    
    # Pattern for descriptionAdvanced: ro: "",
    new_content = re.sub(r'ro: ""\n\s+en:', 'ro: "PLACEHOLDER_DESC",\n      en:', new_content)
    
    # Pattern for factsAdvanced: ro: [],
    new_content = re.sub(r'ro: \[\]', 'ro: ["Fact 1", "Fact 2", "Fact 3"]', new_content)
    
    return new_content

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count how many objects have empty fields
    # I'll skip the automated processing for now, it's too risky.
    # The agent mandate is "surgical updates".
    print(f"Skipping automated update for {file_path}")

