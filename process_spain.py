import re
import os

files = [
    'lib/visualLab/data/spainPoi.ts',
    'lib/visualLab/data/poiExtraSpainCities.ts',
    'lib/visualLab/data/poiExtraSpainHistory.ts',
    'lib/visualLab/data/poiExtraSpainOther.ts'
]

new_fields = """    descriptionAdvanced: {
      de: "...", hu: "", ro: "", en: ""
    },
    factsAdvanced: {
      de: ["...", "...", "..."], hu: [], ro: [], en: []
    },
"""

for file_path in files:
    full_path = os.path.join('/mnt/c/Users/User/plizio-repo', file_path)
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match the closing brace of an object that is part of the array.
    # The objects seem to be in an array 
    # We want to insert before the closing brace of each object.
    
    # We can split by  but that's messy.
    # Let's try to find each  that closes an object in the array.
    
    # Actually, a better way is to find  and  for each POI object.
    # Given the files are relatively simple, we can search for the closing  of each object.
    
    # Let's refine the regex.
    # The POI objects are clearly defined.
    # I will look for  followed by a comma or 
    
    # Let's try replacing  with 
    
    # Wait, some objects don't have .
    # Let's look at the file content.
    
    # It looks like:
    # {
    #   ...
    #   image: "...",
    # }
    
    # I can replace  with 
    
    new_content = re.sub(r'\n  \},', f'\n{new_fields}  }},', content)
    
    # Be careful, this will add it to the country object too.
    # Yes, the user wants it for ALL POIs in those 4 files.
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Processed {file_path}')

