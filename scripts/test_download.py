import os
import requests
from PIL import Image
from io import BytesIO
import time

def download_and_convert(url, target_path):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            # Convert to RGB if necessary (for PNG/RGBA)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Resize if too large
            max_size = 1024
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size), Image.LANCZOS)
            
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            img.save(target_path, "WEBP", quality=80)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def get_wiki_image(name):
    url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&titles={name}&prop=pageimages&pithumbsize=1024"
    try:
        res = requests.get(url, timeout=5).json()
        pages = res.get('query', {}).get('pages', {})
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                return pages[page_id]['thumbnail']['source']
    except:
        pass
    return None

# Teszt lista (Románia)
test_pois = [
    {"name": "Alba Iulia", "path": "/geo-images/romania/alba-iulia.webp"},
    {"name": "Arad", "path": "/geo-images/romania/arad.webp"},
    {"name": "Pitesti", "path": "/geo-images/romania/pitesti.webp"},
    {"name": "Bacau", "path": "/geo-images/romania/bacau.webp"},
    {"name": "Oradea", "path": "/geo-images/romania/oradea.webp"}
]

public_dir = '/home/borota25/Desktop/plizio/public'

for poi in test_pois:
    target = os.path.join(public_dir, poi['path'].lstrip('/'))
    if os.path.exists(target):
        print(f"Már létezik: {poi['name']}")
        continue
    
    print(f"Keresés: {poi['name']}...")
    img_url = get_wiki_image(poi['name'])
    
    if img_url:
        if download_and_convert(img_url, target):
            print(f"SIKER: {poi['name']} -> {poi['path']}")
        else:
            print(f"HIBA: {poi['name']} letöltése sikertelen.")
    else:
        print(f"Nincs találat: {poi['name']}")
    time.sleep(1)
