import re
with open(r'C:/Users/User/plizio-repo/lib/visualLab/data/poiExtraMadagascarCitiesV2.ts','r',encoding='utf-8') as f:
    txt = f.read()
ids = re.findall(r'id:\s*"([^"]+)"', txt)
print('total:', len(ids))
positions = [m.start() for m in re.finditer(r'\{\s*\n?\s*id:\s*"', txt)]
positions.append(len(txt))
for i in range(min(30, len(ids))):
    block = txt[positions[i]:positions[i+1]]
    m = re.search(r'descriptionAdvanced\s*:\s*\{', block)
    if not m:
        print(i+1, ids[i], 'NO_DA')
        continue
    sub = block[m.end():]
    de_match = re.search(r'de\s*:\s*"((?:[^"\\]|\\.)*)"', sub)
    if not de_match:
        print(i+1, ids[i], 'NO_DE')
        continue
    de_text = de_match.group(1)
    wc = len(de_text.split())
    # check factsAdvanced.de
    fa = re.search(r'factsAdvanced\s*:\s*\{', block)
    fa_count = 0
    if fa:
        fa_sub = block[fa.end():]
        de_arr = re.search(r'de\s*:\s*\[((?:[^\]\\]|\\.)*)\]', fa_sub)
        if de_arr:
            fa_count = len(re.findall(r'"', de_arr.group(1))) // 2
    print(i+1, ids[i], 'desc_wc=', wc, 'facts=', fa_count)
