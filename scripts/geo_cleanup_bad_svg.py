from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\User\plizio-repo")
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"
IMAGES_DIR = ROOT / "public" / "geo-images"
INVENTORY_PATH = ROOT / "public" / "geo-assets-inventory.json"

BAD_IDS = [
    "city-augsburg",
    "city-oberhausen",
    "city-gelsenkirchen",
    "hist-eisleben",
    "hist-spartakusaufstand",
    "kidlm-phantasialand-bruehl",
]


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
    INVENTORY_PATH.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    text = POI_PATH.read_text(encoding="utf-8")
    for bad_id in BAD_IDS:
        text = re.sub(
            rf'(\{{\n\s*id:\s*"{re.escape(bad_id)}",.*?)(\n\s*image:\s*"/geo-images/{re.escape(bad_id)}\.svg",)',
            r"\1",
            text,
            count=1,
            flags=re.S,
        )
        svg_path = IMAGES_DIR / f"{bad_id}.svg"
        if svg_path.exists():
            svg_path.unlink()
    POI_PATH.write_text(text, encoding="utf-8")
    rebuild_inventory()
    print("cleaned", len(BAD_IDS))


if __name__ == "__main__":
    main()
