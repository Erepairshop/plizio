import re

file_path = "lib/visualLab/data/poiExtraAustriaHistorical.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace empty descriptionAdvanced.en
content = re.sub(
    r'(descriptionAdvanced:\s*\{.*?en:\s*)"([^"]*)"(\s*\})',
    r'\1"MISSING_DESC_EN"\3',
    content,
    flags=re.DOTALL
)

print(content[:500])
