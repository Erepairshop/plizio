import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo2.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def repl(match):
    de_content = match.group(1)
    return f'descriptionAdvanced: {{ de: {de_content}, hu: {de_content}, ro: {de_content}, en: {de_content} }}'

# This regex captures the `de` content and the whole `descriptionAdvanced` block
# It assumes the structure is always de, hu, ro, en
pattern = re.compile(r'descriptionAdvanced:\s*\{\s*de:\s*(`[^`]*`),\s*hu:\s*"",\s*ro:\s*"",\s*en:\s*""\s*\}', re.DOTALL)
new_content = pattern.sub(repl, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("File updated successfully.")
