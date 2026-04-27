import re
import json
import subprocess
import concurrent.futures
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

def process_poi(poi_match):
    # Extract ID and EN/HU details to form a prompt
    block = poi_match.group(0)
    
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if not id_match:
        return block
    poi_id = id_match.group(1)
    
    name_match = re.search(r'name:\s*\{[^}]*hu:\s*"([^"]+)"', block)
    if not name_match:
        name_match = re.search(r'name:\s*\{[^}]*en:\s*"([^"]+)"', block)
    name = name_match.group(1) if name_match else poi_id
    
    desc_match = re.search(r'description:\s*\{[^}]*hu:\s*"([^"]+)"', block)
    if not desc_match:
        desc_match = re.search(r'description:\s*\{[^}]*en:\s*"([^"]+)"', block)
    desc = desc_match.group(1) if desc_match else ""
    
    # Check if already has descriptionAdvanced
    if 'descriptionAdvanced' in block:
        return block
    
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
    
    print(f"Processing {poi_id}...")
    retries = 3
    for attempt in range(retries):
        output = call_gemini(prompt)
        if not output:
            time.sleep(2)
            continue
        try:
            # clean output if it contains markdown
            if output.startswith("```json"):
                output = output[7:-3].strip()
            elif output.startswith("```"):
                output = output[3:-3].strip()
            data = json.loads(output)
            
            desc_adv = data.get("descriptionAdvanced", "")
            facts_adv = data.get("factsAdvanced", [])
            
            if not desc_adv or not facts_adv:
                print(f"Missing keys in {poi_id}")
                continue
                
            # formatting
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
            
            # inject right after facts: { ... },
            def inject_after_facts(m):
                return m.group(0) + "\n" + injection
                
            new_block = re.sub(r'    facts:\s*\{[\s\S]*?    \},', inject_after_facts, block)
            print(f"Success {poi_id}")
            return new_block
            
        except json.JSONDecodeError as e:
            print(f"JSON Error on {poi_id} (Attempt {attempt+1}): {e}")
            print(output)
            time.sleep(2)
    
    print(f"Failed {poi_id} after {retries} attempts.")
    return block

def process_file(filepath):
    print(f"Reading {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # A POI block starts with `  {` and ends with `  },` (or `  }` followed by another POI or array end)
    # Since there are inner blocks like `facts: { ... }`, we can use a more specific regex or just split by `\n  },\n` or `\n  }`
    # The safest way is to match from `  {\n    id: ` up to the end of the object.
    
    pattern = r'  \{\n    id:\s*"[^"]*",[\s\S]*?(?=\n  \},?\n\n|  \}\n\])'
    
    def replacer(match):
        return process_poi(match)
        
    matches = list(re.finditer(pattern, content))
    print(f"Found {len(matches)} POIs in {filepath}")
    
    # Process concurrently
    blocks = [m for m in matches]
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        new_blocks = list(executor.map(process_poi, blocks))
        
    new_content = content
    for original, new in zip(blocks, new_blocks):
        new_content = new_content.replace(original.group(0), new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved {filepath}")

process_file('lib/visualLab/data/poiExtraDe4a.ts')
process_file('lib/visualLab/data/poiExtraDe4b.ts')
