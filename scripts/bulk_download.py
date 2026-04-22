import os
import re
import requests
from PIL import Image
from io import BytesIO
import time

data_dir = '/home/borota25/Desktop/plizio/lib/visualLab/data'
public_dir = '/home/borota25/Desktop/plizio/public'

def to_kebab_case(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

def get_wiki_image(name):
    # Próbáljuk több variációval
    variations = [name, f"{name} city", f"{name} landmark"]
    for var in variations:
        url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&titles={var}&prop=pageimages&pithumbsize=1024"
        try:
            res = requests.get(url, timeout=5).json()
            pages = res.get('query', {}).get('pages', {})
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    return pages[page_id]['thumbnail']['source']
        except:
            continue
    return None

def download_and_convert(url, target_path):
    try:
        headers = {'User-Agent': 'PlizioBot/1.0 (https://plizio.com/)'}
        response = requests.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            max_size = 1024
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size), Image.LANCZOS)
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            img.save(target_path, "WEBP", quality=80)
            return True
    except Exception as e:
        print(f"Error: {e}")
    return False

# Országok és a hozzájuk tartozó slug-ok
country_config = {
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
    'czechRepublicPoi.ts': 'czech-republic',
    'romaniaPoi.ts': 'romania',
    'austriaPoi.ts': 'austria',
    'francePoi.ts': 'france',
    'italyPoi.ts': 'italy',
    'spainPoi.ts': 'spain',
    'unitedkingdomPoi.ts': 'united-kingdom',
    'netherlandsPoi.ts': 'netherlands',
    'polandPoi.ts': 'poland',
    'hungaryPoi.ts': 'hungary',
    'poi.ts': 'germany'
}

def run_batch(limit=50):
    count = 0
    for filename, country in country_config.items():
        filepath = os.path.join(data_dir, filename)
        if not os.path.exists(filepath): continue
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Keressük a POI-kat
        blocks = re.split(r'\n\s*\{', content)
        for block in blocks:
            if 'id:' not in block: continue
            
            name_match = re.search(r'name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\']', block)
            image_match = re.search(r'image:\s*["\']([^"\']*)["\']', block)
            
            if not name_match: continue
            
            name_en = name_match.group(1)
            image_path = image_match.group(1) if image_match else ""
            
            # Ha nincs kép, vagy nem az új struktúra, generálunk egyet
            if not image_path or '/geo-images/' not in image_path:
                slug = to_kebab_case(name_en)
                image_path = f'/geo-images/{country}/{slug}.webp'
            
            target_abs = os.path.join(public_dir, image_path.lstrip('/'))
            
            if not os.path.exists(target_abs):
                print(f"[{count+1}/{limit}] Keresés: {name_en} ({country})...")
                img_url = get_wiki_image(name_en)
                if img_url:
                    if download_and_convert(img_url, target_abs):
                        print(f"  SIKER: {image_path}")
                        count += 1
                    else:
                        print(f"  HIBA: Letöltés sikertelen")
                else:
                    print(f"  Nincs találat a Wikipédián.")
                
                if count >= limit: return

if __name__ == "__main__":
    run_batch(50)
