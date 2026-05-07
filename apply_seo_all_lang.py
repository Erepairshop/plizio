import json
import re
import sys

def apply_seo(ts_file, json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # The JSON has an 'items' array
    for item in data.get('items', []):
        poi_id = item['id']
        seo = item
        
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
                
            desc = {
                "de": seo['descriptionAdvanced']['de'].replace('"', '\\"'),
                "hu": seo['descriptionAdvanced']['hu'].replace('"', '\\"'),
                "ro": seo['descriptionAdvanced']['ro'].replace('"', '\\"'),
                "en": seo['descriptionAdvanced']['en'].replace('"', '\\"')
            }
            facts = {
                "de": ", ".join([f'"{f.replace("`", "")}"' for f in seo['factsAdvanced']['de']]),
                "hu": ", ".join([f'"{f.replace("`", "")}"' for f in seo['factsAdvanced']['hu']]),
                "ro": ", ".join([f'"{f.replace("`", "")}"' for f in seo['factsAdvanced']['ro']]),
                "en": ", ".join([f'"{f.replace("`", "")}"' for f in seo['factsAdvanced']['en']])
            }
            
            addition = f""",
    descriptionAdvanced: {{ de: "{desc['de']}", hu: "{desc['hu']}", ro: "{desc['ro']}", en: "{desc['en']}" }},
    factsAdvanced: {{
      de: [{facts['de']}],
      hu: [{facts['hu']}],
      ro: [{facts['ro']}],
      en: [{facts['en']}]
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
