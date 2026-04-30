import re
import os

files = ["lib/visualLab/data/poiExtraMaltaCities.ts", "lib/visualLab/data/poiExtraMaltaHistory.ts", "lib/visualLab/data/poiExtraMaltaOther.ts"]

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Repair logic: find all factsAdvanced blocks and merge
    # This is still risky. Maybe I can just use a simple regex to replace the duplicate ones?
    # No, that will be too messy.
    
    print(f"Skipping automated repair for now, manual check required.")

