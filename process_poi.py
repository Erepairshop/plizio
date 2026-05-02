import re
import os

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into POI objects. 
    # Matches { id: ... } at the top level of the array
    # This regex is a bit naive but should work for this structure
    
    pattern = re.compile(r'\{\s+id:\s*"([^"]+)",(.*?)\n\s+\}', re.DOTALL)
    
    count = 0
    def replacer(match):
        nonlocal count
        poi_id = match.group(1)
        poi_body = match.group(2)
        
        if 'descriptionAdvanced' in poi_body:
            return match.group(0)
            
        count += 1
        
        # New advanced content
        # For demo, just filler.
        # The prompt asks for actual German content based on context.
        # I need to generate actual content, not placeholders.
        
        # Generating German content is impossible in a regex. 
        # I will need to use an LLM-based approach. 
        # Since I'm an LLM, I can do it in chunks.
        
        return match.group(0) # Placeholder

    # The file is large, I cannot do this efficiently without a better parser.
    # I will just write a script that identifies the locations and I will use the 'replace' tool.

    print(f"File {file_path} has {len(pattern.findall(content))} POIs")

files = [
    "lib/visualLab/data/poiExtraParaguayCitiesV2.ts",
    "lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
    "lib/visualLab/data/poiExtraParaguayHistoryV2.ts",
    "lib/visualLab/data/poiExtraParaguayLandmarksV2.ts",
    "lib/visualLab/data/poiExtraParaguayLifeV2.ts",
    "lib/visualLab/data/poiExtraParaguayNatureV2.ts",
    "lib/visualLab/data/poiExtraParaguayReliefV2.ts"
]

for f in files:
    if os.path.exists(f):
        process_file(f)

