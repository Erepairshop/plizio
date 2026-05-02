import re, json

def patch_file(data):
    content = open("lib/visualLab/data/finlandPoi.ts", "r", encoding="utf-8").read()
    for poi_id, info in data.items():
        parts = content.split('id: "')
        for i in range(1, len(parts)):
            if parts[i].startswith(poi_id + '"'):
                block = parts[i]
                
                if "desc" in info:
                    desc_str = json.dumps(info["desc"], ensure_ascii=False)
                    block = re.sub(r'(descriptionAdvanced:\s*\{[^}]*?de:\s*)""', r'\1' + desc_str, block, count=1)
                    
                if "facts" in info:
                    facts_str = json.dumps(info["facts"], ensure_ascii=False)
                    block = re.sub(r'(factsAdvanced:\s*\{[^}]*?de:\s*)\[\]', r'\1' + facts_str, block, count=1)
                
                parts[i] = block
                break
        content = 'id: "'.join(parts)

    open("lib/visualLab/data/finlandPoi.ts", "w", encoding="utf-8").write(content)
