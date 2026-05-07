import json
import re

all_data = {}
for i in range(1, 7):
    with open(f'update_batch{i}_en.py', 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.search(r'data\s*=\s*(\{[\s\S]*?\n\})\n\nimport sys', content)
        if match:
            batch_data = eval(match.group(1))
            all_data.update(batch_data)

print(f"Loaded {len(all_data)} POIs")

def update_ts_file(ts_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_count = 0
    for poi_id, item in all_data.items():
        en_desc = item['desc'].replace('"', '\\"')
        en_facts = item['facts']
        
        # Find the start of the POI
        id_match = re.search(r'\{\s*id:\s*"' + re.escape(poi_id) + r'"', content)
        if not id_match:
            print(f"POI {poi_id} not found")
            continue
            
        start_idx = id_match.start()
        
        # --- descriptionAdvanced ---
        desc_match = re.search(r'descriptionAdvanced:\s*\{', content[start_idx:])
        if not desc_match:
            continue
            
        desc_start = start_idx + desc_match.end()
        brace_count = 1
        desc_end = -1
        for j in range(desc_start, len(content)):
            if content[j] == '{':
                brace_count += 1
            elif content[j] == '}':
                brace_count -= 1
                if brace_count == 0:
                    desc_end = j
                    break
        
        desc_block = content[desc_start:desc_end]
        new_desc_block = desc_block
        
        # check if "en": "" exists
        en_empty_pattern = r'("en"|en)\s*:\s*(""|\[\])'
        if re.search(en_empty_pattern, new_desc_block):
            new_desc_block = re.sub(en_empty_pattern, f'"en": "{en_desc}"', new_desc_block)
        elif not re.search(r'("en"|en)\s*:', new_desc_block):
            # append it
            if new_desc_block.strip() == '':
                new_desc_block = f'\n      "en": "{en_desc}"\n    '
            elif new_desc_block.strip().endswith(','):
                new_desc_block = new_desc_block + f'\n      "en": "{en_desc}"\n    '
            else:
                new_desc_block = new_desc_block + f',\n      "en": "{en_desc}"\n    '
        
        if new_desc_block != desc_block:
            content = content[:desc_start] + new_desc_block + content[desc_end:]
            updated_count += 1
            start_idx = id_match.start() # Recalculate

        # --- factsAdvanced ---
        facts_match = re.search(r'factsAdvanced:\s*\{', content[start_idx:])
        if not facts_match:
            continue
            
        facts_start = start_idx + facts_match.end()
        brace_count = 1
        facts_end = -1
        for j in range(facts_start, len(content)):
            if content[j] == '{':
                brace_count += 1
            elif content[j] == '}':
                brace_count -= 1
                if brace_count == 0:
                    facts_end = j
                    break

        facts_block = content[facts_start:facts_end]
        new_facts_block = facts_block
        facts_json = json.dumps(en_facts, ensure_ascii=False)
        
        if re.search(en_empty_pattern, new_facts_block):
            new_facts_block = re.sub(en_empty_pattern, f'"en": {facts_json}', new_facts_block)
        elif not re.search(r'("en"|en)\s*:', new_facts_block):
            if new_facts_block.strip() == '':
                new_facts_block = f'\n      "en": {facts_json}\n    '
            elif new_facts_block.strip().endswith(','):
                new_facts_block = new_facts_block + f'\n      "en": {facts_json}\n    '
            else:
                new_facts_block = new_facts_block + f',\n      "en": {facts_json}\n    '
                
        if new_facts_block != facts_block:
            content = content[:facts_start] + new_facts_block + content[facts_end:]

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {updated_count} POIs in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
