import re

file_path = 'lib/visualLab/data/denmarkPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all POI-like objects
# They usually start with { id: "..."
# We'll split by { id: "
poi_parts = content.split('{ id: "')[1:] # Skip the part before the first POI

missing_any = []

for part in poi_parts:
    poi_id = part.split('"')[0]
    
    # Extract descriptionAdvanced block
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', part, re.DOTALL)
    if not desc_adv_match:
        missing_any.append((poi_id, "missing descriptionAdvanced"))
        continue
    
    desc_content = desc_adv_match.group(1)
    en_desc_match = re.search(r'en:\s*"([^"]*)"', desc_content, re.DOTALL)
    if not en_desc_match or not en_desc_match.group(1).strip():
        missing_any.append((poi_id, "empty/missing en in descriptionAdvanced"))
        continue

    # Extract factsAdvanced block
    facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]*)\}', part, re.DOTALL)
    if not facts_adv_match:
        missing_any.append((poi_id, "missing factsAdvanced"))
        continue
        
    facts_content = facts_adv_match.group(1)
    en_facts_match = re.search(r'en:\s*\[([^\]]*)\]', facts_content, re.DOTALL)
    if not en_facts_match or not en_facts_match.group(1).strip():
        missing_any.append((poi_id, "empty/missing en in factsAdvanced"))
        continue

if not missing_any:
    print("All POIs have English SEO content!")
else:
    for pid, reason in missing_any:
        print(f"POI {pid}: {reason}")
