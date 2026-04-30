import re
import json

file_path = 'lib/visualLab/data/poiExtraBelizeHistoryV2.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# This is a very targeted fix for the broken structures seen in the read_file output.
# We want to identify the POI blocks and clean them up.

# The broken pattern seems to be:
# name: { ... , descriptionAdvanced: { ... }, factsAdvanced: { ... } } }, description: { ... }, facts: { ... }, descriptionAdvanced: { ... }, factsAdvanced: { ... }

# I will try to extract the POIs by ID and then rebuild them.
poi_ids = re.findall(r'id:\s*"(.*?)"', content)
print(f"Found {len(poi_ids)} POIs")

# For each POI, I'll try to find its components.
# This is hard because of the corruption.

# Let's try to split the content by 'id: "' and then process each segment.
segments = content.split('{')
# The first segment is the header.
header = segments[0]

# Actually, a better way is to use a state machine or a more robust regex if possible.
# But since I know the specific corruption (missing } in name, extra } after factsAdvanced), I can try to fix it.

# Step 1: Fix the 'name' field that lacks a closing brace.
# Look for: name: { ... , descriptionAdvanced:
fixed_content = re.sub(r'name:\s*({[^{}]*?),?\s*descriptionAdvanced:', r'name: \1 },\n    descriptionAdvanced:', content)

# Step 2: Fix the double commas and extra closing braces.
fixed_content = fixed_content.replace('} },\n    description:', '},\n    description:')
fixed_content = fixed_content.replace('},,', '},')

# Step 3: Remove duplicate descriptionAdvanced and factsAdvanced blocks within the same POI.
# This is tricky with regex.

# Let's write the fixed content to a temp file and see if it looks better.
with open('temp_fixed.ts', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("Wrote temp_fixed.ts")
