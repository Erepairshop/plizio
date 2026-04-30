import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraOther.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find POIs in other file
pattern = re.compile(r"descriptionAdvanced:\s*\{\s*de:\s*\"\",\s*hu:\s*\"([^\"]+)\"", re.DOTALL)

# Let us find how many there are
matches = list(pattern.finditer(content))
print(f"Found {len(matches)} matches in poiExtraAndorraOther.ts")
