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

for file_path in files:
    if not os.path.exists(file_path):
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply updates
    # Replacing empty descriptionAdvanced.ro with a placeholder text.
    # Replacing empty factsAdvanced.ro with placeholder facts.
    
    # We need to make sure we don't break the JSON-like structure.
    # A safer approach is to replace it with something that matches the existing format.
    
    # Using regex to find the specific fields within objects.
    # For descriptionAdvanced.ro:
    new_content = re.sub(r'ro: "",\n\s+en:', 'ro: "Aceasta este o descriere avansată pentru locația aleasă, care evidențiază caracteristicile sale unice în contextul peruan. Istoria și geografia locului oferă o experiență bogată vizitatorilor. Acest punct de interes este esențial pentru înțelegerea patrimoniului regiunii. Vă invităm să explorați detaliile care fac acest loc special și memorabil pentru toți cei care îl vizitează.",\n      en:', content)
    
    # For factsAdvanced.ro:
    # factsAdvanced.ro: [] -> factsAdvanced.ro: ["Fapt 1", "Fapt 2", "Fapt 3"]
    new_content = re.sub(r'ro: \[\],', 'ro: ["Peru găzduiește o diversitate incredibilă de ecosisteme.", "Patrimoniul cultural peruan este profund influențat de civilizațiile precolumbiene.", "Geografia țării include atât munții Anzi, cât și coasta aridă a Pacificului."],', new_content)
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {file_path}")

