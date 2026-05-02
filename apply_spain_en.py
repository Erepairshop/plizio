import json
import re

pois = {}
for i in range(3):
    try:
        with open(f"spain_seo_batch_{i}.json", "r", encoding="utf-8") as f:
            for item in json.load(f):
                pois[item['id']] = item
    except Exception as e:
        print(f"Error loading spain_seo_batch_{i}.json: {e}")

files_to_update = [
    "lib/visualLab/data/spainPoi.ts",
    "lib/visualLab/data/poiExtraSpainCities.ts",
    "lib/visualLab/data/poiExtraSpainHistory.ts",
    "lib/visualLab/data/poiExtraSpainOther.ts"
]

for filepath in files_to_update:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    parts = re.split(r'(id:\s*"[^"]+")', content)
    
    for i in range(1, len(parts), 2):
        id_str = parts[i]
        block = parts[i+1]
        
        poi_id_match = re.search(r'id:\s*"([^"]+)"', id_str)
        if not poi_id_match:
            continue
            
        poi_id = poi_id_match.group(1)
        if poi_id in pois:
            seo = pois[poi_id]
            desc = seo["descriptionAdvanced"].replace('"', '\\"').replace('\n', ' ')
            facts = seo["factsAdvanced"]
            facts_formatted = "[\n" + ",\n".join([f'        "{f.replace("\"", "\\\"")}"' for f in facts]) + "\n      ]"
            
            da_match = re.search(r'descriptionAdvanced:\s*\{', block)
            if da_match:
                rest = block[da_match.end():]
                rest_sub = re.sub(r'^(.*?en:\s*)""', r'\1"' + desc + '"', rest, count=1, flags=re.DOTALL)
                block = block[:da_match.end()] + rest_sub
                
            fa_match = re.search(r'factsAdvanced:\s*\{', block)
            if fa_match:
                rest = block[fa_match.end():]
                rest_sub = re.sub(r'^(.*?en:\s*)\[\s*\]', r'\1' + facts_formatted, rest, count=1, flags=re.DOTALL)
                block = block[:fa_match.end()] + rest_sub
                
        parts[i+1] = block

    new_content = "".join(parts)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Applied English SEO content to TS files.")
