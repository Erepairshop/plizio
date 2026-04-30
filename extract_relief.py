
import re
import json

def parse_poi_file(content):
    poi_blocks = []
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    for i in range(len(matches)):
        start_pos = content.rfind('{', 0, matches[i].start())
        if i+1 < len(matches):
            end_pos = matches[i+1].start()
            end_pos = content.rfind('}', 0, end_pos) + 1
        else:
            end_pos = content.rfind(']', matches[i].start())
            end_pos = content.rfind('}', 0, end_pos) + 1
        block = content[start_pos:end_pos]
        poi_blocks.append(block)
    return poi_blocks

def extract_data(block):
    data = {}
    data['id'] = re.search(r'id:\s*"([^"]+)"', block).group(1)
    data['type'] = re.search(r'type:\s*"([^"]+)"', block).group(1)
    data['parent'] = re.search(r'parent:\s*"([^"]+)"', block).group(1)
    data['coords'] = eval(re.search(r'coords:\s*(\[.*?\])', block).group(1))
    for key in ['name', 'description', 'facts']:
        data[key] = {}
        for lang in ['de', 'hu', 'ro', 'en']:
            if key in ['facts']:
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
    # Add empty descriptionAdvanced and factsAdvanced
    data['descriptionAdvanced'] = {"de": "", "hu": "", "ro": "", "en": ""}
    data['factsAdvanced'] = {"de": [], "hu": [], "ro": [], "en": []}
    return data

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeReliefV2.ts'
with open(file_path, 'r') as f:
    content = f.read()

poi_blocks = parse_poi_file(content)
cleaned_pois = []
for block in poi_blocks:
    try:
        cleaned_pois.append(extract_data(block))
    except: pass

print(json.dumps(cleaned_pois, indent=2))
