import re, json, sys

PATH = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraLibyaCitiesV2.ts"
with open(PATH, "r", encoding="utf-8") as f:
    src = f.read()

# Find all POI blocks: id: "..." and their descriptionAdvanced
# We'll iterate POI blocks by splitting on "    id:"
poi_re = re.compile(r"id:\s*\"([a-z0-9\-]+)\"")
ids = [m.group(1) for m in poi_re.finditer(src)]

# For each id find descriptionAdvanced span
results = []
for m in poi_re.finditer(src):
    pid = m.group(1)
    start = m.start()
    # find descriptionAdvanced after start
    da = re.search(r"descriptionAdvanced:\s*\{", src[start:start+8000])
    if not da:
        results.append({"id": pid, "lens": None})
        continue
    # parse the object
    obj_start = start + da.end() - 1  # position of '{'
    # find matching brace
    depth = 0
    i = obj_start
    in_str = False
    quote = None
    esc = False
    while i < len(src):
        c = src[i]
        if esc:
            esc = False
        elif c == '\\':
            esc = True
        elif in_str:
            if c == quote:
                in_str = False
        else:
            if c == '"' or c == "'":
                in_str = True
                quote = c
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    break
        i += 1
    body = src[obj_start+1:i]
    # extract per-lang
    lens = {}
    for lang in ("de","hu","ro","en"):
        # match: lang: "..."
        lm = re.search(rf'\b{lang}:\s*"((?:[^"\\]|\\.)*)"', body)
        lens[lang] = len(lm.group(1)) if lm else 0
    results.append({"id": pid, "lens": lens})

print(f"TOTAL POIs: {len(results)}")
needs = []
for r in results:
    if r["lens"] is None:
        print(f"  MISSING block: {r['id']}")
        needs.append((r["id"], ["de","hu","ro","en"]))
        continue
    short = [l for l,n in r["lens"].items() if n < 50]
    below600 = {l:n for l,n in r["lens"].items() if n < 600}
    if short:
        needs.append((r["id"], short))
    if below600:
        print(f"  {r['id']} <600: {below600}")
print(f"POIs needing fill: {len(needs)}")
for pid, langs in needs:
    print(f"  {pid}: {langs}")
print(f"\nALL IDs: {[r['id'] for r in results]}")
