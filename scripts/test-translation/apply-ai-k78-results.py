#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path


LANGS = ("de", "hu", "ro")
CURATED_OVERRIDES = {
    "hu": {
        "What is backpropagation?": "Mi a backpropagation (visszaterjesztés)?",
        "Epoch": "Epoch (tanítási ciklus)",
    },
}


def normalize_translation(lang: str, source: str, value: str) -> str:
    cleaned = value.strip()
    if lang == "ro":
        cleaned = cleaned.translate(str.maketrans({"ş": "ș", "ţ": "ț", "Ş": "Ș", "Ţ": "Ț"}))
    return CURATED_OVERRIDES.get(lang, {}).get(source, cleaned)


def read_result(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        row = json.loads(line)
        if row.get("status") != "completed":
            raise ValueError(f"Incomplete row in {path}: {row.get('id')}")
        for key, value in row["translations"].items():
            if key in values:
                raise ValueError(f"Duplicate key in {path}: {key}")
            values[key] = value.strip()
    return values


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--de", type=Path, required=True)
    parser.add_argument("--hu", type=Path, required=True)
    parser.add_argument("--ro", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=Path("lib/aiK78TranslationOverlay.json"))
    args = parser.parse_args()

    manifest: dict[str, str] = json.loads(args.manifest.read_text(encoding="utf-8"))
    expected = set(manifest)
    overlay: dict[str, dict[str, str]] = {}
    for lang in LANGS:
        translated = read_result(getattr(args, lang))
        if set(translated) != expected:
            missing = sorted(expected - set(translated))
            extra = sorted(set(translated) - expected)
            raise ValueError(f"{lang} coverage mismatch: missing={missing[:5]} extra={extra[:5]}")
        overlay[lang] = {
            manifest[key]: normalize_translation(lang, manifest[key], translated[key])
            for key in manifest
        }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({lang: len(overlay[lang]) for lang in LANGS}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
