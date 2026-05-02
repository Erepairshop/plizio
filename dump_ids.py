import json
with open('to_process.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for i, x in enumerate(data[60:90]):
    print(f"ID: {x['id']}")
    print(f"DE: {x['deText'][:150]}...\n")
