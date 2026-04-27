import re
import glob

files = glob.glob("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraDe*.ts")

total_empty = 0
for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Split by POI objects approximately
    pois = re.split(r'id:\s*"', content)
    empty_count = 0
    for poi in pois[1:]:
        if 'descriptionAdvanced:' in poi:
            # find de: inside descriptionAdvanced
            adv_match = re.search(r'descriptionAdvanced:\s*\{[^\}]*de:\s*"([^"]*)"', poi, re.DOTALL)
            if not adv_match or not adv_match.group(1).strip():
                empty_count += 1
        else:
            empty_count += 1
            
    print(f"{f}: {empty_count} need update")
    total_empty += empty_count

print(f"Total needing update: {total_empty}")
