import re

with open("lib/visualLab/data/finlandPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Define the pattern to find POIs that might need the update
# Look for descriptionAdvanced with empty en
# This is a bit complex due to the object structure.
# A manual approach per POI or batching might be safer.
# Let's try to identify all descriptionAdvanced blocks and check for empty en.
