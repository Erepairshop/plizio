import re
import json
import subprocess
import time
import os
import concurrent.futures

FILES = [
    'lib/visualLab/data/polandPoi.ts',
    'lib/visualLab/data/poiExtraPolandCities.ts'
]

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

def process_poi(block):
    id_match = re.search(r'(?:id|"id"):\s*"([^"]+)"', block)
    if not id_match:
        return block
    poi_id = id_match.group(1)
    
    # Check if en is missing or is just a placeholder
    en_desc_match = re.search(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{[^{}]*(?:en|"en"):\s*"([^"]*)"', block)
    if en_desc_match:
        existing_en = en_desc_match.group(1)
        if len(existing_en) > 100 and "Welcome to" not in existing_en:
            en_facts_match = re.search(r'(?:factsAdvanced|"factsAdvanced"):\s*\{[^{}]*(?:en|"en"):\s*\[([^\]]*)\]', block)
            if en_facts_match and len(en_facts_match.group(1).strip()) > 10:
                print(f"Skipping {poi_id}, already has EN SEO content.")
                return block

    name_match = re.search(r'(?:name|"name"):\s*\{[^}]*(?:en|"en"):\s*"([^"]+)"', block)
    name = name_match.group(1) if name_match else poi_id
    
    desc_match = re.search(r'(?:description|"description"):\s*\{[^}]*(?:en|"en"):\s*"([^"]+)"', block)
    desc = desc_match.group(1) if desc_match else ""
    
    prompt = f"""
You are an expert English travel and educational writer. Generate a JSON object for a Point of Interest (POI) in Poland named "{name}".
The existing short description is: "{desc}".

Requirements:
1. `descriptionAdvanced`: A string containing 80-150 words of English SEO-friendly content about this POI. DO NOT simply repeat the short description. Make it engaging, like a story or an explorer's log. Mention how it connects to a school subject (e.g. Geography K7, History K8) at the very end. DO NOT output a generic placeholder like "Welcome to...".
2. `factsAdvanced`: An array of strings containing exactly 4 to 5 specific, numeric, interesting facts in English about this POI. Focus on measurable and verifiable facts.

Output ONLY valid JSON in the following format:
{{
  "descriptionAdvanced": "...",
  "factsAdvanced": ["...", "...", ...]
}}
Do not wrap in markdown code blocks, just output the raw JSON.
"""
    print(f"Processing {poi_id}...")
    retries = 3
    for attempt in range(retries):
        output = call_gemini(prompt)
        if not output:
            time.sleep(2)
            continue
        try:
            output = output.strip()
            if output.startswith("```json"):
                output = output[7:-3].strip()
            elif output.startswith("```"):
                output = output[3:-3].strip()
            
            output = re.sub(r',\s*}', '}', output)
            output = re.sub(r',\s*]', ']', output)

            data = json.loads(output)
            
            desc_adv = data.get("descriptionAdvanced", "")
            facts_adv = data.get("factsAdvanced", [])
            
            if not desc_adv or not facts_adv:
                print(f"Missing keys in {poi_id}")
                continue
                
            # Formatting the output
            desc_escaped = desc_adv.replace('"', '\\"').replace('\n', ' ')
            facts_formatted = ",\n        ".join(f'"{f.replace('"', '\\"').replace('\n', ' ')}"' for f in facts_adv)
            
            new_block = block
            
            # Find descriptionAdvanced block
            desc_adv_match = re.search(r'((?:descriptionAdvanced|"descriptionAdvanced"):\s*\{)([^{}]*)(\})', new_block)
            if desc_adv_match:
                prefix = desc_adv_match.group(1)
                inner = desc_adv_match.group(2)
                suffix = desc_adv_match.group(3)
                
                if re.search(r'(?:en|"en"):\s*"[^"]*"', inner):
                    inner = re.sub(r'(?:en|"en"):\s*"[^"]*"', f'en: "{desc_escaped}"', inner)
                else:
                    if inner.strip().endswith(','):
                        inner = inner + f'\n      en: "{desc_escaped}"\n    '
                    elif inner.strip():
                        inner = inner + f',\n      en: "{desc_escaped}"\n    '
                    else:
                        inner = f'\n      en: "{desc_escaped}"\n    '
                new_block = new_block[:desc_adv_match.start()] + prefix + inner + suffix + new_block[desc_adv_match.end():]
            
            # Find factsAdvanced block
            facts_adv_match = re.search(r'((?:factsAdvanced|"factsAdvanced"):\s*\{)([^{}]*)(\})', new_block)
            if facts_adv_match:
                prefix = facts_adv_match.group(1)
                inner = facts_adv_match.group(2)
                suffix = facts_adv_match.group(3)
                
                facts_str = f'[\n        {facts_formatted}\n      ]'
                
                if re.search(r'(?:en|"en"):\s*\[[\s\S]*?\]', inner):
                    inner = re.sub(r'(?:en|"en"):\s*\[[\s\S]*?\]', f'en: {facts_str}', inner)
                else:
                    if inner.strip().endswith(','):
                        inner = inner + f'\n      en: {facts_str}\n    '
                    elif inner.strip():
                        inner = inner + f',\n      en: {facts_str}\n    '
                    else:
                        inner = f'\n      en: {facts_str}\n    '
                new_block = new_block[:facts_adv_match.start()] + prefix + inner + suffix + new_block[facts_adv_match.end():]
            
            print(f"Success {poi_id}")
            return new_block

        except json.JSONDecodeError as e:
            print(f"JSON Error on {poi_id} (Attempt {attempt+1}): {e}")
            time.sleep(2)
        except Exception as e:
            print(f"Error on {poi_id}: {e}")
            
    print(f"Failed {poi_id} after {retries} attempts.")
    return block

def process_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    print(f"Reading {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = []
    starts = [m.start() for m in re.finditer(r'  \{\n    (?:id|"id"):', content)]
    for i in range(len(starts)):
        start = starts[i]
        if i < len(starts) - 1:
            end = starts[i+1]
            blocks.append(content[start:end])
        else:
            # Last block ends before '];'
            end_match = re.search(r'\n  \}\n\];', content[start:])
            if end_match:
                end = start + end_match.end() - 4 # exclude \n];
            else:
                # Alternatively just till the end, but excluding the closing bracket
                end_match_2 = re.search(r'\n  \}\n', content[start:])
                if end_match_2:
                    end = start + end_match_2.end() -1
                else:
                    end = len(content)
            blocks.append(content[start:end])
            
    print(f"Found {len(blocks)} POIs in {filepath}")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        new_blocks = list(executor.map(process_poi, blocks))
        
    new_content = content
    for original_block, new_block in zip(blocks, new_blocks):
        new_content = new_content.replace(original_block, new_block, 1)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved {filepath}")

for f in FILES:
    process_file(f)
