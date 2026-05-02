import re

content = open('lib/visualLab/data/denmarkPoi.ts', 'r', encoding='utf-8').read()

pois = []
matches = list(re.finditer(r'id:\s*"(.*?)"', content))
for i in range(len(matches)):
    start = matches[i].start()
    end = matches[i+1].start() if i+1 < len(matches) else len(content)
    poi_str = content[start:end]
    pois.append((matches[i].group(1), poi_str))

missing = []
for pid, pstr in pois:
    has_desc = 'descriptionAdvanced:' in pstr
    
    # Check if ro field is present and non-empty in descriptionAdvanced
    # If it is missing descriptionAdvanced entirely, or ro is missing/empty, it needs updating.
    needs_update = True
    if has_desc:
        # extract descriptionAdvanced block
        desc_block_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', pstr)
        if desc_block_match:
            desc_block = desc_block_match.group(1)
            ro_match = re.search(r'ro:\s*"([^"]*)"', desc_block)
            if ro_match and ro_match.group(1).strip() != "":
                needs_update = False

    if needs_update:
        missing.append(pid)

print(f"Total POIs: {len(pois)}")
print(f"Missing RO descriptions: {len(missing)}")
print(missing)
