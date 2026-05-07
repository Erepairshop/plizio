import re

with open('lib/visualLab/data/norwayPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into POI objects
# A POI object starts with { and ends with }, (roughly)
# Better: split by 'id: "'
poi_parts = re.split(r'id:\s*"', content)[1:]

for part in poi_parts:
    poi_id = part.split('"')[0]
    
    # Check descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', part, re.DOTALL)
    if not desc_adv_match:
        print(f"POI {poi_id} is COMPLETELY MISSING descriptionAdvanced")
    else:
        desc_adv_content = desc_adv_match.group(1)
        en_match = re.search(r'en:\s*"([^"]*)"', desc_adv_content)
        if not en_match:
            print(f"POI {poi_id} is MISSING en in descriptionAdvanced")
        elif not en_match.group(1).strip():
            print(f"POI {poi_id} has EMPTY en in descriptionAdvanced")
            
    # Check factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]*)\}', part, re.DOTALL)
    if not facts_adv_match:
        print(f"POI {poi_id} is COMPLETELY MISSING factsAdvanced")
    else:
        facts_adv_content = facts_adv_match.group(1)
        en_match = re.search(r'en:\s*\[([^\]]*)\]', facts_adv_content)
        if not en_match:
            print(f"POI {poi_id} is MISSING en in factsAdvanced")
        elif not en_match.group(1).strip():
            print(f"POI {poi_id} has EMPTY en in factsAdvanced")

