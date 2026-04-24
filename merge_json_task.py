import json
import os

files = [
    'tmp_k6_part1.json',
    'tmp_k6_part2.json',
    'tmp_k6_part3.json',
    'tmp_k6_part4.json'
]

merged_data = {}

repo_root = os.getcwd()

for file_name in files:
    file_path = os.path.join(repo_root, file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            merged_data.update(data)
    else:
        print(f"Warning: {file_name} not found.")

output_file = os.path.join(repo_root, 'ai_k6_content.json')

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(merged_data, f, ensure_ascii=False, indent=2)

print(f"Successfully merged into {output_file}")
