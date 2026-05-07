import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
print(f"Total IDs found: {len(ids)}")

# Match descriptionAdvanced blocks
desc_adv_matches = re.findall(r'descriptionAdvanced:\s*{([^}]+)}', content, re.DOTALL)
print(f"Total descriptionAdvanced blocks found: {len(desc_adv_matches)}")

filled_de_desc = 0
for block in desc_adv_matches:
    de_match = re.search(r'de:\s*["\']([^"\']+)["\']', block)
    if de_match and de_match.group(1).strip() and de_match.group(1) != "...":
        filled_de_desc += 1

print(f"Filled de descriptionAdvanced: {filled_de_desc}")

# Match factsAdvanced blocks
facts_adv_matches = re.findall(r'factsAdvanced:\s*{([^}]+)}', content, re.DOTALL)
print(f"Total factsAdvanced blocks found: {len(facts_adv_matches)}")

filled_de_facts = 0
for block in facts_adv_matches:
    de_match = re.search(r'de:\s*\[(.*?)\]', block, re.DOTALL)
    if de_match:
        de_content = de_match.group(1)
        if re.search(r'["\'][^"\']+["\']', de_content) and "..." not in de_content:
            filled_de_facts += 1

print(f"Filled de factsAdvanced: {filled_de_facts}")
