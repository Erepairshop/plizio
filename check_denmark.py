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
    has_ro_desc = re.search(r'descriptionAdvanced:\s*\{[^}]*ro:\s*"(?!").*?"', pstr, re.DOTALL)
    if not has_ro_desc:
        missing.append(pid)

print(f"Total POIs: {len(pois)}")
print(f"Missing RO descriptions: {len(missing)}")
print(missing)
