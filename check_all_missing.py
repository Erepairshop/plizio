import re
import glob

files = glob.glob("lib/visualLab/data/poiExtraEcuador*.ts")
for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Split by POI entry - rough check. 
    # Assumes POIs are objects starting with '  {'
    # This might need refinement depending on the actual formatting in those files.
    pois = re.split(r'  \{', content)
    for poi in pois:
        if 'id:' in poi and 'descriptionAdvanced:' not in poi:
            poi_id = re.search(r'id: "([^"]+)"', poi)
            if poi_id:
                print(f"{file}: {poi_id.group(1)}")
