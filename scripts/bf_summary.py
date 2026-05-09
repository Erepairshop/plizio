import re, json
p = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraBurkinaFasoCitiesV2.ts"
src = open(p, encoding="utf-8").read()
poi_re = re.compile(r'\{\s*id:\s*"([^"]+)"', re.S)
blocks = []
for m in poi_re.finditer(src):
    blocks.append((m.start(), m.group(1)))
need = []
for i, (start, pid) in enumerate(blocks):
    end = blocks[i+1][0] if i+1 < len(blocks) else len(src)
    block = src[start:end]
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    lang_status = {"de":0,"hu":0,"ro":0,"en":0}
    if m:
        i2 = m.end(); depth = 1
        while i2 < len(block) and depth > 0:
            c = block[i2]
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            i2 += 1
        inner = block[m.end():i2-1]
        for lg in ("de","hu","ro","en"):
            mm = re.search(r'\b'+lg+r':\s*"((?:[^"\\]|\\.)*)"', inner)
            if mm:
                lang_status[lg] = len(mm.group(1))
    missing = [lg for lg,v in lang_status.items() if v < 50]
    if missing:
        need.append((pid, missing, lang_status))

print("POIs needing fill:", len(need))
print("Total POIs:", len(blocks))
# count missing per lang
from collections import Counter
c = Counter()
for _, miss, _ in need:
    for lg in miss: c[lg]+=1
print("By lang:", dict(c))
print()
for pid, miss, st in need[:5]:
    print(pid, miss, st)
