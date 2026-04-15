from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(r"C:\Users\User\plizio-repo")
INVENTORY = ROOT / "public" / "geo-assets-inventory.json"
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"
AUDIO = ROOT / "public" / "geo-audio"

CAPITALS = [
    "berlin",
    "muenchen",
    "stuttgart",
    "duesseldorf",
    "hamburg",
    "hannover",
    "wiesbaden",
    "mainz",
    "saarbruecken",
    "bremen",
    "kiel",
    "schwerin",
    "potsdam",
    "magdeburg",
    "erfurt",
    "dresden",
]


def update_inventory() -> None:
    inventory = json.loads(INVENTORY.read_text(encoding="utf-8"))
    inventory.setdefault("audio", {})
    for slug in CAPITALS:
        path = AUDIO / f"city-{slug}.ogg"
        if path.exists():
            inventory["audio"][f"city-{slug}"] = f"/geo-audio/{path.name}"
    INVENTORY.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")


def update_poi() -> None:
    text = POI_PATH.read_text(encoding="utf-8")
    for slug in CAPITALS:
        audio_path = AUDIO / f"city-{slug}.ogg"
        if not audio_path.exists():
            continue
        needle = f'    id: "city-{slug}",'
        idx = text.find(needle)
        if idx == -1:
            continue
        block_end = text.find("  },", idx)
        block = text[idx:block_end]
        audio_line = f'    audio: "/geo-audio/city-{slug}.ogg",'
        if audio_line in block:
            continue
        if '    coa:' in block:
            block = block.replace('    coa:', f'{audio_line}\n    coa:', 1)
        elif '    image:' in block:
            image_line = f'    image: "/geo-images/city-{slug}.jpg",'
            if image_line in block:
                block = block.replace(image_line, f'{image_line}\n{audio_line}', 1)
            else:
                block = block.replace('    image:', f'{audio_line}\n    image:', 1)
        else:
            block += "\n" + audio_line
        text = text[:idx] + block + text[block_end:]
    POI_PATH.write_text(text, encoding="utf-8")


def main() -> None:
    update_inventory()
    update_poi()
    print("Tier 1 audio metadata updated")


if __name__ == "__main__":
    main()
