import re
src=open(r'C:/Users/User/plizio-repo/lib/visualLab/data/poiExtraBurkinaFasoCitiesV2.ts',encoding='utf-8').read()
poi_re = re.compile(r'\{\s*id:\s*"([^"]+)"', re.S)
blocks = []
for m in poi_re.finditer(src):
    blocks.append((m.start(), m.group(1)))
mn = 99999; mx = 0; under = 0; total_lang = 0
for i,(s,pid) in enumerate(blocks):
    e = blocks[i+1][0] if i+1 < len(blocks) else len(src)
    block = src[s:e]
    m = re.search(r'descriptionAdvanced:\s*\{', block)
    if not m: continue
    i2 = m.end(); depth = 1
    while i2 < len(block) and depth > 0:
        c = block[i2]
        if c == '{': depth += 1
        elif c == '}': depth -= 1
        i2 += 1
    inner = block[m.end():i2-1]
    for lg in ('de','hu','ro','en'):
        mm = re.search(r'\b'+lg+r':\s*"((?:[^"\\]|\\.)*)"', inner)
        if mm:
            L = len(mm.group(1))
            total_lang += 1
            if L < mn: mn = L
            if L > mx: mx = L
            if L < 600: under += 1
print('total lang slots:', total_lang, 'min:', mn, 'max:', mx, 'under-600:', under)
