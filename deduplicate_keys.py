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

def deduplicate_in_file(file_path):
    print(f"Deduplicating {file_path}...")
    with open(file_path, "r") as f:
        content = f.read()

    # Match each POI object
    # We use a non-greedy match between { and } that contains "id:"
    # This is a bit risky but should work for this structure.
    new_content = content
    
    # Pattern to find a POI object
    poi_pattern = re.compile(r"\{[^{]*?id:\s*\"[^\"]+\".*?\}", re.DOTALL)
    
    def fix_poi(match):
        obj = match.group(0)
        
        # Check for multiple descriptionAdvanced
        descs = re.findall(r"descriptionAdvanced:\s*\{[^{}]*?\}", obj, re.DOTALL)
        if len(descs) > 1:
            print(f"  Found {len(descs)} descriptionAdvanced blocks in an object")
            # Keep the one that has non-empty en if possible
            best_desc = descs[0]
            for d in descs:
                if 'en: ""' not in d:
                    best_desc = d
                    break
            # Remove all and put one back (at the end of the object for safety)
            for d in descs:
                obj = obj.replace(d, "")
            obj = obj.rstrip("}").rstrip() + ",\n    " + best_desc + "\n  }"

        # Check for multiple factsAdvanced
        facts = re.findall(r"factsAdvanced:\s*\{[^{}]*?\}", obj, re.DOTALL)
        if len(facts) > 1:
            print(f"  Found {len(facts)} factsAdvanced blocks in an object")
            best_facts = facts[0]
            for f in facts:
                if 'en: []' not in f and 'en: ""' not in f:
                    best_facts = f
                    break
            for f in facts:
                obj = obj.replace(f, "")
            obj = obj.rstrip("}").rstrip() + ",\n    " + best_facts + "\n  }"
            
        # Clean up commas
        obj = re.sub(r",\s*,", ",", obj)
        return obj

    new_content = poi_pattern.sub(fix_poi, content)
    
    with open(file_path, "w") as f:
        f.write(new_content)

for f in files:
    if os.path.exists(f):
        deduplicate_in_file(f)
