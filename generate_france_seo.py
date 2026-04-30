
import re
import subprocess
import json
import os

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

def process_pois(source_file, target_file, limit=10):
    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract POI blocks from CitySeed array
    poi_blocks = re.findall(r'\{[\s\S]*?id:\s*"(.*?)"[\s\S]*?\}', content)
    
    with open(target_file, 'r', encoding='utf-8') as f:
        target_content = f.read()

    processed_count = 0
    for block in poi_blocks:
        id_match = re.search(r'id:\s*"(.*?)"', block)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        # Check if already in target
        if f'id: "{poi_id}"' in target_content:
            continue
            
        if processed_count >= limit: break
        
        # Extract name and description from the seed
        name_match = re.search(r'de:\s*"(.*?)"', block)
        name = name_match.group(1) if name_match else poi_id
        
        print(f"Generating for {name} ({poi_id})...")
        
        prompt = f"""
Du bist ein SEO-Experte für Reiseinhalte. Erstelle für den Point of Interest (POI) "{name}" (ID: {poi_id}) in Frankreich:
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
            parent_match = re.search(r'parent:\s*"(.*?)"', block)
            coords_match = re.search(r'coords:\s*\[(.*?),(.*?)\]', block)
            name_match = re.search(r'name:\s*(\{.*?\})', block, re.DOTALL)
            desc_match = re.search(r'description:\s*(\{.*?\})', block, re.DOTALL)
            
            parent = parent_match.group(1) if parent_match else ""
            coords = coords_match.group(0) if coords_match else "[]"
            name_obj = name_match.group(1) if name_match else "{}"
            desc_obj = desc_match.group(1) if desc_match else "{}"
            
            new_poi = f"""  {{
    id: "{poi_id}",
    type: "city",
    parent: "{parent}",
    coords: {coords.replace('coords: ', '')},
    name: {name_obj},
    description: {desc_obj},
    descriptionAdvanced: {json.dumps(data['descriptionAdvanced'], ensure_ascii=False)},
    factsAdvanced: {json.dumps(data['factsAdvanced'], ensure_ascii=False)}
  }},
"""
            # Insert before the last ];
            if '];' in target_content:
                target_content = target_content.rstrip().rstrip(';')
                if target_content.endswith(']'):
                    target_content = target_content[:-1]
                target_content += ",\n" + new_poi + "];\n"
            processed_count += 1
        else:
            print(f"Failed to generate for {poi_id}")

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(target_content)
    print(f"Successfully added {processed_count} POIs to {target_file}")

if __name__ == "__main__":
    process_pois('lib/visualLab/data/franceCitiesExtra.ts', 'lib/visualLab/data/poiExtraFranceCities.ts', limit=10)
