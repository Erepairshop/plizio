import json
import re

def apply_updates():
    updates = {}
    with open('/mnt/c/Users/User/plizio-repo/updates1.json', 'r', encoding='utf-8') as f:
        updates.update(json.load(f))
    with open('/mnt/c/Users/User/plizio-repo/updates2.json', 'r', encoding='utf-8') as f:
        updates.update(json.load(f))

    with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    applied_count = 0

    for poi_id, data in updates.items():
        desc_hu = data.get("desc_hu", "").replace('"', '\\"')
        facts_hu = data.get("facts_hu", [])
        
        pattern1 = r'(id:\s*"' + poi_id + r'".*?descriptionAdvanced:\s*\{[^}]*?"hu":\s*)""'
        new_content, c1 = re.subn(pattern1, r'\g<1>"' + desc_hu + '"', content, count=1, flags=re.DOTALL)
        
        # fix quotes escaping in facts
        escaped_facts = []
        for f in facts_hu:
            escaped_facts.append('"' + f.replace('"', '\\"') + '"')
            
        facts_str = "[" + ",\n        ".join(escaped_facts) + "]"
        pattern2 = r'(id:\s*"' + poi_id + r'".*?factsAdvanced:\s*\{[^}]*?"hu":\s*)\[\]'
        new_content, c2 = re.subn(pattern2, r'\g<1>' + facts_str, new_content, count=1, flags=re.DOTALL)
        
        if c1 > 0 or c2 > 0:
            content = new_content
            applied_count += 1
        else:
            print(f"Could not apply to {poi_id}")

    with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Applied {applied_count} POI updates successfully.")

if __name__ == "__main__":
    apply_updates()
