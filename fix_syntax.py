import re
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Asmara structure
content = re.sub(r'\},[\s]*descriptionAdvanced: \{', ', descriptionAdvanced: {', content)
# Fix Massawa structure (there's an extra bracket in between)
content = re.sub(r'\},[\s]*descriptionAdvanced: \{', ', descriptionAdvanced: {', content)
# Remove the weird extra brackets I created
content = re.sub(r'\},\n\s*\{', '},\n  {', content)

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(content)
