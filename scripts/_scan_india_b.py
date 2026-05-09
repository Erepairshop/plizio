"""Scan India Economic/History/Landmarks V2 files for missing/empty descriptionAdvanced.en"""
import re, os, json

FILES = [
    "lib/visualLab/data/poiExtraIndiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraIndiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraIndiaLandmarksV2.ts",
]

ROOT = r"C:\Users\User\plizio-repo"

def scan(path):
    with open(os.path.join(ROOT, path), encoding="utf-8") as f:
        text = f.read()
    # split by top-level POI objects via id occurrences
    # Find each object by id field. Use a simple regex to chunk.
    # Each POI begins at "  {" and id: "..." inside
    # We'll find ids and surrounding text using object scanning.
    out = []
    # Find positions of '  {' that mark POI starts
    starts = [m.start() for m in re.finditer(r'^\s{2}\{$', text, flags=re.M)]
    starts.append(len(text))
    for i in range(len(starts)-1):
        chunk = text[starts[i]:starts[i+1]]
        m = re.search(r'id:\s*"([^"]+)"', chunk)
        if not m:
            continue
        poi_id = m.group(1)
        name_en_m = re.search(r'name:\s*\{[^}]*?en:\s*"([^"]+)"', chunk, re.S)
        name_en = name_en_m.group(1) if name_en_m else ""
        type_m = re.search(r'type:\s*"([^"]+)"', chunk)
        ptype = type_m.group(1) if type_m else ""
        parent_m = re.search(r'parent:\s*"([^"]+)"', chunk)
        parent = parent_m.group(1) if parent_m else ""
        # descriptionAdvanced.en
        da = re.search(r'descriptionAdvanced:\s*\{(.*?)\n\s{4}\}', chunk, re.S)
        en_desc = ""
        if da:
            block = da.group(1)
            en_m = re.search(r'en:\s*"((?:[^"\\]|\\.)*)"', block)
            if en_m:
                en_desc = en_m.group(1)
        # factsAdvanced.en
        fa = re.search(r'factsAdvanced:\s*\{(.*?)\n\s{4}\}', chunk, re.S)
        en_facts = []
        if fa:
            block = fa.group(1)
            en_m = re.search(r'en:\s*\[(.*?)\]', block, re.S)
            if en_m:
                en_facts = re.findall(r'"((?:[^"\\]|\\.)*)"', en_m.group(1))
        # detect template/empty
        wc = len(en_desc.split()) if en_desc else 0
        is_template = ("Regionally it captures" in en_desc) or ("characteristic features stand out" in en_desc) or ("characteristic examples of" in en_desc)
        facts_template = any("appears as a landmark on detailed maps" in f or "attracts many visitors each year from India" in f or "Local culture and language are closely tied" in f for f in en_facts)
        out.append({
            "id": poi_id,
            "name_en": name_en,
            "type": ptype,
            "parent": parent,
            "wc": wc,
            "is_template": is_template,
            "facts_count": len(en_facts),
            "facts_template": facts_template,
        })
    return out

for f in FILES:
    items = scan(f)
    todo = [i for i in items if i["wc"] < 50 or i["is_template"] or i["facts_template"] or i["facts_count"] < 6]
    print(f"\n=== {f} === total={len(items)} todo={len(todo)}")
    for i in todo:
        print(f"  {i['id']} | {i['name_en']} | type={i['type']} parent={i['parent']} | wc={i['wc']} tmpl={i['is_template']} facts={i['facts_count']}/{i['facts_template']}")
