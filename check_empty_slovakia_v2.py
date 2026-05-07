import re

for filename in ["lib/visualLab/data/slovakiaPoi.ts", "lib/visualLab/data/poiExtraSlovakiaCities.ts", "lib/visualLab/data/poiExtraSlovakiaHistory.ts", "lib/visualLab/data/poiExtraSlovakiaOther.ts"]:
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = re.split(r'id:\s*"([^"]+)"', content)[1:]
    missing_desc_en = []
    missing_facts_en = []

    for i in range(0, len(blocks), 2):
        poi_id = blocks[i]
        body = blocks[i+1]
        
        desc_adv = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', body, re.DOTALL)
        if desc_adv:
            if not re.search(r'en:\s*".*?"', desc_adv.group(1), re.DOTALL) or re.search(r'en:\s*""', desc_adv.group(1)):
                missing_desc_en.append(poi_id)
        else:
            missing_desc_en.append(poi_id)
            
        facts_adv = re.search(r'factsAdvanced:\s*\{(.*?)\}', body, re.DOTALL)
        if facts_adv:
            if not re.search(r'en:\s*\[.*?\]', facts_adv.group(1), re.DOTALL) or re.search(r'en:\s*\[\]', facts_adv.group(1)):
                missing_facts_en.append(poi_id)
        else:
            missing_facts_en.append(poi_id)

    print(f"--- {filename} ---")
    print(f"Missing desc_en ({len(missing_desc_en)}):", missing_desc_en)
    print(f"Missing facts_en ({len(missing_facts_en)}):", missing_facts_en)
