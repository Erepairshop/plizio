import re, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
DATA = 'C:/Users/User/plizio-repo/lib/visualLab/data'

def find_blocks(txt):
    ids = re.findall(r'\bid\s*:\s*["\']([^"\']+)["\']', txt)
    return ids

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

def scan_file(file, langs=('hu','de','en','ro')):
    path = os.path.join(DATA, file)
    txt = open(path, encoding='utf-8').read()
    ids = find_blocks(txt)
    seen=set(); uniq=[i for i in ids if not(i in seen or seen.add(i))]
    print(f"\n=== {file} ===")
    for pid in uniq:
        blk = find_block(txt, pid)
        if not blk: continue
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
        d = get_section(clean, 'description')
        f = get_section(clean, 'facts')
        da = get_section(blk, 'descriptionAdvanced')
        fa = get_section(blk, 'factsAdvanced')
        report=[]
        for L in langs:
            # basic desc
            if d:
                em = re.search(rf'\b{L}\s*:\s*"([^"]*)"', d)
                if not em: report.append(f"d-{L}=MISSING")
                elif not em.group(1).strip(): report.append(f"d-{L}=EMPTY")
            else:
                report.append(f"d-NO-OBJECT")
            # basic facts
            if f:
                fm = re.search(rf'\b{L}\s*:\s*\[(.*?)\]', f, re.DOTALL)
                if not fm: report.append(f"f-{L}=MISSING")
                elif not re.search(r'"[^"]+"', fm.group(1)): report.append(f"f-{L}=EMPTY")
            # advanced
            if da:
                em = re.search(rf'\b{L}\s*:\s*"([^"]*)"', da)
                if not em: report.append(f"DA-{L}=MISSING")
                elif not em.group(1).strip(): report.append(f"DA-{L}=EMPTY")
            if fa:
                fm = re.search(rf'\b{L}\s*:\s*\[(.*?)\]', fa, re.DOTALL)
                if not fm:
                    # could be multi4
                    if not re.search(r'\bmulti4\s*:\s*\[', fa):
                        report.append(f"FA-{L}=MISSING")
                elif not re.search(r'"[^"]+"', fm.group(1)): report.append(f"FA-{L}=EMPTY")
        if report:
            print(f"  {pid}: {report}")

for f in ['poiExtraArgentinaNatureV2.ts','poiExtraAngolaReliefV2.ts','poiExtraBeninHistoryV2.ts','poiExtraBeninLandmarksV2.ts','poiExtraBeninNatureV2.ts','poiExtraBhutanHistoryV2.ts']:
    scan_file(f)
