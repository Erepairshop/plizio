import re
import json

file_path = 'lib/visualLab/data/poiExtraSomaliaEconomicV2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix double commas first
content = content.replace(',,', ',')

# Identify POI blocks
# This is a bit tricky with regex for complex objects, but we'll try a POI-by-POI approach
poi_blocks = re.findall(r'(\{\s*id:\s*".*?"[\s\S]*?\n  \}(?:,|$))', content)

new_pois = []
for block in poi_blocks:
    # Extract ID
    id_match = re.search(r'id:\s*"(.*?)"', block)
    if not id_match: continue
    poi_id = id_match.group(1)
    
    # Merge descriptionAdvanced
    da_matches = re.findall(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', block)
    merged_da = {}
    for da_inner in da_matches:
        # Extract lang keys
        langs = re.findall(r'(\w+):\s*("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)', da_inner)
        for l, v in langs:
            merged_da[l] = v.strip('"\'`')
    
    # Merge factsAdvanced
    fa_matches = re.findall(r'factsAdvanced:\s*\{([\s\S]*?)\}', block)
    merged_fa = {}
    for fa_inner in fa_matches:
        # Extract lang keys - handle arrays [] or strings
        langs = re.findall(r'(\w+):\s*(\[[\s\S]*?\]|"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)', fa_inner)
        for l, v in langs:
            if v.startswith('['):
                try:
                    # Very crude way to clean up the string to be valid JSON
                    # Replace single quotes with double quotes, handle escapes
                    v_clean = v.replace("'", '"') # Risk!
                    # Better: just keep it as is if it's already updated by us
                    merged_fa[l] = v
                except:
                    merged_fa[l] = v
            else:
                merged_fa[l] = v
    
    # Construct new block
    # Remove all descriptionAdvanced and factsAdvanced from original block to rebuild
    clean_block = re.sub(r',\s*descriptionAdvanced:\s*\{[\s\S]*?\}', '', block)
    clean_block = re.sub(r',\s*factsAdvanced:\s*\{[\s\S]*?\}', '', clean_block)
    # Remove potential trailing content that leaked in
    clean_block = re.sub(r'\}\s*description:.*', '}', clean_block)
    
    # Rebuild
    da_str = ",\n    descriptionAdvanced: {\n"
    for l, v in merged_da.items():
        da_str += f'      {l}: "{v}",\n'
    da_str = da_str.rstrip(',\n') + "\n    }"
    
    fa_str = ",\n    factsAdvanced: {\n"
    for l, v in merged_fa.items():
        if isinstance(v, str) and v.startswith('['):
             fa_str += f'      {l}: {v},\n'
        else:
             fa_str += f'      {l}: "{v}",\n'
    fa_str = fa_str.rstrip(',\n') + "\n    }"
    
    new_block = clean_block.rstrip().rstrip(',').rstrip('}') + da_str + fa_str + "\n  }"
    if not new_block.endswith(','): new_block += ","
    new_pois.append(new_block)

new_content = "// @ts-nocheck\nimport type { POI } from \"./poi\";\n\nexport const poiExtraSomaliaEconomicV2: POI[] = [\n"
new_content += "\n".join(new_pois).rstrip(',')
new_content += "\n];\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
