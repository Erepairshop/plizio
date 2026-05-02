import sys
import json
import re

def extract_block(content, poi_id):
    # Find the start of the object
    match = re.search(r'\{\s*(?:id|"id"):\s*"' + re.escape(poi_id) + r'"\s*,', content)
    if not match:
        return None
    start = match.start()
    
    # Balance braces
    open_braces = 0
    end = -1
    for i in range(start, len(content)):
        if content[i] == '{':
            open_braces += 1
        elif content[i] == '}':
            open_braces -= 1
            if open_braces == 0:
                end = i + 1
                break
    if end != -1:
        return content[start:end]
    return None

def inject_content(ts_file, json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, poi_data in data.items():
        block = extract_block(content, poi_id)
        if not block:
            print(f"Could not find POI block for {poi_id}")
            continue
            
        new_block = block
        
        desc_adv = poi_data.get("descriptionAdvanced", "")
        facts_adv = poi_data.get("factsAdvanced", [])
        
        desc_escaped = desc_adv.replace('"', '\\"')
        
        facts_list = []
        for f in facts_adv:
            facts_list.append('"' + f.replace('"', '\\"') + '"')
        facts_formatted = ",\n        ".join(facts_list)
        
        has_desc_adv = bool(re.search(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{', block))
        has_facts_adv = bool(re.search(r'(?:factsAdvanced|"factsAdvanced"):\s*\{', block))
        
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

        content = content.replace(block, new_block, 1)
        print(f"Updated {poi_id}")

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    inject_content(sys.argv[1], sys.argv[2])
