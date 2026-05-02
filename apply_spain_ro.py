import json
import re
import os

ts_files = [
    "lib/visualLab/data/spainPoi.ts",
    "lib/visualLab/data/poiExtraSpainCities.ts",
    "lib/visualLab/data/poiExtraSpainHistory.ts",
    "lib/visualLab/data/poiExtraSpainOther.ts"
]

all_updates = {}
for i in range(1, 10):
    fname = f"batch_ro_spain_{i}.json"
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            all_updates.update(json.load(f))

print(f"Loaded {len(all_updates)} updates.")

for ts_file in ts_files:
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    for poi_id, data in all_updates.items():
        desc = data['desc']
        facts = data['facts']
        
        # Replace ro: "" in descriptionAdvanced for this POI
        # We need to find the block for this POI first
        poi_pattern = re.compile(r'(id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?descriptionAdvanced:\s*\{[^}]*ro:\s*)"([^"]*)"', re.MULTILINE)
        
        def repl_desc(match):
            # match.group(1) is everything up to 'ro: '
            # We replace "" with "desc"
            safe_desc = desc.replace('"', '\\"') # escape quotes
            return match.group(1) + f'"{safe_desc}"'
            
        content = poi_pattern.sub(repl_desc, content)
        
        # Replace ro: [] in factsAdvanced for this POI
        # We need to match factsAdvanced block
        poi_pattern_facts = re.compile(r'(id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?factsAdvanced:\s*\{[\s\S]*?ro:\s*)\[\s*\]', re.MULTILINE)
        
        def repl_facts(match):
            # format facts array
            facts_str = "[\n        " + ",\n        ".join([f'"{f.replace("\"", "\\\"")}"' for f in facts]) + "\n      ]"
            return match.group(1) + facts_str
            
        content = poi_pattern_facts.sub(repl_facts, content)

    if content != original_content:
        with open(ts_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {ts_file}")

