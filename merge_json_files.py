import json
import os

file1 = r'C:\Users\User\plizio-repo\ai_k5_content.json'
file2 = r'C:\Users\User\plizio-repo\ai_k5_content_part2.json'
output = r'C:\Users\User\plizio-repo\ai_k5_content_complete.json'

try:
    with open(file1, 'r', encoding='utf-8') as f:
        data1 = json.load(f)

    with open(file2, 'r', encoding='utf-8') as f:
        data2 = json.load(f)

    # Merge dictionaries
    # Assuming both are dictionaries of lists as seen in the previews
    data1.update(data2)

    with open(output, 'w', encoding='utf-8') as f:
        json.dump(data1, f, indent=2, ensure_ascii=False)

    print(f"Successfully merged {len(data1)} top-level keys into {output}")
except Exception as e:
    print(f"Error: {e}")
