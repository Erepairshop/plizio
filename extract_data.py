import re
import json

file_path = 'lib/visualLab/data/italyPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = [
    "reg-lombardia", "reg-toscana", "reg-sicilia", "reg-veneto", "reg-lazio",
    "milan", "venice", "florence", "naples", "colosseum", "pisa-tower",
    "pompeii", "etna", "vatican", "it-pompei-full", "it-herculaneum",
    "it-ostia-antica", "it-san-gimignano"
]

results = []

def extract_obj(content, start_index):
    brace_count = 0
    in_string = False
    quote_char = ''
    for i in range(start_index, len(content)):
        char = content[i]
        if char in ["'", '"', '`'] and (i == 0 or content[i-1] != '\\'):
            if not in_string:
                in_string = True
                quote_char = char
            elif char == quote_char:
                in_string = False
        if not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    return content[start_index:i+1]
    return None

def extract_langs(text):
    langs = {}
    for lang in ['en', 'hu', 'ro', 'de']:
        # Match "en: '...'" or 'en: "..."' or 'en: `...`'
        # Handle newlines and spaces
        match = re.search(rf'{lang}:\s*(["\'`])(.*?)\1', text, re.DOTALL)
        if match:
            langs[lang] = match.group(2).strip()
        else:
            langs[lang] = ""
    return langs

def extract_facts(text):
    facts = {}
    for lang in ['en', 'hu', 'ro', 'de']:
        match = re.search(rf'{lang}:\s*\[(.*?)\]', text, re.DOTALL)
        if match:
            items_text = match.group(1)
            # Find all strings in the array
            items = re.findall(r'(["\'`])(.*?)\1', items_text, re.DOTALL)
            facts[lang] = [item[1].strip() for item in items]
        else:
            facts[lang] = []
    return facts

for poi_id in ids:
    # Find the start of the object with this id
    pattern = rf'id:\s*"{poi_id}"|id:\s*\'{poi_id}\''
    match = re.search(pattern, content)
    if not match:
        print(f"ID {poi_id} not found")
        continue
    
    # Extract the whole POI object
    # Find the nearest '{' before the id
    obj_start = content.rfind('{', 0, match.start())
    obj_text = extract_obj(content, obj_start)
    
    if obj_text:
        # Extract descriptionAdvanced
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', obj_text, re.DOTALL)
        desc_langs = extract_langs(desc_match.group(1)) if desc_match else {"en":"","hu":"","ro":"","de":""}
        
        # Extract factsAdvanced
        facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', obj_text, re.DOTALL)
        facts_langs = extract_facts(facts_match.group(1)) if facts_match else {"en":[],"hu":[],"ro":[],"de":[]}
        
        results.append({
            "id": poi_id,
            "descriptionAdvanced": desc_langs,
            "factsAdvanced": facts_langs
        })

print(json.dumps(results, indent=2, ensure_ascii=False))
