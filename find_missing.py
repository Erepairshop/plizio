import re

def find_missing(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We split by '  {\n    id: ' to get each block
    blocks = content.split('  {\n    id: ')
    for block in blocks[1:]:
        # Add back what was split
        full_block = '  {\n    id: ' + block
        id_match = re.search(r'id:\s*"([^"]+)"', full_block)
        if id_match:
            poi_id = id_match.group(1)
            if 'descriptionAdvanced' not in full_block:
                print(f"Missing in {filepath}: {poi_id}")

find_missing('lib/visualLab/data/poiExtraDe4a.ts')
find_missing('lib/visualLab/data/poiExtraDe4b.ts')
