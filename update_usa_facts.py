import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/usaPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all empty ro: [] arrays in factsAdvanced with the required list
# This regex matches 'ro: [],' inside factsAdvanced.
content = re.sub(r'ro: \[\],', 'ro: ["Fapt 1", "Fapt 2", "Fapt 3", "Fapt 4", "Fapt 5", "Fapt 6"],', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
