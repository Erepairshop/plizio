
import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/belgiumPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Variables to process
variables = [
    "belgiumCountry",
    "belgiumRegions",
    "belgiumCulture",
    "belgiumNature",
    "belgiumCities",
    "belgiumCultureExtra",
    "belgiumNatureExtra",
    "belgiumRound2"
]

def extract_pois(content, var_name):
    pattern = rf"export const {var_name}: (POI|POI\[\]) = (.*?);"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        # Try without type if it's different
        pattern = rf"export const {var_name} = (.*?);"
        match = re.search(pattern, content, re.DOTALL)
    
    if match:
        return match.group(0)
    return ""

# This regex approach for nested objects might be tricky.
# Let's try to find all objects that look like POIs within the whole file
# and then filter by the variable they belong to.
# Or simpler: find all objects with an 'id' field.

poi_pattern = re.compile(r"\{\s+id:\s+\"([^\"]+)\",.*?\}", re.DOTALL)
all_matches = poi_pattern.finditer(content)

pois = []
for match in all_matches:
    full_text = match.group(0)
    poi_id = match.group(1)
    
    # Check descriptionAdvanced.hu
    desc_adv_hu_match = re.search(r"descriptionAdvanced:\s*\{[^}]*hu:\s*\"([^\"]*)\"", full_text)
    desc_adv_hu = desc_adv_hu_match.group(1) if desc_adv_hu_match else None
    
    # Check factsAdvanced.hu
    facts_adv_hu_match = re.search(r"factsAdvanced:\s*\{[^}]*hu:\s*\[([^\]]*)\]", full_text)
    facts_adv_hu = facts_adv_hu_match.group(1).strip() if facts_adv_hu_match else None
    
    pois.append({
        "id": poi_id,
        "desc_adv_hu": desc_adv_hu,
        "facts_adv_hu": facts_adv_hu,
        "has_desc_adv": "descriptionAdvanced:" in full_text,
        "has_facts_adv": "factsAdvanced:" in full_text
    })

for p in pois:
    print(f"ID: {p['id']}, Desc: {p['desc_adv_hu']}, Facts: {p['facts_adv_hu']}, HasDesc: {p['has_desc_adv']}, HasFacts: {p['has_facts_adv']}")
