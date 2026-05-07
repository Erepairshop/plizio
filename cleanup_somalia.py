import re
import os

files = [
    'lib/visualLab/data/poiExtraSomaliaCitiesV2.ts',
    'lib/visualLab/data/poiExtraSomaliaEconomicV2.ts',
    'lib/visualLab/data/poiExtraSomaliaHistoryV2.ts',
    'lib/visualLab/data/poiExtraSomaliaLandmarksV2.ts',
    'lib/visualLab/data/poiExtraSomaliaLifeV2.ts',
    'lib/visualLab/data/poiExtraSomaliaNatureV2.ts',
    'lib/visualLab/data/poiExtraSomaliaReliefV2.ts'
]

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into POI blocks
    header_match = re.match(r'([\s\S]*?export const \w+: POI\[\] = \[)', content)
    if not header_match: return
    header = header_match.group(1)
    
    footer = '];\n'
    
    # Extract everything between [ and ];
    body = content[len(header):].strip()
    if body.endswith('];'): body = body[:-2].strip()
    
    # Split by POI objects
    # We use a pattern that looks for { id: "..."
    poi_pattern = r'(\{\s*id:\s*".*?"[\s\S]*?\n  \})(?:,|$)'
    blocks = re.findall(poi_pattern, body)
    
    new_blocks = []
    for block in blocks:
        # 1. Merge descriptionAdvanced
        da_matches = re.findall(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', block)
        merged_da = {}
        for da_inner in da_matches:
            langs = re.findall(r'(\w+):\s*("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)', da_inner)
            for l, v in langs:
                merged_da[l] = v.strip('"\'`')
        
        # 2. Merge factsAdvanced
        fa_matches = re.findall(r'factsAdvanced:\s*\{([\s\S]*?)\}', block)
        merged_fa = {}
        for fa_inner in fa_matches:
            langs = re.findall(r'(\w+):\s*(\[[\s\S]*?\]|"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)', fa_inner)
            for l, v in langs:
                merged_fa[l] = v.strip()
        
        # Remove all existing DA and FA from block
        clean_block = re.sub(r',\s*descriptionAdvanced:\s*\{[\s\S]*?\}', '', block)
        clean_block = re.sub(r',\s*factsAdvanced:\s*\{[\s\S]*?\}', '', clean_block)
        
        # Re-insert merged ones before the closing }
        # Ensure it ends with }
        clean_block = clean_block.rstrip().rstrip(',')
        if clean_block.endswith('}'):
            base = clean_block[:-1].rstrip().rstrip(',')
            
            # Rebuild DA
            if merged_da:
                base += ",\n    descriptionAdvanced: {\n"
                for l, v in merged_da.items():
                    # Escape double quotes if necessary (crude)
                    v_esc = v.replace('"', '\\"') if '"' in v and not v.startswith('\\"') else v
                    base += f'      {l}: "{v_esc}",\n'
                base = base.rstrip(',\n') + "\n    }"
            
            # Rebuild FA
            if merged_fa:
                base += ",\n    factsAdvanced: {\n"
                for l, v in merged_fa.items():
                    base += f'      {l}: {v},\n'
                base = base.rstrip(',\n') + "\n    }"
            
            new_block = base + "\n  }"
            new_blocks.append(new_block)
        else:
            new_blocks.append(block)

    new_content = header + "\n" + ",\n".join(new_blocks) + "\n" + footer
    # Fix double commas
    new_content = new_content.replace(',,', ',')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Cleaned {file_path}")

for f in files:
    clean_file(f)
