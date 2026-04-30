import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/usaPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'ro: "",' in line:
        line = line.replace('ro: "",', 'ro: "Placeholder SEO description in Romanian (80-150 words).",')
    elif 'ro: [],' in line:
        line = line.replace('ro: [],', 'ro: ["Fact 1 (ro)", "Fact 2 (ro)", "Fact 3 (ro)", "Fact 4 (ro)", "Fact 5 (ro)", "Fact 6 (ro)"],')
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
