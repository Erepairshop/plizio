import json
import os

file1 = 'ai_k5_content.json'
file2 = 'ai_k5_content_part2.json'
output_file = 'ai_k5_content_complete.json'

with open(file1, 'r', encoding='utf-8') as f:
    data1 = json.load(f)

with open(file2, 'r', encoding='utf-8') as f:
    data2 = json.load(f)

data1.update(data2)

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(data1, f, ensure_ascii=False, indent=2)

print(f"Successfully merged into {output_file}")
