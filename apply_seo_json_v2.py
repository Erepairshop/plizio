import json
import re
import sys

def apply_seo(ts_file, json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # The json structure is { "items": [...] }
    items = data['items']

    for item in items:
        poi_id = item['id']
        
        # Match the specific POI object
        pattern = re.compile(
            r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\})', 
            re.DOTALL
        )
        
        def replacer(match):
            block = match.group(1)
            # If already has descriptionAdvanced, skip
            if "descriptionAdvanced" in block:
                return block
                
            # Helper to escape for JS strings
            def esc(s):
                return s.replace('"', '\\"').replace('`', '')
            
            desc_de = esc(item['descriptionAdvanced']['de'])
            desc_hu = esc(item['descriptionAdvanced']['hu'])
            desc_ro = esc(item['descriptionAdvanced']['ro'])
            desc_en = esc(item['descriptionAdvanced']['en'])
            
            f_de = ", ".join([f'"{esc(f)}"' for f in item['factsAdvanced']['de']])
            f_hu = ", ".join([f'"{esc(f)}"' for f in item['factsAdvanced']['hu']])
            f_ro = ", ".join([f'"{esc(f)}"' for f in item['factsAdvanced']['ro']])
            f_en = ", ".join([f'"{esc(f)}"' for f in item['factsAdvanced']['en']])
            
            addition = f""",
    descriptionAdvanced: {{
      de: "{desc_de}",
      hu: "{desc_hu}",
      ro: "{desc_ro}",
      en: "{desc_en}"
    }},
    factsAdvanced: {{
      de: [{f_de}],
      hu: [{f_hu}],
      ro: [{f_ro}],
      en: [{f_en}]
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
