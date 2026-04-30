
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

def fill_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match POI objects
    poi_blocks = re.findall(r'\{[\s\S]*?id:\s*"(.*?)"[\s\S]*?\}', content)
    
    new_content = content
    
    for block in poi_blocks:
        id_match = re.search(r'id:\s*"(.*?)"', block)
        if not id_match: continue
        poi_id = id_match.group(1)
        
        # Check if de is empty
        # Looking for de: "" or de: []
        has_de_desc = re.search(r'descriptionAdvanced:\s*\{[\s\S]*?de:\s*"(?!")', block)
        has_de_facts = re.search(r'factsAdvanced:\s*\{[\s\S]*?de:\s*\[\s*\]', block)
        
        if has_de_desc or has_de_facts:
            name_match = re.search(r'de:\s*"(.*?)"', block)
            name = name_match.group(1) if name_match else poi_id
            
            print(f"Generating for {name} ({poi_id})...")
            prompt = f"""
Du bist ein SEO-Experte für Reiseinhalte. Erstelle für den Point of Interest (POI) "{name}" (ID: {poi_id}) in Frankreich:
1. Eine ausführliche Beschreibung (descriptionAdvanced.de) mit 80-150 Wörtern. Der Text sollte narrativ sein, interessante Fakten enthalten und für SEO optimiert sein. Erwähne am Ende, zu welchem Schulfach (z.B. Geografie K7 oder Geschichte K8) dieser POI passt.
2. 6-8 interessante Fakten (factsAdvanced.de), jeder Fakt unter 60 Zeichen.

Antworte NUR im folgenden JSON-Format:
{{
  "descriptionAdvanced": "...",
  "factsAdvanced": ["...", "..."]
}}
"""
            response = call_gemini(prompt)
            data = extract_json(response)
            
            if data:
                # Replace the empty values in the block
                new_block = block
                if isinstance(data.get('descriptionAdvanced'), str):
                    new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*")(")', r'\1' + data['descriptionAdvanced'].replace('"', '\\"') + r'\2', new_block)
                if isinstance(data.get('factsAdvanced'), list):
                    new_block = re.sub(r'(factsAdvanced:\s*\{[\s\S]*?de:\s*\[\s*)(\])', r'\1' + json.dumps(data['factsAdvanced'], ensure_ascii=False)[1:-1] + r'\2', new_block)
                
                new_content = new_content.replace(block, new_block)
            else:
                print(f"Failed for {poi_id}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    fill_file('lib/visualLab/data/poiExtraFranceHistory.ts')
    fill_file('lib/visualLab/data/poiExtraFranceOther.ts')
