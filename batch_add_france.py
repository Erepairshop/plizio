
import re
import subprocess
import json

def call_gemini(prompt):
    try:
        result = subprocess.run(
            ['gemini', '--yolo', '-p', prompt],
            capture_output=True,
            text=True,
            encoding='utf-8'
        )
        return result.stdout.strip()
    except Exception as e:
        print(f"Error calling gemini: {e}")
        return None

def extract_json(text):
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except:
            pass
    return None

def process():
    target_file = 'lib/visualLab/data/poiExtraFranceCities.ts'
    with open(target_file, 'r', encoding='utf-8') as f:
        target_content = f.read()

    # Cities to add from franceCitiesExtra.ts (seeds)
    to_add = [
        {"id": "le-havre", "parent": "FR-NOR", "coords": [0.1079, 49.4944], "name": "Le Havre"},
        {"id": "angers", "parent": "FR-PDL", "coords": [-0.5632, 47.4784], "name": "Angers"},
        {"id": "nimes", "parent": "FR-OCC", "coords": [4.3601, 43.8367], "name": "Nîmes"},
        {"id": "brest", "parent": "FR-BRE", "coords": [-4.4861, 48.3904], "name": "Brest"},
        {"id": "tours", "parent": "FR-CVL", "coords": [0.6848, 47.3941], "name": "Tours"},
        {"id": "amiens", "parent": "FR-HDF", "coords": [2.2950, 49.8941], "name": "Amiens"},
        {"id": "limoges", "parent": "FR-NAQ", "coords": [1.2611, 45.8336], "name": "Limoges"},
        {"id": "metz", "parent": "FR-GES", "coords": [6.1757, 49.1193], "name": "Metz"},
        {"id": "perpignan", "parent": "FR-OCC", "coords": [2.8948, 42.6887], "name": "Perpignan"},
        {"id": "besancon", "parent": "FR-BFC", "coords": [6.0241, 47.2378], "name": "Besançon"}
    ]

    for item in to_add:
        poi_id = f"city-{item['id']}-extra"
        if poi_id in target_content:
            print(f"Skipping {poi_id}, already exists.")
            continue
            
        print(f"Generating for {item['name']} ({poi_id})...")
        prompt = f"""
Du bist ein SEO-Experte für Reiseinhalte. Erstelle für den Point of Interest (POI) "{item['name']}" (ID: {poi_id}) in Frankreich:
1. Eine ausführliche Beschreibung (descriptionAdvanced.de) mit 80-150 Wörtern. Der Text sollte narrativ sein, interessante Fakten enthalten und für SEO optimiert sein. Erwähne am Ende, zu welchem Schulfach (z.B. Geografie K7 oder Geschichte K8) dieser POI passt.
2. 6-8 interessante Fakten (factsAdvanced.de), jeder Fakt unter 60 Zeichen.

Antworte NUR im folgenden JSON-Format:
{{
  "descriptionAdvanced": {{ "de": "...", "hu": "", "ro": "", "en": "" }},
  "factsAdvanced": {{ "de": ["...", "..."], "hu": [], "ro": [], "en": [] }}
}}
"""
        response = call_gemini(prompt)
        data = extract_json(response)
        
        if data:
            new_poi = f"""  {{
    id: "{poi_id}",
    type: "city",
    parent: "{item['parent']}",
    coords: {item['coords']},
    name: {{ de: "{item['name']}", hu: "{item['name']}", ro: "{item['name']}", en: "{item['name']}" }},
    description: {{ de: "{item['name']} ist eine bedeutende französische Stadt.", hu: "", ro: "", en: "" }},
    descriptionAdvanced: {json.dumps(data['descriptionAdvanced'], ensure_ascii=False)},
    factsAdvanced: {json.dumps(data['factsAdvanced'], ensure_ascii=False)}
  }}"""
            
            target_content = target_content.rstrip().rstrip(';')
            if target_content.endswith(']'):
                target_content = target_content[:-1].rstrip().rstrip(',')
            
            target_content += ",\n" + new_poi + "\n];\n"
        else:
            print(f"Failed for {poi_id}")

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(target_content)

if __name__ == "__main__":
    process()
