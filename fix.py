import re

with open("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraDominicanrepublicCitiesV2.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace all }descriptionAdvanced: { with descriptionAdvanced: {
content = content.replace("}descriptionAdvanced: {", "descriptionAdvanced: {")
# Remove all the "} " that were inserted wrongly.
content = re.sub(r'\}  ', '  ', content)
content = re.sub(r'\}', '', content, count=1) # Need to be careful.

with open("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraDominicanrepublicCitiesV2.ts", "w", encoding="utf-8") as f:
    f.write(content)
