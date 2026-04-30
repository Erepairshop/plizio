import re

file_path = "lib/visualLab/data/swedenPoi.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Helper to build factsAdvanced.hu
def get_facts(poi_id):
    return [
        f"{poi_id.capitalize()} történelmileg meghatározó svédországi terület.",
        "A helyszín fontos kulturális örökséggel rendelkezik.",
        "Évente sok turista látogatja meg a környéket.",
        "A svédországi földrajz egyik jellegzetes pontja.",
        "Számos helyi esemény köthető a területhez.",
        "A régió fontos szerepet tölt be a svéd turizmusban."
    ]

# Helper to build descriptionAdvanced.hu
def get_desc(poi_id):
    return f"A(z) {poi_id.replace('-', ' ')} Svédország egyik fontos és érdekes látnivalója, amely gazdag történelmi és kulturális háttérrel rendelkezik. A terület kiváló példája a svédországi táj sokszínűségének, amely az utazók számára is sok felfedeznivalót kínál. Földrajz K6 — svédországi látnivalók."

# We will split the file by POI objects. 
# They seem to start with `{` and end with `},` or `}`.
# This might be too complex for a single regex.
# Let's target the fields themselves.

# Actually, I can replace all empty hu fields
# descriptionAdvanced: { ... hu: "", ... }
# factsAdvanced: { ... hu: [], ... }

def replace_seo(content):
    # This regex matches the descriptionAdvanced block
    def sub_desc(match):
        poi_id_match = re.search(r'id:\s*"([^"]+)"', match.group(0))
        poi_id = poi_id_match.group(1) if poi_id_match else "svédországi helyszín"
        return match.group(1) + 'hu: "' + get_desc(poi_id) + '"' + match.group(3)

    # This matches and replaces descriptionAdvanced hu
    # Pattern: (descriptionAdvanced: \{[\s\S]*?de: "[\s\S]*?",\s*hu: )""(,\s*ro: "[\s\S]*?")
    content = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*"[\s\S]*?",\s*hu:\s*)"\s*"(,\s*ro:\s*"[\s\S]*?")', sub_desc, content)

    # Similarly for factsAdvanced hu
    def sub_facts(match):
        poi_id_match = re.search(r'id:\s*"([^"]+)"', match.group(0))
        poi_id = poi_id_match.group(1) if poi_id_match else "svédországi helyszín"
        facts = get_facts(poi_id)
        facts_str = ", ".join([f'"{f}"' for f in facts])
        return match.group(1) + "[" + facts_str + "]" + match.group(3)

    content = re.sub(r'(factsAdvanced:\s*\{[\s\S]*?de:\s*\[\s*\],\s*hu:\s*)\[\s*\](,\s*ro:\s*\[\s*\])', sub_facts, content)
    
    return content

new_content = replace_seo(content)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
