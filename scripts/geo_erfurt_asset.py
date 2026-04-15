from __future__ import annotations

import hashlib
import json
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(r"C:\Users\User\plizio-repo")
IMAGES = ROOT / "public" / "geo-images"
INVENTORY = ROOT / "public" / "geo-assets-inventory.json"

FILES = [
    ("2021-09-16 Erfurt bei Nacht 1DX 3974 by Stepro.jpg", "city-erfurt.jpg"),
    ("DEU Erfurt COA.svg", "coa_city-erfurt.svg"),
]


def download_commons(filename: str, out_name: str) -> None:
    normalized = filename.replace(" ", "_")
    digest = hashlib.md5(normalized.encode("utf-8")).hexdigest()
    url = f"https://upload.wikimedia.org/wikipedia/commons/{digest[0]}/{digest[:2]}/{urllib.parse.quote(normalized)}"
    req = urllib.request.Request(url, headers={"User-Agent": "CodexGeoTask/1.0"})
    with urllib.request.urlopen(req) as response:
        (IMAGES / out_name).write_bytes(response.read())


def refresh_inventory() -> None:
    inventory = json.loads(INVENTORY.read_text(encoding="utf-8"))
    inventory.setdefault("photos", {})
    inventory.setdefault("coats_of_arms", {})
    if (IMAGES / "city-erfurt.jpg").exists():
        inventory["photos"]["city-erfurt"] = "/geo-images/city-erfurt.jpg"
    if (IMAGES / "coa_city-erfurt.svg").exists():
        inventory["coats_of_arms"]["city-erfurt"] = "/geo-images/coa_city-erfurt.svg"
    INVENTORY.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    IMAGES.mkdir(parents=True, exist_ok=True)
    for filename, out_name in FILES:
        download_commons(filename, out_name)
        print(out_name)
    refresh_inventory()


if __name__ == "__main__":
    main()
