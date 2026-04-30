
import re
import json

def parse_poi_file(content):
    # Split content into POI blocks
    # We look for { id: "bz-...
    # This is a bit hacky but should work for this specific file structure
    poi_blocks = []
    
    # Extract all ID matches and their positions
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    
    for i in range(len(matches)):
        start_pos = content.rfind('{', 0, matches[i].start())
        end_pos = matches[i+1].start() if i+1 < len(matches) else content.rfind(']')
        # Adjust end_pos to the last closing brace before the next ID
        if i+1 < len(matches):
            end_pos = content.rfind('}', 0, end_pos) + 1
        else:
            end_pos = content.rfind('}', 0, end_pos) + 1
            
        block = content[start_pos:end_pos]
        poi_blocks.append(block)
        
    return poi_blocks

def get_val(block, key, subkey):
    # Very loose regex to get values from the block
    pattern = rf'{key}:\s*\{{[^}}]*?{subkey}:\s*(?:"([^"]*)"|\[(.*?)\])', re.DOTALL
    # This might match multiple times if keys are duplicated.
    # We want the one that HAS content if possible.
    matches = re.findall(rf'{subkey}:\s*(?:"([^"]*)"|\[(.*?)\])', block, re.DOTALL)
    
    # If it's a string
    for m in matches:
        if isinstance(m, tuple):
            s, a = m
            if s: return s
            if a: return [x.strip().strip('"').strip("'") for x in a.split(',') if x.strip()]
        elif m:
            if m.startswith('['):
                # array
                pass
            else:
                return m
    return "" if subkey != 'de' else [] # simplistic

# Actually, I'll just use a regex to find all the pieces.
def extract_data(block):
    data = {}
    data['id'] = re.search(r'id:\s*"([^"]+)"', block).group(1)
    data['type'] = re.search(r'type:\s*"([^"]+)"', block).group(1)
    data['parent'] = re.search(r'parent:\s*"([^"]+)"', block).group(1)
    data['coords'] = eval(re.search(r'coords:\s*(\[.*?\])', block).group(1))
    
    # For name, description, facts, descriptionAdvanced, factsAdvanced
    for key in ['name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced']:
        data[key] = {}
        for lang in ['de', 'hu', 'ro', 'en']:
            # Find all occurrences and take the first non-empty one
            # For facts/factsAdvanced it's an array
            if key in ['facts', 'factsAdvanced']:
                m = re.findall(rf'{key}:\s*\{{.*?{lang}:\s*\[(.*?)\]', block, re.DOTALL)
                res = []
                for item in m:
                    parts = [p.strip().strip('"').strip("'") for p in item.split(',') if p.strip()]
                    if parts:
                        res = parts
                        break
                data[key][lang] = res
            else:
                m = re.findall(rf'{key}:\s*\{{.*?{lang}:\s*"([^"]*)"', block, re.DOTALL)
                res = ""
                for item in m:
                    if item:
                        res = item
                        break
                data[key][lang] = res
    return data

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts'
with open(file_path, 'r') as f:
    content = f.read()

poi_blocks = parse_poi_file(content)
cleaned_pois = []
for block in poi_blocks:
    try:
        cleaned_pois.append(extract_data(block))
    except Exception as e:
        print(f"Error parsing block: {e}")

# Output as JSON for me to see
print(json.dumps(cleaned_pois, indent=2))
