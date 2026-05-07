import json

with open("lib/visualLab/data/romaniaPoi.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

missing = []
current_id = None
in_desc_adv = False
in_facts_adv = False

for line in lines:
    if "id: " in line:
        current_id = line.split("id:")[1].strip().strip(",").strip("\"").strip("'")
    elif "descriptionAdvanced:" in line:
        in_desc_adv = True
    elif "factsAdvanced:" in line:
        in_facts_adv = True
    elif in_desc_adv and "de: " in line:
        val = line.split("de:")[1].strip().strip(",").strip("\"").strip("'")
        if not val:
            missing.append((current_id, "desc"))
        in_desc_adv = False
    elif in_facts_adv and "de: " in line:
        val = line.split("de:")[1].strip().strip(",")
        if val == "[]" or val == '""':
            missing.append((current_id, "facts"))
        in_facts_adv = False

ids = sorted(list(set(id for id, t in missing)))
print("Missing for:", ids)
print("Count:", len(ids))
