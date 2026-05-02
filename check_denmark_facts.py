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
    needs_update = True
    
    # Check if factsAdvanced is present
    has_facts = 'factsAdvanced:' in pstr
    if has_facts:
        facts_block_match = re.search(r'factsAdvanced:\s*\{([^}]+)\}', pstr)
        if facts_block_match:
            facts_block = facts_block_match.group(1)
            # Find ro: [...]
            ro_match = re.search(r'ro:\s*\[(.*?)\]', facts_block, re.DOTALL)
            if ro_match:
                ro_content = ro_match.group(1).strip()
                if ro_content != "" and ro_content != '""':
                    needs_update = False

    if needs_update:
        missing.append(pid)

print(f"Total POIs: {len(pois)}")
print(f"Missing RO facts: {len(missing)}")
print(missing)
