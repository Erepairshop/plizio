import re
import json
import subprocess
import time

def call_gemini(prompt):
    try:
        result = subprocess.run(
            ['gemini', '--yolo', '-p', prompt],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error calling gemini: {e.stderr}")
        return None

def fix_missing(filepath, missing_id):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = content.split('  {\n    id: ')
    new_blocks = [blocks[0]]

    for block in blocks[1:]:
        full_block = '  {\n    id: ' + block
        id_match = re.search(r'id:\s*"([^"]+)"', full_block)
        
        if id_match and id_match.group(1) == missing_id:
            poi_id = id_match.group(1)
            print(f"Fixing {poi_id}")
            
            name_match = re.search(r'name:\s*\{[^}]*hu:\s*"([^"]+)"', full_block)
            name = name_match.group(1) if name_match else poi_id
            
            desc_match = re.search(r'description:\s*\{[^}]*hu:\s*"([^"]+)"', full_block)
            desc = desc_match.group(1) if desc_match else ""
            
            prompt = f"""
You are an expert Hungarian travel writer. Generate a JSON object for a Point of Interest (POI) named "{name}".
The existing short description is: "{desc}".

Requirements:
1. `descriptionAdvanced`: A string containing 80-150 words of Hungarian SEO-friendly content about this POI. DO NOT simply repeat the short description. Make it engaging, like a story or an explorer's log.
2. `factsAdvanced`: An array of strings containing exactly 6 to 8 specific, numeric, interesting facts in Hungarian about this POI.

Output ONLY valid JSON in the following format:
{{
  "descriptionAdvanced": "...",
  "factsAdvanced": ["...", "...", ...]
}}
Do not wrap in markdown code blocks like ```json ... ```, just output the raw JSON.
"""
            output = call_gemini(prompt)
            if output:
                if output.startswith("```json"):
                    output = output[7:-3].strip()
                elif output.startswith("```"):
                    output = output[3:-3].strip()
                data = json.loads(output)
                
                desc_adv = data.get("descriptionAdvanced", "")
                facts_adv = data.get("factsAdvanced", [])
                
                desc_escaped = desc_adv.replace('"', '\\"')
                facts_formatted = ",\n        ".join(f'"{f.replace('"', '\\"')}"' for f in facts_adv)
                
                injection = f"""    descriptionAdvanced: {{ de: "", hu: "{desc_escaped}", ro: "", en: "" }},
    factsAdvanced: {{
      de: [],
      hu: [
        {facts_formatted},
      ],
      ro: [],
      en: [],
    }},"""
                
                def inject_after_facts(m):
                    return m.group(0) + "\n" + injection
                    
                full_block = re.sub(r'    facts:\s*\{[\s\S]*?    \},', inject_after_facts, full_block)
                print(f"Successfully fixed {poi_id}")
                
        # Since we added `  {\n    id: ` manually, we don't append it again for the string join,
        # but wait, if we are reconstructing the file, it's easier to just put it back correctly.
        # It's better to just write the new full_block.
        # But `blocks[1:]` elements start with the ID string (without the `  {\n    id: ` prefix).
        # We constructed full_block. So we append full_block to our list but we must remember
        # that blocks[0] is just the prefix before the first POI.
        # Actually, full_block has the prefix.
        new_blocks.append(full_block)

    # BUT we split by `  {\n    id: `, so joining them would duplicate.
    # We can just join by empty string since full_block added the prefix back.
    # WAIT, new_blocks[0] is the string before the first `  {\n    id: `.
    # new_blocks[1:] are the full blocks.
    final_content = new_blocks[0] + "".join(new_blocks[1:])
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"Saved {filepath}")

fix_missing('lib/visualLab/data/poiExtraDe4a.ts', 'district-viertel-bremen-extra')
fix_missing('lib/visualLab/data/poiExtraDe4b.ts', 'historical-mettlach-abbey-sl-extra')
