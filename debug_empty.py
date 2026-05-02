import re
files = [
    "lib/visualLab/data/portugalPoi.ts",
    "lib/visualLab/data/poiExtraPortugalCities.ts",
    "lib/visualLab/data/poiExtraPortugalFinal.ts",
    "lib/visualLab/data/poiExtraPortugalHistorical.ts",
    "lib/visualLab/data/poiExtraPortugalIndustry.ts",
    "lib/visualLab/data/poiExtraPortugalMixed.ts",
    "lib/visualLab/data/poiExtraPortugalNature.ts"
]
for f in files:
    try:
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            matches = re.finditer(r'(["\']?)id\1\s*:\s*["\']([^"\']+)["\'](.*?(?=(?:["\']?)id\1\s*:|\Z))', content, re.DOTALL)
            for m in matches:
                poi_id = m.group(2)
                b = m.group(3)
                desc = re.search(r'"?descriptionAdvanced"?\s*:\s*\{([^}]+)\}', b)
                if desc:
                    ro_match = re.search(r'"?ro"?\s*:\s*["\']([^"\']*)["\']', desc.group(1))
                    if ro_match and ro_match.group(1).strip() == "":
                        en_match = re.search(r'"?en"?\s*:\s*["\']([^"\']*)["\']', desc.group(1))
                        de_match = re.search(r'"?de"?\s*:\s*["\']([^"\']*)["\']', desc.group(1))
                        en_text = en_match.group(1) if en_match else ""
                        de_text = de_match.group(1) if de_match else ""
                        if en_text.strip() == "" and de_text.strip() == "":
                            print(f"{poi_id} has empty EN and DE descriptionAdvanced!")
                else:
                    print(f"{poi_id} has NO descriptionAdvanced!")
    except Exception as e:
        pass
