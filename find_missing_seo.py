
import re

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI id to get each POI block
poi_splits = re.split(r'id:\s*"([^"]+)"', content)

for i in range(1, len(poi_splits), 2):
    poi_id = poi_splits[i]
    poi_body = poi_splits[i+1]
    
    # We only care about the body until the next POI or end of object
    # This is a bit tricky, but let's just check if descriptionAdvanced is in the body
    # before another 'id:' appears or before the array ends.
    
    # Find the end of this POI object (roughly)
    # Since we split by 'id:', the 'poi_body' contains everything until the NEXT id:
    
    if "descriptionAdvanced" not in poi_body:
        print(f"POI {poi_id} is missing descriptionAdvanced")
    
    if "factsAdvanced" not in poi_body:
        print(f"POI {poi_id} is missing factsAdvanced")
