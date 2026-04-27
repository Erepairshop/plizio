"""
Pinterest bulk-upload CSV generator.
Walks out/{lang}/{country}/{state}/{poi}/index.html — extracts og meta —
writes Pinterest-compliant CSV per (lang, country) batched at 200 rows max.

Pinterest CSV columns:
  Title (req, ≤100), Media URL (req), Pinterest board (req),
  Miniaturansicht, Beschreibung (≤500), Link, Publish date, Keywords
"""
import os, re, csv, html, glob

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.normpath(os.path.join(ROOT, '..', 'out'))
LANGS = ['de', 'hu', 'ro', 'en']
BOARD_NAMES = {
    'de': 'Plizio DE',
    'hu': 'Plizio HU',
    'ro': 'Plizio RO',
    'en': 'Plizio EN',
}
BATCH = 200

def grab(html_text, pattern):
    m = re.search(pattern, html_text)
    if not m:
        return ''
    return html.unescape(m.group(1)).replace('"', "'").replace('\n', ' ').strip()

def extract(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    title = grab(text, r'property="og:title"[^>]*content="([^"]+)"')
    image = grab(text, r'property="og:image"[^>]*content="([^"]+)"')
    url = grab(text, r'property="og:url"[^>]*content="([^"]+)"')
    desc = grab(text, r'name="description"[^>]*content="([^"]+)"')
    if not (title and image and url):
        return None
    if not image.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')):
        return None
    # Skip 404/fallback pages (generic PLIZIO branding, no POI-specific content)
    if 'Free Online Browser Games' in title or 'Play Instantly' in title:
        return None
    if image.endswith('/icon-512.png') or url.rstrip('/') == 'https://plizio.com':
        return None
    return {'title': title[:100], 'image': image, 'url': url, 'desc': desc[:500]}

def main():
    if not os.path.isdir(OUT_DIR):
        print(f'No out/ dir at {OUT_DIR}')
        return
    summary = {}
    for lang in LANGS:
        lang_root = os.path.join(OUT_DIR, lang)
        if not os.path.isdir(lang_root):
            continue
        # POI pages: out/{lang}/{country}/{state}/{poi}/index.html
        pattern = os.path.join(lang_root, '*', '*', '*', 'index.html')
        files = glob.glob(pattern)
        rows_by_country = {}
        for fp in files:
            data = extract(fp)
            if not data:
                continue
            parts = os.path.normpath(fp).split(os.sep)
            try:
                idx = parts.index(lang)
                country = parts[idx + 1]
            except (ValueError, IndexError):
                continue
            # Clean title: remove state ISO codes like "- HU-HE", "- DE-BY"
            clean_title = re.sub(r'\s*-\s*[A-Z]{2}-[A-Z0-9]{2,3}\s*\|', ' |', data['title'])
            clean_title = re.sub(r'\s+\|\s+', ' | ', clean_title).strip()
            row = {
                'Title': clean_title[:100],
                'Media URL': data['image'],
                'Pinterest board': f"{BOARD_NAMES[lang]} - {country.replace('-', ' ').title()}",
                'Miniaturansicht': '',
                'Beschreibung': data['desc'],
                'Link': data['url'],
                'Publish date': '',
                'Keywords': '',
            }
            rows_by_country.setdefault(country, []).append(row)
        # Dedupe by URL AND by Title (Pinterest rejects duplicates)
        for country in list(rows_by_country.keys()):
            seen_url, seen_title = set(), {}
            deduped = []
            for r in rows_by_country[country]:
                if r['Link'] in seen_url:
                    continue
                # Title collision: append POI slug suffix to make unique
                t = r['Title']
                if t in seen_title:
                    seen_title[t] += 1
                    suffix = ' (' + r['Link'].rstrip('/').split('/')[-2].replace('-', ' ').title() + ')'
                    r['Title'] = (t.split(' | ')[0] + suffix + ' | ' + t.split(' | ', 1)[1])[:100] if ' | ' in t else (t + suffix)[:100]
                else:
                    seen_title[t] = 1
                seen_url.add(r['Link'])
                deduped.append(r)
            rows_by_country[country] = deduped
        # write per country, batched 200
        for country, rows in rows_by_country.items():
            for i in range(0, len(rows), BATCH):
                chunk = rows[i:i+BATCH]
                batch_no = i // BATCH + 1
                fname = f'pinterest_{lang}_{country}_b{batch_no:02d}.csv'
                fpath = os.path.join(ROOT, fname)
                with open(fpath, 'w', encoding='utf-8', newline='') as f:
                    w = csv.DictWriter(f, fieldnames=list(chunk[0].keys()))
                    w.writeheader()
                    w.writerows(chunk)
                summary.setdefault(lang, []).append((country, batch_no, len(chunk), fname))

    print(f'\n=== Pinterest CSV Generator ===\n')
    total = 0
    for lang in LANGS:
        if lang not in summary:
            continue
        lang_total = sum(s[2] for s in summary[lang])
        total += lang_total
        print(f'{lang.upper()}: {lang_total} pins, {len(summary[lang])} files')
        for country, b, n, fname in summary[lang][:5]:
            print(f'  {fname}: {n} rows')
        if len(summary[lang]) > 5:
            print(f'  ... +{len(summary[lang]) - 5} more')
    print(f'\nTotal: {total} pins across {sum(len(v) for v in summary.values())} CSV files')
    print(f'Output: {ROOT}')

if __name__ == '__main__':
    main()
