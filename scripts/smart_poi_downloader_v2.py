import os
import re
import requests
from PIL import Image
from io import BytesIO
import time
import warnings
from duckduckgo_search import DDGS

# Suppress the specific RuntimeWarning from duckduckgo_search
warnings.filterwarnings("ignore", category=RuntimeWarning, module="duckduckgo_search")

# Konfiguráció — env-override ha be van állítva, különben repo-relativ a script alapján
_HERE = os.path.dirname(os.path.abspath(__file__))
_REPO = os.path.dirname(_HERE)
DATA_DIR = os.environ.get('PLIZIO_DATA_DIR') or os.path.join(_REPO, 'lib/visualLab/data')
PUBLIC_DIR = os.environ.get('PLIZIO_PUBLIC_DIR') or os.path.join(_REPO, 'public')
MAX_IMAGE_SIZE = 1024
QUALITY = 80

COUNTRY_CONFIG = {
    'francePoi.ts': 'france',
    'italyPoi.ts': 'italy',
    'spainPoi.ts': 'spain',
    'unitedkingdomPoi.ts': 'united-kingdom',
    'netherlandsPoi.ts': 'netherlands',
    'polandPoi.ts': 'poland',
    'hungaryPoi.ts': 'hungary',
    'poi.ts': 'germany',
    'romaniaPoi.ts': 'romania',
    'austriaPoi.ts': 'austria',
    'switzerlandPoi.ts': 'switzerland',
    'belgiumPoi.ts': 'belgium',
    'czechRepublicPoi.ts': 'czech-republic',
    'slovakiaPoi.ts': 'slovakia',
    'sloveniaPoi.ts': 'slovenia',
    'croatiaPoi.ts': 'croatia',
    'serbiaPoi.ts': 'serbia',
    'bulgariaPoi.ts': 'bulgaria',
    'greecePoi.ts': 'greece',
    'portugalPoi.ts': 'portugal',
    'estoniaPoi.ts': 'estonia',
    'latviaPoi.ts': 'latvia',
    'lithuaniaPoi.ts': 'lithuania',
    'finlandPoi.ts': 'finland',
    'swedenPoi.ts': 'sweden',
    'norwayPoi.ts': 'norway',
    'denmarkPoi.ts': 'denmark',
    'irelandPoi.ts': 'ireland',
    'icelandPoi.ts': 'iceland',
    'luxembourgPoi.ts': 'luxembourg',
    'liechtensteinPoi.ts': 'liechtenstein',
    'monacoPoi.ts': 'monaco',
    'andorraPoi.ts': 'andorra',
    'sanmarinoPoi.ts': 'sanmarino',
    'vaticanPoi.ts': 'vatican',
    'maltaPoi.ts': 'malta',
    'cyprusPoi.ts': 'cyprus',
    'albaniaPoi.ts': 'albania',
    'bosniaPoi.ts': 'bosnia',
    'kosovoPoi.ts': 'kosovo',
    'moldovaPoi.ts': 'moldova',
    'montenegroPoi.ts': 'montenegro',
    'northmacedoniaPoi.ts': 'northmacedonia',
    'belarusPoi.ts': 'belarus',
    'ukrainePoi.ts': 'ukraine',
    # North America
    'usaPoi.ts': 'usa',
    'canadaPoi.ts': 'canada',
    'mexicoPoi.ts': 'mexico',
    'guatemalaPoi.ts': 'guatemala',
    'hondurasPoi.ts': 'honduras',
    'nicaraguaPoi.ts': 'nicaragua',
    'costaricaPoi.ts': 'costa-rica',
    'panamaPoi.ts': 'panama',
    'cubaPoi.ts': 'cuba',
    'dominicanrepublicPoi.ts': 'dominican-republic',
    'haitiPoi.ts': 'haiti',
    'jamaicaPoi.ts': 'jamaica',
    'bahamasPoi.ts': 'bahamas',
    'trinidadPoi.ts': 'trinidad',
    'belizePoi.ts': 'belize',
    'elsalvadorPoi.ts': 'el-salvador',
}

def to_kebab_case(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

def search_image_ddg(query):
    try:
        with DDGS() as ddgs:
            results = ddgs.images(query, region="wt-wt", safesearch="off", size="Medium", type_image="photo")
            for r in results:
                return r['image']
    except Exception as e:
        error_msg = str(e)
        print(f"  Keresési hiba ({query}): {error_msg}")
        if "202" in error_msg or "Ratelimit" in error_msg:
            print("  !!! RATE LIMIT DETECTED !!! Várakozás 5 percig...")
            time.sleep(300) # 5 perc pihenő
        return None

def download_and_convert(url, target_path):
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

import urllib.request
import urllib.parse

NTFY_TOPIC = "https://ntfy.sh/plizio-borota25-alerts"

def ntfy(msg):
    try:
        req = urllib.request.Request(NTFY_TOPIC, data=msg.encode("utf-8"), method="POST")
        urllib.request.urlopen(req, timeout=5)
    except Exception:
        pass

def process_all_pois():
    processed_count = 0
    success_count = 0
    error_streak = 0
    
    for filename, country in COUNTRY_CONFIG.items():
        filepath = os.path.join(DATA_DIR, filename)
        if not os.path.exists(filepath): continue
        
        print(f"\n>>> Fájl: {filename} <<<")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        blocks = re.split(r'\n\s*\{', content)
        for block in blocks:
            if 'id:' not in block: continue
            
            name_match = re.search(r'name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\']', block)
            image_match = re.search(r'image:\s*["\']([^"\']*)["\']', block)
            
            if not name_match: continue
            
            name_en = name_match.group(1)
            image_path = image_match.group(1) if image_match else ""
            
            if not image_path or '/geo-images/' not in image_path:
                slug = to_kebab_case(name_en)
                image_path = f'/geo-images/{country}/{slug}.webp'
            
            target_abs = os.path.join(PUBLIC_DIR, image_path.lstrip('/'))
            
            if not os.path.exists(target_abs):
                processed_count += 1
                print(f"[{processed_count}] Keresés: {name_en} ({country})")
                
                query = f"{name_en} {country} landmark photo"
                img_url = search_image_ddg(query)
                
                if img_url:
                    if download_and_convert(img_url, target_abs):
                        print(f"  SIKER: {image_path}")
                        success_count += 1
                        error_streak = 0
                    else:
                        print(f"  HIBA: Letöltés sikertelen.")
                        error_streak += 1
                else:
                    print(f"  Nincs találat.")
                    error_streak += 1

                # Notif minden 100 check utan
                if processed_count % 100 == 0:
                    ntfy(f"Letolto: {processed_count} check, {success_count} siker (~{int(success_count*100/max(processed_count,1))}%)")

                # Notif ha 20+ folyamatos hiba (komoly baj)
                if error_streak == 20:
                    ntfy(f"Letolto HIBA: 20 egymas utani sikertelen (talan rate-limit). Foly: {country}, {name_en}")
                if error_streak >= 50:
                    ntfy(f"Letolto LEALL: 50+ folyamatos hiba, leallitom. {processed_count} check, {success_count} siker")
                    print(f"\n50+ continuous errors, aborting.")
                    return

                time.sleep(3)

    ntfy(f"Letolto VEGZETT: {processed_count} check, {success_count} siker")
    print(f"\nKÉSZ! Összesen megpróbálva: {processed_count}, Sikeres: {success_count}")

if __name__ == "__main__":
    process_all_pois()
