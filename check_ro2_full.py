
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by POI objects
# This regex is a bit more robust for the specific formatting
poi_objs = re.findall(r'\{\s*id:\s*"([^"]+)",(.*?)\n  \}', content, re.DOTALL)

targets = []
for poi_id, body in poi_objs:
    # Check if hu descriptionAdvanced is empty or missing
    da_match = re.search(r'descriptionAdvanced:\s*\{([^}]+)\}', body, re.DOTALL)
    if not da_match:
        targets.append((poi_id, "Missing descriptionAdvanced"))
        continue
        
    da_content = da_match.group(1)
    hu_match = re.search(r'hu:\s*"([^"]*)"', da_content)
    if not hu_match:
        targets.append((poi_id, "Missing hu field in descriptionAdvanced"))
    elif hu_match.group(1).strip() == "":
        targets.append((poi_id, "Empty hu field in descriptionAdvanced"))

print(f"Total POIs found: {len(poi_objs)}")
print(f"Targets: {len(targets)}")
for t_id, reason in targets:
    print(f"{t_id}: {reason}")
