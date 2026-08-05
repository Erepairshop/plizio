#!/usr/bin/env python3
"""Build deterministic Azure batches for missing or stale POI HTML UI strings."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path


def digest(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()[:16]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--catalog-dir", type=Path, default=Path("lib/seo/poi-html-ui/catalogs"))
    parser.add_argument("--language", required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--max-items", type=int, default=60)
    parser.add_argument("--max-chars", type=int, default=12000)
    args = parser.parse_args()

    language = args.language.lower()
    source = json.loads((args.catalog_dir / "en.json").read_text(encoding="utf-8"))
    target_path = args.catalog_dir / f"{language}.json"
    target = json.loads(target_path.read_text(encoding="utf-8")) if target_path.exists() else {}
    target_strings = target.get("strings", {})
    old_hashes = target.get("meta", {}).get("sourceHashes", {})
    source_strings = source["strings"]
    source_hashes = {key: digest(value) for key, value in source_strings.items()}
    pending = {
        key: value for key, value in source_strings.items()
        if not str(target_strings.get(key, "")).strip() or old_hashes.get(key) != source_hashes[key]
    }

    batches = []
    current = {}
    chars = 0
    for key, value in pending.items():
        item_chars = len(key) + len(value)
        if current and (len(current) >= args.max_items or chars + item_chars > args.max_chars):
            batches.append(current)
            current, chars = {}, 0
        current[key] = value
        chars += item_chars
    if current:
        batches.append(current)

    queue = [
        {"id": f"poi-ui-{language}-v{source['meta'].get('version', 1)}-b{index:03d}", "items": items}
        for index, items in enumerate(batches, 1)
    ]
    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "queue.json").write_text(json.dumps(queue, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    manifest = {
        "language": language,
        "sourceVersion": source["meta"].get("version", 1),
        "sourceHashes": source_hashes,
        "totalKeys": len(source_strings),
        "pendingKeys": len(pending),
        "batches": len(queue),
    }
    (args.output_dir / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
