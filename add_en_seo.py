import re
import json
import subprocess
import concurrent.futures
import time
import os

FILES = [
    'lib/visualLab/data/poiExtraDeLebenWirtschaft.ts',
    'lib/visualLab/data/poiExtraDeCities.ts',
    'lib/visualLab/data/poiExtraDe1.ts',
    'lib/visualLab/data/poiExtraDe2.ts',
    'lib/visualLab/data/poiExtraDe3a.ts',
    'lib/visualLab/data/poiExtraDe3b.ts',
    'lib/visualLab/data/poiExtraDe4a.ts',
    'lib/visualLab/data/poiExtraDe4b.ts'
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
    
    # Check if en is missing or is just a placeholder ("Welcome to...")
    en_desc_match = re.search(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{[^}]*(?:en|"en"):\s*"([^"]*)"', block)
    if en_desc_match:
        existing_en = en_desc_match.group(1)
        if len(existing_en) > 150 and "Welcome to" not in existing_en:
            # Seems we already have a generated SEO content here. But let's check facts.
            en_facts_match = re.search(r'(?:factsAdvanced|"factsAdvanced"):\s*\{[^}]*(?:en|"en"):\s*\[([^\]]*)\]', block)
            if en_facts_match and len(en_facts_match.group(1).strip()) > 10:
                print(f"Skipping {poi_id}, already has EN SEO content.")
                return block

    name_match = re.search(r'(?:name|"name"):\s*\{[^}]*(?:en|"en"):\s*"([^"]+)"', block)
    name = name_match.group(1) if name_match else poi_id
    
    desc_match = re.search(r'(?:description|"description"):\s*\{[^}]*(?:en|"en"):\s*"([^"]+)"', block)
    desc = desc_match.group(1) if desc_match else ""
    
    prompt = f"""
You are an expert English travel and educational writer. Generate a JSON object for a Point of Interest (POI) named "{name}".
The existing short description is: "{desc}".

Requirements:
1. `descriptionAdvanced`: A string containing 80-150 words of English SEO-friendly content about this POI. DO NOT simply repeat the short description. Make it engaging, like a story or an explorer's log. It should be suitable for K5-K8 curriculum. DO NOT output a generic placeholder like "Welcome to [name]...".
2. `factsAdvanced`: An array of strings containing exactly 6 to 8 specific, numeric, interesting facts in English about this POI. Focus on measurable and verifiable facts.

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
            if output.startswith("```json"):
                output = output[7:-3].strip()
            elif output.startswith("```"):
                output = output[3:-3].strip()
            
            # sometimes the LLM puts trailing commas, json.loads hates it. Clean trailing commas in arrays/objects.
            output = re.sub(r',\s*}', '}', output)
            output = re.sub(r',\s*]', ']', output)

            data = json.loads(output)
            
            desc_adv = data.get("descriptionAdvanced", "")
            facts_adv = data.get("factsAdvanced", [])
            
            if not desc_adv or not facts_adv:
                print(f"Missing keys in {poi_id}")
                continue
                
            desc_escaped = desc_adv.replace('"', '\\"')
            facts_formatted = ",\n        ".join(f'"{f.replace('"', '\\"')}"' for f in facts_adv)
            
            has_desc_adv = bool(re.search(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{', block))
            has_facts_adv = bool(re.search(r'(?:factsAdvanced|"factsAdvanced"):\s*\{', block))
            
            new_block = block
            
            # Helper to maintain style (quoted vs unquoted keys)
            is_quoted = bool(re.search(r'"id":', block))
            en_key = '"en"' if is_quoted else 'en'
            
            if has_desc_adv:
                def replace_desc_en(m):
                    inner = m.group(0)
                    if re.search(r'(?:en|"en"):\s*"[^"]*"', inner):
                        return re.sub(r'(?:en|"en"):\s*"[^"]*"', f'{en_key}: "{desc_escaped}"', inner)
                    else:
                        return re.sub(r'\}', f',\n      {en_key}: "{desc_escaped}"\n    }}', inner, count=1)
                
                new_block = re.sub(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{[\s\S]*?\}', replace_desc_en, new_block, count=1)
            else:
                desc_key = '"descriptionAdvanced"' if is_quoted else 'descriptionAdvanced'
                de_key = '"de"' if is_quoted else 'de'
                hu_key = '"hu"' if is_quoted else 'hu'
                ro_key = '"ro"' if is_quoted else 'ro'
                injection_desc = f'    {desc_key}: {{\n      {de_key}: "",\n      {hu_key}: "",\n      {ro_key}: "",\n      {en_key}: "{desc_escaped}"\n    }},\n'
                new_block = re.sub(r'((?:description|"description"):\s*\{[\s\S]*?\},)', r'\1\n' + injection_desc, new_block, count=1)
                
            if has_facts_adv:
                def replace_facts_en(m):
                    inner = m.group(0)
                    facts_en_content = f'{en_key}: [\n        {facts_formatted}\n      ]'
                    if re.search(r'(?:en|"en"):\s*\[[\s\S]*?\]', inner):
                        return re.sub(r'(?:en|"en"):\s*\[[\s\S]*?\]', facts_en_content, inner)
                    else:
                        return re.sub(r'\}', f',\n      {facts_en_content}\n    }}', inner, count=1)
                        
                new_block = re.sub(r'(?:factsAdvanced|"factsAdvanced"):\s*\{[\s\S]*?\}', replace_facts_en, new_block, count=1)
            else:
                facts_key = '"factsAdvanced"' if is_quoted else 'factsAdvanced'
                de_key = '"de"' if is_quoted else 'de'
                hu_key = '"hu"' if is_quoted else 'hu'
                ro_key = '"ro"' if is_quoted else 'ro'
                injection_facts = f'    {facts_key}: {{\n      {de_key}: [],\n      {hu_key}: [],\n      {ro_key}: [],\n      {en_key}: [\n        {facts_formatted}\n      ]\n    }},\n'
                if re.search(r'(?:facts|"facts"):\s*\{[\s\S]*?\},', new_block):
                    new_block = re.sub(r'((?:facts|"facts"):\s*\{[\s\S]*?\},)', r'\1\n' + injection_facts, new_block, count=1)
                else:
                    new_block = re.sub(r'((?:descriptionAdvanced|"descriptionAdvanced"):\s*\{[\s\S]*?\},)', r'\1\n' + injection_facts, new_block, count=1)
                
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
        
    pattern = r'  \{\n    (?:id|"id"):\s*"[^"]*",[\s\S]*?(?=\n  \},?\n\n|  \},?\n  //|  \},?\n  \{|  \}\n\])'
    
    matches = list(re.finditer(pattern, content))
    print(f"Found {len(matches)} POIs in {filepath}")
    
    blocks = [m.group(0) for m in matches]
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        new_blocks = list(executor.map(process_poi, blocks))
        
    new_content = content
    for original_match, new_block in zip(matches, new_blocks):
        new_content = new_content.replace(original_match.group(0), new_block, 1)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved {filepath}")

for f in FILES:
    process_file(f)
