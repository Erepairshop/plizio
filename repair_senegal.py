import re
import os

files = [
    "lib/visualLab/data/poiExtraSenegalCitiesV2.ts",
    "lib/visualLab/data/poiExtraSenegalEconomicV2.ts",
    "lib/visualLab/data/poiExtraSenegalHistoryV2.ts",
    "lib/visualLab/data/poiExtraSenegalLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSenegalLifeV2.ts",
    "lib/visualLab/data/poiExtraSenegalNatureV2.ts",
    "lib/visualLab/data/poiExtraSenegalReliefV2.ts"
]

def clean_poi_object(match):
    obj_content = match.group(0)
    
    # 1. Extract the ID to know which POI we are dealing with
    poi_id_match = re.search(r"id:\s*\"([^\"]+)\"", obj_content)
    if not poi_id_match: return obj_content
    poi_id = poi_id_match.group(1)
    
    # 2. Find all descriptionAdvanced blocks
    # We look for blocks like descriptionAdvanced: { ... }
    # Use a non-greedy match that respects nested braces (approximately)
    desc_blocks = re.findall(r"descriptionAdvanced:\s*\{[^{}]*?de:[^{}]*?hu:[^{}]*?ro:[^{}]*?en:[^{}]*?\}", obj_content, re.DOTALL)
    if not desc_blocks:
         # Try finding the ones with only EN (the corrupted ones)
         desc_blocks = re.findall(r"descriptionAdvanced:\s*\{[^{}]*?en:[^{}]*?\}", obj_content, re.DOTALL)
    
    # 3. Find all factsAdvanced blocks
    facts_blocks = re.findall(r"factsAdvanced:\s*\{[^{}]*?de:[^{}]*?hu:[^{}]*?ro:[^{}]*?en:[^{}]*?\}", obj_content, re.DOTALL)
    if not facts_blocks:
         facts_blocks = re.findall(r"factsAdvanced:\s*\{[^{}]*?en:[^{}]*?\}", obj_content, re.DOTALL)

    # This is getting complicated because of the broken syntax.
    # Let's try a different way.
    return obj_content

# Actually, it might be easier to just "re-generate" the whole file content if I have the data.
# But I only have the English data. I don't want to lose the other languages.

# Let's try a surgical fix for the specific corruption patterns.

for f in files:
    if not os.path.exists(f): continue
    print(f"Repairing {f}...")
    with open(f, "r") as info:
        content = info.read()
    
    # Fix the "},," and "}    facts:" artifacts
    # Pattern: },,\n    descriptionAdvanced: { ... },\n    factsAdvanced: { ... }\n  }
    # This block was inserted into the middle of objects.
    
    # Remove the inserted block that ends with } and leaves the rest of the object orphan
    # We find: description: { ... },, (the double comma is a marker)
    # Then some fields, then a closing } followed by a field that should be part of the object.
    
    # Pattern to match the inserted block:
    # ,, \n descriptionAdvanced: { ... } \n factsAdvanced: { ... } \n }
    new_content = re.sub(r",,\s+descriptionAdvanced:\s*\{[^{}]*?\}\s*,\s*factsAdvanced:\s*\{[^{}]*?\}\s*\}", "", content, flags=re.DOTALL)
    
    # If that didn't work, try another variation
    new_content = re.sub(r"description:\s*\{[^{}]*?\},,\s+descriptionAdvanced:\s*\{[^{}]*?\}\s*,\s*factsAdvanced:\s*\{[^{}]*?\}\s*\}", 
                         lambda m: m.group(0).split(",,")[0] + "},", new_content, flags=re.DOTALL)

    # Now we still need to put the English content in the CORRECT place.
    # But wait, if I can just fix the syntax, I can run the script again with a BETTER script?
    # No, let's just fix the files once and for all.
    
    with open(f, "w") as out:
        out.write(new_content)

print("Repair step 1 finished.")
