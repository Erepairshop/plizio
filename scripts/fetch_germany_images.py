#!/usr/bin/env python3
"""Download Wikipedia lead images for Germany POIs missing images."""
import sys, json, time, urllib.request, urllib.parse
from io import BytesIO
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

try:
    from PIL import Image
except ImportError:
    print("ERROR: pip install Pillow")
    sys.exit(1)

ROOT = Path(__file__).parent.parent
OUT_DIR = ROOT / "public" / "geo-images" / "germany"
OUT_DIR.mkdir(parents=True, exist_ok=True)

POI_MAP = {
    "burg-eltz":              ("de", "Burg_Eltz"),
    "schloss-heidelberg":     ("de", "Heidelberger_Schloss"),
    "wartburg":               ("de", "Wartburg"),
    "schloss-sanssouci":      ("de", "Schloss_Sanssouci"),
    "burg-hohenzollern":      ("de", "Burg_Hohenzollern"),
    "schloss-linderhof":      ("de", "Schloss_Linderhof"),
    "schloss-mespelbrunn":    ("de", "Schloss_Mespelbrunn"),
    "marksburg":              ("de", "Marksburg"),
    "schloss-drachenburg":    ("de", "Schloss_Drachenburg"),
    "schloss-sigmaringen":    ("de", "Schloss_Sigmaringen"),
    "schloss-stolzenfels":    ("de", "Schloss_Stolzenfels"),
    "kaiserburg-nuernberg":   ("de", "Nürnberger_Burg"),
    "lake-koenigssee":        ("de", "Königssee"),
    "island-mainau":          ("de", "Mainau"),
    "externsteine":           ("de", "Externsteine"),
    "donaudurchbruch":        ("de", "Donaudurchbruch"),
    "partnachklamm":          ("de", "Partnachklamm"),
    "teufelsmauer":           ("de", "Teufelsmauer_(Harz)"),
    "nationalpark-eifel":     ("de", "Nationalpark_Eifel"),
    "kellerwald-edersee":     ("de", "Nationalpark_Kellerwald-Edersee"),
    "mnt-bastei":             ("de", "Bastei"),
    "kyffhaeuser":            ("de", "Kyffhäuserdenkmal"),
    "hermannsdenkmal":        ("de", "Hermannsdenkmal"),
    "voelkerschlachtdenkmal": ("de", "Völkerschlachtdenkmal"),
    "zeche-zollverein":       ("de", "Zeche_Zollverein"),
    "museumsinsel":           ("de", "Museumsinsel"),
    "mercedes-museum":        ("de", "Mercedes-Benz_Museum"),
    "bmw-welt":               ("de", "BMW_Welt"),
    "allianz-arena":          ("de", "Allianz_Arena"),
    "olympiapark-muenchen":   ("de", "Olympiapark_München"),
    "nuerburgring":           ("de", "Nürburgring"),
    "hansa-park":             ("de", "Hansa-Park"),
}


def fetch_summary(lang, title):
    url = f"https://{lang}.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(title)}"
    req = urllib.request.Request(url, headers={"User-Agent": "plizio-bot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read().decode("utf-8"))
    except Exception as e:
        print(f"  ! summary fail: {e}")
        return None


def download(url):
    req = urllib.request.Request(url, headers={"User-Agent": "plizio-bot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    except Exception as e:
        print(f"  ! download fail: {e}")
        return None


def save_webp(data, out, max_w=800):
    img = Image.open(BytesIO(data)).convert("RGB")
    if img.width > max_w:
        r = max_w / img.width
        img = img.resize((max_w, int(img.height * r)), Image.LANCZOS)
    img.save(out, "WEBP", quality=82, method=6)


def main():
    ok = fail = 0
    for pid, (lang, title) in POI_MAP.items():
        out = OUT_DIR / f"{pid}.webp"
        if out.exists():
            print(f"[skip] {pid}")
            continue
        print(f"[get]  {pid} <- {lang}:{title}")
        s = fetch_summary(lang, title)
        if not s:
            fail += 1
            continue
        img_url = (s.get("thumbnail") or {}).get("source")
        if not img_url:
            print("  ! no image in summary")
            fail += 1
            continue
        d = download(img_url)
        if not d:
            fail += 1
            continue
        try:
            save_webp(d, out)
            ok += 1
            print(f"  ok -> {out.name}")
        except Exception as e:
            print(f"  ! webp fail: {e}")
            fail += 1
        time.sleep(5.0)
    print(f"\nDONE. ok={ok} fail={fail} out={OUT_DIR}")


if __name__ == "__main__":
    main()
