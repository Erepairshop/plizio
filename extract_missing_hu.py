import re
import json

with open("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

pois = []
# split by "id:" to get blocks
parts = content.split('id: "')
for part in parts[1:]:
    id_match = re.match(r'([^"]+)', part)
    if not id_match: continue
    poi_id = id_match.group(1)
    
    # check if it lacks descriptionAdvanced.hu or factsAdvanced.hu
    # A bit hard with naive split. Let's use a simpler check:
    # If this part has descriptionAdvanced: { ... hu: "" ... } or no descriptionAdvanced at all.
    # Actually, we know from my previous wc/grep that ALL 234 POIs have empty descriptionAdvanced.hu? No, let's verify.
