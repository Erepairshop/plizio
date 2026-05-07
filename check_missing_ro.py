import re
import os

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI objects. This is a bit naive but might work for simple structures.
# POIs start with { and end with },
pois = re.findall(r'\{[\s\S]*?id: "([^"]+)"[\s\S]*?\}', content)

missing_ro_desc = []
missing_ro_facts = []

# Find each POI block
poi_blocks = re.findall(r'\{[^{}]*id: "[^"]+"(?:[^{}]*|\{[^{}]*\})*\}', content)
# That's also hard. Let's try to find the blocks by looking for 'id: "' and then going until the next POI or end of array.

blocks = re.split(r'id: "', content)[1:]
for block in blocks:
    poi_id = block.split('"')[0]
    
    # Check descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', block)
    if desc_adv_match:
        desc_adv_content = desc_adv_match.group(1)
        if 'ro:' not in desc_adv_content or re.search(r'ro:\s*""', desc_adv_content) or re.search(r"ro:\s*''", desc_adv_content):
            missing_ro_desc.append(poi_id)
    else:
        missing_ro_desc.append(poi_id + " (MISSING FIELD)")

    # Check factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]*)\}', block)
    if facts_adv_match:
        facts_adv_content = facts_adv_match.group(1)
        if 'ro:' not in facts_adv_content or re.search(r'ro:\s*\[\s*\]', facts_adv_content):
            missing_ro_facts.append(poi_id)
    else:
        missing_ro_facts.append(poi_id + " (MISSING FIELD)")

print("Missing ro in descriptionAdvanced:")
print(missing_ro_desc)
print("\nMissing ro in factsAdvanced:")
print(missing_ro_facts)
