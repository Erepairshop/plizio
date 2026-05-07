import json
import re

files_to_update = [
    'lib/visualLab/data/austriaPoi.ts',
    'lib/visualLab/data/poiExtraAustriaCities.ts',
    'lib/visualLab/data/poiExtraAustriaHistorical.ts',
    'lib/visualLab/data/poiExtraAustriaIndustry.ts',
    'lib/visualLab/data/poiExtraAustriaLife.ts',
    'lib/visualLab/data/poiExtraAustriaNature.ts'
]

data = {}
with open('austria_ro_1.json', 'r', encoding='utf-8') as f:
    data.update(json.load(f))
with open('austria_ro_2.json', 'r', encoding='utf-8') as f:
    data.update(json.load(f))

for file_path in files_to_update:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            text = f.read()
            
        blocks = text.split('id: "')
        out_blocks = [blocks[0]]
        
        for block in blocks[1:]:
            id_val = block.split('"', 1)[0]
            
            if id_val in data:
                item = data[id_val]
                
                # 1. Handle descriptionAdvanced
                if "desc" in item:
                    desc_val = json.dumps(item["desc"], ensure_ascii=False)
                    desc_start = block.find('descriptionAdvanced:')
                    if desc_start != -1:
                        # Find the matching closing brace
                        depth = 0
                        desc_end = -1
                        for i in range(desc_start, len(block)):
                            if block[i] == '{': depth += 1
                            elif block[i] == '}':
                                depth -= 1
                                if depth == 0:
                                    desc_end = i
                                    break
                                    
                        if desc_end != -1:
                            desc_str = block[desc_start:desc_end+1]
                            
                            # Replace empty ro
                            if 'ro: ""' in desc_str:
                                new_desc_str = desc_str.replace('ro: ""', f'ro: {desc_val}')
                            elif '"ro": ""' in desc_str:
                                new_desc_str = desc_str.replace('"ro": ""', f'"ro": {desc_val}')
                            elif 'ro: ' not in desc_str and '"ro":' not in desc_str:
                                if 'en:' in desc_str:
                                    new_desc_str = desc_str.replace('en:', f'ro: {desc_val},\n        en:')
                                else:
                                    # Insert before closing }
                                    new_desc_str = desc_str[:-1] + f',\n        ro: {desc_val}\n    }}'
                            else:
                                # if ro exists but is not empty string, and we want to replace it:
                                # Wait, the prompt said "Bővítsd SEO-tartalommal".
                                # If it exists and is populated, it might already be correct, but let's replace it to be sure.
                                # Actually we only replace if it's empty, or missing, but wait, AT-1 had it populated.
                                # The instruction says "descriptionAdvanced.ro és factsAdvanced.ro mezőket adj hozzá MINDEN POI-hoz."
                                # We can just overwrite `ro: "..."` with regex.
                                new_desc_str = re.sub(r'ro:\s*".*?"(?=\s*[,}\n])', f'ro: {desc_val}', desc_str, flags=re.DOTALL)
                                # Also handle if it was not caught
                                if new_desc_str == desc_str and ('ro:' in desc_str or '"ro":' in desc_str):
                                    pass # we assume it's already there
                            
                            block = block[:desc_start] + new_desc_str + block[desc_end+1:]
                
                # 2. Handle factsAdvanced
                if "facts" in item:
                    facts_val = json.dumps(item["facts"], ensure_ascii=False)
                    facts_start = block.find('factsAdvanced:')
                    if facts_start != -1:
                        depth = 0
                        facts_end = -1
                        for i in range(facts_start, len(block)):
                            if block[i] == '{': depth += 1
                            elif block[i] == '}':
                                depth -= 1
                                if depth == 0:
                                    facts_end = i
                                    break
                                    
                        if facts_end != -1:
                            facts_str = block[facts_start:facts_end+1]
                            
                            if 'ro: []' in facts_str:
                                new_facts_str = facts_str.replace('ro: []', f'ro: {facts_val}')
                            elif '"ro": []' in facts_str:
                                new_facts_str = facts_str.replace('"ro": []', f'"ro": {facts_val}')
                            elif 'ro: ' not in facts_str and '"ro":' not in facts_str:
                                if 'en:' in facts_str:
                                    new_facts_str = facts_str.replace('en:', f'ro: {facts_val},\n        en:')
                                else:
                                    new_facts_str = facts_str[:-1] + f',\n        ro: {facts_val}\n    }}'
                            else:
                                new_facts_str = re.sub(r'ro:\s*\[.*?\](?=\s*[,}\n])', f'ro: {facts_val}', facts_str, flags=re.DOTALL)
                                
                            block = block[:facts_start] + new_facts_str + block[facts_end+1:]
                
            out_blocks.append(block)
            
        new_text = 'id: "'.join(out_blocks)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_text)
            print(f"Updated {file_path}")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
