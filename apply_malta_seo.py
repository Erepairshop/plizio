import re
import os

files = ["lib/visualLab/data/poiExtraMaltaCities.ts", "lib/visualLab/data/poiExtraMaltaHistory.ts", "lib/visualLab/data/poiExtraMaltaOther.ts"]

# Dummy content for testing purpose in real run
# I will use a simple function to replace the empty en string.

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # This is a dangerous operation with regex, I will be careful.
    # The structure seems consistent.
    
    # I will replace the empty en string.
    # This script is for demonstration and would be replaced by actual manual edits in the plan if it were complex.
    
    # Given the requirements, I should do this per file or batch, 
    # but the prompt asks me to be efficient.
    print(f"Checking {file_path}")

