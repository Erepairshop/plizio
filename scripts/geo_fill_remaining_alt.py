from __future__ import annotations

import json
import time
from io import BytesIO
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(r"C:\Users\User\plizio-repo")
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"
IMAGES_DIR = ROOT / "public" / "geo-images"
INVENTORY_PATH = ROOT / "public" / "geo-assets-inventory.json"

try:
    from PIL import Image  # type: ignore
except Exception:
    Image = None

UA = "PlizioGeoAltCollector/1.0"

TARGETS = {
    "mnt-fichtelberg": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Fichtelberg_(Ore_Mountains)"),
        ("de-pageimages", "https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=Fichtelberg_(Erzgebirge)"),
    ],
    "hist-paulskirche": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Frankfurt_Paulskirche"),
        ("de-pageimages", "https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=Frankfurter_Paulskirche"),
    ],
    "hist-obersalzberg": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Kehlsteinhaus"),
        ("de-pageimages", "https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=Kehlsteinhaus"),
    ],
    "hist-bamberg-dom": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Bamberg_Cathedral"),
        ("de-pageimages", "https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=Bamberger_Dom"),
    ],
    "zoo-berlin": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Berlin_Zoological_Garden"),
    ],
    "zoo-hagenbeck-hamburg": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Tierpark_Hagenbeck"),
    ],
    "zoo-hellabrunn-muenchen": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Hellabrunn_Zoo"),
        ("de-pageimages", "https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=Tierpark_Hellabrunn"),
    ],
    "animal-schwarzwald-rotwild": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Black_Forest"),
    ],
    "animal-bayrischer-wald-luchs": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Bavarian_Forest_National_Park"),
    ],
    "agri-hallertau-hopfen": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Hallertau"),
    ],
    "agri-spreewald-gurken": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Spreewald"),
    ],
    "agri-lueneburger-heide-imker": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/L%C3%BCneburg_Heath"),
    ],
    "kidlm-europapark-rust": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Europa-Park"),
    ],
    "kidlm-heide-park-soltau": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Heide_Park"),
    ],
    "kidlm-deutsches-museum-muenchen": [
        ("en-summary", "https://en.wikipedia.org/api/rest_v1/page/summary/Deutsches_Museum"),
    ],
}


def get_json(url: str):
    with urlopen(Request(url, headers={"User-Agent": UA}), timeout=45) as resp:
        return json.loads(resp.read().decode("utf-8"))


def get_bytes(url: str):
    with urlopen(Request(url, headers={"User-Agent": UA}), timeout=90) as resp:
        return resp.read()


def image_url(source_kind: str, url: str) -> str | None:
    data = get_json(url)
    if source_kind.endswith("summary"):
        return data.get("thumbnail", {}).get("source") or data.get("originalimage", {}).get("source")
    pages = data.get("query", {}).get("pages", {})
    for page in pages.values():
        if "thumbnail" in page:
            return page["thumbnail"]["source"]
        if "original" in page:
            return page["original"]["source"]
    return None


def save_webp(image_id: str, url: str) -> str:
    raw = get_bytes(url)
    if Image is not None:
        img = Image.open(BytesIO(raw)).convert("RGB")
        target = IMAGES_DIR / f"{image_id}.webp"
        img.save(target, format="WEBP", quality=86, method=6)
        return f"/geo-images/{target.name}"
    target = IMAGES_DIR / f"{image_id}.jpg"
    target.write_bytes(raw)
    return f"/geo-images/{target.name}"


def inject_image(image_id: str, rel_path: str) -> bool:
    text = POI_PATH.read_text(encoding="utf-8")
    marker = f'id: "{image_id}"'
    start = text.find(marker)
    if start < 0:
        return False
    end = text.find("\n  },", start)
    block = text[start:end]
    if 'image:' in block:
        return False
    insert_at = end
    text = text[:insert_at] + f'\n    image: "{rel_path}",' + text[insert_at:]
    POI_PATH.write_text(text, encoding="utf-8")
    return True


def rebuild_inventory():
    inventory = {"coats_of_arms": {}, "photos": {}, "audio": {}}
    for file in sorted(IMAGES_DIR.iterdir()):
        if not file.is_file():
            continue
        rel = f"/geo-images/{file.name}"
        if file.name.startswith("coa_"):
            inventory["coats_of_arms"][file.stem[4:]] = rel
        else:
            inventory["photos"][file.stem] = rel
    INVENTORY_PATH.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    results = []
    for image_id, sources in TARGETS.items():
        existing = list(IMAGES_DIR.glob(f"{image_id}.*"))
        if existing:
            results.append({"id": image_id, "status": "exists", "path": f"/geo-images/{existing[0].name}"})
            continue
        saved = None
        for source_kind, url in sources:
            try:
                candidate = image_url(source_kind, url)
                if not candidate:
                    continue
                saved = save_webp(image_id, candidate)
                inject_image(image_id, saved)
                results.append({"id": image_id, "status": "downloaded", "path": saved, "source": source_kind})
                break
            except Exception as exc:
                results.append({"id": image_id, "status": "attempt-failed", "source": source_kind, "error": str(exc)})
                time.sleep(1.5)
        if not saved:
            results.append({"id": image_id, "status": "no-success"})
        time.sleep(2.0)
    rebuild_inventory()
    out = ROOT / "scripts" / "geo_remaining_alt_report.json"
    out.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = {row["id"] for row in results if row["status"] in {"downloaded", "exists"}}
    print("OK", len(ok))
    print("FAILED", len(TARGETS) - len(ok))
    for image_id in TARGETS:
        if image_id not in ok:
            print(image_id)


if __name__ == "__main__":
    main()
