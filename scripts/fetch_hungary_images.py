#!/usr/bin/env python3
"""Download Wikipedia lead images for missing Hungary POIs and convert to webp.

Usage: python scripts/fetch_hungary_images.py
Requires: pillow, requests (or stdlib urllib)
"""
import os
import sys
import json
import time
import urllib.request
import urllib.parse
from io import BytesIO
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    sys.exit(1)

ROOT = Path(__file__).parent.parent
OUT_DIR = ROOT / "public" / "geo-images" / "hungary"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Map POI id -> Wikipedia article title (Hungarian Wikipedia)
POI_MAP = {
    "balaton-to": ("hu", "Balaton"),
    "tisza-folyo": ("hu", "Tisza"),
    "duna-folyo": ("hu", "Duna"),
    "kekes-teto": ("hu", "Kékes"),
    "baradla-barlang": ("hu", "Baradla-barlang"),
    "hortobagyi-nemzeti-park": ("hu", "Hortobágyi_Nemzeti_Park"),
    "bukki-nemzeti-park": ("hu", "Bükki_Nemzeti_Park"),
    "ferto-to": ("hu", "Fertő"),
    "velencei-to": ("hu", "Velencei-tó"),
    "szalajka-volgy": ("hu", "Szalajka-völgy"),
    "borzsony": ("hu", "Börzsöny"),
    "villanyi-borvidek": ("hu", "Villányi_borvidék"),
    "egri-var": ("hu", "Egri_vár"),
    "visegradi-fellegvar": ("hu", "Fellegvár_(Visegrád)"),
    "szigetvari-var": ("hu", "Szigetvári_vár"),
    "sarvari-var": ("hu", "Sárvári_vár"),
    "diosgyori-var": ("hu", "Diósgyőri_vár"),
    "esztergomi-bazilika": ("hu", "Esztergomi_bazilika"),
    "szentendrei-skanzen": ("hu", "Szabadtéri_Néprajzi_Múzeum"),
    "tihanyi-apatsag": ("hu", "Tihanyi_apátság"),
    "pannonhalmi-foapatsag": ("hu", "Pannonhalmi_Bencés_Főapátság"),
    "holloko-ofalu": ("hu", "Hollókő"),
    "szepmuveszeti-muzeum": ("hu", "Szépművészeti_Múzeum"),
    "magyar-nemzeti-muzeum": ("hu", "Magyar_Nemzeti_Múzeum"),
    "nemzeti-muzeum": ("hu", "Magyar_Nemzeti_Múzeum"),
    "fovarosi-allatkert": ("hu", "Fővárosi_Állat-_és_Növénykert"),
    "aquaworld-budapest": ("hu", "Aquaworld_(vízipark)"),
    "gellert-hegy": ("hu", "Gellért-hegy"),
    "normafa": ("hu", "Normafa"),
    "magyar-allami-operahaz": ("hu", "Magyar_Állami_Operaház"),
    "matyas-templom": ("hu", "Mátyás-templom"),
    "vajdahunyad-vara": ("hu", "Vajdahunyad_vára"),
    "sumegi-var": ("hu", "Sümegi_vár"),
    "boldogkoi-var": ("hu", "Boldogkői_vár"),
    "fuzeri-var": ("hu", "Füzéri_vár"),
    "gemenci-erdo": ("hu", "Gemenci_erdő"),
    "csodak-palotaja": ("hu", "Csodák_Palotája"),
}


def fetch_wiki_summary(lang: str, title: str) -> dict | None:
    url = f"https://{lang}.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(title)}"
    req = urllib.request.Request(url, headers={"User-Agent": "plizio-bot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read().decode("utf-8"))
    except Exception as e:
        print(f"  ! summary fail: {e}")
        return None


def download_image(url: str) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": "plizio-bot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    except Exception as e:
        print(f"  ! download fail: {e}")
        return None


def save_as_webp(data: bytes, out_path: Path, max_w: int = 800):
    img = Image.open(BytesIO(data)).convert("RGB")
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)
    img.save(out_path, "WEBP", quality=82, method=6)


def main():
    ok = 0
    fail = 0
    for poi_id, (lang, title) in POI_MAP.items():
        out = OUT_DIR / f"{poi_id}.webp"
        if out.exists():
            print(f"[skip] {poi_id} (exists)")
            continue
        print(f"[get]  {poi_id} <- {lang}:{title}")
        summary = fetch_wiki_summary(lang, title)
        if not summary:
            fail += 1
            continue
        img_url = (summary.get("thumbnail") or {}).get("source")
        if not img_url:
            print("  ! no image in summary")
            fail += 1
            continue
        data = download_image(img_url)
        if not data:
            fail += 1
            continue
        try:
            save_as_webp(data, out)
            ok += 1
            print(f"  ok -> {out.name}")
        except Exception as e:
            print(f"  ! webp save fail: {e}")
            fail += 1
        time.sleep(5.0)  # be polite to Wikimedia
    print(f"\nDONE. ok={ok} fail={fail} out={OUT_DIR}")


if __name__ == "__main__":
    main()
