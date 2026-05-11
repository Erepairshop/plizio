import re, sys, io, os, json
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

def lang_filled_str(body, lang):
    em = re.search(rf'\b{lang}\s*:\s*"([^"]*)"', body)
    return bool(em and em.group(1).strip())

def lang_filled_arr(body, lang):
    fm = re.search(rf'\b{lang}\s*:\s*\[(.*?)\]', body, re.DOTALL)
    return bool(fm and fm.group(1).strip())

def scan(file, langs_basic=None, check_seo_langs=None):
    path = os.path.join(DATA, file)
    if not os.path.exists(path):
        print(f"!! Missing file {file}")
        return
    txt = open(path, encoding='utf-8').read()
    ids = re.findall(r'\bid\s*:\s*["\']([^"\']+)["\']', txt)
    seen = set(); uniq = [i for i in ids if not (i in seen or seen.add(i))]
    print(f"\n=== {file} ({len(uniq)} POIs) ===")
    for pid in uniq:
        blk = find_block(txt, pid)
        if not blk: continue
        def grab(label, text):
            m = re.search(rf'\b{label}\s*:\s*\{{', text)
            if not m: return None
            i = m.end()-1; depth=0
            while i < len(text):
                c = text[i]
                if c == '{': depth += 1
                elif c == '}':
                    depth -= 1
                    if depth == 0:
                        # return body without braces
                        # find inner start
                        return text[m.end():i]
                i += 1
            return None
        # avoid matching factsAdvanced when looking for facts
        # split: find descriptionAdvanced first, then strip from blk for description search
        da_body = grab('descriptionAdvanced', blk)
        fa_body = grab('factsAdvanced', blk)
        # remove advanced sections from blk for plain description/facts search
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
        d_body = grab('description', clean)
        f_body = grab('facts', clean)
        class M:
            def __init__(self, body): self.body=body
            def group(self,_): return self.body
        da_match = M(da_body) if da_body is not None else None
        fa_match = M(fa_body) if fa_body is not None else None
        d_match = M(d_body) if d_body is not None else None
        f_match = M(f_body) if f_body is not None else None
        problems = []
        if check_seo_langs:
            for L in check_seo_langs:
                if not (da_match and lang_filled_str(da_match.group(1), L)):
                    problems.append(f"SEO-desc-{L}")
                if not (fa_match and lang_filled_arr(fa_match.group(1), L)):
                    problems.append(f"SEO-facts-{L}")
        if langs_basic:
            for L in langs_basic:
                if not (d_match and lang_filled_str(d_match.group(1), L)):
                    problems.append(f"basic-desc-{L}")
                if not (f_match and lang_filled_arr(f_match.group(1), L)):
                    problems.append(f"basic-facts-{L}")
        if problems:
            print(f"  {pid}: {', '.join(problems)}")

# Argentina SEO: 1 POI hu descA+factsA
scan('poiExtraArgentinaNatureV2.ts', check_seo_langs=['hu'])

# Angola basic: 2 POI hu, 1 POI de desc+facts
scan('poiExtraAngolaReliefV2.ts', langs_basic=['hu','de'])

# Benin basic
scan('poiExtraBeninHistoryV2.ts', langs_basic=['de','en'])
scan('poiExtraBeninLandmarksV2.ts', langs_basic=['de','en'])
scan('poiExtraBeninNatureV2.ts', langs_basic=['de','en','ro'])

# Bhutan basic
scan('poiExtraBhutanHistoryV2.ts', langs_basic=['de','en'])
