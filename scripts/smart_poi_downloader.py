import os
import re
import requests
from PIL import Image
from io import BytesIO
import time
from duckduckgo_search import DDGS

# Konfiguráció
DATA_DIR = '/home/borota25/Desktop/plizio/lib/visualLab/data'
PUBLIC_DIR = '/home/borota25/Desktop/plizio/public'
MAX_IMAGE_SIZE = 1024
QUALITY = 80

# Ország fájlok és mappák összerendelése
COUNTRY_CONFIG = {
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

def to_kebab_case(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

def search_image_ddg(query):
    """Képet keres a DuckDuckGo-n és visszaadja az első találat URL-jét."""
    try:
        with DDGS() as ddgs:
            results = ddgs.images(query, region="wt-wt", safesearch="off", size="Medium", type_image="photo")
            for r in results:
                return r['image']
    except Exception as e:
        print(f"  Keresési hiba ({query}): {e}")
    return None

def download_and_convert(url, target_path):
    """Letölti a képet és WebP-be konvertálja."""
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            if img.width > MAX_IMAGE_SIZE or img.height > MAX_IMAGE_SIZE:
                img.thumbnail((MAX_IMAGE_SIZE, MAX_IMAGE_SIZE), Image.LANCZOS)
            
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            img.save(target_path, "WEBP", quality=QUALITY)
            return True
    except Exception as e:
        print(f"  Letöltési hiba: {e}")
    return False

def process_pois(limit=100):
    """Végigmegy a fájlokon és pótolja a hiányzó képeket."""
    processed_count = 0
    
    for filename, country in COUNTRY_CONFIG.items():
        filepath = os.path.join(DATA_DIR, filename)
        if not os.path.exists(filepath): continue
        
        print(f"\n--- Fájl feldolgozása: {filename} ---")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # POI blokkok keresése
        blocks = re.split(r'\n\s*\{', content)
        for block in blocks:
            if 'id:' not in block: continue
            
            name_match = re.search(r'name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\']', block)
            image_match = re.search(r'image:\s*["\']([^"\']*)["\']', block)
            
            if not name_match: continue
            
            name_en = name_match.group(1)
            image_path = image_match.group(1) if image_match else ""
            
            # Útvonal generálása ha hiányzik
            if not image_path or '/geo-images/' not in image_path:
                slug = to_kebab_case(name_en)
                image_path = f'/geo-images/{country}/{slug}.webp'
            
            target_abs = os.path.join(PUBLIC_DIR, image_path.lstrip('/'))
            
            if not os.path.exists(target_abs):
                print(f"[{processed_count+1}] Hiányzik: {name_en} ({country})")
                
                # Keresés (Név + Ország a pontosabb találatért)
                query = f"{name_en} {country} landmark photo"
                img_url = search_image_ddg(query)
                
                if img_url:
                    if download_and_convert(img_url, target_abs):
                        print(f"  SIKER: {image_path}")
                        processed_count += 1
                    else:
                        print(f"  HIBA: Nem sikerült letölteni.")
                else:
                    print(f"  Nincs találat a DuckDuckGo-n.")
                
                time.sleep(2) # Kíméljük a szervereket
                
                if processed_count >= limit:
                    print(f"\nElértük a limitet ({limit}). Álljunk meg.")
                    return

if __name__ == "__main__":
    process_pois(limit=200) # Egyszerre 200 képet próbálunk letölteni
