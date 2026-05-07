import os

files = [
    "lib/visualLab/data/poiExtraSenegalCitiesV2.ts",
    "lib/visualLab/data/poiExtraSenegalEconomicV2.ts",
    "lib/visualLab/data/poiExtraSenegalHistoryV2.ts",
    "lib/visualLab/data/poiExtraSenegalLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSenegalLifeV2.ts",
    "lib/visualLab/data/poiExtraSenegalNatureV2.ts",
    "lib/visualLab/data/poiExtraSenegalReliefV2.ts"
]

def fix_mojibake(file_path):
    print(f"Fixing mojibake in {file_path}...")
    with open(file_path, "rb") as f:
        bytes_content = f.read()
    
    # If the file contains sequence like C3 83 C2 A1 (Ã¡ in double encoding)
    # or just looks like it was saved as Latin-1 when it was UTF-8.
    
    try:
        # Try decoding as UTF-8 first
        text = bytes_content.decode('utf-8')
        # If it contains "Ã¡", "Ã©", etc., it is mojibake.
        if "Ã" in text or "Å" in text or "Â" in text or "È" in text or "É" in text:
            # Re-encode to Latin-1 and decode as UTF-8
            fixed_text = text.encode('latin-1').decode('utf-8')
            print(f"  Fixed mojibake in {file_path}")
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(fixed_text)
    except Exception as e:
        print(f"  Failed to fix {file_path}: {e}")

for f in files:
    if os.path.exists(f):
        fix_mojibake(f)
