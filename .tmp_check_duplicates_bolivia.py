import re

with open('.tmp_bolivia_blocklist.txt', 'r', encoding='utf-8') as f:
    blocklist = set([line.strip().lower() for line in f if line.strip()])

with open('lib/visualLab/data/poiExtraBoliviaEconomicV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    matches = re.findall(r'name:\s*\{\s*de:\s*["\']([^"\']+)["\']', content)
    
duplicates = [name for name in matches if name.lower() in blocklist]

print("Duplicates found:", duplicates)
print("Industry count:", content.count('type: "industry"'))
print("Port count:", content.count('type: "port"'))
