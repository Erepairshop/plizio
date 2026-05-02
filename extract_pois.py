import re

def extract(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pois = re.findall(r'id:\s*"([^"]+)",\s*type:\s*"([^"]+)",(?:.*?name:\s*\{[^}]*?en:\s*"([^"]+)")?', content, re.DOTALL)
    print(f"--- {filepath} ---")
    for poi in pois:
        print(poi)

extract("lib/visualLab/data/luxembourgPoi.ts")
extract("lib/visualLab/data/poiExtraLuxembourgHistory.ts")
