
import re
import json
import os

file_path = 'lib/visualLab/data/poiExtraSudanEconomicV2.ts'
if not os.path.exists(file_path):
    print(f"Error: {file_path} not found")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find POI objects
# This pattern is a bit more robust for the TS format
poi_pattern = re.compile(r'\{[^{]*?id:\s*\"([^\"]+)\".*?description:\s*\{(.*?)\}.*?facts:\s*\{(.*?)\}', re.DOTALL)

items = []
ids_to_find = [
    'bashayer-marine-terminal-economic-v2', 'al-khair-terminal-economic-v2', 'prince-osman-digna-port-economic-v2',
    'port-sudan-south-port-economic-v2', 'port-sudan-green-port-economic-v2', 'kosti-inland-port-economic-v2',
    'wadi-halfa-river-port-economic-v2', 'kenana-sugar-factory-economic-v2', 'white-nile-sugar-factory-economic-v2',
    'assalaya-sugar-factory-economic-v2', 'guneid-sugar-factory-economic-v2', 'new-halfa-sugar-factory-economic-v2',
    'sennar-sugar-factory-economic-v2', 'al-jaili-oil-refinery-economic-v2', 'el-obeid-oil-refinery-economic-v2',
    'port-sudan-oil-refinery-economic-v2', 'atbara-cement-factory-economic-v2', 'rabak-nile-cement-economic-v2',
    'berber-cement-factory-economic-v2', 'al-takamul-cement-economic-v2', 'giad-industrial-city-economic-v2',
    'hassai-gold-mine-economic-v2', 'jebel-amir-gold-mines-economic-v2', 'block-6-balila-oil-field-economic-v2',
    'galat-sufar-south-gold-economic-v2', 'khartoum-north-industrial-economic-v2', 'al-bageer-industrial-area-economic-v2',
    'wad-medani-textile-factory-economic-v2', 'gedarif-sesame-processing-economic-v2', 'khor-omar-industrial-economic-v2'
]

matches = list(poi_pattern.finditer(content))
# print(f"Found {len(matches)} POI matches in file")

for match in matches:
    poi_id = match.group(1)
    if poi_id in ids_to_find:
        desc_block = match.group(2)
        facts_block = match.group(3)
        
        # Extract ro description
        ro_desc_match = re.search(r'\"ro\":\s*\"(.*?)\"', desc_block)
        if not ro_desc_match:
            ro_desc_match = re.search(r'ro:\s*\"(.*?)\"', desc_block)
        
        # Extract ro facts
        ro_facts_match = re.search(r'\"ro\":\s*\[(.*?)\]', facts_block, re.DOTALL)
        if not ro_facts_match:
            ro_facts_match = re.search(r'ro:\s*\[(.*?)\]', facts_block, re.DOTALL)
            
        if ro_desc_match and ro_facts_match:
            desc = ro_desc_match.group(1)
            facts_str = ro_facts_match.group(1)
            # Clean up the facts array
            facts = []
            for f in re.findall(r'\"(.*?)\"', facts_str):
                facts.append(f)
            if not facts: # try single quotes
                for f in re.findall(r"\'(.*?)\'", facts_str):
                    facts.append(f)
            
            items.append({
                'id': poi_id,
                'description': desc,
                'facts': facts
            })

output = {
    'lang': 'ro',
    'country': 'sudan',
    'files': ['lib/visualLab/data/poiExtraSudanEconomicV2.ts'],
    'items': items
}

with open('extracted_sudan.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Successfully extracted {len(items)} items to extracted_sudan.json")
