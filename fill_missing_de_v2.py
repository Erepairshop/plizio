
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

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content into POI blocks
    # This is a bit risky but should work for our structured files
    poi_blocks = re.findall(r'  \{[\s\S]*?id:\s*"(.*?)"[\s\S]*?  \},?\n', content)
    
    new_content = content
    
    for block in poi_blocks:
        # We need the full block text to replace it later
        # Let's find it again with the ID
        full_block_match = re.search(r'  \{[\s\S]*?id:\s*"' + re.escape(block) + r'"[\s\S]*?  \},?\n', content)
        if not full_block_match: continue
        full_block = full_block_match.group(0)
        
        # Check if de is empty in descriptionAdvanced or factsAdvanced
        # Looking for de: "" or de: []
        needs_desc = 'descriptionAdvanced: {\n      de: "",' in full_block or 'descriptionAdvanced: {\n      de: ""' in full_block
        needs_facts = 'factsAdvanced: {\n      de: [],' in full_block or 'factsAdvanced: {\n      de: []' in full_block
        
        if needs_desc or needs_facts:
            # Extract name
            name_match = re.search(r'de:\s*"(.*?)"', full_block)
            name = name_match.group(1) if name_match else block
            
            print(f"Generating for {name} ({block})...")
            prompt = f"""
Du bist ein SEO-Experte für Reiseinhalte. Erstelle für den Point of Interest (POI) "{name}" (ID: {block}) in Frankreich:
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
                new_block = full_block
                if needs_desc and isinstance(data.get('descriptionAdvanced'), str):
                    new_block = new_block.replace('de: ""', 'de: ' + json.dumps(data['descriptionAdvanced'], ensure_ascii=False))
                if needs_facts and isinstance(data.get('factsAdvanced'), list):
                    new_block = new_block.replace('de: []', 'de: ' + json.dumps(data['factsAdvanced'], ensure_ascii=False))
                
                new_content = new_content.replace(full_block, new_block)
            else:
                print(f"Failed for {block}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    process_file('lib/visualLab/data/poiExtraFranceHistory.ts')
    process_file('lib/visualLab/data/poiExtraFranceOther.ts')
