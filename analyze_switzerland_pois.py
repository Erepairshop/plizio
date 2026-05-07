
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find POI objects. They start with id: "..."
# This is a bit simplistic but should work for this file structure.
poi_pattern = re.compile(r'\{\s+id:\s+"([^"]+)",(.*?)\n  \}(?=,?\n|;)', re.DOTALL)

matches = poi_pattern.findall(content)

print(f"Found {len(matches)} POIs")

for poi_id, poi_body in matches:
    has_facts_advanced = 'factsAdvanced:' in poi_body
    has_desc_advanced = 'descriptionAdvanced:' in poi_body
    desc_advanced_en_empty = False
    if has_desc_advanced:
        en_match = re.search(r'en:\s*"([^"]*)"', poi_body.split('descriptionAdvanced:')[1])
        if en_match and not en_match.group(1).strip():
            desc_advanced_en_empty = True
    
    print(f"ID: {poi_id}")
    print(f"  FactsAdvanced: {has_facts_advanced}")
    print(f"  DescAdvanced: {has_desc_advanced}")
    if has_desc_advanced:
        print(f"  DescAdvanced.en empty: {desc_advanced_en_empty}")
