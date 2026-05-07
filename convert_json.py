import json
import os

files = ["algeria_hu_batch1.json", "algeria_hu_batch2.json", "algeria_hu_batch3a.json", "algeria_hu_seo_all.json", "algeria_hu_batch4.json"]

for fname in files:
    if not os.path.exists(fname):
        print(f"Skipping {fname}")
        continue
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    lang = data.get('lang', 'hu')
    new_items = []
    for item in data['items']:
        new_item = item.copy()
        if isinstance(item.get('descriptionAdvanced'), str):
            new_item['descriptionAdvanced'] = { lang: item['descriptionAdvanced'] }
        if isinstance(item.get('factsAdvanced'), list):
            new_item['factsAdvanced'] = { lang: item['factsAdvanced'] }
        new_items.append(new_item)
    
    data['items'] = new_items
    with open(fname, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Converted {fname}")
