#!/usr/bin/env python3
"""Download Wikipedia lead images for Romania POIs missing images."""
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
OUT_DIR = ROOT / "public" / "geo-images" / "romania"
OUT_DIR.mkdir(parents=True, exist_ok=True)

POI_MAP = {
    "sarmizegetusa": ("ro", "Sarmizegetusa_Regia"),
    "alba-iulia-citadella": ("en", "Alba_Carolina_Citadel"),
    "peles-kastely": ("ro", "Castelul_Peleș"),
    "bran-kastely": ("en", "Bran_Castle"),
    "corvin-kastely": ("ro", "Castelul_Corvinilor"),
    "targoviste-udvar": ("ro", "Curtea_Domnească_din_Târgoviște"),
    "oradea-fortress": ("ro", "Cetatea_Oradea"),
    "deva-citadella": ("ro", "Cetatea_Devei"),
    "rasnov-fortress": ("ro", "Cetatea_Râșnov"),
    "fagaras-fortress": ("ro", "Cetatea_Făgăraș"),
    "biertan": ("ro", "Biertan"),
    "sighisoara-ovaros": ("ro", "Sighișoara"),
    "retezat-nemzeti-park": ("ro", "Parcul_Național_Retezat"),
    "rodna-nemzeti-park": ("ro", "Parcul_Național_Munții_Rodnei"),
    "apuseni-nemzeti-park": ("ro", "Parcul_Natural_Apuseni"),
    "cheile-bicazului": ("ro", "Cheile_Bicazului"),
    "balea-to": ("ro", "Lacul_Bâlea"),
    "lacul-rosu": ("ro", "Lacul_Roșu"),
    "mocanita-vaser": ("ro", "Mocănița"),
    "ceahlau-hegy": ("ro", "Munții_Ceahlău"),
    "portile-de-fier": ("ro", "Porțile_de_Fier_(defileu)"),
    "delta-dunarii": ("ro", "Delta_Dunării"),
    "padurea-verde": ("ro", "Pădurea_Verde"),
    "salina-turda": ("ro", "Salina_Turda"),
    "parlament-palota": ("ro", "Palatul_Parlamentului"),
    "ateneul-roman": ("ro", "Ateneul_Român"),
    "herastrau-park": ("ro", "Parcul_Herăstrău"),
    "village-museum": ("ro", "Muzeul_Satului_„Dimitrie_Gusti”"),
    "palatul-culturii-iasi": ("ro", "Palatul_Culturii_(Iași)"),
    "biserica-neagra-brasov": ("ro", "Biserica_Neagră"),
    # Batch 2
    "cozia-kolostor":          ("ro", "Mănăstirea_Cozia"),
    "putna-kolostor":           ("ro", "Mănăstirea_Putna"),
    "moldovita-kolostor":       ("ro", "Mănăstirea_Moldovița"),
    "voronet-kolostor":         ("ro", "Mănăstirea_Voroneț"),
    "horezu-kolostor":          ("ro", "Mănăstirea_Hurezi"),
    "suceava-var":              ("ro", "Cetatea_Sucevei"),
    "poenari-var":              ("ro", "Cetatea_Poenari"),
    "ceahlau-csucs":            ("ro", "Ceahlău"),
    "detunatele":               ("ro", "Detunata"),
    "cheile-turzii":            ("ro", "Cheile_Turzii"),
    "sfanta-ana-to":            ("ro", "Lacul_Sfânta_Ana"),
    "cascada-urlatoarea":       ("ro", "Cascada_Urlătoarea"),
    "bigar-vizeses":            ("ro", "Cascada_Bigăr"),
    "transalpina":              ("ro", "Transalpina"),
    "therme-bucuresti":         ("ro", "Therme_București"),
    "astra-museum":             ("ro", "Muzeul_ASTRA"),
    "teatrul-national":         ("ro", "Teatrul_Național_„I._L._Caragiale”_(București)"),
    "mogosoaia-palace":         ("ro", "Palatul_Mogoșoaia"),
    "cluj-botanical":           ("ro", "Grădina_Botanică_„Alexandru_Borza”"),
    "arad-fortress":            ("ro", "Cetatea_Aradului"),
    "centrul-vechi-bucuresti":  ("ro", "Centrul_Istoric_al_Bucureștiului"),
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
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)
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
