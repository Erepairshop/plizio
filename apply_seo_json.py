import json
import re
import sys

def apply_seo(ts_file, json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, seo in data.items():
        # Match the specific POI object
        # We look for id: "poi_id" and then the next facts: { ... }
        # To avoid matching another POI's facts, we use a regex that doesn't match id: again
        
        pattern = re.compile(
            r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\})', 
            re.DOTALL
        )
        
        def replacer(match):
            block = match.group(1)
            # If already has descriptionAdvanced, skip
            if "descriptionAdvanced" in block:
                return block
                
            desc = seo['descriptionAdvanced']['hu'].replace('"', '\\"')
            facts = seo['factsAdvanced']['hu']
            
            facts_str = ", ".join([f'"{f.replace("`", "")}"' for f in facts])
            
            addition = f""",
    descriptionAdvanced: {{
      hu: "{desc}"
    }},
    factsAdvanced: {{
      hu: [{facts_str}]
    }}"""
            return block + addition

        content, count = pattern.subn(replacer, content, count=1)
        if count == 0:
            print(f"Warning: Could not update {poi_id}")
        else:
            print(f"Updated {poi_id}")

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    apply_seo(sys.argv[1], sys.argv[2])
