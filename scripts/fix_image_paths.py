import os
import re

data_dir = '/home/borota25/Desktop/plizio/lib/visualLab/data'

country_map = {
    'bulgariaPoi.ts': 'bulgaria',
    'croatiaPoi.ts': 'croatia',
    'estoniaPoi.ts': 'estonia',
    'latviaPoi.ts': 'latvia',
    'lithuaniaPoi.ts': 'lithuania',
    'luxembourgPoi.ts': 'luxembourg',
    'belgiumPoi.ts': 'belgium',
    'denmarkPoi.ts': 'denmark',
    'finlandPoi.ts': 'finland',
    'norwayPoi.ts': 'norway',
    'swedenPoi.ts': 'sweden',
    'irelandPoi.ts': 'ireland',
    'portugalPoi.ts': 'portugal',
    'slovakiaPoi.ts': 'slovakia',
    'sloveniaPoi.ts': 'slovenia',
    'switzerlandPoi.ts': 'switzerland',
    'czechRepublicPoi.ts': 'czech-republic'
}

def to_kebab_case(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

for filename, country in country_map.items():
    filepath = os.path.join(data_dir, filename)
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_image(match):
        full_block = match.group(0)
        name_en = match.group(1)
        old_image = match.group(2)
        
        if '/geo-images/' in old_image:
            return full_block
        
        slug = to_kebab_case(name_en)
        new_image = f'/geo-images/{country}/{slug}.webp'
        return full_block.replace(f'image: "{old_image}"', f'image: "{new_image}"').replace(f"image: '{old_image}'", f"image: '{new_image}'")

    # Keressük a nevet és a képet egy blokkon belül
    new_content = re.sub(r'name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\'][^{]*?image:\s*["\']([^"\']*)["\']', replace_image, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Frissítve: {filename}")
