from __future__ import annotations

import json
import tempfile
from pathlib import Path

import pyttsx3
import soundfile as sf


ROOT = Path(r"C:\Users\User\plizio-repo")
AUDIO = ROOT / "public" / "geo-audio"
INVENTORY = ROOT / "public" / "geo-assets-inventory.json"
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"


CAPITALS = [
    ("berlin", "Berlin"),
    ("muenchen", "München"),
    ("stuttgart", "Stuttgart"),
    ("duesseldorf", "Düsseldorf"),
    ("hamburg", "Hamburg"),
    ("hannover", "Hannover"),
    ("wiesbaden", "Wiesbaden"),
    ("mainz", "Mainz"),
    ("saarbruecken", "Saarbrücken"),
    ("bremen", "Bremen"),
    ("kiel", "Kiel"),
    ("schwerin", "Schwerin"),
    ("potsdam", "Potsdam"),
    ("magdeburg", "Magdeburg"),
    ("erfurt", "Erfurt"),
    ("dresden", "Dresden"),
]


def scan_inventory() -> dict:
    inventory = json.loads(INVENTORY.read_text(encoding="utf-8"))
    for slug, _spoken in CAPITALS:
        path = AUDIO / f"city-{slug}.ogg"
        if path.exists():
            inventory.setdefault("audio", {})[f"city-{slug}"] = f"/geo-audio/{path.name}"
    return inventory


def patch_poi() -> None:
    text = POI_PATH.read_text(encoding="utf-8")
    for slug, _spoken in CAPITALS:
        needle = f'    id: "city-{slug}",'
        idx = text.find(needle)
        if idx == -1:
            continue
        next_block = text.find("  },", idx)
        block = text[idx:next_block]
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
        text = text[:idx] + block + text[next_block:]
    POI_PATH.write_text(text, encoding="utf-8")


def main() -> None:
    AUDIO.mkdir(parents=True, exist_ok=True)

    for slug, spoken in CAPITALS:
        out_path = AUDIO / f"city-{slug}.ogg"
        if out_path.exists():
            continue
        engine = pyttsx3.init()
        rate = engine.getProperty("rate")
        engine.setProperty("rate", int(rate * 0.9))
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_file:
            wav_path = Path(temp_file.name)
        engine.save_to_file(spoken, str(wav_path))
        engine.runAndWait()
        engine.stop()
        data, sr = sf.read(str(wav_path))
        sf.write(str(out_path), data, sr, format="OGG", subtype="VORBIS")
        wav_path.unlink(missing_ok=True)
    INVENTORY.write_text(json.dumps(scan_inventory(), ensure_ascii=False, indent=2), encoding="utf-8")
    patch_poi()
    print("Tier 1 audio generated")


if __name__ == "__main__":
    main()
