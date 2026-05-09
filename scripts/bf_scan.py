import re, json
p = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraBurkinaFasoCitiesV2.ts"
src = open(p, encoding="utf-8").read()

# Find each POI block by id
poi_re = re.compile(r'\{\s*id:\s*"([^"]+)"', re.S)
blocks = []
for m in poi_re.finditer(src):
    blocks.append((m.start(), m.group(1)))

# Compute end as next start or len
results = []
for i, (start, pid) in enumerate(blocks):
    end = blocks[i+1][0] if i+1 < len(blocks) else len(src)
    block = src[start:end]
    # find descriptionAdvanced: { ... } - balance braces
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    status = {"id": pid, "has": False, "lang": {}}
    if m:
        # find matching brace
        i2 = m.end()
        depth = 1
        while i2 < len(block) and depth > 0:
            c = block[i2]
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            i2 += 1
        inner = block[m.end():i2-1]
        status["has"] = True
        # find each lang: "..."
        for lg in ("de","hu","ro","en"):
            mm = re.search(r'\b'+lg+r':\s*"((?:[^"\\]|\\.)*)"', inner)
            if mm:
                txt = mm.group(1)
                # unescape minimally
                txt2 = txt.encode('utf-8').decode('unicode_escape', errors='ignore') if '\\' in txt else txt
                status["lang"][lg] = len(txt)
            else:
                status["lang"][lg] = 0
    results.append(status)

print(json.dumps(results, ensure_ascii=False, indent=1))
print("TOTAL:", len(results))
