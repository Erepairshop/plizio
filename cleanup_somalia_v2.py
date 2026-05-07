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

def merge_lang_obj(matches):
    merged = {}
    for inner in matches:
        # Find all k: v in the inner { ... }
        # v can be "..." or [...]
        parts = re.findall(r'(\w+):\s*("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`|\[[\s\S]*?\])', inner)
        for k, v in parts:
            merged[k] = v.strip()
    return merged

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split the file by POI objects
    # A POI object starts with { and ends with } (with some indentation)
    # We look for id: "..." to find the start
    
    new_content = ""
    last_pos = 0
    
    # Identify the array body
    start_array = content.find('[') + 1
    end_array = content.rfind('];')
    
    new_content = content[:start_array]
    body = content[start_array:end_array]
    
    # Split body into POIs by looking for { id:
    pois = re.split(r'(?=\s*\{\s*id:)', body)
    
    clean_pois = []
    for poi in pois:
        if not poi.strip(): continue
        
        # Merge descriptionAdvanced
        da_matches = re.findall(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', poi)
        if da_matches:
            merged_da = merge_lang_obj(da_matches)
            # Remove all existing DA
            poi = re.sub(r',\s*descriptionAdvanced:\s*\{[\s\S]*?\}', '', poi)
            # Rebuild DA string
            da_str = ",\n    descriptionAdvanced: {\n"
            for lang in ['de', 'hu', 'ro', 'en']:
                if lang in merged_da:
                    da_str += f'      {lang}: {merged_da[lang]},\n'
            da_str = da_str.rstrip(',\n') + "\n    }"
            
            # Insert before image: or historyPeriod: or just before the end
            if 'image:' in poi:
                poi = poi.replace('image:', da_str + ' image:')
            elif 'historyPeriod:' in poi:
                poi = poi.replace('historyPeriod:', da_str + ' historyPeriod:')
            else:
                # Find last }
                last_brace = poi.rfind('}')
                poi = poi[:last_brace] + da_str + "\n  }"
        
        # Merge factsAdvanced
        fa_matches = re.findall(r'factsAdvanced:\s*\{([\s\S]*?)\}', poi)
        if fa_matches:
            merged_fa = merge_lang_obj(fa_matches)
            # Remove all existing FA
            poi = re.sub(r',\s*factsAdvanced:\s*\{[\s\S]*?\}', '', poi)
            # Rebuild FA string
            fa_str = ",\n    factsAdvanced: {\n"
            for lang in ['de', 'hu', 'ro', 'en']:
                if lang in merged_fa:
                    fa_str += f'      {lang}: {merged_fa[lang]},\n'
            fa_str = fa_str.rstrip(',\n') + "\n    }"
            
            if 'image:' in poi:
                poi = poi.replace('image:', fa_str + ' image:')
            else:
                last_brace = poi.rfind('}')
                poi = poi[:last_brace] + fa_str + "\n  }"
        
        # Fix any resulting double commas
        poi = poi.replace(',,', ',')
        clean_pois.append(poi)
    
    new_content += "".join(clean_pois)
    new_content += content[end_array:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Cleaned {file_path}")

for f in files:
    clean_file(f)
