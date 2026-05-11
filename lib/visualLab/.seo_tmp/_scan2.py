import re, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
DATA = 'C:/Users/User/plizio-repo/lib/visualLab/data'

def find_block(text, pid):
    m = re.search(rf'\bid\s*:\s*["\']{re.escape(pid)}["\']', text)
    if not m: return None
    i = m.start(); depth = 0; start=None
    while i >= 0:
        c = text[i]
        if c == '}': depth += 1
        elif c == '{':
            if depth == 0: start = i; break
            depth -= 1
        i -= 1
    if start is None: return None
    j = start; depth = 0
    while j < len(text):
        c = text[j]
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: return text[start:j+1]
        j += 1
    return None

def get_section(blk, label):
    m = re.search(rf'\b{label}\s*:\s*\{{', blk)
    if not m: return None
    i=m.end()-1; depth=0
    while i<len(blk):
        c=blk[i]
        if c=='{': depth+=1
        elif c=='}':
            depth-=1
            if depth==0:
                return blk[m.end():i]
        i+=1
    return None

def has_lang_str(body, L):
    if body is None: return False
    em = re.search(rf'\b{L}\s*:\s*"([^"]*)"', body)
    return bool(em and em.group(1).strip())

def has_lang_arr(body, L):
    if body is None: return False
    fm = re.search(rf'\b{L}\s*:\s*\[(.*?)\]', body, re.DOTALL)
    if not fm: return False
    inner = fm.group(1).strip()
    if not inner: return False
    # check non-empty entries
    return bool(re.search(r'"[^"]+"', inner))

def scan(file, langs_basic=None, langs_seo=None):
    path = os.path.join(DATA, file)
    txt = open(path, encoding='utf-8').read()
    ids = re.findall(r'\bid\s*:\s*["\']([^"\']+)["\']', txt)
    seen = set(); uniq = [i for i in ids if not (i in seen or seen.add(i))]
    print(f"\n=== {file} ===")
    for pid in uniq:
        blk = find_block(txt, pid)
        if not blk: continue
        # remove advanced sections from clean for plain checks
        clean = blk
        for label in ('descriptionAdvanced','factsAdvanced'):
            m = re.search(rf'\b{label}\s*:\s*\{{', clean)
            if m:
                i=m.end()-1; depth=0
                while i<len(clean):
                    c=clean[i]
                    if c=='{': depth+=1
                    elif c=='}':
                        depth-=1
                        if depth==0:
                            clean = clean[:m.start()] + clean[i+1:]
                            break
                    i+=1
        da = get_section(blk, 'descriptionAdvanced')
        fa = get_section(blk, 'factsAdvanced')
        d = get_section(clean, 'description')
        f = get_section(clean, 'facts')
        problems = []
        if langs_seo:
            for L in langs_seo:
                if not has_lang_str(da, L): problems.append(f"SEO-d-{L}")
                if not has_lang_arr(fa, L): problems.append(f"SEO-f-{L}")
        if langs_basic:
            for L in langs_basic:
                if not has_lang_str(d, L): problems.append(f"d-{L}")
                if not has_lang_arr(f, L): problems.append(f"f-{L}")
        if problems:
            print(f"  {pid}: {','.join(problems)}")

scan('poiExtraArgentinaNatureV2.ts', langs_seo=['hu','en','de','ro'])
scan('poiExtraAngolaReliefV2.ts', langs_basic=['hu','de','en','ro'])
scan('poiExtraBeninHistoryV2.ts', langs_basic=['de','en','hu','ro'])
scan('poiExtraBeninLandmarksV2.ts', langs_basic=['de','en','hu','ro'])
scan('poiExtraBeninNatureV2.ts', langs_basic=['de','en','ro','hu'])
scan('poiExtraBhutanHistoryV2.ts', langs_basic=['de','en','hu','ro'])
