import json
import re

def apply_updates():
    with open('/mnt/c/Users/User/plizio-repo/updates.json', 'r', encoding='utf-8') as f:
        updates = json.load(f)

    with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # We will search for id: "XXX" and replace empty hu: "" in descriptionAdvanced and factsAdvanced.
    for poi_id, data in updates.items():
        desc_hu = data.get("desc_hu", "")
        facts_hu = data.get("facts_hu", [])
        
        # Regex to find the block for this POI
        # We find the id, and then look for descriptionAdvanced: { ... "hu": "" ... }
        # Since TS can have different spacing, we use re.sub with a custom function
        
        pattern = r'(id:\s*"' + poi_id + r'".*?descriptionAdvanced:\s*\{[^}]*?"hu":\s*)""'
        content = re.sub(pattern, r'\g<1>"' + desc_hu + '"', content, count=1, flags=re.DOTALL)
        
        facts_str = "[" + ", ".join([f'"{f}"' for f in facts_hu]) + "]"
        pattern2 = r'(id:\s*"' + poi_id + r'".*?factsAdvanced:\s*\{[^}]*?"hu":\s*)\[\]'
        content = re.sub(pattern2, r'\g<1>' + facts_str, content, count=1, flags=re.DOTALL)

    with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Applied {len(updates)} updates.")

if __name__ == "__main__":
    apply_updates()
