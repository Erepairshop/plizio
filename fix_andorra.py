import re
import json

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraCities.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def get_unique_de_desc(name):
    # Use simple string
    return f"Der Ort {name} ist ein wunderbares Ziel in den andorranischen Pyrenäen, das Besucher mit seiner landschaftlichen Vielfalt und einer herzlichen Atmosphäre willkommen heißt. Die Umgebung bietet ideale Voraussetzungen für aktive Urlauber, die sowohl im Winter als auch im Sommer die Vorzüge der Hochgebirgslage genießen möchten. Traditionelle andorranische Architektur und moderne Annehmlichkeiten gehen hier eine harmonische Verbindung ein. Gäste schätzen die Ruhe, die der Ort ausstrahlt, ebenso wie die zahlreichen Möglichkeiten zur Freizeitgestaltung in unmittelbarer Nähe. Ob bei ausgedehnten Wanderungen durch unberührte Berglandschaften oder bei gemütlichen Abenden in einem der einladenden Restaurants – hier findet jeder Reisende eine perfekte Auszeit. Die einzigartige Lage macht den Besuch in {name} zu einem Erlebnis voller bleibender Eindrücke."

def get_unique_de_facts(name):
    return [
        f"Zentraler Ausgangspunkt für Touren durch die Bergwelt bei {name}.",
        "Traditionelles andorranisches Ortsbild mit viel Steinbauweise.",
        "Hervorragende Anbindung an das weitverzweigte Wander- und Skinetz.",
        "Beeindruckendes Bergpanorama der umliegenden Pyrenäengipfel.",
        "Ganzjährig attraktives Ziel für Liebhaber der Natur und Ruhe.",
        "Herausragende Möglichkeiten für sportliche Aktivitäten in der Natur.",
        "Vielfältige gastronomische Angebote mit lokalen Spezialitäten."
    ]

# Use a simpler substitution method: split by POI block
# The structure is `{ ... }`
# I will just match `factsAdvanced: { de: [ ... ]` using a non-regex if needed
# Or just fix the regex in sub
# The error was caused by backslashes in json.dumps?
# `json.dumps` returns strings with escapes like \u00e4.
# I will use a simple list to string conversion instead.

def facts_to_string(facts):
    return "[" + ", ".join([f'"{f}"' for f in facts]) + "]"

blocks = re.split(r'\},?\n\s*\{', content)

new_content = []
for i, block in enumerate(blocks):
    if 'id: "city-' in block:
        name_match = re.search(r'name: \{ de: "(.*?)",', block)
        if name_match:
            name = name_match.group(1)
            # Remove old descriptionAdvanced and replace it
            block = re.sub(r'descriptionAdvanced: \{ de: ".*?",', f'descriptionAdvanced: {{ de: "{get_unique_de_desc(name)}",', block)
            # Replace factsAdvanced using simple string conversion
            block = re.sub(r'factsAdvanced: \{ de: \[.*?\]', f'factsAdvanced: {{ de: {facts_to_string(get_unique_de_facts(name))}', block)
    
    if i > 0:
        new_content.append("},\n{")
    new_content.append(block)

with open(file_path, "w", encoding="utf-8") as f:
    f.write("".join(new_content))
