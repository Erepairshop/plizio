import os
import re
import glob

# Path to the grade games directory
games_dir = "/home/borota25/Desktop/plizio/app/astromath/games"
config_dir = "/home/borota25/Desktop/plizio/lib/mathConfigs"

if not os.path.exists(config_dir):
    os.makedirs(config_dir)

for grade in range(1, 9):
    # Find all Explorer files for this grade
    if grade == 1:
        pattern = os.path.join(games_dir, "*Explorer.tsx")
        # Handle exceptions like PlaceValue20Explorer or G1TeachingSlide
    else:
        pattern = os.path.join(games_dir, f"*Explorer{grade}.tsx")
    
    files = glob.glob(pattern)
    
    # We will also include ones that might not have grade suffix but are actually for this grade (this is tricky)
    # So we'll parse the file to find `grade={X}` in `<ExplorerEngine ... />`
    
all_explorer_files = glob.glob(os.path.join(games_dir, "*Explorer*.tsx"))

grade_files = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []}

for file in all_explorer_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    grade_match = re.search(r'grade=\{([1-8])\}', content)
    if grade_match:
        g = int(grade_match.group(1))
        grade_files[g].append(file)

print("Files per grade:")
for g, files in grade_files.items():
    print(f"Grade {g}: {len(files)} files")

# For now, let's just generate a script that reads these and tries to extract DEF
# It's safer to do this semi-automatically or manually if the structure varies.
