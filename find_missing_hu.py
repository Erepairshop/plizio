import re

def find_pois(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract blocks that look like POI objects
    pois = re.findall(r"\{.*?id:\s*\"(.*?)\".*?descriptionAdvanced:\s*\{[\s\S]*?hu:\s*\"(.*?)\".*?\}", content, re.DOTALL)
    
    missing = []
    for p_id, hu_content in pois:
        if not hu_content.strip():
            missing.append(p_id)
    return missing

all_files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

for f in all_files:
    print(f"{f}: {find_pois(f)}")
