import re
import json
import glob

def extract():
    files = [
        "lib/visualLab/data/spainPoi.ts",
        "lib/visualLab/data/poiExtraSpainCities.ts",
        "lib/visualLab/data/poiExtraSpainHistory.ts",
        "lib/visualLab/data/poiExtraSpainOther.ts"
    ]
    
    pois = []
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Very simple regex to find id and name.en
        # We can extract blocks roughly
        blocks = re.findall(r'\{[^{]*?id:\s*"([^"]+)"[^{}]*?name:\s*\{[^{]*?en:\s*"([^"]+)"[^{}]*?\}[^{]*?\}', content, re.DOTALL | re.IGNORECASE)
        
        # Above regex might fail due to nested objects (like coords, etc.)
        # Let's use a simpler one: just find id and then find the next name en
        
        # A more robust regex:
        for match in re.finditer(r'id:\s*"([^"]+)"', content):
            poi_id = match.group(1)
            # Find the english name near this id
            start = match.end()
            name_match = re.search(r'name:\s*\{[^{]*?en:\s*"([^"]+)"', content[start:start+1000], re.DOTALL)
            name_en = name_match.group(1) if name_match else ""
            pois.append({"id": poi_id, "name": name_en, "file": file})
            
    with open("spain_pois_to_process.json", "w", encoding='utf-8') as f:
        json.dump(pois, f, indent=2)

if __name__ == "__main__":
    extract()
