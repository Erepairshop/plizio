import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const finlandNature: POI\[\] = \[(.*?)\];', content, re.DOTALL)
if match:
    array_content = match.group(1)
    ids = re.findall(r'id:\s*["\']([^"\']+)["\']', array_content)
    for poi_id in ids:
        # Find the block for this id
        block_match = re.search(f'id:\s*["\']{poi_id}["\'].*?}},', array_content, re.DOTALL)
        if block_match:
            block = block_match.group(0)
            has_desc = "descriptionAdvanced" in block
            print(f"ID: {poi_id}, Advanced: {has_desc}")
