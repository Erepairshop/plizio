import re, json
from pathlib import Path
data_dir = Path('C:/Users/User/plizio-repo/lib/visualLab/data')
files = [
  'poiExtraBahrainEconomicV2.ts',
  'poiExtraBurkinafasoEconomicV2.ts',
  'poiExtraBurkinafasoHistoryV2.ts',
  'poiExtraBurkinafasoNatureV2.ts',
  'poiExtraBurkinafasoLifeV2.ts',
  'poiExtraBurkinafasoReliefV2.ts',
  'poiExtraBurundiCitiesV2.ts',
]

def find_poi_blocks(text):
    # Find each `id: "xxx"` then walk back to find enclosing { and forward to matching }
    out = []
    for m in re.finditer(r'\bid\s*:\s*[\"\']([^\"\']+)[\"\']', text):
        pid = m.group(1)
        # walk back to find {
        i = m.start()
        depth = 0
        start = None
        while i >= 0:
            c = text[i]
            if c == '}': depth += 1
            elif c == '{':
                if depth == 0:
                    start = i; break
                depth -= 1
            i -= 1
        if start is None: continue
        # walk forward
        depth = 0
        j = start
        end = None
        while j < len(text):
            c = text[j]
            if c == '{': depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end = j+1; break
            j += 1
        if end:
            out.append((pid, start, end, text[start:end]))
    return out

for fn in files:
    txt = (data_dir/fn).read_text(encoding='utf-8')
    blocks = find_poi_blocks(txt)
    # dedupe by id (first occurrence)
    seen = set()
    uniq = []
    for b in blocks:
        if b[0] in seen: continue
        seen.add(b[0]); uniq.append(b)
    print(f'\n=== {fn}: {len(uniq)} POIs ===')
    for pid, s, e, blk in uniq:
        # check descAdv
        da = re.search(r'descriptionAdvanced\s*:\s*\{([^{}]*(?:\{[^}]*\}[^{}]*)*)\}', blk, re.DOTALL)
        fa = re.search(r'factsAdvanced\s*:\s*\{([^{}]*(?:\{[^}]*\}[^{}]*)*)\}', blk, re.DOTALL)
        d_basic = re.search(r'(?<![A-Za-z])description\s*:\s*\{([^{}]*(?:\{[^}]*\}[^{}]*)*)\}', blk, re.DOTALL)
        f_basic = re.search(r'(?<![A-Za-z])facts\s*:\s*\{([^{}]*(?:\{[^}]*\}[^{}]*)*)\}', blk, re.DOTALL)
        missing = []
        for L in ('de','hu','ro','en'):
            # advanced desc
            if not da:
                missing.append(f'DA-{L}')
            else:
                lm = re.search(rf'\b{L}\s*:\s*[\"\']([^\"\']*)[\"\']', da.group(1))
                if not lm or not lm.group(1).strip():
                    missing.append(f'DA-{L}')
            if not fa:
                missing.append(f'FA-{L}')
            else:
                lm = re.search(rf'\b{L}\s*:\s*\[(.*?)\]', fa.group(1), re.DOTALL)
                if not lm or not lm.group(1).strip():
                    missing.append(f'FA-{L}')
            if not d_basic:
                missing.append(f'D-{L}')
            else:
                lm = re.search(rf'\b{L}\s*:\s*[\"\']([^\"\']*)[\"\']', d_basic.group(1))
                if not lm or not lm.group(1).strip():
                    missing.append(f'D-{L}')
            if not f_basic:
                missing.append(f'F-{L}')
            else:
                lm = re.search(rf'\b{L}\s*:\s*\[(.*?)\]', f_basic.group(1), re.DOTALL)
                if not lm or not lm.group(1).strip():
                    missing.append(f'F-{L}')
        if missing:
            print(f'  {pid}: {",".join(missing)}')
