from __future__ import annotations

import json
import re
import time
from io import BytesIO
from pathlib import Path
from typing import Dict, Tuple
from urllib.parse import quote, urlparse
from urllib.request import Request, urlopen

ROOT = Path(r"C:\Users\User\plizio-repo")
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"
IMAGES_DIR = ROOT / "public" / "geo-images"
AUDIO_DIR = ROOT / "public" / "geo-audio"
INVENTORY_PATH = ROOT / "public" / "geo-assets-inventory.json"

USER_AGENT = "PlizioGeoImageCollector/1.0"

TARGETS: Dict[str, str] = {
    "city-augsburg": "Augsburg",
    "city-oberhausen": "Oberhausen",
    "city-gelsenkirchen": "Gelsenkirchen",
    "mnt-watzmann": "Watzmann",
    "mnt-fichtelberg": "Fichtelberg (Erzgebirge)",
    "forest-spreewald": "Spreewald",
    "hist-wittenberg-schlosskirche": "Schlosskirche (Lutherstadt Wittenberg)",
    "hist-paulskirche": "Frankfurter Paulskirche",
    "hist-stasi-museum": "Stasimuseum",
    "hist-eisleben": "Lutherstadt Eisleben",
    "hist-tannenberg": "Tannenberg-Denkmal",
    "hist-skagerrakschlacht": "Marine-Ehrenmal Laboe",
    "hist-verdun-gedenkstaette": "Beinhaus von Douaumont",
    "hist-november-revolution": "Reichstagsgebäude",
    "hist-spartakusaufstand": "Berlin",
    "hist-obersalzberg": "Kehlsteinhaus",
    "hist-worms-dom": "Wormser Dom",
    "hist-paderborn-dom": "Paderborner Dom",
    "hist-bamberg-dom": "Bamberger Dom",
    "hist-noerdlingen": "Nördlingen",
    "zoo-berlin": "Zoologischer Garten Berlin",
    "zoo-hagenbeck-hamburg": "Tierpark Hagenbeck",
    "zoo-hellabrunn-muenchen": "Tierpark Hellabrunn",
    "zoo-leipzig": "Zoo Leipzig",
    "animal-wattenmeer-seehunde": "Wattenmeer",
    "animal-schwarzwald-rotwild": "Schwarzwald",
    "animal-alpen-gaemse": "Alpen",
    "animal-bayrischer-wald-luchs": "Nationalpark Bayerischer Wald",
    "agri-loreley-wein": "Loreley",
    "agri-hallertau-hopfen": "Hallertau",
    "agri-altes-land-aepfel": "Altes Land",
    "agri-spreewald-gurken": "Spreewald",
    "agri-lueneburger-heide-imker": "Lüneburger Heide",
    "kidlm-europapark-rust": "Europa-Park",
    "kidlm-legoland-guenzburg": "Legoland Deutschland Resort",
    "kidlm-phantasialand-bruehl": "Phantasialand",
    "kidlm-heide-park-soltau": "Heide Park",
    "kidlm-miniatur-wunderland": "Miniatur Wunderland",
    "kidlm-deutsches-museum-muenchen": "Deutsches Museum",
}

try:
    from PIL import Image  # type: ignore
except Exception:
    Image = None


def request_text(url: str) -> str:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8")


def request_bytes(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=90) as response:
        return response.read()


def page_image_url(title: str) -> str | None:
    url = (
        "https://de.wikipedia.org/w/api.php?action=query&format=json"
        f"&prop=pageimages&piprop=original|thumbnail&pithumbsize=2200&titles={quote(title)}"
    )
    data = json.loads(request_text(url))
    pages = data.get("query", {}).get("pages", {})
    for page in pages.values():
      if "thumbnail" in page:
          return page["thumbnail"]["source"]
      if "original" in page:
          return page["original"]["source"]
    return None


def download_image(image_id: str, title: str) -> Tuple[str | None, str]:
    existing = next(IMAGES_DIR.glob(f"{image_id}.*"), None)
    if existing:
        return f"/geo-images/{existing.name}", "exists"

    image_url = page_image_url(title)
    if not image_url:
        return None, "no-image"

    raw = request_bytes(image_url)

    if Image is not None:
        try:
            img = Image.open(BytesIO(raw)).convert("RGB")
            target = IMAGES_DIR / f"{image_id}.webp"
            img.save(target, format="WEBP", quality=86, method=6)
            time.sleep(1.2)
            return f"/geo-images/{target.name}", "downloaded-webp"
        except Exception:
            pass

    ext = Path(urlparse(image_url).path).suffix.lower() or ".jpg"
    target = IMAGES_DIR / f"{image_id}{ext}"
    target.write_bytes(raw)
    time.sleep(1.2)
    return f"/geo-images/{target.name}", "downloaded-raw"


def rebuild_inventory() -> None:
    inventory = {"coats_of_arms": {}, "photos": {}, "audio": {}}
    for file in sorted(IMAGES_DIR.iterdir()):
        if not file.is_file():
            continue
        rel = f"/geo-images/{file.name}"
        if file.name.startswith("coa_"):
            inventory["coats_of_arms"][file.stem[4:]] = rel
        else:
            inventory["photos"][file.stem] = rel
    for file in sorted(AUDIO_DIR.iterdir()):
        if not file.is_file():
            continue
        if file.suffix.lower() in {".ogg", ".oga", ".mp3", ".wav"}:
            inventory["audio"][file.stem] = f"/geo-audio/{file.name}"
    INVENTORY_PATH.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")


def inject_image_links(found: Dict[str, str]) -> int:
    text = POI_PATH.read_text(encoding="utf-8")
    changed = 0
    for image_id, rel_path in found.items():
        pattern = re.compile(rf'(\{{\n\s*id:\s*"{re.escape(image_id)}",.*?\n\s*)(coa:|audio:|\}},)', re.S)
        match = pattern.search(text)
        if not match:
            continue
        block = match.group(0)
        if 'image:' in block:
            continue
        replacement = match.group(1) + f'image: "{rel_path}",\n    ' + match.group(2)
        text = text[:match.start()] + replacement + text[match.end():]
        changed += 1
    if changed:
        POI_PATH.write_text(text, encoding="utf-8")
    return changed


def main() -> None:
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    results = []
    found: Dict[str, str] = {}
    for image_id, title in TARGETS.items():
        try:
            rel, status = download_image(image_id, title)
            if rel:
                found[image_id] = rel
            results.append({"id": image_id, "title": title, "status": status, "path": rel})
        except Exception as exc:
            results.append({"id": image_id, "title": title, "status": "error", "error": str(exc)})

    updated = inject_image_links(found)
    rebuild_inventory()

    report_path = ROOT / "scripts" / "geo_missing_images_report.json"
    report_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    ok = [row for row in results if row["status"] in {"exists", "downloaded-webp", "downloaded-raw"}]
    failed = [row for row in results if row["status"] not in {"exists", "downloaded-webp", "downloaded-raw"}]
    print(f"OK {len(ok)}")
    print(f"UPDATED_POI {updated}")
    print(f"FAILED {len(failed)}")
    for row in failed:
        print(f'{row["id"]}\t{row["status"]}\t{row.get("error", "")}')


if __name__ == "__main__":
    main()
