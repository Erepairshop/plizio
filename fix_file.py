import re
file_path = 'lib/visualLab/data/poiExtraCapeverdeCitiesV2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()
pattern = r'name: \{de: "Praia", hu: "Praia", ro: "Praia", en: "Praia"\},.*?descriptionAdvanced: \{[^}]*\}.*?\},'
content = re.sub(pattern, 'name: {de: "Praia", hu: "Praia", ro: "Praia", en: "Praia"},', content, flags=re.DOTALL)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
