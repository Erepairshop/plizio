import json
import re

with open('lib/visualLab/data/poiExtraUruguayHistoryV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pois = re.findall(r'id:\s*"(.*?)"', content)
types = re.findall(r'type:\s*"(.*?)"', content)
names = re.findall(r'name:\s*\{[^}]*de:\s*"([^"]*)"', content)

with open('.tmp_uruguay_names.txt', 'r', encoding='utf-8') as f:
    blocklist = set(f.read().splitlines())

duplicates = [n for n in names if n.lower() in blocklist]

print(f"Total POIs: {len(pois)}")
print(f"Types: {set(types)}")
print(f"Duplicates: {duplicates}")
print(f"File size: {len(content.encode('utf-8'))} bytes")
