import json
import os

files = [
    'tmp/geo_k6_part1.json',
    'tmp/geo_k6_part2.json',
    'tmp/geo_k6_part3.json',
    'tmp/geo_k6_part4.json'
]

merged_data = {}

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            merged_data.update(data)
    else:
        print(f"Warning: {file_path} not found.")

output_path = 'tmp/geo_k6_content.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(merged_data, f, ensure_ascii=False, indent=2)

print(f"Successfully merged {len(merged_data)} subtopics into {output_path}")
