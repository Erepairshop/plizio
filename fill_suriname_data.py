import re
import os

files = [
    "lib/visualLab/data/poiExtraSurinameCitiesV2.ts",
    "lib/visualLab/data/poiExtraSurinameEconomicV2.ts",
    "lib/visualLab/data/poiExtraSurinameHistoryV2.ts",
    "lib/visualLab/data/poiExtraSurinameLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSurinameLifeV2.ts",
    "lib/visualLab/data/poiExtraSurinameNatureV2.ts",
    "lib/visualLab/data/poiExtraSurinameReliefV2.ts"
]

def fill_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find POI objects and empty hu fields
    # This is complex, let's just find each POI object
    pois = re.split(r'\{', content)
    
    # Actually, I will read the file and manually fix the empty hu fields using regex.
    # Since I cannot see the content for all, I will do it turn by turn or one file at a time.
    pass

# I will start by reading each file individually to see their content.
# Actually I have the list.
print("Files to process:")
for f in files:
    print(f)
