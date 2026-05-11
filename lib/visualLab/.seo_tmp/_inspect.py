import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
txt = open('C:/Users/User/plizio-repo/lib/visualLab/data/poiExtraBurundiCitiesV2.ts', encoding='utf-8').read()
# find every POI's en descA status, plus basic D-hu/F-hu status
ids = re.findall(r'\bid\s*:\s*["\']([^"\']+)["\']', txt)
seen = set(); uniq = [i for i in ids if not (i in seen or seen.add(i))]

def find_block(text, pid):
    m = re.search(rf'\bid\s*:\s*["\']{re.escape(pid)}["\']', text)
    if not m: return None
    i = m.start(); depth = 0
    while i >= 0:
        c = text[i]
        if c == '}': depth += 1
        elif c == '{':
            if depth == 0: start = i; break
            depth -= 1
        i -= 1
    j = start; depth = 0
    while j < len(text):
        c = text[j]
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: return text[start:j+1]
        j += 1
    return None

en_missing = []
hu_basic_missing = []
for pid in uniq:
    blk = find_block(txt, pid)
    if not blk: continue
    # Has descriptionAdvanced.en?
    da_match = re.search(r'descriptionAdvanced\s*:\s*\{(.*?)\}\s*,', blk, re.DOTALL)
    da_en_filled = False
    if da_match:
        body = da_match.group(1)
        em = re.search(r'\ben\s*:\s*"([^"]*)"', body)
        if em and em.group(1).strip(): da_en_filled = True
    if not da_en_filled:
        en_missing.append(pid)
    # Has description (basic) hu filled?
    d_match = re.search(r'(?<!Advanced)\bdescription\s*:\s*\{(.*?)\}\s*,', blk, re.DOTALL)
    hu_filled = False
    if d_match:
        body = d_match.group(1)
        hm = re.search(r'\bhu\s*:\s*"([^"]*)"', body)
        if hm and hm.group(1).strip(): hu_filled = True
    f_match = re.search(r'(?<!Advanced)\bfacts\s*:\s*\{(.*?)\}\s*,', blk, re.DOTALL)
    hu_facts_filled = False
    if f_match:
        body = f_match.group(1)
        fm = re.search(r'\bhu\s*:\s*\[(.*?)\]', body, re.DOTALL)
        if fm and fm.group(1).strip(): hu_facts_filled = True
    if not (hu_filled and hu_facts_filled):
        hu_basic_missing.append((pid, hu_filled, hu_facts_filled))

print(f"EN-descA missing ({len(en_missing)}):")
for p in en_missing: print(f"  {p}")
print(f"\nHU-basic missing ({len(hu_basic_missing)}):")
for p,d,f in hu_basic_missing: print(f"  {p}: d={d} f={f}")
