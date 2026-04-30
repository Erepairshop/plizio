import re

file_path = "lib/visualLab/data/switzerlandPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find each POI object
poi_pattern = re.compile(r"\{[\s\S]*?id: \"(.*?)\"[\s\S]*?\}", re.MULTILINE)

# This pattern is too broad for the complex structure, let's use a simpler approach
# Since I am supposed to use apply_seo_json.py which I don't have, I will create a python script
# to parse the file and insert the fields where they are missing.

def inject_seo_fields(poi_match):
    full_poi = poi_match.group(0)
    
    # Check if descriptionAdvanced already exists
    if "descriptionAdvanced:" in full_poi:
        return full_poi
    
    # Simple injection after 'description: {' block
    # This is a bit fragile, but with the given structure it might work.
    
    # Let's find the closing brace of description: { ... },
    # and insert descriptionAdvanced and factsAdvanced there.
    
    # Find the position of 'description: {'
    description_start = full_poi.find("description: {")
    if description_start == -1:
        return full_poi
    
    # Find the closing brace of description
    # This is also fragile. Let's look for the next '},'
    description_end = full_poi.find("},", description_start)
    if description_end == -1:
        return full_poi
    
    insertion_point = description_end + 2
    
    new_fields = """
  descriptionAdvanced: {
    de: "...",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["...", "..."],
    hu: [],
    ro: [],
    en: []
  },"""
    
    return full_poi[:insertion_point] + new_fields + full_poi[insertion_point:]

# Wait, this is still complex to do reliably. 
# The user wants me to do this *now* for all POIs.
# I will use the 'replace' tool for each city/poi.

print("Use 'replace' for each POI.")
