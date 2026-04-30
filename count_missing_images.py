import re, os, glob
data_dir='lib/visualLab/data'
img_dirs=['public/geo-images','out/geo-images']
pat = re.compile(r"image:\s*['\"]([^'\"]+)['\"]")
all_imgs = set()
for f in glob.glob(f'{data_dir}/**/*.ts', recursive=True):
    txt = open(f, encoding='utf-8', errors='ignore').read()
    for m in pat.finditer(txt):
        path = m.group(1)
        if 'geo-images' in path:
            all_imgs.add(path.lstrip('/'))
existing_basenames = set()
existing_paths = set()
for d in img_dirs:
    if os.path.isdir(d):
        for root, _, files in os.walk(d):
            for fn in files:
                full = os.path.join(root, fn).replace(chr(92), '/')
                existing_paths.add(full)
                existing_basenames.add(fn)
missing = []
for img in all_imgs:
    bn = os.path.basename(img)
    if bn in existing_basenames:
        continue
    if any(img in p for p in existing_paths):
        continue
    missing.append(img)
print(f'Total POI image refs: {len(all_imgs)}')
print(f'Missing: {len(missing)}')
print('Sample:', missing[:8])
