import re

with open("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraDominicanrepublicCitiesV2.ts", "r", encoding="utf-8") as f:
    content = f.read()

# This is a bit risky but given the pattern of corruption (randomly inserted `}descriptionAdvanced: {` etc)
# I will try to clean it up.
# Actually, it's safer to read the whole file, remove the broken bits, and write it back.
# The corruption seems to be: 
# }descriptionAdvanced: {
# }  de: "",
# etc.

# Let's try to remove all lines that match }descriptionAdvanced: { and its content until factsAdvanced ends.
# This is hard.
# Given the tool's capabilities, I should revert the changes to the file if possible, or just fix it.
# I will try to use git to revert and then apply it again correctly.
